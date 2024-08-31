import { WithAuth } from "../fetch/with-auth";

class VideoServiceClass extends WithAuth {
    HOST = process.env.BELIVE_API ?? "http://localhost:3001";
    BASE_URL = `${this.HOST}/vods`;

   public async getUploadLink(filename: string) {
        const URL = `${this.BASE_URL}/upload/${filename}`;
        const response = await this.fetch(URL);
        return await response.text();
    }

}

export const VideoService = new VideoServiceClass();