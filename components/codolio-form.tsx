"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import useStore from "@/hooks/codolio-stats";
import { scrapeCodolio } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/cool-button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

export const CodolioFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
});

type CodolioFormSchemaType = z.infer<typeof CodolioFormSchema>;

interface CodolioStats {
  totalQuestions: number;
  totalContests: number;
  awards: number;
  username: string;
}
export default function CodolioForm() {
  const [isSubmitting, startTransition] = useTransition();
  const { setResultData } = useStore();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof CodolioFormSchema>>({
    resolver: zodResolver(CodolioFormSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CodolioFormSchema>) => {
    startTransition(async () => {
      const data = await scrapeCodolio(values);
      if (data && "error" in data) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${data.error}`,
        });
      } else if (data) {
        setResultData(data as CodolioStats);
        // console.log("Fetched data for:", values.username);
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="items-center justify-center max-w-lg mx-auto gap-y-2"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Enter Public Codolio Username"
                  {...field}
                  disabled={isSubmitting}
                  className="mb-2 border-brand/20"
                />
                {/*  <FormDescription className="text-xs text-center text-muted-foreground">
                 Make sure your Codolio Account is Public!
                 </FormDescription> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CoolMode
          options={{
            particle: "/logo.png",
          }}
        >
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full text-black"
          >
            {isSubmitting ? "Fetching" : "Fetch"}
          </Button>
        </CoolMode>
      </form>
    </Form>
  );
}
