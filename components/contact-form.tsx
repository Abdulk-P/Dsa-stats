"use client";
import * as z from "zod";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Your Name is required" })
    .min(2, {
      message: "Name must be at least 2 characters",
    })
    .max(50, {
      message: "ame cannot be more than 50 characters",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  subject: z
    .string({ required_error: "Subject is required" })
    .min(2, { message: "Subject must be at least 2 characters" })
    .max(100, { message: "Subject cannot be more than 100 characters" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description cannot be more than 500 characters" }),
});

export const ContactForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setSubmitting(true);
    const { name, email, subject, description } = values;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/contact`,
        {
          name: name,
          email: email,
          subject: subject,
          description: description,
        }
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent",
          duration: 1000,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "An error occurred",
          duration: 1000,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: `${error.message}`,
          duration: 1000,
        });
      } else {
        toast({
          variant: "destructive",
          title: "An error occurred",
          duration: 1000,
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <CardHeader className="text-center">
        <h2>
          <CardTitle className="text-4xl">Contact Us</CardTitle>
        </h2>
        <CardDescription className="text-lg xl:text-xl">
          We value your feedback and inquiries. Please share your thoughts about
          our website, services, or any other aspect you&apos;d like to
          highlight. Your input helps us improve and serve you better.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("grid items-start gap-y-2 ")}
        >
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel>Name</FormLabel>
                  </div>
                  <FormControl>
                    <Input
                      className="border-muted-background"
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel>Email</FormLabel>
                  </div>
                  <FormControl>
                    <Input
                      className="border-muted-background"
                      placeholder="Your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Subject</FormLabel>
                </div>
                <FormControl>
                  <Input
                    className="border-muted-background"
                    placeholder="Subject for your contact"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Description</FormLabel>
                  {/* <FormDescription className="text-muted">
                   Describe your query in detail
                  </FormDescription> */}
                </div>
                <FormControl>
                  <Textarea
                    className="border-muted-background"
                    {...field}
                    placeholder="Describe your query in detail"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={submitting} className="" type="submit">
            <div className="flex flex-row items-center justify-center text-lg text-center align-middle">
              {submitting ? "Sending" : "Send"}
              <Send className="w-4 h-4 ml-2" />
            </div>
          </Button>
        </form>
      </Form>
    </>
  );
};
