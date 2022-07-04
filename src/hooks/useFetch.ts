import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [url]);

  return data
};
