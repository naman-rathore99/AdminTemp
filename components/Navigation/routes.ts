import dashboardIcon from "@/public/icons/dashboard.png";
import settingsIcon from "@/public/icons/setting.png";
import usersIcon from "@/public/icons/users.png";
import payoutIcon from "@/public/icons/payout.png";
import calendorIcon from "@/public/icons/calendar.png";
import giftIcon from "@/public/icons/gifts.png";
import agencyIcon from "@/public/icons/agencies.png";
import supportsIcon from "@/public/icons/supports.png"
import { StaticImageData } from "next/image";



export interface RouteItem {
  id: number;
  label: string;
  href: string;
  icon: StaticImageData; 
};


export const routes: RouteItem[] = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
    icon: dashboardIcon, 
  },
  {
    id: 2,
    label: "Users",
    href: "/dashboard/users",
    icon: usersIcon,
  },
  {
    id: 3,
    label: "Purchase History",
    href: "/dashboard/purchase-history",
    icon: calendorIcon,
  },
  {
    id: 4,
    label: "Payouts",
    href: "/dashboard/payouts",
    icon: payoutIcon,
  },
  {
    id: 5,
    label: "Settings",
    href: "/dashboard/settings",
    icon: settingsIcon,
  },
  {
    id: 6,
    label: "Agencies",
    href: "/dashboard/agencies",
    icon: agencyIcon,
  },
  {
    id: 7,
    label: "Gift",
    href: "/dashboard/gift",
    icon: giftIcon,
  },
  {
    id: 8,
    label: "Support",
    href: "/dashboard/support",
    icon: supportsIcon,
  },
];
