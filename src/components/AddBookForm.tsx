"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  usePostBookMutation,
  useUpdateBookMutation,
} from "@/redux/features/books/books";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { Book } from "@/types/Book.types";

const formSchema = z.object({
  title: z.string().min(10).max(100, {
    message: "Title length must be between 10 to 100 characters",
  }),
  author: z.string().min(2).max(50, {
    message: "Author name must be between 2 to 50 characters",
  }),
  genre: z.string().min(2).max(20, {
    message: "Genre must be between 2 to 20 characters",
  }),
  isbn: z.string().min(5).max(20, {
    message: "ISBN must be between 5 to 20 characters",
  }),
  description: z.string(),
  copies: z.coerce.number(),
  available: z.boolean(),
});

export function AddBookForm({ book }: { book: Book }) {
  const [postBook, { reset }] = usePostBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const isEditMode = book ? true : false;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: book?.title || "",
      author: book?.author || "",
      genre: book?.genre || "",
      isbn: book?.isbn || "",
      description: book?.description || "",
      copies: book?.copies || 0,
      available: book?.available === false ? false : true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (isEditMode) {
        console.log(values)
        await updateBook({ id: book._id, book: {
          ...values,
          available: values?.copies > 0 ? true : false
        } });
        reset();
        toast.success("Book is updated successfully :)");
        navigate("/");
        return
      }
      await postBook(values);
      reset();
      toast.success("Book is uploaded successfully :)");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.success("Something is Wrong. Try Again Later :(");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="author" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Input placeholder="genre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="isbn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No of Available Book</FormLabel>
              <FormControl>
                <Input placeholder="20" {...field} />
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
                <Input placeholder="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{isEditMode ? "Update" : "Submit"}</Button>
      </form>
    </Form>
  );
}
