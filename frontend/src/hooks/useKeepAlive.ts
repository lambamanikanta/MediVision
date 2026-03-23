import { useEffect } from 'react';

const useKeepAlive = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/health')
        .then(response => response.json())
        .then(data => console.log('Keep-alive ping successful', data))
        .catch(error => console.error('Error calling /health endpoint:', error));
    }, 300000); // 5 minutes in milliseconds

    return () => clearInterval(interval);
  }, []);
};

export default useKeepAlive;
