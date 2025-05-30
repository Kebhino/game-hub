import { useQuery } from '@tanstack/react-query';

import apiClients from '@/services/api-clients';
import { FetchResponse } from './useData';
import genres from '@/data/genres';

export interface Genre { 
    id: number; 
    name: string; 
    image_background: string;
}



const useGenres = () => useQuery({
    queryKey: ['genres'], 
    queryFn: () => 
        apiClients
            .get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
            staleTime: 24 * 60 * 60 * 1000, //2
            initialData: {count: genres.length, results: genres}
})

export default useGenres