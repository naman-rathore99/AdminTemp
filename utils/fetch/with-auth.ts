import { createClient } from "@/utils/supabase/server";

export class WithAuth {
    protected async fetch(url: string, config?: any) {
        const supabase =await createClient();
        const {data: {session} } = await supabase.auth.getSession();
        const access_token = session?.access_token;
        const headers = {
            "Authorization": `Bearer ${access_token}`,
        }
        return fetch(url, {...config, headers: {...config?.headers, ...headers}});
    }
}