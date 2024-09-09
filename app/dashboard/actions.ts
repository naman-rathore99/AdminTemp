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
export async function updateUser(prevState: any, form: FormData) {
    const newUser: NewUser = {
        username: form.get('username') as string,
        hashtags: form.get('hashtags') as string,
    }
    const results = NewUserSchema.safeParse(newUser);
    if(!results.success) {
        return results.error.flatten();
    }
    await UserService.updateUser(results.data);
    revalidatePath('/dashboard');
}

export async function deleteVod(id: string) {
    await VideoService.deleteVodById(id);
    revalidatePath('/dashboard');
}

export async function getAvatarUploadUrl(fileType: string) {
    try {
        const url = await UserService.getAvatarUploadUrl(fileType);
        return url;
    } catch (error) {
        console.error('Error getting avatar upload URL', error);
        return '';
    }
}