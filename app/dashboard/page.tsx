import { CreateUserForm } from "./create-user-form";
import { UserService } from "@/utils/belive-api/user-service";
import { DataTable } from "./video-table";
import { columns } from "./video-upload-columns";
import { VideoUpload } from "./video-upload-form";

export default async function DashboardPage() {
    const user = await UserService.getUser();
  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
    <h2 className="font-medium text-xl mb-4">Set up your account!</h2>
    {user && <p>Welcome back {user.username}!</p>}
      <CreateUserForm />
      <DataTable columns={columns} data={[]} />
      <VideoUpload />
  </main>
    )
}