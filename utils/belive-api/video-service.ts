import { WithAuth } from "../fetch/with-auth";

class VideoServiceClass extends WithAuth {
    HOST = process.env.BELIVE_API ?? "http://localhost:3001";
    BASE_URL = `${this.HOST}/vods`;

   public async getUploadLink(filename: string, fileType: string) {
        const URL = `${this.BASE_URL}/upload`;
        const response = await this.fetch(URL, {
            method: "POST",
            body: JSON.stringify({filename, fileType}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(JSON.stringify(response));
        return await response.text();
    }

}

export const VideoService = new VideoServiceClass();