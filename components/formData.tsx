"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { addData } from "@/actions/actions";
import { Textarea } from "./ui/textarea";
import { ReloadIcon } from "@radix-ui/react-icons"

const formSchema = z.object({
  sender: z.string().optional(),
  recipient: z.string().min(1, "Recipient is required"),
  message: z.string().optional(),
});

export function URLForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [recipient, setRecipient] = useState("");
  const [url, setUrl] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const info = await addData(values);
    setIsLoading(false);
    setSubmitted(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setUrl(info.url);
    setRecipient(info.recipient);
  }

  if (!submitted) {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-[300px]"
        >
          <FormLabel>Send Roses</FormLabel>
          <FormField
            control={form.control}
            name="sender"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="From..." {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>Person who sent the roses</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="recipient"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="To..." {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Person who will receive the roses
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="I love U!"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Anything you want to tell them?
                </FormDescription>
              </FormItem>
            )}
          />
          {isLoading ? (
            <Button disabled className="w-full">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Sending
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Send
            </Button>
          )}
        </form>
      </Form>
    );
  } else {
    return (
      <div className="w-[300px] space-y-8">
        <p className="text-center text-lg font-semibold">
          Send this to {recipient}
        </p>
        <div className="space-y-1">
          <div className="flex w-full max-w-lg items-center space-x-4">
            <Input type="url" value={url} />

            <Button
              onClick={() => {
                toast("Link Copied", {
                  description: "Link has been copied to your clipboard.",
                });
                copy(url);
              }}
            >
              Copy
            </Button>
          </div>
        </div>
        <div>
          <Button
            onClick={() => {
              setSubmitted(false);
              form.reset();
            }}
            className="w-full"
          >
            Back
          </Button>
        </div>
      </div>
    );
  }
}
