import { DashboardService } from "../belive-api/dashboard-service";

export const fetchTotalUserCount = async () => {
    try {
        const data = await DashboardService.getTotalUserCount();
        return data; 
    } catch (error) {
        console.error("Error fetching total user count:", error);
        throw new Error("Failed to fetch total user count.");
    }
};

export const fetchTotalDownloads = async () => {
    try {
        const data = await DashboardService.getTotalDownloads();
        return data;
    } catch (error) {
        console.error("Error fetching total downloads:", error);
        throw new Error("Failed to fetch total downloads."); 
    }
};

export const fetchTotalStreams = async () => {
    try {
        const data = await DashboardService.getTotalStreams();
        return data;
    } catch (error) {
        console.error("Error fetching total streams:", error);
        throw new Error("Failed to fetch total streams."); 
    }
};

export const fetchTotalCoinPurchases = async () => {
    try {
        const data = await DashboardService.getTotalCoinPurchases();
        return data; // Return the data for use in components
    } catch (error) {
        console.error("Error fetching total coin purchases:", error);
        throw new Error("Failed to fetch total coin purchases."); 
    }
};

export const fetchAnalytics = async () => {
    try {
        const data = await DashboardService.getAnalytics();
        return data;
    } catch (error) {
        console.error("Error fetching analytics:", error);
        throw new Error("Failed to fetch analytics.");
    }
};
