import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/api-clients';
import genres from '@/data/genres';

export interface Genre { 
  id: number; 
  name: string; 
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<{ count: number; results: Genre[] }, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 godziny
    initialData: {
      count: genres.length,
      results: genres,
    },
  });

export default useGenres;