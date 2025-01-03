'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useFormState } from "react-dom";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { RefObject } from "react";
import { updateUser } from "./actions";
import { Input } from "../../components/ui/input";
import { NewUser, NewUserSchema } from "../../schemas/new-user.schema";
 

export function CreateUserForm({
  formRef,
  user,
  setIsEditing,
}: {
  formRef: React.RefObject<HTMLFormElement | null>; 
  user: any;
  setIsEditing: (value: boolean) => void;
}) {  const [formState, createUserAction] = useFormState<any, any>(updateUser, { errors: {} }, "");

    const form = useForm<NewUser>({
        resolver: zodResolver(NewUserSchema),
        defaultValues: {
          username: user.username ?? '',
          firstName: user.firstName?? '',
          lastName: user.lastName ?? '',
          hashtags: (user.hashtags ?? '').join(' '),
        },
      })

      async function onSubmit(values: NewUser) {
        await createUserAction(values);
        setIsEditing(false);
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
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormDescription>
                  This is your First Name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Smith" {...field} />
                </FormControl>
                <FormDescription>
                  This is your Last Name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hashtags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hashtags</FormLabel>
                <FormControl>
                  <Input placeholder="#fitness" {...field} />
                </FormControl>
                <FormDescription>
                  This is your profile hashtags separated by a space
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      )

}