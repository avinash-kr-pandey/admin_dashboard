import { Mail, Phone, MessageSquare, Calendar, Plus, RefreshCcw } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";

const ProfileDetails = () => {
    const [phoneNumbers, setPhoneNumbers] = useState(["+91 98765 43210", "+91 91234 56789"]);
    const [emails, setEmails] = useState(["avinash.pandey@example.com", "avinash.admin@company.in"]);
    const [credits, setCredits] = useState(["₹ 50,000", "₹ 80,671"]);
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [showCreditInput, setShowCreditInput] = useState(false);
    const [newPhone, setNewPhone] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newCredit, setNewCredit] = useState("");

    const addPhone = () => {
        if (newPhone.trim()) {
            setPhoneNumbers([...phoneNumbers, newPhone.trim()]);
            setNewPhone("");
            setShowPhoneInput(false);
        }
    };

    const addCredit = () => {
        if (newCredit.trim()) {
            setCredits([...credits, newCredit.trim()]);
            setNewCredit("");
            setShowCreditInput(false);
        }
    };

    const addEmail = () => {
        if (newEmail.trim()) {
            setEmails([...emails, newEmail.trim()]);
            setNewEmail("");
            setShowEmailInput(false);
        }
    };

    const refreshAvailableCredit = () => {
        console.log("Available Credit refreshed");
        // Add your refresh logic here
    };

    const plusBtnClass = "text-purple-700 hover:text-purple-900 font-bold text-xl flex items-center justify-center";

    return (
        <div className="font-inter mt-[4vh] md:mt-[11vh] max-w-full overflow-hidden rounded-lg text-black dark:bg-[#001121] dark:text-white pt-8">
            {/* Header section */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Left Block */}
                <div className="flex w-full items-center gap-4 rounded-lg bg-white p-5 shadow-sm dark:bg-gray-900 md:w-1/2">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white">
                        AP
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-gray-900"></span>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-black dark:text-white">
                            Avinash Pandey
                            <span className="ml-2 rounded bg-yellow-100 px-2 py-0.5 align-middle text-xs font-semibold text-yellow-800 dark:bg-yellow-300 dark:text-yellow-900">
                                BUSINESS
                            </span>
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">avinash.admin@company.in</p>
                    </div>
                    <button className="ml-auto text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">Change Status</button>
                </div>

                {/* Right Block */}
                <div className="w-full rounded-lg bg-white p-4 dark:bg-slate-900 md:w-1/2">
                    <nav className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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
                                    i < 3 && "sm:border-r",
                                    "text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400",
                                )}
                            >
                                <Icon size={20} />
                                <span className="text-sm">{label}</span>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Details Section */}
            <div className="mt-8 rounded-md bg-white px-4 pb-6 pt-4 text-sm dark:bg-gray-900 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Row 1 */}
                    <div>
                        <div>Account Name</div>
                        <div>
                            <p className="font-medium">Avinash Pandey</p>
                        </div>
                    </div>

                    <div>
                        <div>Contact Owner</div>
                        <div>
                            <p className="font-medium">avinash.pandey@company.in</p>
                        </div>
                    </div>

                    {/* HR after 2 items */}
                    <hr className="col-span-2 my-4 w-full border-gray-300 dark:border-gray-700" />

                    {/* Row 2 */}
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="mb-1 text-xs uppercase text-gray-500 dark:text-gray-400">Phone Number</span>
                            <button
                                onClick={() => setShowPhoneInput(true)}
                                className={plusBtnClass}
                            >
                                <Plus size={22} />
                            </button>
                        </div>
                        <div>
                            {phoneNumbers.map((phone, idx) => (
                                <p
                                    key={idx}
                                    className="font-medium"
                                >
                                    {phone}
                                </p>
                            ))}
                            {showPhoneInput && (
                                <div className="mt-1 flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={newPhone}
                                        onChange={(e) => setNewPhone(e.target.value)}
                                        placeholder="Enter phone number"
                                        className="w-full rounded border border-gray-300 px-2 py-1 dark:border-gray-700 dark:bg-gray-800"
                                    />
                                    <button
                                        onClick={addPhone}
                                        className="rounded bg-green-600 px-2 py-1 text-xs text-white hover:bg-green-500"
                                    >
                                        OK
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <span className="mb-1 text-xs uppercase text-gray-500 dark:text-gray-400">Email</span>
                            <button
                                onClick={() => setShowEmailInput(true)}
                                className={plusBtnClass}
                            >
                                <Plus size={22} />
                            </button>
                        </div>
                        <div>
                            {emails.map((email, idx) => (
                                <p
                                    key={idx}
                                    className="font-medium"
                                >
                                    {email}
                                </p>
                            ))}
                            {showEmailInput && (
                                <div className="mt-1 flex items-center gap-2">
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        placeholder="Enter email"
                                        className="w-full rounded border border-gray-300 px-2 py-1 dark:border-gray-700 dark:bg-gray-800"
                                    />
                                    <button
                                        onClick={addEmail}
                                        className="rounded bg-green-600 px-2 py-1 text-xs text-white hover:bg-green-500"
                                    >
                                        OK
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* HR after 4 items */}
                    <hr className="col-span-2 my-4 w-full border-gray-300 dark:border-gray-700" />

                    {/* Row 3 */}
                    <div>
                        <div>Company Type</div>
                        <div>
                            <p className="font-medium">Partner</p>
                        </div>
                    </div>

                    <div>
                        <div>Industry</div>
                        <div>
                            <p className="font-medium">Accounting</p>
                        </div>
                    </div>

                    {/* HR after 6 items */}
                    <hr className="col-span-2 my-4 w-full border-gray-300 dark:border-gray-700" />

                    {/* Row 4 */}
                    <div>
                        <div>Website</div>
                        <div>
                            <p className="font-medium">www.avinashpandey.in</p>
                        </div>
                    </div>

                    <div>
                        <div>No of Employees</div>
                        <div>
                            <p className="font-medium">10</p>
                        </div>
                    </div>

                    {/* HR after 8 items */}
                    <hr className="col-span-2 my-4 w-full border-gray-300 dark:border-gray-700" />

                    {/* Row 5 */}
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="mb-1 text-xs uppercase text-gray-500 dark:text-gray-400">Credit Limit</span>
                            <button
                                onClick={() => setShowCreditInput(true)}
                                className={plusBtnClass}
                            >
                                <Plus size={22} />
                            </button>
                        </div>
                        <div>
                            {credits.map((credit, idx) => (
                                <p
                                    key={idx}
                                    className="font-medium"
                                >
                                    {credit}
                                </p>
                            ))}
                            {showCreditInput && (
                                <div className="mt-1 flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={newCredit}
                                        onChange={(e) => setNewCredit(e.target.value)}
                                        placeholder="Enter Credit Limit"
                                        className="w-full rounded border border-gray-300 px-2 py-1 dark:border-gray-700 dark:bg-gray-800"
                                    />
                                    <button
                                        onClick={addCredit}
                                        className="rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600"
                                    >
                                        OK
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <span className="mb-1 text-xs uppercase text-gray-500 dark:text-gray-400">Available Credit</span>
                            <button
                                onClick={refreshAvailableCredit}
                                className="text-gray-600 hover:text-black dark:hover:text-white"
                                title="Refresh Available Credit"
                            >
                                <RefreshCcw size={16} />
                            </button>
                        </div>
                        <div>
                            <p className="font-medium">₹ 80,671</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
