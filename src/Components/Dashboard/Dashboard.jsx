import { Outlet } from "react-router-dom";
import StudentNav from "./Student/StudentNav";
import TuitorNav from "./Tuitor/TuitorNav";
import AdminNav from "./Admin/AdminNav";

import useRole from "../Hooks/useRole";



const Dashboard = () => {
    const [user, isLoading] = useRole()
    
    if(isLoading){
        return <div className='flex items-center justify-center w-full pt-2 h-screen dark:bg-gray-800 dark:text-white'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user.role == 'Admin') {
        return (
            <div className='font-lato md:flex dark:bg-gray-900 dark:text-white'>
                <AdminNav></AdminNav>
                <Outlet></Outlet>

            </div>
        );
    }
    if (user.role == 'Student') {
        return (
            <div className='font-lato md:flex dark:bg-gray-900 dark:text-white'>
                <StudentNav></StudentNav>
                <Outlet></Outlet>

            </div>
        );
    }
    if (user.role == 'Tuitor') {
        return (
            <div className='font-lato md:flex dark:bg-gray-900 dark:text-white'>
                {/* <StudentNav></StudentNav> */}
                <TuitorNav></TuitorNav>
                {/* <AdminNav></AdminNav> */}
                <Outlet></Outlet>

            </div>
        );
    }

};

export default Dashboard;