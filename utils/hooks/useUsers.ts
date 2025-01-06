import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IUser } from "@/interface/IUser";
import { fetchUserById, getAllUsers } from "../actions/userActions";

export const useUsers = () => {
    const queryClient = useQueryClient();

    const { isLoading, error, data:users } = useQuery<IUser[]>({
        queryKey: ['users'],
        queryFn: getAllUsers
    });

    const getUserById = useMutation({
        mutationFn: (id: string) => fetchUserById(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error: any) => {
            console.log("Error getting by userId",error);
            throw error;
        }
    });

    return {
        isLoading,
        error,
        users,
        getUserById
    };
};