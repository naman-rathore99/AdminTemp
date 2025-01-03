import { CreateUserForm } from "./create-user-form";
import { UserService } from "@/utils/belive-api/user-service";
import { DataTable } from "./video-table";
import { columns } from "./video-upload-columns";
import { VideoUpload } from "./video-upload-form";
import { VideoService } from "@/utils/belive-api/video-service";
import { EditProfile } from "./edit-profile";


export default async function DashboardPage() {
    const user = await UserService.getUser();
    const vods = await VideoService.getVods(user.id);

  return (
    <main className="">
    <EditProfile user={user} />
    <DataTable columns={columns} data={vods} />
    <VideoUpload />
  </main>
    )
}