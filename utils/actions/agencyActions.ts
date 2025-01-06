"use server"
import { AgencyService } from '../belive-api/agency-service';
import { NewAgency } from '../../schemas/agency.schema';

export const fetchAllAgencies = async () => {
    try {
        const agencies = await AgencyService.getAllAgencies();
        return agencies.agencies;
    } catch (error) {
        console.error("Error fetching agencies:", error);
        throw error;
    }
};


export const fetchAgencyById = async (id: string) => {
    try {
        const agency = await AgencyService.getAgencyById(id);
        return agency.agency;
    } catch (error) {
        console.error(`Error fetching agency with ID ${id}:`, error);
        throw error;
    }
};

export const createNewAgency = async (agency: NewAgency) => {
    try {
        const newAgency = await AgencyService.createAgency(agency);
        return newAgency;
    } catch (error) {
        console.error("Error creating agency:", error);
        throw error;
    }
};

export const updateExistingAgency = async (id: string, agency: NewAgency) => {
    try {
        const updatedAgency = await AgencyService.updateAgency(id, agency);
        return updatedAgency;
    } catch (error) {
        console.error(`Error updating agency with ID ${id}:`, error);
        throw error;
    }
};

export const removeAgencyManager = async (id: string, managerId: string) => {
    try {
        const response = await AgencyService.removeManager(id, managerId);
        return response;
    } catch (error) {
        console.error(`Error removing manager with ID ${managerId} from agency ${id}:`, error);
        throw error;
    }
};