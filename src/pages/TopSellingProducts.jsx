import { useState } from "react";

const TopSellingProducts = () => {
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // default: today
    });

    const formatDate = (dateString) => {
        const options = { day: "numeric", month: "long", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-IN", options);
    };

    const products = [
        {
            name: "iPhone 15 pro max",
            sells: 156,
            category: "Mobile",
            price: "₹40,000",
            totalRevenue: "₹62,40,000",
        },
        {
            name: "White Denim Tshirt M Size",
            sells: 139,
            category: "Cloths",
            price: "₹1,500",
            totalRevenue: "₹2,08,500",
        },
        {
            name: "David Beckham classic Blue Perfume",
            sells: 125,
            category: "Perfume",
            price: "₹1,600",
            totalRevenue: "₹2,00,000",
        },
        {
            name: "Samsung Galaxy Watch 5 Pro",
            sells: 167,
            category: "Watch",
            price: "₹26,000",
            totalRevenue: "₹43,42,000",
        },
        {
            name: "Nykaa Red lipstick",
            sells: 110,
            category: "Beauty",
            price: "₹3,100",
            totalRevenue: "₹3,41,000",
        },
        {
            name: "OnePlus 11 Pro",
            sells: 168,
            category: "Mobile",
            price: "₹20,000",
            totalRevenue: "₹33,60,000",
        },
        {
            name: "Black Leather Wallet",
            sells: 165,
            category: "Accessories",
            price: "₹2,500",
            totalRevenue: "₹4,12,500",
        },
    ];

    return (
        <div className="font-inter max-w-full overflow-hidden rounded-lg bg-white p-4 text-black shadow-md dark:border dark:border-gray-800 dark:bg-[#001121] sm:p-6 lg:p-8">
            {/* Header with calendar icon and date picker */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-gray-800 dark:text-white">
                <h2 className="text-xl font-semibold">Top Selling Products</h2>
                <div className="flex items-center gap-2">
                    {/* <Calendar className="h-5 w-5" /> */}
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            {["PRODUCTS", "SELLS", "CATEGORY", "PRICE", "TOTAL REVENUE"].map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-[#001121]">
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">{product.name}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{product.sells}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{product.category}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{product.price}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{product.totalRevenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Formatted date */}
            <div className="mt-4 text-right text-sm text-gray-500 dark:text-gray-400">{formatDate(selectedDate)}</div>
        </div>
    );
};

export default TopSellingProducts;
