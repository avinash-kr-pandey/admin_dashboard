const BannerPage = () => {
    return (
        <div
            className={`fixed left-0 right-0 z-50 hidden h-[60px] items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm dark:bg-slate-900 md:flex`}
        >
            <div className="flex items-center space-x-1 font-sans text-lg">
                <span className="text-gray-500">CRM</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-500">Account</span>
                <span className="text-gray-500">/</span>
                <span className="font-semibold text-gray-900 dark:text-white">Account Details</span>
            </div>
        </div>
    );
};

export default BannerPage;
