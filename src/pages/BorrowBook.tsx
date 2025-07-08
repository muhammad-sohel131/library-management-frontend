"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/features/books/books";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import type { Book } from "@/types/Book.types";
import { usePostBorrowMutation } from "@/redux/features/borrow/borrow";
import Spinner from "@/components/Spinner";

const formSchema = z.object({
  book: z.string(),
  quantity: z.coerce.number(),
  dueDate: z.date(),
});

function BorrowBook() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const { data, isLoading } = useGetBookByIdQuery(bookId);
  const [updateBook] = useUpdateBookMutation()
  const [postBorrow] = usePostBorrowMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      book: "",
      quantity: 0,
      dueDate: new Date(),
    },
  });


  const book: Book = data?.data;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (values.quantity > book.copies) {
        toast.warning("Do not have enough copies!");
        return;
      }
      const copies = book.copies - values.quantity;
      let available = true
      if(copies === 0) available = false

      await updateBook({id: book._id, book: {copies, available}})

      const borrow = {
        book: bookId,
        quantity: values.quantity,
        dueDate: values.quantity
      }
      
      await postBorrow(borrow)
      toast.success("Book is has been taken successfully successfully :)");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.success("Something is Wrong. Try Again Later :(");
    }
  }

   if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto my-20 px-10">
      <h2 className="my-5">
        You are borrowing a book title : <b>{data.data.title}</b>
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No of Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="20" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Due Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      // disabled={(date) =>
                      //   date > new Date() || date < new Date("1900-01-01")
                      // }
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default BorrowBook;
