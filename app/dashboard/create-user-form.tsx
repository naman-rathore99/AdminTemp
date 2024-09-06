'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { NewUserSchema, type NewUser } from "@/schemas/new-user.schema";
import { useRef } from "react";
import { createUser } from "./actions";
 

export function CreateUserForm() {
  const [formState, createUserAction] = useFormState<any, any>(createUser, { errors: {} }, "");

    const form = useForm<NewUser>({
        resolver: zodResolver(NewUserSchema),
        defaultValues: {
          username: "",
        },
      })
      const formRef = useRef<HTMLFormElement>(null);
      function onSubmit(values: NewUser) {
        formRef.current?.submit();
      }
      return (    
      <Form {...form}>
        <form action={createUserAction} ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="my username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>)

}