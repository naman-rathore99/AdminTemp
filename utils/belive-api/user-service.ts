import { type NewUser } from "@/schemas/new-user.schema";
import { WithAuth } from "../fetch/with-auth";

class UserServiceClass extends WithAuth {
    HOST = process.env.BELIVE_API ?? "http://localhost:3001";
    BASE_URL = `${this.HOST}/users`;

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
        return await response.json();
    }
    public async updateUser(user: NewUser) {
        const URL = `${this.BASE_URL}/me`;
        const response = await this.fetch(URL, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }
}

export const UserService = new UserServiceClass();