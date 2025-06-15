// import { Calendar } from "lucide-react";
import { useState } from "react";

const Persons = () => {
    // Sample data for the persons table with date field (YYYY-MM-DD format)
    const persons = [
        {
            name: "Luisa Winters",
            email: "luisa.winters@gmail.com",
            contact: "+91 98765 43210",
            role: "Designer",
            date: "2025-06-14",
        },
        {
            name: "Syed Dean",
            email: "syed.dean@gmail.com",
            contact: "+91 91234 56789",
            role: "Developer",
            date: "2025-06-13",
        },
        {
            name: "Hector Sheppard",
            email: "hector.sheppard@gmail.com",
            contact: "+91 99887 66554",
            role: "Manager",
            date: "2025-06-14",
        },
        {
            name: "Freya Perry",
            email: "freya.perry@yahoo.com",
            contact: "+91 78945 12367",
            role: "HR",
            date: "2025-06-12",
        },
        {
            name: "Ted Garza",
            email: "ted.garza@gmail.com",
            contact: "+91 87654 32109",
            role: "Engineer",
            date: "2025-06-14",
        },
        {
            name: "Preston Woods",
            email: "preston.woods@gmail.com",
            contact: "+91 98761 23456",
            role: "Intern",
            date: "2025-06-11",
        },
    ];

    const [selectedDate, setSelectedDate] = useState("");

    const filteredPersons = selectedDate ? persons.filter((p) => p.date === selectedDate) : persons;

    return (
        <div className="font-inter max-w-full overflow-hidden rounded-lg bg-white p-4 text-black shadow-md dark:border dark:border-gray-800 dark:bg-[#001121] sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-gray-800 dark:text-white">
                <div className="flex items-center gap-2">
                    {/* <Calendar className="h-5 w-5" /> */}
                    <h2 className="text-xl font-semibold">Persons</h2>
                </div>
                <div>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-800 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                </div>
            </div>

            {/* Table for larger screens */}
            <div className="hidden overflow-x-auto md:block">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            {["Name", "Email", "Contact", "Role", "Date"].map((header) => (
                                <th
                                    key={header}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-[#001121]">
                        {filteredPersons.map((person, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{person.name}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{person.email}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{person.contact}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{person.role}</td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{person.date}</td>
                            </tr>
                        ))}
                        {filteredPersons.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                                >
                                    No data found for the selected date.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Cards for smaller screens */}
            <div className="md:hidden">
                {filteredPersons.map((person, index) => (
                    <div
                        key={index}
                        className="mb-4 rounded-lg bg-gray-50 p-4 shadow dark:bg-gray-800"
                    >
                        <div className="mb-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Name: </span>
                            <span className="text-sm text-gray-800 dark:text-gray-100">{person.name}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Email: </span>
                            <span className="text-sm text-gray-800 dark:text-gray-100">{person.email}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Contact: </span>
                            <span className="text-sm text-gray-800 dark:text-gray-100">{person.contact}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Role: </span>
                            <span className="text-sm text-gray-800 dark:text-gray-100">{person.role}</span>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Date: </span>
                            <span className="text-sm text-gray-800 dark:text-gray-100">
                                {new Date(person.date).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                    </div>
                ))}
                {filteredPersons.length === 0 && (
                    <div className="rounded-lg bg-gray-100 p-4 text-center text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                        No data found for the selected date.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Persons;
