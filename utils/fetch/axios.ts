import axios from 'axios';
import { createClient } from '../supabase/server';

export const axiosInstance = axios.create({
  baseURL: 'https://api.joinbelive.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(async (config) => {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  const access_token = session?.access_token;
  

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`; 
  }

  return config;
}, error => {
  return Promise.reject(error);
});
