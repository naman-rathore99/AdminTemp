"use client";
import { useState } from "react";
import { CreateUserForm } from "./create-user-form";
import EditableAvatar from "./editable-avatar";
import { Button } from "@/components/ui/button";
import { getAvatarUploadUrl } from "./actions";

export function EditProfile(user: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = async () => {
    setIsEditing(false);
    if(avatarFile) {
        const url = await getAvatarUploadUrl(avatarFile.type);
        await fetch(url, {method: 'PUT', body: avatarFile});
        setAvatarFile(null);
    }

  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setAvatarFile(null);
  };

  return (
    <>
    <div className="flex gap-6 items-center w-screen mb-4">
        <div className="flex justify-between items-center gap-6">
            <EditableAvatar src={user.avatar} isEditing={isEditing} setAvatarFile={setAvatarFile} />
            {!isEditing && <p > {user.username ?? 'test'}</p> }
        </div>
      {!isEditing && <Button onClick={ () => handleEditClick()}>Edit Profile</Button> }

      {isEditing && <Button onClick={() => handleSaveClick()}>Save</Button> }
       {isEditing && <Button variant={"outline"} onClick={() => handleCancelClick()}>Cancel</Button>}
    </div>
    {isEditing && <CreateUserForm />}
</>
  );
}
