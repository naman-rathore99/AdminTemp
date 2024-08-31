'use server';
import { VideoService } from "@/utils/belive-api/video-service";
export async function getUrlFromVideo(fileName: string) {
    const url = await VideoService.getUploadLink(fileName);
    console.log('filename', fileName );
    return url;
}