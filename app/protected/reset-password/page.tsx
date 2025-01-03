'use client'
import React from 'react'
import { Label } from "../../../components/ui/label";
import { FormMessage, Message } from "../../../components/form-message";
import { forgotPasswordAction } from "../../actions";
import { Input } from "../../../components/ui/input";
import { SubmitButton } from "../../../components/submit-button";
import { useSearchParams } from "next/navigation";


const Suspense = (React as any).Suspense

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  const formMessage: Message | undefined = message
    ? { message }
    : undefined;

  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-sm text-foreground/60">
        Please enter your new password below.
      </p>
      <Label htmlFor="password">New password</Label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
      />
      <Label htmlFor="confirmPassword">Confirm password</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
      />
      <SubmitButton
        formAction={async (formData: FormData) => {
          const result = await forgotPasswordAction(formData);
        
        }}
        pendingText="Resetting password..."
      >
        Reset password
      </SubmitButton>
      {
        formMessage&&
      <FormMessage message={formMessage} />
      }
    </form>
  );
}
