'use client'

import { useState, ChangeEvent } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function EditableAvatar({src, isEditing, setAvatarFile} : {src: string, isEditing: boolean, setAvatarFile: (file: File) => void}) {
  const [avatarSrc, setAvatarSrc] = useState(src)

 

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarSrc(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      setAvatarFile(file)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarSrc} alt="User avatar" />
          <AvatarFallback>BeLive</AvatarFallback>
        </Avatar>
        {isEditing && (
          <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  )
}