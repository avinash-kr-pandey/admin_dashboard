import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// --- Data Definitions ---

// Initial static data for the pie chart and status cards.
// In a real application, this data would typically be fetched from a backend API.
const initialData = [
    { name: "New", value: 50 },
    { name: "Pending", value: 50 },
    { name: "Dispatched", value: 50 },
    { name: "Delivered", value: 123 },
    { name: "Cancelled", value: 50 },
];

// Colors for the pie chart slices, mapped to the order statuses.
const COLORS = ["#FFCE56", "#4BC0C0", "#FF6384", "#36A2EB", "#9966FF"];

// --- Chart Component ---

const Chart = () => {
    // State for controlling the active tab in "Recent Activities" (message or email).
    const [activeTab, setActiveTab] = useState("message");

    // State for the selected category in the "Order Status" dropdown.
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    // State for the selected date from the calendar input.
    const [selectedDate, setSelectedDate] = useState("");

    // State for the data displayed in the pie chart and status cards.
    const [chartData, setChartData] = useState(initialData);

    // State for the total number of orders, displayed in the center of the pie chart.
    const [totalOrders, setTotalOrders] = useState(initialData.reduce((sum, item) => sum + item.value, 0));

    // useEffect hook to simulate data fetching/manipulation when filters change.
    // In a production app, this would be an API call to get real-time data.
    useEffect(() => {
        // This is a placeholder for your actual API call.
        // Example:
        // const fetchAnalyticsData = async () => {
        //   try {
        //     const response = await fetch(`/api/order-analytics?category=${selectedCategory}&date=${selectedDate}`);
        //     const data = await response.json();
        //     setChartData(data.chartBreakdown); // Assuming API returns data like initialData
        //     setTotalOrders(data.totalOrders);
        //   } catch (error) {
        //     console.error("Failed to fetch analytics data:", error);
        //   }
        // };
        // fetchAnalyticsData();

        // For demonstration purposes, we'll just manipulate the existing data slightly.
        let filteredData = [...initialData]; // Start with a copy of the base data

        if (selectedCategory === "Category 1") {
            // Example: If 'Category 1' is selected, slightly adjust 'Delivered' orders
            filteredData = filteredData.map((item) => (item.name === "Delivered" ? { ...item, value: 150 } : item));
        } else if (selectedCategory === "Category 2") {
            // Example: If 'Category 2' is selected, adjust 'New' orders
            filteredData = filteredData.map((item) => (item.name === "New" ? { ...item, value: 75 } : item));
        }

        // Recalculate total based on filtered data
        const newTotal = filteredData.reduce((sum, item) => sum + item.value, 0);

        setChartData(filteredData);
        setTotalOrders(newTotal);
    }, [selectedCategory, selectedDate]); // Dependencies: run this effect when category or date changes

    // Handler for category dropdown changes.
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Handler for date input changes.
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    // --- JSX for Message Activities (conditionally rendered) ---
    const messageActivities = (
        <>
            {/* Today's Message Activities */}
            <div>
                <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">TODAY</h3>
                <div className="space-y-3">
                    {/* Message Activity Item 1 */}
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
                    {/* Message Activity Item 2 */}
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
            {/* Yesterday's Message Activities */}
            <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">YESTERDAY</h3>
                <div className="space-y-3">
                    {/* Message Activity Item 3 */}
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
            {/* 25 May 2024 Message Activities */}
            <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">25 MAY 2024</h3>
                <div className="space-y-3">
                    {/* Message Activity Item 4 */}
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

    // --- JSX for Email Activities (conditionally rendered) ---
    const emailActivities = (
        <div className="space-y-4">
            <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">EMAIL TEMPLATES</h3>
            <div className="space-y-3">
                {/* Email Template 1 */}
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">Order Confirmed – #12345</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Your order has been placed successfully.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: 2 hours ago</p>
                </div>
                {/* Email Template 2 */}
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">Delivery Update – Track Your Parcel</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Your parcel is on the way, track it easily.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: Yesterday</p>
                </div>
                {/* Email Template 3 */}
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">Password Reset Help</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Steps to reset your password securely.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: 3 days ago</p>
                </div>
                {/* Email Template 4 */}
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <p className="font-semibold text-black dark:text-white">New Launch – Check It Out</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subject: Have a look at our latest collection.</p>
                    <p className="mt-2 text-xs text-gray-500">Last sent: 1 week ago</p>
                </div>
            </div>
        </div>
    );
    

    // --- Component Render ---
    return (
        <div className="font-inter space-y-6 rounded-lg bg-white p-4 text-black dark:border dark:border-gray-800 dark:bg-[#001121] sm:p-6 lg:p-8">
            {/* Grid container for the two main sections */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Order Status Section */}
                <div className="rounded-lg border bg-white p-6 shadow-md dark:border-gray-800 dark:bg-[#001121]">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-black dark:text-white">Order Status</h2>
                        <div className="flex space-x-2">
                            {/* Dropdown for All Categories */}
                            <select
                                className="rounded-md bg-gray-100 px-3 py-1 text-sm text-black dark:bg-gray-700 dark:text-white"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option>All Categories</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                            </select>
                            {/* Calendar Icon (now an input type="date") */}
                            <div className="flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-700">
                                <label
                                    htmlFor="date-picker"
                                    className="sr-only"
                                >
                                    Select Date
                                </label>
                                <input
                                    id="date-picker"
                                    type="date"
                                    className="h-5 w-5 cursor-pointer bg-transparent text-gray-600 dark:text-gray-300"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
                        {/* Status Cards - Dynamically updated based on chartData */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                                <div className="mb-2 flex items-center space-x-2">
                                    {/* Icon for All Orders */}
                                    <svg
                                        className="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
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
                                    {/* Icon for New Orders */}
                                    <svg
                                        className="h-6 w-6 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
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
                                    {/* Icon for Pending Orders */}
                                    <svg
                                        className="h-6 w-6 text-yellow-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
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
                                    {/* Icon for Dispatched Orders */}
                                    <svg
                                        className="h-6 w-6 text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
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
                                    {/* Icon for Delivered Orders */}
                                    <svg
                                        className="h-6 w-6 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
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
                                    {/* Icon for Cancelled Orders */}
                                    <svg
                                        className="h-6 w-6 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
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

                        {/* Pie Chart */}
                        <div className="flex h-64 w-full items-center justify-center md:h-80">
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
                                    {/* Text for total orders in the center of the pie chart */}
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

                {/* Recent Activities Section */}
                <div className="rounded-lg border bg-white p-6 shadow-md dark:border-gray-800 dark:bg-[#001121]">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-black dark:text-white">Recent Activities</h2>
                        <div className="flex rounded-md bg-gray-100 p-1 dark:bg-gray-700">
                            {/* SMS Tab Button */}
                            <button
                                className={`rounded-md px-4 py-2 text-sm font-medium ${
                                    activeTab === "message" ? "bg-blue-500 text-white shadow" : "text-gray-600 dark:text-gray-300"
                                }`}
                                onClick={() => setActiveTab("message")}
                            >
                                SMS
                            </button>
                            {/* Email Tab Button */}
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

                    {/* Activity List (based on selected tab) */}
                    <div className="max-h-96 space-y-4 overflow-y-auto pr-2">{activeTab === "message" ? messageActivities : emailActivities}</div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
