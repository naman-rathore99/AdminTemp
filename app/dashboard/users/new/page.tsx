'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useUsers } from "@/utils/hooks/useUsers";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import statusIcon from "@/public/icons/status.png";
import verifyIcon from "@/public/icons/verify.png";

import { IUser } from "@/interface/IUser";
import InputField from "../[id]/InputField";


const initialFormData: IUser = {
  firstName: '',
  lastName: '',
  location: '',
  dob: '',
  coinBalance: '',
  status: 'active',
  avatar: 'https://via.placeholder.com/150',
  lastActive: "",
  id: "",
  username: "",
  coins: 0,
  following: 0,
  followers: 0,
  coinsGifted: 0,
  giftLevel: 0,
  createdAt: "",
  updatedAt: "",
  bannedAt: null,
  isBanned: false,
  isPrivate: false,
  stripeAccountId: null,
  stripeCustomerId: null,
  instagram: "",
  twitter: "",
  linkedin: "",
  posts: 0,
  fcmToken: null,
  hideFollowers: false,
  hideFollowing: false,
  isVerified: false,
  agencyId: null
};

const LoadingState = () => (
  <div className="space-y-8 bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-8">
      <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
        <div className="w-60 h-60 rounded-lg bg-gray-700 animate-pulse" />
      </div>
      <div className="md:w-2/3 w-full space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="-mx-3 flex items-center justify-between flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-5">
              <div className="h-12 w-full bg-gray-700 animate-pulse rounded-md" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-5">
              <div className="h-12 w-full bg-gray-700 animate-pulse rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="p-6 m-6 rounded-lg">
      <div className="h-64 w-full bg-gray-700 animate-pulse rounded-lg" />
    </div>
  </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex w-full items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center bg-red-50 p-6 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-red-700">Error</h2>
      <p className="mt-2 text-red-600">{message}</p>
      <Button
        // variant="outline"
        className="mt-4"
        onClick={() => window.location.reload()}
      >
        Try Again
      </Button>
    </div>
  </div>
);




const Profile = () => {
  const params = useParams();
  const { isLoading, error: apiError, getUserById } = useUsers();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isVerified, setIsVerified] = useState(false);


  const [formData, setFormData] = useState<IUser>(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const handleToggle = () => {

    setIsChecked((prev) => !prev);
  };
  const handleToggleVerified = () => {
    setIsVerified((prev) => !prev);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEditing) return;

    setIsSaving(true);
    try {
      if (!formData.username || !formData.firstName) {
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsEditing(false);
    } catch (err) {

    } finally {
      setIsSaving(false);
    }
  };

  if (error || apiError) {
    return <ErrorDisplay message={error || apiError?.message || 'An error occurred'} />;
  }

  if (loading) {
    return <LoadingState />;
  }


  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not Available';
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return 'Invalid Date';
    }
  };




  return (
    <section className="bg-gray-">
      <div className="mx-auto max-w-screen-xl relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center mb-6">
          <div className="space-x-4 absolute  right-10 ">
            {!isEditing ? (
              <Button
                className="text-white bg-blue-600 transition-colors"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                // variant="destructive"
                className="text-white bg-blue-600 transition-colors"

                onClick={() => {
                  setIsEditing(false);
                  setFormData(formData); // Reset form
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 pt-10">
          <div className="flex flex-col md:flex-row   justify-center items-start md:gap-8">
            <div className="w-full md:w-1/3 flex flex-col pb-4 bg-white items-center mb-6 md:mb-0 space-y-4">
              <div className="relative group w-full ">
                <Image
                  src={formData.avatar || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="rounded-lg border border-gray-300 w-full max-h-[350px] object-cover transition-opacity group-hover:opacity-90"
                  width={500}
                  height={400}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
              <div className="text-center space-y-4 ">
                <p className="font-bold"> {formData.firstName + ' ' + formData?.lastName}</p>
                <p className=""> {formData.username}</p>
              </div>

              <div className="flex gap-2 items-center w-[80%] justify-between px-4">
                <Button className="p-2 px-4 text-center font-bold border border-2 rounded-xl">
                  {formData.agencyId || "N/A"}
                </Button>

                <div className="flex flex-col  gap-2 items-center">
                  <p>
                    Sponsored Lives
                  </p>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggle}
                      className="hidden"
                    />
                    <span
                      className={`relative inline-block w-12 h-6 rounded-full transition duration-200 ${isChecked ? "bg-blue-600" : "bg-gray-300"
                        }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transform transition duration-200 ${isChecked ? "translate-x-6" : "translate-x-0"
                          }`}
                      ></span>
                    </span>
                  </label>

                </div>
              </div>
            </div>

            <div className="md:w-2/3 space-y-6">
              <div className="-mx-3 flex flex-wrap">
                <InputField
                  label="Full Name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <InputField
                  label="Username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>


              <div className="-mx-3 flex flex-wrap">
                <InputField
                  label="Location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                />
                <InputField
                  label="Date of Birth"

                  name="dob"
                  type="date"
                  noIcon={true}
                  value={formData.dob}
                  onChange={handleChange}

                />
              </div>



              <div className="-mx-3 flex flex-wrap ">
                <InputField
                  label="Coin Balance"
                  name="coinBalance"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                />

                <div className="flex relative group items-center pl-3 pr-3 h-full w-full md:w-1/2   overflow-hidden">
                  <div className="relative w-full py-3.5 pl-3 pr-3   flex items-center text-white rounded-xl  border border-gray-200  focus-within:border-gray-200 focus-within:ring-1 focus-within:ring-primary transition-all duration-200">
                    <Image
                      src={statusIcon.src}
                      alt={"Status"}
                      width={30}
                      height={30}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      id="status"
                      disabled={!isEditing}
                      className="w-full rounded-md pl-3  bg-transparent text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="active">Active</option>
                      <option value="suspended">Suspended</option>
                      <option value="deleted">Deleted</option>
                    </select>
                  </div>

                </div>

              </div>

              <div className="-mx-3 flex flex-wrap">

                <div className="flex relative group items-center pl-3 pr-3 h-full w-full md:w-1/2   overflow-hidden">
                  <div className="relative w-full py-3.5 pl-3 pr-3   flex justify-between items-center text-white rounded-xl  border border-gray-200  focus-within:border-gray-200 focus-within:ring-1 focus-within:ring-primary transition-all duration-200">
                    <Image
                      src={verifyIcon.src}
                      alt={"Status"}
                      width={30}
                      height={30}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />

                    <p>Verifications</p>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isVerified}
                        onChange={handleToggleVerified}
                        className="hidden"
                      />
                      <span
                        className={`relative inline-block w-12 h-6 rounded-full transition duration-200 ${isVerified ? "bg-blue-600" : "bg-gray-300"
                          }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transform transition duration-200 ${isVerified ? "translate-x-6" : "translate-x-0"
                            }`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>


                <InputField label="Followers Count"
                  name="followers"
                  type="number"
                  value={formData.followers.toString()}
                  onChange={handleChange}
                />
              </div>

              {isEditing && (
                <div className="flex justify-end space-x-4 mt-6">
                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="min-w-[120px]"
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

    </section>
  );
};

export default Profile;