import { WithAuth } from "../fetch/with-auth";

class VideoServiceClass extends WithAuth {
    HOST = process.env.BELIVE_API ?? "http://localhost:3001";
    BASE_URL = `${this.HOST}/vods`;

   public async getUploadLink(fileName: string, fileType: string) {
        const URL = `${this.BASE_URL}/upload`;
        const response = await this.fetch(URL, {
            method: "POST",
            body: JSON.stringify({fileName, fileType}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(JSON.stringify(response));
        return await response.text();
    }
    public async getVods() {
        const URL = `${this.BASE_URL}`;
        const response = await this.fetch(URL);
        return await response.json();
    }
    public async deleteVodById(id: string) {
        const URL = `${this.BASE_URL}/${id}`;
        await this.fetch(URL, {
            method: "DELETE"
        });
    }

}

export const VideoService = new VideoServiceClass();