import { type NewAgency } from "../../schemas/agency.schema";
import { axiosInstance } from "../fetch/axios";
import { WithAuth } from "../fetch/with-auth";

class AgencyServiceClass {

    public getAllAgencies = async () => {
        const response = await axiosInstance.get('/agency');
        console.log("response from agency" , response)
        return response.data;
    };

    public getAgencyById = async (id: string) => {
        const response = await axiosInstance.get(`/agency/${id}`);
        return response.data;
    };
    
    public createAgency = async (agencyData: any) => {
        const response = await axiosInstance.post('/admin/agency/create', agencyData);
        return response.data;
    };

    public async updateAgency(id: string, agencyData: NewAgency) {
        const URL = `/admin/agency/${id}/update`;
        const response = await axiosInstance.post(`/admin/agency/${id}`, agencyData);

        return await response.data;
    };
    public async removeManager(id: string, managerId:string ) {
        const URL = `/agency/${id}/remove-manager/${id}`;
        const response = await axiosInstance.delete(URL);
        return await response.data;
    };


}

export const AgencyService = new AgencyServiceClass();