import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { ShoppingCart, Users, ListChecks, RotateCcw } from "lucide-react"; // Import necessary icons

// Card Component
const Card = ({ title, value, percentage, isPositive, icon }) => {
    // Determine text color based on isPositive prop for the percentage
    const percentageColorClass = isPositive ? "text-green-500" : "text-red-500";

    return (
        <div className="mx-2 my-2 flex h-[150px] w-[200px] flex-none flex-col overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600 sm:w-[220px] md:w-[240px] lg:w-[260px]">
            {/* Top section: Icon and Title */}
            <div className="flex flex-1 items-center bg-white px-4 py-3 dark:bg-gray-700 dark:text-white">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "linear-gradient(135deg, #A855F7 0%, #F97316 100%)" }}
                >
                    {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div className="ml-3 flex flex-col">
                    <div className="truncate text-sm font-semibold text-gray-500 dark:text-gray-300">{title}</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
                </div>
            </div>

            {/* Bottom section: Percentage and "From The Last Month" */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3 text-sm dark:bg-gray-800 dark:text-white">
                <span className={`${percentageColorClass} flex items-center font-semibold`}>
                    {isPositive ? (
                        <svg
                            className="mr-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="mr-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    )}
                    {percentage}
                </span>
                <span className="text-gray-500 dark:text-gray-400">From The Last Month</span>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    isPositive: PropTypes.bool.isRequired,
    icon: PropTypes.element.isRequired,
};

// Dashboard Component
const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const cardsRef = useRef(null);
    const cardRefs = useRef({});
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const cardData = [
        {
            id: 1,
            title: "Total Orders",
            value: "123",
            percentage: "28%",
            isPositive: true,
            icon: <ShoppingCart />, // Icon passed directly
        },
        {
            id: 2,
            title: "Total Taken",
            value: "123",
            percentage: "15%",
            isPositive: false,
            icon: <Users />,
        },
        {
            id: 3,
            title: "Total Revenue",
            value: "123",
            percentage: "28%",
            isPositive: false,
            icon: <ShoppingCart />, // Changed to ShoppingCart as LayoutDashboard was not clear what it represented in the context
        },
        {
            id: 4,
            title: "Pending Orders",
            value: "$1234.99",
            percentage: "26%",
            isPositive: false,
            icon: <ListChecks />,
        },
        {
            id: 5,
            title: "Pending Returns",
            value: "$1234.99",
            percentage: "28%",
            isPositive: false,
            icon: <RotateCcw />,
        },
        {
            id: 6,
            title: "New Contacts",
            value: "45",
            percentage: "10%",
            isPositive: true,
            icon: <Users />,
        },
        {
            id: 7,
            title: "Open Tasks",
            value: "15",
            percentage: "5%",
            isPositive: false,
            icon: <ListChecks />,
        },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        const match = cardData.find((card) => card.title.toLowerCase().includes(tab.toLowerCase()));
        if (match && cardRefs.current[match.id]) {
            cardRefs.current[match.id].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        }
    };

    const scrollCards = (direction) => {
        if (cardsRef.current) {
            // Get the actual width of the first card, including its margin
            const firstCardElement = cardsRef.current.children[0];
            if (firstCardElement) {
                const cardComputedStyle = window.getComputedStyle(firstCardElement);
                const cardWidth = firstCardElement.offsetWidth;
                const marginLeft = parseFloat(cardComputedStyle.marginLeft);
                const marginRight = parseFloat(cardComputedStyle.marginRight);
                const scrollAmount = cardWidth + marginLeft + marginRight;

                cardsRef.current.scrollBy({
                    left: direction === "left" ? -scrollAmount : scrollAmount,
                    behavior: "smooth",
                });
            }

            setTimeout(updateScrollButtonVisibility, 500); // Give time for scroll animation
        }
    };

    const updateScrollButtonVisibility = () => {
        if (cardsRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
            // A small tolerance for floating point errors
            const scrollTolerance = 2;
            setCanScrollLeft(scrollLeft > scrollTolerance);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - scrollTolerance);
        }
    };

    useEffect(() => {
        const currentRef = cardsRef.current;
        if (currentRef) {
            currentRef.addEventListener("scroll", updateScrollButtonVisibility);
            // Initial check for scroll button visibility
            updateScrollButtonVisibility();
        }
        window.addEventListener("resize", updateScrollButtonVisibility);

        return () => {
            if (currentRef) currentRef.removeEventListener("scroll", updateScrollButtonVisibility);
            window.removeEventListener("resize", updateScrollButtonVisibility);
        };
    }, []);

    return (
        <div className="font-inter rounded-lg bg-white p-8 md:mt-[9vh] text-black dark:border dark:border-gray-800 dark:bg-[#001121] sm:p-6 lg:p-8 mt-4" >
            <div className="dark: relative flex flex-wrap gap-2 overflow-x-auto whitespace-nowrap rounded-xl bg-[#F1F5F9] dark:bg-[#001121] sm:gap-4">
                {["Dashboard", "Orders", "Address", "Notes", "Tasks", "Contacts", "Credit History"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`z-10 px-4 text-sm font-medium transition-colors duration-200 ${
                            activeTab === tab
                                ? "relative rounded-t-xl border-none bg-white py-3 font-semibold text-gray-900 dark:bg-[#001121] dark:border dark:text-blue-500"
                                : "py-3 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="relative flex items-center justify-center py-4">
                {canScrollLeft && (
                    <button
                        onClick={() => scrollCards("left")}
                        className="absolute -left-1 z-10 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3A3E4E] dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                        <svg
                            className="h-6 w-6 text-gray-700 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                )}

                <div
                    ref={cardsRef}
                    className="no-scrollbar flex w-full items-center justify-start overflow-x-scroll px-2 py-4"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            ref={(el) => (cardRefs.current[card.id] = el)}
                        >
                            <Card {...card} />
                        </div>
                    ))}
                </div>

                {canScrollRight && (
                    <button
                        onClick={() => scrollCards("right")}
                        className="absolute -right-1 z-10 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3A3E4E] dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                        <svg
                            className="h-6 w-6 text-gray-700 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                )}
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default Dashboard;
