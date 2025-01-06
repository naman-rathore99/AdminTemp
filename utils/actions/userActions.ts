"use server"

import { UserService } from "../belive-api/user-service";

export const getAllUsers= async () => {
    try {
        const users= await UserService.getAllUser();
        return users;
    } catch (error) {
        console.error("Error fetching Users:", error);
        throw error;
    }
};

export const fetchUserById = async (id: string) => {
    try {
        const user = await UserService.getUserById(id);
        return user
    } catch (error) {
        console.error(`Error fetching User with ID ${id}:`, error);
        throw error;
    }
};