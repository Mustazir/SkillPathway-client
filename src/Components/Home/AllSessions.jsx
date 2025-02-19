import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const AllSessions = () => {
    const today = new Date();
    const [sortOption, setSortOption] = useState('date'); // Default sorting by date

    const { data: sessions = [], isLoading, isError } = useQuery({
        queryKey: ['approve-session'],
        queryFn: async () => {
            const res = await axios.get('https://skillpath-bay.vercel.app/sessions/approve');
            return res.data;
        },
    });
    const handleSortChange = (option) => {
        setSortOption(option);
    };


    if (isLoading) {
        return (
            <div className='flex items-center justify-center w-full pt-2 h-screen'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (isError || !Array.isArray(sessions)) {
        return (
            <div className="flex items-center justify-center w-full pt-2 h-screen">
                <p className="text-red-500">Failed to load sessions or invalid data format.</p>
            </div>
        );
    }

    // Sort sessions based on selected option
    const sortedSessions = [...sessions].sort((a, b) => {
        switch (sortOption) {
            case 'price':
                return parseFloat(a.fee) - parseFloat(b.fee); // Ascending price
            case 'recent':
                return new Date(b.startdate) - new Date(a.startdate); // Recent first
            case 'date':
            default:
                return new Date(b.startdate) - new Date(a.startdate); // Default sorting by date (recent first)
        }
    });

    console.log(sessions)
        return (
        <div className='dark:bg-gray-950 py-24'>
            <div className="flex justify-end mb-4 mr-24">
                <button
                    onClick={() => handleSortChange('price')}
                    className="px-4 py-2 text-sm bg-d-color1 bg-color1 text-white rounded mr-2"
                >
                    Sort by Price
                </button>
                <button
                    onClick={() => handleSortChange('recent')}
                    className="px-4 py-2 text-sm bg-d-color1 bg-color1 text-white rounded"
                >
                    Sort by Recent
                </button>
            </div>

            <div className="md:px-[10vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {sortedSessions.map((session) => {
                    const isOngoing = new Date(session.enddate) >= today;

                    return (
                        <div
                            key={session._id}
                            className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
                        >
                            <img
                                src={session.photo}
                                alt={session.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {session.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-white">
                                    {session.description?.slice(0, 100)}...
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <button
                                    className={`px-4 py-2 text-sm rounded ${isOngoing
                                        ? "bg-green-500 dark:bg-green-900 text-white"
                                        : "bg-red-500 dark:bg-red-900 text-white"
                                        }`}
                                >
                                    {isOngoing ? "Ongoing" : "Closed"}
                                </button>
                                <Link to={`/session/${session._id}`} className="px-4 py-2 text-sm bg-blue-500 dark:bg-blue-950 text-white rounded">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllSessions;