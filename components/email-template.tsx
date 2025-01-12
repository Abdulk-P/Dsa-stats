import * as React from "react";

interface ContactSubmissionEmailProps {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export const ContactSubmissionEmail: React.FC<
  Readonly<ContactSubmissionEmailProps>
> = ({ name, email, subject, description }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
    }}
  >
    <h1 style={{ color: "#F06A0A" }}>Hello, {name}!</h1>
    <p>
      Thank you for reaching out to DSA Tracker. We have received your message
      and will get back to you as soon as possible. Here are the details of your
      submission:
    </p>
    <ul>
      <li>
        <strong>Name:</strong> {name}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Subject:</strong> {subject}
      </li>
      <li>
        <strong>Description:</strong> {description}
      </li>
    </ul>
    <p>We appreciate your interest and will address your inquiry promptly.</p>
    <p>
      Best regards,
      <br />
      The DSA Tracker Team
    </p>
  </div>
);
