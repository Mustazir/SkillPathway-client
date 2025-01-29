import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  { useContext } from 'react';
import { AuthContext } from '../Main/AuthProvider';

const useMaterials = () => {
    const {user}=useContext(AuthContext);
    
    const {data:materials=[],isLoading,refetch }=useQuery({
        queryKey: ['tuitor-session'],
        queryFn: async () => {
            const res=await axios.get(`https://skillpath-bay.vercel.app/materials?email=${user.email?user.email:''}`);
            return res.data;
        }
    })
    
    return [materials,isLoading,refetch]
};

export default useMaterials;