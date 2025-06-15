// import { useTheme } from "@/hooks/use-theme";
import { Footer } from "@/layouts/footer";
import Dashboard from "../../pages/dashboard";
import Graph from "../../pages/graph";
import Chart from "../../pages/chart";
import RecentOrders from "../../pages/RecentOrders"

const DashboardPage = () => {
    // const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4 bg-white dark:bg-slate-950">
            <Dashboard />
            <Chart />
            <RecentOrders />
            <Graph />
            <Footer />
        </div>
    );
};

export default DashboardPage;
