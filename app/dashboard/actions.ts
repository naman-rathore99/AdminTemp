'use server';
import { UserService } from "@/utils/belive-api/user-service";
import { VideoService } from "@/utils/belive-api/video-service";
import { NewUser, NewUserSchema } from "@/schemas/new-user.schema";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getUrlFromVideo(fileName: string, fileType: string) {
    try {
        const url = await VideoService.getUploadLink(fileName, fileType);
        return url;
    } catch (error) {
        console.error('Error getting URL from video', error);
        return '';
    }

}
const UpdateUserSchema = NewUserSchema.merge(z.object({hashtags: z.string().array().optional().refine((tags) => tags?.every((tag) => tag.startsWith('#')), {
    message: 'hashTags must start with #',
  }),
}));

export async function updateUser(prevState: any, newUser: NewUser) {
    const results = UpdateUserSchema.safeParse(newUser);
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

export async function updateVod(video: any) {
    await VideoService.updateVod(video);
    revalidatePath('/dashboard');
}