import React, { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestData, onApply, onFail) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestData.url, {
        method: requestData.method ? requestData.method : "GET",
        headers: requestData.headers ? requestData.headers : {},
        body: requestData.body ? JSON.stringify(requestData.body) : null,
      });
      if (!response.ok) {
        setError(response.message);
        setIsLoading(false);
        onFail();
        return;
      }
      const data = await response.json();
      setIsLoading(false);
      onApply(data);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      onFail();
    }
  }, []);

  return { isLoading, error, sendRequest };
};
export default useFetch;
