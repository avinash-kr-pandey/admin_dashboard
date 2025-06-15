import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell } from "recharts";
import { ChevronDown, CalendarDays } from "lucide-react";

const mockData = {
    Revenue: [
        { name: "Jan", revenue: 589.12, category: "A", month: "Jan" },
        { name: "Feb", revenue: 840.2, category: "B", month: "Feb" },
        { name: "Mar", revenue: 688.0, category: "A", month: "Mar" },
        { name: "Apr", revenue: 203.0, category: "A", month: "Apr" },
        { name: "May", revenue: 400.01, category: "B", month: "May" },
        { name: "Jun", revenue: 920.12, category: "A", month: "Jun" },
        { name: "Jul", revenue: 398.0, category: "B", month: "Jul" },
        { name: "Aug", revenue: 682.0, category: "A", month: "Aug" },
        { name: "Sep", revenue: 390.0, category: "B", month: "Sep" },
        { name: "Oct", revenue: 810.0, category: "A", month: "Oct" },
        { name: "Nov", revenue: 410.12, category: "B", month: "Nov" },
        { name: "Dec", revenue: 840.2, category: "A", month: "Dec" },
    ],
    Orders: [
        { name: "Jan", revenue: 120, category: "A", month: "Jan" },
        { name: "Feb", revenue: 140, category: "B", month: "Feb" },
    ],
    Customers: [
        { name: "Jan", revenue: 90, category: "A", month: "Jan" },
        { name: "Feb", revenue: 130, category: "B", month: "Feb" },
    ],
};

const Graph = () => {
    const [activeTab, setActiveTab] = useState("Revenue");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedMonth, setSelectedMonth] = useState("Jun 2023");
    const [filteredData, setFilteredData] = useState([]);
    const [animatedCount, setAnimatedCount] = useState(0);

    useEffect(() => {
        let data = mockData[activeTab];

        if (selectedCategory !== "All") {
            data = data.filter((item) => item.category === selectedCategory);
        }

        setFilteredData(data);
    }, [activeTab, selectedCategory, selectedMonth]);

    // Animate bars one by one when filteredData changes
    useEffect(() => {
        setAnimatedCount(0);
        if (filteredData.length === 0) return;

        const interval = setInterval(() => {
            setAnimatedCount((count) => {
                if (count < filteredData.length) return count + 1;
                clearInterval(interval);
                return count;
            });
        }, 150); // delay between bars in ms

        return () => clearInterval(interval);
    }, [filteredData]);

    const totalRevenue = filteredData.reduce((acc, cur) => acc + cur.revenue, 0).toFixed(2);

    const tabs = ["Revenue", "Orders", "Customers"];
    const dateOptions = ["Jun 2023", "May 2023", "Apr 2023", "Mar 2023"];

    return (
        <div className="font-inter flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-[#0f172a] sm:p-6 lg:p-8">
            <div className="w-full max-w-full rounded-xl bg-white p-4 shadow-lg dark:bg-[#1f2937] dark:shadow-none sm:max-w-4xl sm:p-6 md:max-w-5xl md:p-8 lg:max-w-6xl">
                {/* Top Section */}
                <div className="mb-6 flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                    {/* Tabs */}
                    <div className="flex flex-wrap rounded-lg bg-gray-100 p-1 text-sm font-medium text-gray-600 dark:bg-[#334155] dark:text-gray-300">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap px-4 py-2 transition duration-200 ${
                                    activeTab === tab
                                        ? "rounded-md bg-white text-indigo-600 shadow-sm dark:bg-[#1e293b]"
                                        : "hover:text-gray-900 dark:hover:text-white"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Dropdowns */}
                    <div className="flex w-full flex-col space-y-2 text-sm sm:w-auto sm:flex-row sm:space-x-4 sm:space-y-0">
                        {/* Category Dropdown */}
                        <div className="relative w-full sm:w-auto">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#1e293b] dark:text-gray-200 sm:w-auto"
                            >
                                <option value="All">All Categories</option>
                                <option value="A">Category A</option>
                                <option value="B">Category B</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 dark:text-gray-200">
                                <ChevronDown className="h-4 w-4" />
                            </div>
                        </div>

                        {/* Month Dropdown */}
                        <div className="relative w-full sm:w-auto">
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#1e293b] dark:text-gray-200 sm:w-auto"
                            >
                                {dateOptions.map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 dark:text-gray-200">
                                <CalendarDays className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="mb-6 flex flex-col items-start justify-between space-y-2 md:flex-row md:items-baseline md:space-y-0">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">{activeTab}</h2>
                    <div className="text-base text-gray-700 dark:text-gray-300 sm:text-lg">
                        Total Revenue: <span className="font-extrabold text-gray-900 dark:text-white">${totalRevenue}</span>
                    </div>
                </div>

                {/* Chart */}
                <div className="h-64 w-full sm:h-80 md:h-96 lg:h-[450px]">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <BarChart
                            data={filteredData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#e0e0e0"
                            />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#9ca3af" }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#9ca3af" }}
                            />
                            {/* No Tooltip as per your previous request */}

                            <Bar
                                dataKey="revenue"
                                fill="#6a5acd"
                                barSize={50}
                                isAnimationActive={true}
                                animationDuration={400}
                            >
                                <LabelList
                                    dataKey="revenue"
                                    position="top"
                                    formatter={(value) => parseFloat(value).toFixed(2)}
                                    fill="#111827"
                                    style={{ fontSize: "12px" }}
                                />
                                {filteredData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill="#6a5acd"
                                        opacity={index < animatedCount ? 1 : 0}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    <span>&bull; 2023</span>
                </div>
            </div>
        </div>
    );
};

export default Graph;
