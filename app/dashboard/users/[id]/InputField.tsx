import React from 'react';
import Image from "next/image";
import { IUser } from "@/interface/IUser";
import coinsIcon from "@/public/icons/coins.png";
import usersIcon from "@/public/icons/users.png";
import usernameIcon from "@/public/icons/username.png";
import locationIcon from "@/public/icons/Location.png";
import verifyIcon from "@/public/icons/verify.png";
import statusIcon from "@/public/icons/status.png";
import creatorsIcon from "@/public/icons/creators.png";

interface InputFieldProps {
  label: string;
  name: keyof IUser;
  type?: string;
  placeholder?: string;
  required?: boolean;
  noIcon?: boolean;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getFieldIcon = (name: string) => {
  switch (name) {
    case 'username':
      return usernameIcon.src;
    case 'coinBalance':
      return coinsIcon.src;
    case 'location':
      return locationIcon.src;
    case 'status':
      return statusIcon.src;
    case "followers":
      return creatorsIcon.src;
    case 'isVerified':
      return verifyIcon.src;
    default:
      return usersIcon.src;
  }
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  noIcon = false,
  error,
  value,
  onChange
}) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-4">
      <div className="relative group">
        <div className="relative flex items-center bg-black/10 rounded-xl border border-gray-700 focus-within:border-gray-600 transition-all duration-200">
          {!noIcon && (
            <div className="flex items-center justify-center pl-4">
              <Image
                src={getFieldIcon(name)}
                alt={name}
                width={30}
                height={30}
                className="transition-transform duration-200 group-hover:scale-110 opacity-70"
              />
            </div>
          )}

          <input
            type={type}
            name={name}
            id={name}
            placeholder={label}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full rounded-xl py-4 pl-3 pr-4 text-base text-gray-200 placeholder:text-gray-500 bg-transparent outline-none transition-all duration-200 focus:ring-0"
          />

          {required && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="text-red-500 text-lg">*</span>
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1.5 text-xs text-red-500 pl-2">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputField;