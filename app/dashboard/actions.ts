'use server';
import { UserService } from "@/utils/belive-api/user-service";
import { VideoService } from "@/utils/belive-api/video-service";
import { NewUser, NewUserSchema } from "@/schemas/new-user.schema";
import { revalidatePath } from "next/cache";
export async function getUrlFromVideo(fileName: string, fileType: string) {
    try {
        const url = await VideoService.getUploadLink(fileName, fileType);
        console.log('filename', fileName );
        console.log('url', url);
        return url;
    } catch (error) {
        console.error('Error getting URL from video', error);
        return '';
    }

}
export async function createUser(prevState: any, form: FormData) {
    const newUser: NewUser = {
        username: form.get('username') as string
    }
    const results = NewUserSchema.safeParse(newUser);
    if(!results.success) {
        return results.error.flatten();
    }
    await UserService.createUser(results.data);
}

export async function deleteVod(id: string) {
    await VideoService.deleteVodById(id);
    revalidatePath('/dashboard');
}