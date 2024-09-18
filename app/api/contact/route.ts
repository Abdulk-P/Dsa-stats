import { Resend } from "resend";
import { type NextRequest, NextResponse } from "next/server";
import { ContactSubmissionEmail } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, description } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL || "",
      subject: "New Feedback Recieved",
      react: ContactSubmissionEmail({
        name,
        email,
        subject,
        description,
      }) as React.ReactElement,
    });

    if (error) {
      return new NextResponse(`Resend Error: ${error}`, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(`Resend Error: ${error}`, { status: 500 });
  }
}
