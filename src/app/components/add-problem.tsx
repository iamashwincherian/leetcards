"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import addProblem from "../../server/add-problem";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  number: z
    .string()
    .refine((v) => !isNaN(Number(v)))
    .transform(Number),
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  solution: z.string().nonempty(),
  notes: z.string().nonempty(),
});

export default function AddProblem() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number: 0,
      title: "",
      description: "",
      solution: "",
      notes: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await addProblem(data);
    router.push("/");
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))}
      >
        <Card>
          <CardHeader>
            <CardTitle>Leetcode Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Problem #NO</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="solution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Solution</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Add</Button>
          </CardFooter>
        </Card>
      </form>
      <div className="mx-auto text-center w-ful mt-3">
        <Button onClick={goHome} variant="ghost">
          Go Home
        </Button>
      </div>
    </Form>
  );
}
