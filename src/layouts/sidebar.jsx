import { forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { Mail, Phone, MessageSquare, Calendar, ChevronDown } from "lucide-react";

export const Sidebar = forwardRef(({ collapsed, setCollapsed, onProfileClick }, ref) => {
    const [phoneNumbers, setPhoneNumbers] = useState([{ country: "IN", number: "+91 91919 91919" }]);
    const [accountName, setAccountName] = useState("Avinsh Kumar pandey");
    const [email, setEmail] = useState("avinash.kumar@gmail.com");
    const contactOwners = ["suresh.sharma@hopingminds.com", "deepa.rani@gmail.com", "raj.kapoor@gmail.com"];

    const handleAddPhone = () => {
        setPhoneNumbers([...phoneNumbers, { country: "IN", number: "" }]);
    };

    const handleRemovePhone = (index) => {
        const updated = phoneNumbers.filter((_, i) => i !== index);
        setPhoneNumbers(updated);
    };

    const handleProfileClick = () => {
        if (onProfileClick) {
            onProfileClick();
        }
    };

    const handleOverlayClick = () => {
        if (setCollapsed) setCollapsed(true);
    };

    return (
        <>
            {/* Overlay backdrop for mobile when sidebar is open */}
            {!collapsed && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
                    onClick={handleOverlayClick}
                />
            )}

            <aside
                ref={ref}
                className={cn(
                    "fixed left-0 top-0 z-40 flex h-full flex-col overflow-x-hidden border-r transition-all duration-300 ease-in-out",
                    "pt-[110px]",
                    // On large screens: width 430px or 0 (collapsed)
                    collapsed ? "w-0" : "w-[430px]",
                    // On mobile (max-md), width full if open, or 0 if collapsed (with transform)
                    "max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-md:border-r max-md:border-[#F1F5F9] max-md:bg-[#F1F5F9] max-md:dark:border-slate-700 max-md:dark:bg-slate-900",
                    "max-md:transition-transform max-md:duration-300 max-md:ease-in-out",
                    collapsed ? "max-md:-translate-x-full" : "max-md:translate-x-0",
                )}
                style={{ paddingTop: `${60 + 60}px`, maxWidth: "100vw" }}
            >
                {!collapsed && (
                    <>
                        {/* Profile Box */}
                        <div className="rounded-xl p-4">
                            <div
                                className="flex cursor-pointer items-center justify-between rounded-xl bg-white p-4 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700"
                                onClick={handleProfileClick}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-center">
                                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                                            AK
                                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-slate-800"></span>
                                        </div>
                                        <button className="mt-1 rounded-full bg-purple-500 px-2 py-0.5 text-[10px] font-medium text-white">
                                            Edit
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">Avinash Kumar</span>
                                            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-700 dark:bg-orange-300/20 dark:text-orange-400">
                                                BUSINESS
                                            </span>
                                        </div>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">{email}</span>
                                    </div>
                                </div>
                                <button className="flex flex-row justify-start text-sm font-medium text-purple-700 dark:text-purple-400">
                                    Change Status
                                </button>
                            </div>
                        </div>

                        {/* Navigation Icons */}
                        <div className="mx-4 rounded-lg bg-white px-4 shadow-md dark:bg-slate-800">
                            <nav className="grid grid-cols-4 gap-4">
                                {[
                                    ["Email", Mail],
                                    ["Call", Phone],
                                    ["Message", MessageSquare],
                                    ["Calendar", Calendar],
                                ].map(([label, Icon], i) => (
                                    <div
                                        key={label}
                                        className={cn(
                                            "flex flex-col items-center justify-center gap-2 py-2",
                                            i < 3 && "border-r",
                                            "text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400",
                                        )}
                                    >
                                        <Icon size={20} />
                                        <span className="text-sm">{label}</span>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Business Details */}
                        <div className="border-b border-slate-200 p-4 dark:border-slate-700">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-[20px] font-semibold text-slate-700 dark:text-slate-200">Business Details</span>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="./save_2_.png"
                                        alt="Save Icon"
                                        className="h-5 w-5 cursor-pointer"
                                    />
                                    <button className="flex items-center gap-1 text-[14px] font-medium text-[#22C55E] hover:text-green-500">
                                        Save & Close
                                    </button>
                                </div>
                            </div>

                            {/* Editable Account Name */}
                            <div className="mb-3">
                                <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Account Name</label>
                                <input
                                    type="text"
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-slate-700 dark:bg-white dark:text-black"
                                />
                            </div>

                            {/* Editable Email */}
                            <div className="mb-3">
                                <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-slate-700 dark:bg-white dark:text-black"
                                />
                            </div>

                            {/* Phone Numbers */}
                            <div>
                                <label className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Phone Number
                                    <span
                                        onClick={handleAddPhone}
                                        className="cursor-pointer text-[32px] text-[#010D19] dark:text-white"
                                    >
                                        +
                                    </span>
                                </label>
                                {phoneNumbers.map((phone, index) => (
                                    <div
                                        key={index}
                                        className="mb-2 mt-4 flex items-center gap-2"
                                    >
                                        <div className="relative flex-shrink-0">
                                            <select
                                                value={phone.country}
                                                onChange={(e) => {
                                                    const updated = [...phoneNumbers];
                                                    updated[index].country = e.target.value;
                                                    setPhoneNumbers(updated);
                                                }}
                                                className="w-20 appearance-none rounded-md border border-slate-300 bg-white py-2 pl-6 pr-8 text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-slate-700 dark:bg-white dark:text-black"
                                            >
                                                <option value="IN">IN</option>
                                                <option value="US">US</option>
                                                <option value="UK">UK</option>
                                            </select>
                                            <ChevronDown
                                                size={16}
                                                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                                            />
                                            <img
                                                src={`https://flagcdn.com/w20/${phone.country.toLowerCase()}.png`}
                                                alt={`${phone.country} Flag`}
                                                className="absolute left-2 top-1/2 h-3 w-auto -translate-y-1/2"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={phone.number}
                                            onChange={(e) => {
                                                const updated = [...phoneNumbers];
                                                updated[index].number = e.target.value;
                                                setPhoneNumbers(updated);
                                            }}
                                            className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-slate-700 dark:bg-white dark:text-black"
                                            placeholder="Enter phone number"
                                        />
                                        <button
                                            onClick={() => handleRemovePhone(index)}
                                            className="rounded-full border border-red-600 px-3 py-2 text-xs font-medium text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Owner */}
                        <div className="p-4">
                            <label
                                htmlFor="contact-owner"
                                className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400"
                            >
                                Contact Owner
                            </label>
                            <div className="relative">
                                <select
                                    id="contact-owner"
                                    className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 pr-8 text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-slate-700 dark:bg-white dark:text-black"
                                >
                                    {contactOwners.map((owner) => (
                                        <option
                                            key={owner}
                                            value={owner}
                                        >
                                            {owner}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown
                                    size={16}
                                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                                />
                            </div>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
    onProfileClick: PropTypes.func,
};
