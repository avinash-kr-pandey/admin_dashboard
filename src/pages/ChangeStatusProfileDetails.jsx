// src/components/ChangeStatusProfileDetails.jsx

import PropTypes from "prop-types";
import Dashboard from "./dashboard";
// import Chart from "./chart";
import { Table } from "lucide-react";
import Graph from "./graph";
import { Footer } from "@/layouts/footer";
import ProfileDetails from "./profile";
import RecentTransactions from "./RecentOrders";
import TopSellingProducts from "./TopSellingProducts";
// import RecentOrders from "./RecentOrders";
import Persons from "./Persons";
import ChartSecond from "./chart2";
const ChangeStatusProfileDetails = () => {
    return (
        <>
            <ProfileDetails />
            <Dashboard />
            {/* <Chart /> */}
            <ChartSecond />
            {/* <RecentOrders /> */}
            <RecentTransactions />
            <TopSellingProducts />
            <Table />
            <Graph />
            <Persons />
            <Footer />
        </>
    );
};

ChangeStatusProfileDetails.propTypes = {
    onBack: PropTypes.func.isRequired,
};

export default ChangeStatusProfileDetails;
