import { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, Tooltip, Legend, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function ChartsD() {
  const [darkMode, setDarkMode] = useState(false);

  const userStats = [
    { role: 'Students', count: 120 },
    { role: 'Tutors', count: 35 },
    { role: 'Admins', count: 5 },
  ];

  const sessionStats = [
    { name: 'Approved', value: 60 },
    { name: 'Pending', value: 20 },
    { name: 'Rejected', value: 10 },
  ];

  const bookingStats = [
    { month: 'Jan', bookings: 40 },
    { month: 'Feb', bookings: 50 },
    { month: 'Mar', bookings: 70 },
    { month: 'Apr', bookings: 90 },
  ];

  return (
    <div className={darkMode ? 'bg-[#0a2540] text-white' : 'bg-blue-100 text-black'}>
      <div className="min-h-screen p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Dashboard Overview</h1>
          <div className="flex items-center">
            {/* Custom Dark Mode Toggle */}
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  id="darkModeToggle"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="sr-only"
                />
                <div className="w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                <div
                  className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    darkMode ? 'transform translate-x-6' : ''
                  }`}
                ></div>
              </div>
            </label>
            <span className="ml-4">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Stats - Bar Chart */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">User Statistics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="role" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#4a7fce" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Session Stats - Pie Chart */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Session Status</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={sessionStats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#4a7fce" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Booking Trends - Line Chart */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Booking Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bookingStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bookings" stroke="#4a7fce" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
