import { Calendar } from "lucide-react";

const RecentTransactions = () => {
    const allTransactions = [
        {
            id: "415368",
            quantity: 4,
            product: "White Denim Tshirt M Size",
            image: "https://placehold.co/30x30/d1d5db/000?text=P2",
            channel: "Walmart",
            channelLogo: "https://placehold.co/30x15/007bff/fff?text=Walmart",
            customerName: "Harris Santana",
            avatar: "https://placehold.co/30x30/fca5a5/fff?text=HS",
            total: "$151.00",
            deliveryDate: "Today",
        },
        {
            id: "275936",
            quantity: 1,
            product: "iPhone 15 pro max",
            image: "https://placehold.co/30x30/d1d5db/000?text=P1",
            channel: "eBay",
            channelLogo: "https://placehold.co/30x15/5e5e5e/fff?text=eBay",
            customerName: "Gabriella Golden",
            avatar: "https://placehold.co/30x30/bef264/000?text=GG",
            total: "$400.00",
            deliveryDate: "Today",
        },
        {
            id: "275063",
            quantity: 2,
            product: "David Beckham classic Blue Perfume",
            image: "https://placehold.co/30x30/d1d5db/000?text=P3",
            channel: "Facebook",
            channelLogo: "https://placehold.co/30x15/1877f2/fff?text=Facebook",
            customerName: "Lilia Ponce",
            avatar: "https://placehold.co/30x30/818cf8/fff?text=LP",
            total: "$167.00",
            deliveryDate: "Tomorrow",
        },
        {
            id: "274778",
            quantity: 3,
            product: "Samsung i-20 series smart watch",
            image: "https://placehold.co/30x30/d1d5db/000?text=P4",
            channel: "Amazon",
            channelLogo: "https://placehold.co/30x15/ff9900/fff?text=Amazon",
            customerName: "Rehan Chase",
            avatar: "https://placehold.co/30x30/f0abf2/000?text=RC",
            total: "$262.00",
            deliveryDate: "Tomorrow",
        },
        {
            id: "638032",
            quantity: 5,
            product: "Nykaa Red lipstick",
            image: "https://placehold.co/30x30/d1d5db/000?text=P5",
            channel: "Etsy",
            channelLogo: "https://placehold.co/30x15/f26418/fff?text=Etsy",
            customerName: "Maxim Bray",
            avatar: "https://placehold.co/30x30/a78bfa/fff?text=MB",
            total: "$319.00",
            deliveryDate: "05/01/2023",
        },
    ];

    return (
        <div className="font-inter mt-4 rounded-lg bg-white p-4 text-black dark:border dark:border-gray-800 dark:bg-[#001121] sm:p-6 lg:p-8">
            <div className="rounded-lg p-5 text-black dark:border dark:border-gray-800 dark:bg-[#001121]">
                <div className="mb-4 flex items-center justify-between p-4 text-black dark:border dark:border-gray-800 dark:bg-[#001121]">
                    <h2 className="text-xl font-semibold text-black dark:text-white">Recent Orders</h2>
                    <Calendar className="cursor-pointer" />
                </div>

                <div className="w-full border-b"></div>

                {/* Responsive wrapper for horizontal scroll */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-white dark:bg-[#0b2239]">
                            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                <th className="whitespace-nowrap px-4 py-3">Order ID</th>
                                <th className="whitespace-nowrap px-4 py-3">Products</th>
                                <th className="whitespace-nowrap px-4 py-3">Channel</th>
                                <th className="whitespace-nowrap px-4 py-3">Customer</th>
                                <th className="whitespace-nowrap px-4 py-3">Total</th>
                                <th className="whitespace-nowrap px-4 py-3">Delivery Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {allTransactions.map((tx) => (
                                <tr
                                    key={tx.id}
                                    className="text-sm text-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-[#112132]"
                                >
                                    <td className="whitespace-nowrap px-4 py-3 font-medium">{tx.id}</td>
                                    <td className="flex max-w-xs items-center whitespace-normal px-4 py-3">
                                        <span className="mr-2 text-xs text-gray-500 dark:text-gray-400">x{tx.quantity}</span>
                                        <img
                                            src={tx.image}
                                            alt=""
                                            className="mr-2 h-6 w-6 rounded-full"
                                        />
                                        <span className="truncate">{tx.product}</span>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3">
                                        <span className="inline-flex items-center space-x-1 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-600 dark:text-white">
                                            <img
                                                src={tx.channelLogo}
                                                alt={tx.channel}
                                                className="h-4"
                                            />
                                            <span>{tx.channel}</span>
                                        </span>
                                    </td>
                                    <td className="flex items-center whitespace-nowrap px-4 py-3">
                                        <img
                                            src={tx.avatar}
                                            alt={tx.customerName}
                                            className="mr-2 h-6 w-6 rounded-full"
                                        />
                                        <span>{tx.customerName}</span>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-3">{tx.total}</td>
                                    <td className="whitespace-nowrap px-4 py-3">{tx.deliveryDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 cursor-pointer text-center text-sm text-purple-600 hover:underline dark:text-purple-400">
                    View 256 more orders
                </div>
            </div>
        </div>
    );
};

export default RecentTransactions;
