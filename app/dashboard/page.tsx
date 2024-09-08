import { CreateUserForm } from "./create-user-form";
import { UserService } from "@/utils/belive-api/user-service";
import { DataTable } from "./video-table";
import { columns } from "./video-upload-columns";
import { VideoUpload } from "./video-upload-form";
import { VideoService } from "@/utils/belive-api/video-service";

export default async function DashboardPage() {
    const user = await UserService.getUser();
    const vods = await VideoService.getVods();

  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
    <h2 className="font-medium text-xl mb-4">Set up your account!</h2>
    {user.username && <p>Welcome back {user.username}!</p>}
    {!user.username && 
      <>
        <p>Looks like you're new here! First lets set your username</p>
        <CreateUserForm />
      </>
    }
      
      {user &&
            <><DataTable columns={columns} data={vods} /><VideoUpload /></>
      }

  </main>
    )
}