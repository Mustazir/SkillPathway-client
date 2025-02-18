import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllUser = () => {
  // Fetch all users
  const { data: allUsers = [], isLoading, error, refetch } = useQuery({
    queryKey: ['all-users'],
    queryFn: async () => {
      const res = await axios.get('https://skillpath-bay.vercel.app/users');
      return res.data;
    },
  });

  return { allUsers, isLoading, error, refetch };
};

export default useAllUser;
