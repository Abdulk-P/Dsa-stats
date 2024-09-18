import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the DSA Stats team for support, feedback, or inquiries. We’re here to help you showcase your Data Structures and Algorithms skills effectively on your GitHub profile. Contact us today!",
};

export default function ContactPage() {
  return (
    <main className="container items-center justify-center mx-auto mt-4 shadow rounded-2xl mb-4 pb-4">
      <ContactForm />
    </main>
  );
}
