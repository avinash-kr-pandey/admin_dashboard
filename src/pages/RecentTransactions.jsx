import { useState } from "react";

const channelImages = {
    amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    flipkart: "https://upload.wikimedia.org/wikipedia/commons/1/13/Flipkart_logo.png",
    myntra: "https://upload.wikimedia.org/wikipedia/commons/7/76/Myntra_Logo.png",
    ebay: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    walmart: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    facebook: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg",
    etsy: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Etsy_logo.svg",
};

const RecentTransactions = () => {
    const allTransactions = [
        { id: "#123-456-7890", product: "iPhone 15 pro max", channel: "ebay", customer: "Gabriella...", total: "₹400.00" },
        { id: "#123-456-7891", product: "White Denim Tshirt M Size", channel: "walmart", customer: "Harris Sa...", total: "₹151.00" },
        { id: "#123-456-7892", product: "David Beckham classic Blue Perfume", channel: "facebook", customer: "Lilia Ponce", total: "₹167.00" },
        { id: "#123-456-7893", product: "Samsung i-20 series smart watch", channel: "amazon", customer: "Rehan Ch...", total: "₹262.00" },
        { id: "#123-456-7894", product: "Nykaa Red lipstick", channel: "etsy", customer: "Maxim Br...", total: "₹319.00" },
        { id: "#123-456-7895", product: "OnePlus 11 Pro", channel: "amazon", customer: "Arjun Reddy", total: "₹61,999" },
        { id: "#123-456-7896", product: "Nike Air Max Shoes", channel: "myntra", customer: "Sanya Malhotra", total: "₹8,495" },
        { id: "#123-456-7897", product: "Boat Airdopes 441", channel: "flipkart", customer: "Karan Mehta", total: "₹1,299" },
        { id: "#123-456-7898", product: "Levi's Jeans", channel: "myntra", customer: "Ishaan Sharma", total: "₹2,799" },
        { id: "#123-456-7899", product: "Apple AirPods Pro", channel: "amazon", customer: "Divya Nair", total: "₹24,990" },
    ];

    const [visibleTransactions, setVisibleTransactions] = useState(5);

    const loadMoreTransactions = () => setVisibleTransactions((prev) => prev + 5);
    const showLessTransactions = () => setVisibleTransactions(5);

    return (
        <div className="font-inter max-w-full overflow-hidden rounded-lg bg-white p-4 text-black shadow-md dark:border dark:border-gray-800 dark:bg-[#001121] sm:p-6 lg:p-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">Recent Transactions</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                TRANSACTION ID
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                PRODUCTS
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                CHANNEL
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                CUSTOMER
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                TOTAL
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-[#001121]">
                        {allTransactions.slice(0, visibleTransactions).map((transaction, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">{transaction.id}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{transaction.product}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                    <img
                                        src={channelImages[transaction.channel]}
                                        alt={transaction.channel}
                                        className="h-6 w-auto"
                                    />
                                </td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{transaction.customer}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{transaction.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-center gap-4">
                {visibleTransactions < allTransactions.length && (
                    <button
                        onClick={loadMoreTransactions}
                        className="rounded-full border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-700 dark:hover:text-purple-300"
                    >
                        View {allTransactions.length - visibleTransactions} more transactions 😊
                    </button>
                )}
                {visibleTransactions > 5 && (
                    <button
                        onClick={showLessTransactions}
                        className="rounded-full border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-800 dark:border-red-400 dark:text-red-400 dark:hover:bg-gray-700 dark:hover:text-red-300"
                    >
                        View Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default RecentTransactions;
