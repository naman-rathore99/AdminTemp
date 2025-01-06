import Sidebar from "@/components/Navigation/Sidebar";
import Topbar from "@/components/Topbar";
import { createClient } from "@/utils/supabase/server";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { redirect } from "next/navigation";
import QueryProvider from "../QueryProvider";

export const metadata: Metadata = {
  title: "Belive Admin",
  description: "app",
};

const nunito_Sans = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase =await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <main className={`${nunito_Sans.className} flex min-h-screen`}>

      <header className="fixed top-0 left-0 right-0 z-40 w-full">
        <Topbar />
      </header>
      <aside
        className="
            fixed 
            top-16 
            mt-2
            bottom-0 
            left-0  bg-black
            w-18  
            md:w-60 
            shadow-md 
            transition-transform 
            duration-300 
            z-30    
          "
      >
        <Sidebar />
      </aside>

      <main
        className="
            flex-grow 
            ml-20
            mr-10
            md:ml-64 
            w-full 
            md:w-[calc(100%-16rem)] 
            min-h-screen 
            transition-all 
            duration-300
          "
      >
        <QueryProvider>
        {children}
        </QueryProvider>
      </main>
    </main>
  );
}
