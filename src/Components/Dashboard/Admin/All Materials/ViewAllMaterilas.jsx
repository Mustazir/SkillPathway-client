import React from 'react';
import useMaterials from '../../../Hooks/useMaterials';
import axios from 'axios';
import Swal from 'sweetalert2';

const ViewAllMaterilas = () => {
    const [materials, isLoading, refetch] = useMaterials();
    console.log(materials)
    if (isLoading) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handelDelete = id => {
        Swal.fire({
            title: "Are you Sure ?",
            text: "Please Think once before Deleting",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Wait",
            confirmButtonColor: "#4a7fce",

            cancelButtonColor: "#262d53",
            confirmButtonText: "Yes, Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                
                axios.delete(`https://skillpath-bay.vercel.app/materials/${id}`)
                    .then(res => {
                        if (res.data.acknowledged == true) {
                            Swal.fire({
                                title: "Delete Done!",
                                text: "Your file has been Deleted",
                                icon: "success"
                            });
                            refetch()
                        }
                        
                    })
                    

            }
        });
    }
    return (
        <div className="p-6 bg-gray-900 space-y-4 w-full">
            <div className="p-6 sm:p-12 bg-gray-50 dark:bg-gray-950 dark:text-white text-gray-800 w-full">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left">All Materials</h4>
                        <p className="text-gray-600"></p>
                    </div>
                </div>

            </div>
            <div className="p-6 sm:p-12 bg-blue-950 dark:bg-gray-950 dark:text-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.map((course) => (
                    <div
                        key={course._id}
                        className="bg-white dark:bg-gray-900 flex flex-col dark:text-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={course.photo}
                            alt={course.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <p className="text-gray-700 font-medium mb-2">
                                Sessions Title: <span className='text-color2'>{course.sessionTitle}</span>
                            </p>
                            <p className="text-gray-700 font-medium mb-2">
                                Drive Link: {course.driveLink}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Instructor: {course.tuitorUsername} (
                                {course.tuitorEmail})
                            </p>
                            <div className="divider"></div>
                            <div className='flex justify-between '>
                                
                                <button onClick={() => handelDelete(course._id)} className="bg-red-500  text-white px-3 py-1 rounded-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ViewAllMaterilas;