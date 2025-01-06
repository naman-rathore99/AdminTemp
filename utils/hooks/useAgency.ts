import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IAgency } from "@/interface/IAgency";
import { fetchAgencyById, fetchAllAgencies } from "../actions/agencyActions";

export const useAgency = () => {
    const queryClient = useQueryClient();

    const { isLoading, error, data:agencies } = useQuery<IAgency[]>({
        queryKey: ['agencies'],
        queryFn: fetchAllAgencies
    });

    const getAgencyById = useMutation({
        mutationFn: (id: string) => fetchAgencyById(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error: any) => {
            console.log("Error getting by agencyId",error);
            throw error;
        }
    });

    return {
        isLoading,
        error,
        agencies,
        getAgencyById
    };
};