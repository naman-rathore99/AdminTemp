'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // For Next.js App Router
import Link from "next/link";
import { FormMessage, Message } from "../../../components/form-message";
import { Label } from "../../../components/ui/label";
import { forgotPasswordAction } from "../../actions";
import { Input } from "../../../components/ui/input";
import { SubmitButton } from "../../../components/submit-button";

export default function ForgotPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordContent />
    </Suspense>
  );
}

function ForgotPasswordContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const formMessage: Message | undefined = message ? { message } : undefined;

  return (
    <>
      <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div>
          <h1 className="text-2xl font-medium">Reset Password</h1>
          <p className="text-sm text-secondary-foreground">
            Already have an account?{" "}
            <Link className="text-primary underline" href="/sign-in">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Reset Password
          </SubmitButton>
          {formMessage && <FormMessage message={formMessage} />}
        </div>
      </form>
    </>
  );
}
