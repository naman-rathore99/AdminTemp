import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async() => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL||"https://kojpbsyqkmdvlidatxbu.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||"yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvanBic3lxa21kdmxpZGF0eGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NTA3MDQsImV4cCI6MjA0MDEyNjcwNH0.YTiwn73hF25KxsJcnEkTlPDPoe6zG5AYmYDdpPPGs_E",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            console.log("Error",error)
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};