'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IAgency } from "@/interface/IAgency";
import { useAgency } from "@/utils/hooks/useAgency";
import { fetchAgencyById } from "@/utils/actions/agencyActions";
import Charts from "@/components/Chart/Chart";
import coinsIcon from "@/public/icons/coins.png";
import usersIcon from "@/public/icons/users.png";
import usernameIcon from "@/public/icons/username.png";
import locationIcon from "@/public/icons/Location.png";
import verifyIcon from "@/public/icons/verify.png";
import statusIcon from "@/public/icons/status.png";
import creatorsIcon from "@/public/icons/creators.png";
import invoicIcon from "@/public/icons/invoice.png";
import { Mail } from "lucide-react";

const initialFormData: IAgency = {
  name: '',
  location: '',
  coinBalance: 0,
  status: '',
  avatar: 'https://via.placeholder.com/150',
  id: "",
  username: "",
  numbersOfCreator: 0,
  invoicesPdfLink: "",
};

const FormField = ({
  icon,
  label,
  value,
  isSelect = false,
  options = []
}: {
  icon: string;
  label: string;
  value: string;
  isSelect?: boolean;
  options?: string[];
}) => (
  <div className="border border-[#A39160] rounded-2xl p-4">
    <div className="flex items-center space-x-3">
      <Image src={icon} alt={label} width={24} height={24} />
      <div className="flex-1">
        <p className="text-sm text-gray-500">{label}</p>
        {isSelect ? (
          <select className="w-full bg-transparent text-white focus:text-black hover:text-black focus:outline-none">
            {options.length > 0 ?
              options.map(option => (
                <option key={option} value={option}>{option}</option>
              )) :
              <option value={value}>{value}</option>
            }
          </select>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  </div>
);

const AgencyProfile = () => {
  const params = useParams();
  const { error: apiError, isLoading } = useAgency();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<IAgency>(initialFormData);

  useEffect(() => {
    const fetchAgencyData = async () => {
      if (!params.id) {
        setError('Agency ID required');
        return;
      }

      try {
        const data = await fetchAgencyById(params.id as string);
        if (!data) throw new Error("Agency not found");
        setFormData(data);
      } catch (err: any) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgencyData();
  }, [params.id]);

  if (error || apiError) return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h2 className="text-xl font-bold text-red-500">Error</h2>
        <p className="text-gray-400">{error || apiError?.message}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    </div>
  );

  if (loading || isLoading) return (
    <div className="animate-pulse space-y-8 p-8">
      <div className="h-64 w-64 rounded-full bg-gray-800 mx-auto mb-8" />
      <div className="space-y-4 max-w-2xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-800 rounded-lg w-full" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-black p-8">
      <div className="w-full mx-auto space-y-8">
        <div className=" flex-col flex md:flex-row gap-10">

          <div className="bg-white w-full text-black md:w-1/3 rounded-md pb-4 flex flex-col items-center">
            <div className="relative w-full h-60 mb-4">
              <Image
                src={formData.avatar || "https://via.placeholder.com/150"}
                alt="Agency Logo"
                className=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl text-center font-bold ">{formData.name}</h2>
            <p className="text-gray-700">{formData.username || "username@notfound"}</p>
            <button className="mt-4 px-6 flex items-center  gap-2 py-2 border border-gray-600 rounded-full text-black hover:bg-gray-800 transition">
              <Mail />
              Message
            </button>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <FormField
                icon={usernameIcon.src}
                label="Full name"
                value={formData.name}
              />
              <FormField
                icon={locationIcon.src}
                label="Location"
                value={formData.location!}
              />
              <FormField
                icon={coinsIcon.src}
                label="Coin Balance"
                value={formData.coinBalance + ""}
              />
              <FormField
                icon={creatorsIcon.src}
                label="List Of Creators"
                value="Select Creators"
                isSelect
              />
            </div>
            <div className="space-y-4">
              <FormField
                icon={verifyIcon.src}
                label="Username"
                value={formData.username || ""}
              />
              <FormField
                icon={usersIcon.src}
                label="Number Of Creators"
                value={formData.numbersOfCreator + ""}
              />
              <FormField
                icon={statusIcon.src}
                label="Account Status"
                value={formData.status}
                isSelect
                options={["Active", "Suspended", "Deleted"]}
              />
              <FormField
                icon={invoicIcon.src}
                label="Invoices"
                value="View Invoices"
                isSelect
              />
            </div>

          </div>

        </div>


        <div className="bg-gray-900 rounded-3xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Activity Overview</h3>
          <div className="h-64">
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyProfile;