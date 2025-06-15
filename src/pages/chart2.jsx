import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// --- Data Definitions ---
const initialData = [
    { name: "New", value: 50 },
    { name: "Pending", value: 50 },
    { name: "Dispatched", value: 50 },
    { name: "Delivered", value: 123 },
    { name: "Cancelled", value: 50 },
];

const COLORS = ["#FFCE56", "#4BC0C0", "#FF6384", "#36A2EB", "#9966FF"];

// --- Chart Component ---
const ChartSecond = () => {
    const [activeTab, setActiveTab] = useState("message");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedDate, setSelectedDate] = useState("");
    const [chartData, setChartData] = useState(initialData);
    const [totalOrders, setTotalOrders] = useState(initialData.reduce((sum, item) => sum + item.value, 0));

    useEffect(() => {
        let filteredData = [...initialData];

        if (selectedCategory === "Category 1") {
            filteredData = filteredData.map((item) => (item.name === "Delivered" ? { ...item, value: 150 } : item));
        } else if (selectedCategory === "Category 2") {
            filteredData = filteredData.map((item) => (item.name === "New" ? { ...item, value: 75 } : item));
        }

        const newTotal = filteredData.reduce((sum, item) => sum + item.value, 0);
        setChartData(filteredData);
        setTotalOrders(newTotal);
    }, [selectedCategory, selectedDate]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    // --- Message Activities ---
    const messageActivities = (
        <>
            <div>
                <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">TODAY</h3>
                <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                            C
                        </div>
                        <div className="flex-grow">
                            <p className="text-black dark:text-white">
                                <span className="font-semibold">Christian Wood</span> Sent Message to{" "}
                                <span className="font-semibold text-blue-500">Nikita Houston</span> •{" "}
                                <span className="text-sm text-gray-500">1 min ago</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Nikita Houston Reply your message Hello</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                            C
                        </div>
                        <div className="flex-grow">
                            <p className="text-black dark:text-white">
                                <span className="font-semibold">Christian Wood</span> Accept Order from{" "}
                                <span className="font-semibold text-blue-500">Ebay</span> • <span className="text-sm text-gray-500">1 min ago</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Rohan Walker Reply your message Ebay</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">YESTERDAY</h3>
                <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                            D
                        </div>
                        <div className="flex-grow">
                            <p className="text-black dark:text-white">
                                <span className="font-semibold">Christian Wood</span> Accept Order from{" "}
                                <span className="font-semibold text-blue-500">Amazon</span> • <span className="text-sm text-gray-500">12:30PM</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">25 MAY 2024</h3>
                <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                            C
                        </div>
                        <div className="flex-grow">
                            <p className="text-black dark:text-white">
                                <span className="font-semibold">Christian Wood</span> Accept Order from{" "}
                                <span className="font-semibold text-blue-500">Walmart</span> • <span className="text-sm text-gray-500">11:20AM</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    // --- Email Activities ---
    const emailActivities = (
        <div className="space-y-4">
            <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">EMAIL TEMPLATES</h3>
            <div className="space-y-3">
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">Order Confirmed – #12345</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Your order has been placed successfully.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: 2 hours ago</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">Delivery Update – Track Your Parcel</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Your parcel is on the way, track it easily.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: Yesterday</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">Password Reset Help</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Steps to reset your password securely.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: 3 days ago</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">New Launch – Check It Out</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Have a look at our latest collection.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: 1 week ago</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="font-inter space-y-6 rounded-lg bg-white p-4 text-black dark:border dark:border-gray-800 dark:bg-[#001121] sm:p-6">
            {/* Order Status Section - Full width column */}
            <div className="rounded-lg border bg-white p-6 shadow-md dark:border-gray-800 dark:bg-[#001121]">
                <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-xl font-semibold text-black dark:text-white">Order Status</h2>
                    <div className="flex w-full flex-wrap gap-2 sm:w-auto">
                        <select
                            className="w-full rounded-md bg-gray-100 px-3 py-1 text-sm text-black dark:bg-gray-700 dark:text-white sm:w-auto"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option>All Categories</option>
                            <option>Category 1</option>
                            <option>Category 2</option>
                        </select>
                        <div className="flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-700 sm:w-auto">
                            <label
                                htmlFor="date-picker"
                                className="sr-only"
                            >
                                Select Date
                            </label>
                            <input
                                id="date-picker"
                                type="date"
                                className="h-5 w-full cursor-pointer bg-transparent text-gray-600 dark:text-gray-300 sm:w-auto"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 md:flex-row">
                    {/* Status Cards - Now in a single column */}
                    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:w-1/2">
                        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                            <div className="mb-2 flex items-center space-x-2">
                                <svg
                                    className="h-6 w-6 text-indigo-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    ></path>
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300">All</span>
                            </div>
                            <p className="text-2xl font-bold text-black dark:text-white">{totalOrders}</p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                            <div className="mb-2 flex items-center space-x-2">
                                <svg
                                    className="h-6 w-6 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    ></path>
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300">New</span>
                            </div>
                            <p className="text-2xl font-bold text-black dark:text-white">
                                {chartData.find((item) => item.name === "New")?.value || 0}
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                            <div className="mb-2 flex items-center space-x-2">
                                <svg
                                    className="h-6 w-6 text-yellow-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300">Pending</span>
                            </div>
                            <p className="text-2xl font-bold text-black dark:text-white">
                                {chartData.find((item) => item.name === "Pending")?.value || 0}
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                            <div className="mb-2 flex items-center space-x-2">
                                <svg
                                    className="h-6 w-6 text-red-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300">Dispatched</span>
                            </div>
                            <p className="text-2xl font-bold text-black dark:text-white">
                                {chartData.find((item) => item.name === "Dispatched")?.value || 0}
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                            <div className="mb-2 flex items-center space-x-2">
                                <svg
                                    className="h-6 w-6 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300">Delivered</span>
                            </div>
                            <p className="text-2xl font-bold text-black dark:text-white">
                                {chartData.find((item) => item.name === "Delivered")?.value || 0}
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                            <div className="mb-2 flex items-center space-x-2">
                                <svg
                                    className="h-6 w-6 text-purple-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span className="text-gray-600 dark:text-gray-300">Cancelled</span>
                            </div>
                            <p className="text-2xl font-bold text-black dark:text-white">
                                {chartData.find((item) => item.name === "Cancelled")?.value || 0}
                            </p>
                        </div>
                    </div>

                    {/* Pie Chart - Takes the other half of the row on medium+ screens */}
                    <div className="h-64 w-full md:h-80 md:w-1/2">
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                                    labelLine={false}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="text-4xl font-bold text-black dark:text-white"
                                >
                                    {totalOrders}
                                </text>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Activities Section - Full width column */}
            <div className="rounded-lg border bg-white p-6 shadow-md dark:border-gray-800 dark:bg-[#001121]">
                <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-xl font-semibold text-black dark:text-white">Recent Activities</h2>
                    <div className="flex rounded-md bg-gray-100 p-1 dark:bg-gray-700">
                        <button
                            className={`rounded-md px-4 py-2 text-sm font-medium ${
                                activeTab === "message" ? "bg-blue-500 text-white shadow" : "text-gray-600 dark:text-gray-300"
                            }`}
                            onClick={() => setActiveTab("message")}
                        >
                            SMS
                        </button>
                        <button
                            className={`rounded-md px-4 py-2 text-sm font-medium ${
                                activeTab === "email" ? "bg-blue-500 text-white shadow" : "text-gray-600 dark:text-gray-300"
                            }`}
                            onClick={() => setActiveTab("email")}
                        >
                            Email
                        </button>
                    </div>
                </div>

                <div className="max-h-96 space-y-4 overflow-y-auto pr-2">{activeTab === "message" ? messageActivities : emailActivities}</div>
            </div>
        </div>
    );
};

export default ChartSecond;
