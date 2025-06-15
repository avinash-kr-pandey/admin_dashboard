import { useTheme } from "@/hooks/use-theme";
import { Bell, Search, Sun, Moon, ChevronDown, LogOut, User, Info, CheckCircle, AlertTriangle } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export const Header = ({ collapsed, setCollapsed, fixed = true }) => {
    const { theme, setTheme } = useTheme();
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const profileRef = useRef();
    const notificationRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setShowProfileDropdown(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(e.target)) {
                setShowNotificationDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <header
                className={`${
                    fixed ? "fixed left-0 right-0 top-0 z-50" : ""
                } flex h-[60px] items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm dark:bg-slate-900`}
            >
                {/* Left */}
                <div className="flex items-center gap-4">
                    {!collapsed && (
                        <>
                            <div className="hidden items-center gap-2 sm:flex">
                                <img
                                    src="./logo/Logomark.png"
                                    alt="logo"
                                    className="h-6 w-6"
                                />
                                <span className="cursor-pointer text-[24px] font-bold text-[#010D19] dark:text-white">Quotient</span>
                            </div>
                            <button
                                className="ml-12 hidden rounded-full border-2 p-2 text-slate-600 dark:text-white sm:inline-flex"
                                onClick={() => setCollapsed(true)}
                            >
                                <img
                                    src="./logo/drawer.png"
                                    alt="drawer"
                                    className="h-6 w-auto dark:invert"
                                />
                            </button>
                        </>
                    )}
                </div>

                {/* Center */}
                <div className={`flex flex-1 ${collapsed ? "ml-12 justify-start" : "justify-center"}`}>
                    <div className={`relative w-full ${collapsed ? "max-w-[700px]" : "max-w-[500px]"}`}>
                        <Search
                            className="absolute left-3 top-2.5 text-slate-400"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full rounded-md border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    {/* Theme toggle */}
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="text-slate-600 dark:text-white"
                    >
                        <Sun
                            className="dark:hidden"
                            size={20}
                        />
                        <Moon
                            className="hidden dark:block"
                            size={20}
                        />
                    </button>

                    {/* Notification */}
                    <div
                        className="relative"
                        ref={notificationRef}
                    >
                        <button
                            className="text-slate-600 dark:text-white"
                            onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
                        >
                            <Bell size={20} />
                        </button>

                        {showNotificationDropdown && (
                            <div className="absolute right-0 z-[9999] mt-2 w-64 rounded-md bg-white shadow-lg dark:bg-slate-800">
                                <div className="border-b p-3 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:text-white">
                                    Notifications
                                </div>
                                <ul className="max-h-64 overflow-y-auto text-sm">
                                    <li className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-700">
                                        <Info
                                            size={16}
                                            className="text-blue-500"
                                        />{" "}
                                        New update available.
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-700">
                                        <CheckCircle
                                            size={16}
                                            className="text-green-500"
                                        />{" "}
                                        Your session was successful.
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-700">
                                        <AlertTriangle
                                            size={16}
                                            className="text-yellow-500"
                                        />{" "}
                                        Password will expire soon.
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Profile */}
                    <div
                        className="relative"
                        ref={profileRef}
                    >
                        <div
                            className="flex cursor-pointer items-center gap-2"
                            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
                                AK
                            </div>
                            <div className="hidden text-right leading-tight sm:block">
                                <div className="text-sm font-medium text-slate-900 dark:text-white">Avinash</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Super Admin</div>
                            </div>
                            <ChevronDown
                                size={16}
                                className="text-slate-500 dark:text-slate-400"
                            />
                        </div>

                        {showProfileDropdown && (
                            <div className="z-60 absolute right-0 z-[9999] mt-2 w-44 rounded-md bg-white shadow-lg dark:bg-slate-800">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <button
                                            className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                                            onClick={() => {
                                                setShowProfileDropdown(false);
                                                setShowProfileModal(true);
                                            }}
                                        >
                                            <User size={16} /> View Profile
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                                            onClick={() => {
                                                setShowProfileDropdown(false);
                                                setShowLogoutModal(true);
                                            }}
                                        >
                                            <LogOut size={16} /> Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar toggle button (when collapsed) */}
                {collapsed && (
                    <button
                        onClick={() => setCollapsed(false)}
                        className="absolute left-4 top-1/2 z-[60] -translate-y-1/2 rounded-md px-3 py-2 transition dark:text-white dark:hover:bg-slate-600"
                    >
                        <span className="text-xl font-bold">☰</span>
                    </button>
                )}
            </header>

            {/* Spacer */}
            {fixed && <div className="h-[60px]" />}

            {/* Profile Modal */}
            {showProfileModal && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="w-[420px] rounded-lg bg-white p-6 shadow-2xl dark:bg-slate-900">
                        {/* Header */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://l450v.alamy.com/450v/2a71238/developer-concept-with-random-parts-of-program-code-developer-with-programming-code-abstract-technology-background-of-software-developer-and-computer-2a71238.jpg"
                                alt="Profile"
                                className="mb-4 h-24 w-24 rounded-full border-4 border-purple-600 object-cover shadow-md"
                            />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Avinash Pandey</h2>
                            <p className="mb-3 text-sm font-semibold text-purple-600">Super Admin</p>
                        </div>

                        {/* About Me */}
                        <div className="mb-5 px-4 text-center text-gray-700 dark:text-gray-300">
                            <p>Passionate about technology and software development. Loves crafting beautiful UI and seamless UX.</p>
                        </div>

                        {/* Details List */}
                        <ul className="mb-6 space-y-3 text-gray-800 dark:text-gray-300">
                            <li className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 7a4 4 0 01-8 0"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span>Email: avinash@example.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10h18"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 14h18"
                                    />
                                </svg>
                                <span>Contact: +91 91919 91919</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Status: Active</span>
                            </li>
                        </ul>

                        {/* Close Button */}
                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowProfileModal(false)}
                                className="rounded bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Logout Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50">
                    <div className="w-[320px] rounded-lg bg-white p-6 text-center shadow-lg dark:bg-slate-800">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Logout Confirmation</h2>
                        <p className="mb-6 text-gray-700 dark:text-gray-300">Are you sure you want to log out?</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100 dark:border-slate-600 dark:hover:bg-slate-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowLogoutModal(false);
                                    // Add your logout logic here
                                    console.log("Logging out...");
                                }}
                                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

Header.propTypes = {
    setCollapsed: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired,
    fixed: PropTypes.bool,
};
