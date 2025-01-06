'use client';

import React, { useState } from 'react';
import { useAgency } from '@/utils/hooks/useAgency';

interface AgencyCreationResponse {
  message: string;
  agency: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

export default function CreateAgency() {
  const [agencyName, setAgencyName] = useState('');
  const { createAgency } = useAgency();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<AgencyCreationResponse | null>(null);

  const handleCreateAgency = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await createAgency.mutateAsync({
          name: agencyName,
          id: '',
          avatar: '',
          numbersOfCreator: 0,
          coinBalance: 0,
          invoicesPdfLink: '',
          status: ''
      });

      setSuccess(response);
      setAgencyName('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create agency');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create New Agency</h1>
      <form onSubmit={handleCreateAgency}>
        <div className="mb-4">
          <label 
            htmlFor="agencyName" 
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Agency Name
          </label>
          <input
            type="text"
            id="agencyName"
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter agency name"
            required
          />
        </div>
        
        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 text-green-500 text-sm">
            <p>{success.message}</p>
            <p>Agency ID: {success.agency.id}</p>
            <p>Agency Name: {success.agency.name}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Creating...' : 'Create Agency'}
        </button>
      </form>
    </div>
  );
}
