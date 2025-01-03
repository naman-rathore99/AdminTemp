'use client';

import { useEffect } from 'react';

const TawkChat = () => {
  useEffect(() => {
    // Tawk.to script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "https://embed.tawk.to/673205264304e3196ae026fc/1icdm88ck";
    
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkChat;
