"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const formSchema = z.object({
  title: z.string().min(10).max(100, {
    message: "Title length must be between 10 to 100 characters"
  }),
  author: z.string().min(2).max(50, {
    message: 'Author name must be between 2 to 50 characters'
  }),
  genre: z.string().min(2).max(20, {
    message: "Genre must be between 2 to 20 characters"
  }),
  isbn: z.string().min(5).max(20, {
    message: "ISBN must be between 5 to 20 characters"
  }),
  description: z.string(),
  copies: z.coerce.number()
})

export function AddBookForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            author: '',
            genre: '',
            isbn: '',
            description: '',
            copies: 0
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField 
                    control={form.control}
                    name="title"
                    render={({field}) => (
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
                    render={({field}) => (
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
                    render={({field}) => (
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
                    render={({field}) => (
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
                    render={({field}) => (
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
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

