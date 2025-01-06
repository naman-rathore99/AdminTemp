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
import { IAgency } from '@/interface/IAgency';


interface InputFieldProps {
  label: string;
  name: keyof IAgency;
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
    <div className="w-full md:w-1/2 px-3 md:mb-6">
      <div className="relative group">
        {/* Label */}
        {/* <label 
          htmlFor={name} 
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label> */}

        {/* Input Container */}
        <div className="relative flex items-center text-white rounded-xl border border-gray-200  focus-within:border-gray-200 focus-within:ring-1 focus-within:ring-primary transition-all duration-200">
          {/* Icon */}
          {
            noIcon===false&&
          <div className="flex items-center justify-center pl-4">
            <Image
              src={getFieldIcon(name)}
              alt={name}
              width={30}
              height={30}
              className="transition-transform duration-200 group-hover:scale-110"
              />
          </div>
            }

          {/* Input Field */}
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder || `Enter ${label.toLowerCase()}`}
            value={value}
            onChange={onChange}
            required={required}
            className={`
              w-full
              rounded-xl
              py-3.5
              pl-3
              pr-4
              text-base
              text-white
              text-center
              // placeholder:text-gray-400
              bg-transparent
              outline-none
              transition-all
              duration-200
              ${error ? 'border-red-500' : ''}
            `}
          />

          {/* Required Indicator */}
          {required && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="text-red-500 text-lg">*</span>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-1.5 text-xs text-red-500 pl-2">
            {error}
          </p>
        )}

        {/* Helper Text */}
        <p className="mt-1 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pl-2">
          {name === 'username' && 'Choose a unique username'}
          {name === 'coinBalance' && 'Set initial coin balance'}
          {name === 'location' && 'Enter user location'}
          {/* {name === 'f' && 'Enter user\'s full name'} */}
        </p>
      </div>
    </div>
  );
};

export default InputField;