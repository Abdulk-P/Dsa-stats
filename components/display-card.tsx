"use client";
import { Check, Copy } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import { themes } from "@/lib/themes";
import useStore from "@/hooks/codolio-stats";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { codolioSVGTemplate } from "@/components/codolio-svg-template";

type ThemeKeys = keyof typeof themes;
type ThemeColors =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary"
  | "text";

export default function DisplayCard() {
  const { theme, setTheme, resultData } = useStore();
  const [selectedTheme, setSelectedTheme] = useState<ThemeKeys>("default");
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const { toast } = useToast();
  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTheme({
      ...theme,
      [name as ThemeColors]: value,
    });
  };

  const handleThemeSelect = (value: ThemeKeys) => {
    setTheme(themes[value]);
    setSelectedTheme(value);
  };

  if (!resultData) {
    return null;
  }

  const svgContent = codolioSVGTemplate(
    resultData.username,
    resultData.totalQuestions,
    resultData.totalContests,
    resultData.awards,
    theme
  );

  const themeParam =
    selectedTheme !== "default" ? `?theme=${selectedTheme}` : "";
  const primaryParam =
    theme.primary !== themes[selectedTheme].primary
      ? `${themeParam ? "&" : "?"}primary=%23${theme.primary.substring(1)}`
      : "";
  const secondaryParam =
    theme.secondary !== themes[selectedTheme].secondary
      ? `${
          themeParam || primaryParam ? "&" : "?"
        }secondary=%23${theme.secondary.substring(1)}`
      : "";
  const tertiaryParam =
    theme.tertiary !== themes[selectedTheme].tertiary
      ? `${
          themeParam || primaryParam || secondaryParam ? "&" : "?"
        }tertiary=%23${theme.tertiary.substring(1)}`
      : "";
  const quaternaryParam =
    theme.quaternary !== themes[selectedTheme].quaternary
      ? `${
          themeParam || primaryParam || secondaryParam || tertiaryParam
            ? "&"
            : "?"
        }quaternary=%23${theme.quaternary.substring(1)}`
      : "";
  const quinaryParam =
    theme.quinary !== themes[selectedTheme].quinary
      ? `${
          themeParam ||
          primaryParam ||
          secondaryParam ||
          tertiaryParam ||
          quaternaryParam
            ? "&"
            : "?"
        }quinary=%23${theme.quinary.substring(1)}`
      : "";
  const textParam =
    theme.text !== themes[selectedTheme].text
      ? `${
          themeParam ||
          primaryParam ||
          secondaryParam ||
          tertiaryParam ||
          quaternaryParam ||
          quinaryParam
            ? "&"
            : "?"
        }text=%23${theme.text.substring(1)}`
      : "";

  const dsaCardLink = `${process.env.NEXT_PUBLIC_URL}/api/codolio/${resultData.username}${themeParam}${primaryParam}${secondaryParam}${tertiaryParam}${quaternaryParam}${quinaryParam}${textParam}`;

  const onCopydsaCardLink = () => {
    navigator.clipboard.writeText(dsaCardLink);
    setCopied(true);
    toast({
      title: "Link Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const dynamicStatsLink = `![Dynamic Stats](https://github.com/githubusername/githubusername/blob/dsaStats/dsa-stats.svg)`;
  const onCopyDynamicStatsLink = () => {
    navigator.clipboard.writeText(dynamicStatsLink);
    setCopied1(true);
    toast({
      title: "Link Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied1(false);
    }, 1000);
  };

  const staticStatsLink = `![Static Stats](${dsaCardLink})`;
  const onCopyStaticStatsLink = () => {
    navigator.clipboard.writeText(staticStatsLink);
    setCopied2(true);
    toast({
      title: "Link Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied2(false);
    }, 1000);
  };

  const urlStatsLink = `<img align="center" alt="DSA Stats" width="22px" src="https://github.com/githubusername/githubusername/blob/dsaStats/dsa-stats.svg" />`;
  const onCopyURLStatsLink = () => {
    navigator.clipboard.writeText(urlStatsLink);
    setCopied3(true);
    toast({
      title: "Link Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied3(false);
    }, 1000);
  };

  return (
    <div className="mt-8 w-full sm:container mx-auto">
      {/* Render result data */}
      {/* <pre>{JSON.stringify(resultData, null, 2)}</pre> */}
      <div className="max-w-screen-lg rounded-lg bg-card text-card-foreground">
        <div className="space-y-1.5 pt-4">
          <div className="text-2xl font-semibold leading-none tracking-tight text-center">
            Customize your DSA Card
          </div>
          <div className="p-0 overflow-hidden">
            <div className="px-6 py-2">
              <Label className="uppercase text-xs font-bold text-brand">
                Your DSA Stats Card Link:
              </Label>
              <div className="flex items-center mt-2 gap-x-2">
                <Input
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  value={dsaCardLink}
                  readOnly
                />
                <Button
                  onClick={onCopydsaCardLink}
                  size="icon"
                  aria-label="Copy dsa card link to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-6 mr-6 md:mr-20 xl:mr-[120px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-1">
            <Label>Select Theme:</Label>
            <Select onValueChange={handleThemeSelect}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                <SelectGroup>
                  <SelectLabel>Themes</SelectLabel>
                  {Object.keys(themes).map((themeKey) => (
                    <SelectItem
                      aria-label={
                        themeKey.charAt(0).toUpperCase() + themeKey.slice(1)
                      }
                      key={themeKey}
                      value={themeKey}
                      onClick={() => handleThemeSelect(themeKey as ThemeKeys)}
                      className="cursor-pointer"
                    >
                      {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {[
            "primary",
            "secondary",
            "tertiary",
            "quaternary",
            "quinary",
            "text",
          ].map((color) => (
            <div key={color} className="mx-6">
              <Label>
                {color.charAt(0).toUpperCase() + color.slice(1)} Color:
              </Label>
              <Input
                type="color"
                name={color}
                value={theme[color as ThemeColors]}
                onChange={handleThemeChange}
              />
            </div>
          ))}
        </div>
        <div className="w-full items-center justify-center mx-auto mt-2 px-0 sm:px-4">
          <div className="w-full flex justify-center items-center pb-2 object-contain">
            <div
              style={{ maxWidth: "100%" }}
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>
        </div>
        <div className="flex flex-col p-0 w-full">
          <div className="p-0 overflow-hidden">
            <div className="px-6 py-2">
              <Label className="uppercase text-xs font-bold text-brand">
                This will display a Auto-Update-Dynamic stats board. [ Setup
                Github Workflow Needed ]
              </Label>
              <div className="flex items-center mt-2 gap-x-2">
                <Input
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  value={dynamicStatsLink}
                  readOnly
                />
                <Button
                  onClick={onCopyDynamicStatsLink}
                  size="icon"
                  aria-label="Copy dynamic Stats Link to clipboard"
                >
                  {copied1 ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="px-6">
              <Label className="uppercase text-xs font-bold text-brand">
                This will display a static (No Auto-Update) stats board.
              </Label>
              <div className="flex items-center mt-2 gap-x-2">
                <Input
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  value={staticStatsLink}
                  readOnly
                />
                <Button
                  onClick={onCopyStaticStatsLink}
                  size="icon"
                  aria-label="Copy Static Stats link to clipboard"
                >
                  {copied2 ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="px-6 pb-2">
              <Label className="uppercase text-xs font-bold text-brand">
                This URL will allow you to scale the size of Stats board.
              </Label>
              <div className="flex items-center mt-2 gap-x-2">
                <Input
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  value={urlStatsLink}
                  readOnly
                />
                <Button
                  onClick={onCopyURLStatsLink}
                  size="icon"
                  aria-label="Copy URL Stats Link to clipboard"
                >
                  {copied3 ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
