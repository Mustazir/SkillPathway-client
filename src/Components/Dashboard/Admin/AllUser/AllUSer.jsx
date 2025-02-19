import React from 'react';
import useUsers from '../../../Hooks/useUsers';
import Swal from 'sweetalert2';
import axios from 'axios';

const AllUSer = () => {
    const [users, isLoading, refetch] = useUsers();
    console.log(users);
    if (isLoading) {
        return <div className='flex items-center justify-center w-full pt-2 h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    const handelMakeAdmin = async (id) => {
        const { value: confirmation } = await Swal.fire({
            title: 'Type "confirm" to proceed',
            input: 'text',
            inputPlaceholder: 'Type "confirm"',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!';
                }
                if (value.toLowerCase() !== 'confirm') {
                    return 'You must type "confirm"!';
                }
            },
            customClass: {
                popup: 'bg-white text-black border-2 border-gray-300',
                title: 'text-2xl font-semibold mb-4',
                input: 'p-2 border border-gray-400 rounded-md',
                confirmButton: 'bg-color2 text-white p-2 rounded-md hover:bg-color1',
                cancelButton: 'bg-red-500 text-white p-2 rounded-md hover:bg-red-600',
            }
        });

        if (confirmation && confirmation.toLowerCase() === 'confirm') {
            axios.put(`https://skillpath-bay.vercel.app/admin_users/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.acknowledged == true) {
                        Swal.fire({
                            title: " Done!",
                            text: "User is now Admin",
                            icon: "success"
                        });
                        refetch()
                    }
                })
        }
    }
    return (
        <div className="p-6 bg-gray-900 space-y-4 w-full">
            <div className="p-6 sm:p-12 bg-gray-50 dark:bg-gray-950 dark:text-white text-black">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-semibold font-Noto text-center md:text-left">All Users</h4>
                        <p className="text-gray-600"></p>
                    </div>
                </div>

            </div>
            <div className="p-6 sm:p-12 bg-blue-950 min-h-screen dark:bg-gray-950 dark:text-white">

                <div className="container p-2 mx-auto sm:p-4 text-gray-800 pr">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight text-white">Total : {users.length} users</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="bg-gray-300 dark:bg-gray-900 dark:text-white">
                                <tr className="text-left">
                                    <th className="p-3">Id #</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3 text-right"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) =>

                                    <tr key={user._id} className="border-b hover:bg-color1 dark:bg-gray-800 dark:text-white hover:text-white border-opacity-20 duration-150 border-gray-300 bg-gray-50">
                                        <td className="p-3">
                                            <p>{user._id}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{user.email}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{user.role}</p>

                                        </td>

                                        <td className="p-3 text-right">
                                            <button onClick={() => handelMakeAdmin(user._id)} className="px-3 py-1 font-semibold rounded-md bg-color2 dark:bg-blue-950 hover:bg-white hover:text-color1 duration-150 text-gray-50">
                                                Make Admin
                                            </button>
                                        </td>
                                    </tr>)}

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AllUSer;