
export interface IUser {
    id: string;                
    username: string;          
    avatar: string | null;     
    coins: number;             
    following: number;         
    followers: number;         
    coinsGifted: number;       
    giftLevel: number;         
    createdAt: string;         
    totalHourStreams?:string;
    updatedAt: string;         
    bannedAt: string | null;   
    isBanned: boolean;         
    firstName: string;         
    lastName: string;          
    isPrivate: boolean;        
    stripeAccountId: string | null; 
    stripeCustomerId: string | null;
    dob: string;               
    instagram: string;         
    twitter: string;           
    linkedin: string;          
    posts: number;             
    fcmToken: string | null;   
    hideFollowers: boolean;    
    hideFollowing: boolean;    
    isVerified: boolean;       
    location: string;
    coinBalance: string;
    status: string;
    lastActive: string;
    agencyId: string | null;   
}
