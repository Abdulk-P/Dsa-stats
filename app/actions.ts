"use server";
import { z } from "zod";
import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium-min";
import { CodolioFormSchema } from "@/components/codolio-form";

export async function scrapeCodolio(values: z.infer<typeof CodolioFormSchema>) {
  const username = values.username;
  if (!username) {
    return { error: "Enter username!" };
  }
  console.log("username:", username);

  try {
    const browser = await puppeteer.launch({
      args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(
        `https://github.com/Sparticuz/chromium/releases/download/v127.0.0/chromium-v127.0.0-pack.tar`
      ),
      headless: chromium.headless,
    });
    const page = await browser.newPage();
    await page.goto(`https://codolio.com/profile/${username}`, {
      waitUntil: "networkidle2",
      timeout: 120000,
    });

    let totalQuestions = 0;
    let totalContests = 0;
    let awards = 0;

    try {
      await page.waitForSelector("#total_questions", { timeout: 5000 });
      const totalQuestionsText = await page.$eval(
        "#total_questions",
        (el: Element) => el.textContent ?? ""
      );
      totalQuestions = parseInt(totalQuestionsText.match(/\d+/)?.[0] ?? "", 10);
    } catch (e) {
      console.log("Element '#total_questions' not found.");
    }

    try {
      await page.waitForSelector("#contest_description span", {
        timeout: 5000,
      });
      const totalContestsText = await page.$eval(
        "#contest_description span",
        (el: HTMLSpanElement) => el.textContent ?? ""
      );
      totalContests = parseInt(totalContestsText.match(/\d+/)?.[0] || "", 10);
    } catch (e) {
      console.log("Element '#contest_description span' not found.");
    }

    try {
      await page.waitForSelector("#badges div span", { timeout: 5000 });
      const awardsText = await page.$eval(
        "#badges div span",
        (el: HTMLSpanElement) => el.textContent ?? ""
      );
      awards = parseInt(awardsText.match(/\d+/)?.[0] || "", 10);
    } catch (e) {
      console.log("Element '#badges div span' not found.");
    }

    await browser.close();
    const codolioStats = {
      username,
      totalQuestions,
      totalContests,
      awards,
    };
    // console.log(codolioStats);
    return codolioStats;
  } catch (error: any) {
    console.log(error);
  }
}
