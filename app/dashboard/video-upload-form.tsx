'use client';

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { getUrlFromVideo } from "./actions";
import axios from "axios";
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation";

function UploadBox() {
    return (
        <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center">
        <FileIcon className="w-12 h-12" />
        <span className="text-sm font-medium text-gray-500">Drag and drop a file or click to browse</span>
        <span className="text-xs text-gray-500">PDF, image, video, or audio</span>
      </div>
    )
}
type UploadProgress = {
    progress: number;
    name: string;
}
export function VideoUpload() {
    const [uploadProgress, setUploadProgress] = useState<Record<string,UploadProgress>>({});
    const [uploadDisabled, setUploadDsiabled] = useState(false);
    const router = useRouter();
    const handleChange = async (fileList: FileList) => {
        const promises = [];
        setUploadDsiabled(true);
        for(let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const url = await getUrlFromVideo(file.name, file.type);
        const newUploadProgress = { ...uploadProgress, [file.name]: { progress: 0, name: file.name}};
        setUploadProgress((prev) => ({...prev, ...newUploadProgress}));
        promises.push(axios.put(url, file, {
            headers: {
              'Content-Type': file.type,
            },
            onUploadProgress: ({total = 1, loaded}) => {
                  const percentCompleted = Math.round((loaded * 100) / total);
                  const newUploadProgress = { ...uploadProgress, [file.name]: { progress: percentCompleted, name: file.name}};
                  setUploadProgress((prev) => ({...prev, ...newUploadProgress}));
                }
          }));
        }
        await Promise.all(promises);
        await router.refresh();
        setUploadProgress({});
    };
  return (
    <>
    <Card>
      <CardContent className="p-6 space-y-4">
      <FileUploader disabled={uploadDisabled}  type={['video/*']} multiple={true} handleChange={handleChange} children={<UploadBox />} />
        
      </CardContent>
    </Card>
    <div>
            <div  className="flex flex-col items-center gap-2">
         {Object.values(uploadProgress).map((upload, index) => (
            <div key={index} className="w-max">
                    <span>{upload.name}</span>
                    <Progress value={upload.progress} />
                </div>
         ))}
                
         </div>
    </div>
    </>
  )
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}