import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <span className="border-l rotate-45 h-6" />
      </div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The <span  className="font-bold hover:underline">newest</span> streaming video app from your <span  className="font-bold hover:underline">favorite creators.</span>
 
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
