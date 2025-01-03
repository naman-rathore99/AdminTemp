'use client';

import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';



export default function ErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Error />
    </Suspense>
  );
}

 function Error() {
  const searchParams = useSearchParams();
  const errorMessageFromQuery = searchParams.get("error");
  const [error, setError] = useState<string | null>(errorMessageFromQuery);


  useEffect(() => {
    console.log("errorMessageFromQuery",errorMessageFromQuery);
    if (errorMessageFromQuery) {
      setError(errorMessageFromQuery);
    }
  }, [errorMessageFromQuery]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full space-y-8 p-8 bg-transparent border-2 border-gray-700 text-white rounded-lg shadow">

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

   
      </div>
    </div>
  );
}
