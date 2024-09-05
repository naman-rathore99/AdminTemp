'use server';
import { UserService } from "@/utils/belive-api/user-service";
import { VideoService } from "@/utils/belive-api/video-service";
import { NewUser, NewUserSchema } from "@/schemas/new-user.schema";
export async function getUrlFromVideo(fileName: string) {
    const url = await VideoService.getUploadLink(fileName);
    console.log('filename', fileName );
    return url;
}
export async function createUser(prevState: any, form: FormData) {
    const newUser: NewUser = {
        username: form.get('username') as string
    }
    const results = NewUserSchema.safeParse(newUser);
    if(!results.success) {
        return results.error.flatten();
    }
    return await UserService.createUser(results.data);
}