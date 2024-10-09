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
        return await response.text();
    }
    public async getVods(id: string) {
        const URL = `${this.HOST}/users/${id}/vods`;
        const response = await this.fetch(URL);
        const data = await response.json();
        const { vods } = data;
        return vods;
    }
    public async deleteVodById(id: string) {
        const URL = `${this.BASE_URL}/${id}`;
        await this.fetch(URL, {
            method: "DELETE"
        });
    }
    public async updateVod(video: any) {
        const URL = `${this.BASE_URL}/${video.id}`;
        await this.fetch(URL, {
            method: "PUT",
            body: JSON.stringify(video),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

}

export const VideoService = new VideoServiceClass();