import { createClient } from "@/utils/supabase/server";
import { CreateUserForm } from "@/components/onboarding/create-user-form";
import { UserService } from "@/utils/belive-api/user-service";

export default async function OnboardingPage() {
    const supabase = createClient();
    const user = await UserService.getUser();
  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
    <h2 className="font-medium text-xl mb-4">Set up your account!</h2>
    {user && <p>Welcome back {user.username}!</p>}
    {/* <ul>
          <li>user: {user?.email}</li>
          <li>access_token: {access_token}</li>
      </ul> */}
      <CreateUserForm />
  </main>
    )
}