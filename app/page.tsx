'use client';

import { Suspense, useEffect, useState } from 'react';
import { signInAction } from './actions';
import { useSearchParams } from 'next/navigation';

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}

function LoginPage() {
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const errorMessageFromQuery = searchParams.get("error");

  const [error, setError] = useState<string | null>(errorMessageFromQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("NAME",name,value)
    const form = document.querySelector('form') as HTMLFormElement | null; // Ensure it's typed correctly
    if (form) {
      const updatedFormData = new FormData(form);
      updatedFormData.set(name, value); // Update the FormData object
      setFormData(updatedFormData); // Update state
      console.log("FormData", updatedFormData);
    }
    
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {

       await signInAction(formData);

    } catch (err:any) {
console.log("Error",err)      
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("errorMessageFromQuery",errorMessageFromQuery);
    if (errorMessageFromQuery) {
      setError(errorMessageFromQuery);
    }
  }, [errorMessageFromQuery]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full space-y-8 p-8 bg-transparent border-2 border-gray-700 text-white rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold">Login</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
