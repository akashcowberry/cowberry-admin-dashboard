import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";

import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import MapComponent from "../../components/Maps/MapComponent";
import EmployeeChart from "../../components/ecommerce/EmployeeChart";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Field Employee Location Tracker & Task Management System"
        description="To build a mobile-based location tracker app for field employees and a web-based dashboard for HR/Admin and reporting managers to monitor attendance, task completion, and real-time location tracking."
      />
      <div className="grid gap-12 md:gap-2">
        <div className="col-span-3 sapce-x-4 xl:col-span-12">
          <EcommerceMetrics />
          
             <MonthlySalesChart />
        
        </div>
        
          
        <div className="grid col-span-12 xl:col-span-4">
          <MonthlyTarget />
         
          <EmployeeChart/>
        </div>

        <div className="col-span-12">
        
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>

        <div className="col-span-12">
          <MapComponent />
        </div>
      </div>
    </>
  );
}
