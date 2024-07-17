import Navbar from "@/components/mycomponents/Navbar";
import React from "react";
import { BellRing, Check, Bed, Users, Wallet, Ambulance } from "lucide-react";
import { CardDemo } from "@/components/mycomponents/Card";
import { Bar,Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex p-2 w-full gap-5 flex-wrap items-center justify-center">
        <CardDemo description="Total Patient" title="3,275">
          <Bed
            size={80}
            color="purple"
            className="p-5 bg-purple-100 rounded-full"
          />
        </CardDemo>
        <CardDemo description="Available Staff" title="394">
          <Users
            size={80}
            color="blue"
            className="p-5 bg-blue-200 rounded-full"
          />
        </CardDemo>
        <CardDemo description="Avg. Treat Costs" title="$2,536">
          <Wallet
            size={80}
            color="yellow"
            className="p-5 bg-yellow-50 rounded-full"
          />
        </CardDemo>
        <CardDemo description="Available Cars" title="38">
          <Ambulance
            size={80}
            color="red"
            className="p-5 bg-red-100 rounded-full"
          />
        </CardDemo>
      </div>

      {/* Charts */}

      <div className="main-charts w-full flex-wrap  flex items-center space-y-4 justify-around ">
        <div className="chart-one bg-white max-w-[500px] h-60 rounded-md shadow-md p-10">
          <Bar
            data={{
              labels: ["oct 2019", "nov 2019", "dec 2019", "jan 2020"],
              datasets: [
                {
                  label: "inpatient",
                  data: [400, 1600, 500, 800],
                  backgroundColor: 'rgb(74, 36, 157)',
                  borderColor: 'rgb(74, 36, 157)',
                  borderRadius:5,
                  
                  barThickness:10
                  
                  
                },
                { 
                  label: "outpatient",
                  data: [1200, 900, 300, 1500],
                  backgroundColor: 'rgb(55, 151, 119)',
                  borderColor: 'rgba(153, 102, 255, 1)',
                  barThickness:10,
                  borderRadius:5
                },
              ],
            }}
          />
        </div>
        <div className="chart-one bg-white max-w-[500px] h-60 rounded-md shadow-md p-10 space-y-3">
          <Doughnut
          className="flex justify-center space-y-2"
            data={{
              labels: ["oct 2019", "nov 2019", "dec 2019", "jan 2020"],
              datasets: [
                {
                  label: "inpatient",
                  data: [400, 1600, 500, 800],
                  backgroundColor: 'rgb(74, 36, 157)',
                  borderColor: 'rgb(74, 36, 157)',
                
                  barThickness:1
                  
                  
                },
                { 
                  label: "outpatient",
                  data: [1200, 900, 300, 1500],
                  backgroundColor: 'rgb(55, 151, 119)',
                  borderColor: 'rgba(153, 102, 255, 1)',
      
                  borderRadius:5
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
