import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    // Reset the states before each fetch
    setIsLoading(true);
    setHasError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();
        setData(result);
      } catch (error) {
        setHasError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if a valid URL is provided
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, hasError };
};

export default useFetch;
