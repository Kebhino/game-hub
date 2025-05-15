import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchResponse<T> { 
    count: number; 
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {      
    const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false)
      const [iloscGier, setIloscGier ] = useState(0)
    
      useEffect(() => {
const controller = new AbortController();

        setLoading(true)
        setIloscGier(0)
        apiClients
          .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
          .then((res) => {setData(res.data.results);
            setLoading(false);
            setIloscGier(res.data.count)
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
             setError(err.message)
             setLoading(false)}
            );

          return () => controller.abort()
      }, deps ? [...deps] : []);

      return {data, error, isLoading, iloscGier}; }

export default useData