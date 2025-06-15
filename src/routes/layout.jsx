import { useMediaQuery } from "@uidotdev/usehooks";
import { useClickOutside } from "@/hooks/use-click-outside";

import { Sidebar } from "@/layouts/sidebar";
import { Header } from "@/layouts/header";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import ChangeStatusProfileDetails from "../pages/ChangeStatusProfileDetails";
import DashboardPage from "./dashboard/page";
import BannerPage from "../contexts/banner";

const Layout = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(!isDesktopDevice);
    const [isChangeStatusActive, setIsChangeStatusActive] = useState(false);

    const sidebarRef = useRef(null);

    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    useClickOutside([sidebarRef], () => {
        if (!isDesktopDevice && !collapsed) {
            setCollapsed(true);
        }
    });

    const HEADER_HEIGHT = 60;
    const BANNER_HEIGHT = 60;
    const TOP_OFFSET = HEADER_HEIGHT + BANNER_HEIGHT;

    const handleChangeStatusClick = () => {
        setCollapsed(true);
        setIsChangeStatusActive(true);
    };

    const handleBackToDashboard = () => {
        setIsChangeStatusActive(false);
        setCollapsed(false);
    };

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            <div
                className={cn(
                    "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
                    !collapsed && "max-md:pointer-events-auto",
                )}
            />

            <div className="fixed left-0 right-0 top-0 z-[9999]">
                <Header
                    setCollapsed={setCollapsed}
                    collapsed={collapsed}
                />
            </div>

            {/* BannerPage wrapper with z-50 */}
            <div className="fixed left-0 right-0 top-[60px] z-50">
                <BannerPage setCollapsed={setCollapsed} />
            </div>

            <Sidebar
                ref={sidebarRef}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                onProfileClick={handleChangeStatusClick}
            />

            <div
                className={cn(
                    "overflow-visible transition-[margin-left] duration-300",
                    collapsed ? "md:ml-[0px]" : "md:ml-[430px]",
                    `pt-[${TOP_OFFSET}px]`,
                )}
            >
                {/* Content Area */}
                <div className={`h-[calc(100vh-${TOP_OFFSET}px)] overflow-y-auto overflow-x-hidden p-6`}>
                    {isChangeStatusActive ? <ChangeStatusProfileDetails onBack={handleBackToDashboard} /> : <DashboardPage />}
                </div>
            </div>
        </div>
    );
};

export default Layout;
