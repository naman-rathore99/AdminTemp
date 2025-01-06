import {type NewUser } from "../../schemas/new-user.schema";
import { axiosInstance } from "../fetch/axios";
import { WithAuth } from "../fetch/with-auth";

class UserServiceClass extends WithAuth {
    HOST = process.env.BELIVE_API!
    BASE_URL = `${this.HOST}/users`;



    public async getAllUser() {
        const URL = `/admin/users`;
        const response = await  axiosInstance.get(URL);
        return response.data;
    }


    public async getUserById(id:string) {
        const URL = `/admin/users/${id}`;
        const response = await  axiosInstance.get(URL);
        return response.data;
    }

   public async getUser() {
        const URL = `${this.BASE_URL}/me`;
        const response = await this.fetch(URL);
        return await response.json();
    }
    public async createUser(user: NewUser) {
        const URL = `${this.BASE_URL}`;
        const response = await this.fetch(URL, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    public async updateUser(user: NewUser) {
        const URL = `${this.BASE_URL}/me`;
        const resp = await this.fetch(URL, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const text = await resp.text();
    }
    public async getAvatarUploadUrl(fileType: string) {
        const URL = `${this.BASE_URL}/avatar`;
        const response = await this.fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fileType })

        });
        return await response.text();
    }
}

export const UserService = new UserServiceClass();