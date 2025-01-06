
import { axiosInstance } from "../fetch/axios";

 class DashboardServiceClass {
    public async getTotalUserCount() {
        const response = await axiosInstance.get('/admin/users/total');
        return response.data;
    }

    public async getTotalDownloads() {
        const response = await axiosInstance.get('/admin/downloads');
        return response.data;
    }

    public async getTotalStreams() {
        const response = await axiosInstance.get('/admin/stream/total-hours');
        return response.data;
    }

    public async getTotalCoinPurchases() {
        const response = await axiosInstance.get('/admin/coins/total-purchase');
        return response.data;
    }

    public async getAnalytics() {
        const response = await axiosInstance.get('/admin/analytics');
        return response.data;
    }
}


export const DashboardService=new DashboardServiceClass()