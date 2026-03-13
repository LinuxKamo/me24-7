import { memo } from "react";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement,
  PointElement,
  LineElement
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { TrendingUp, Users, Truck, MapPin, MessageSquare } from "lucide-react";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function Analytics() {
  const departmentData = {
    labels: ['Drivers', 'Super Admins', 'Forman', 'Media Team'],
    datasets: [
      {
        data: [45, 5, 20, 30],
        backgroundColor: [
          '#0ea5e9', // sky-500
          '#6366f1', // indigo-500
          '#10b981', // emerald-500
          '#f59e0b', // amber-500
        ],
        borderWidth: 0,
      },
    ],
  };

  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Platform Users',
        data: [800, 950, 1050, 1100, 1200, 1245],
        borderColor: '#0f4c81',
        backgroundColor: 'rgba(15, 76, 129, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const topAnnouncementsData = {
    labels: ['Water Outage: Pretoria', 'Maintenance Schedule', 'New Routes Added', 'Holiday Schedule', 'Safety Guidelines'],
    datasets: [
      {
        label: 'Comments',
        data: [145, 89, 76, 54, 32],
        backgroundColor: '#6366f1',
        borderRadius: 4,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col space-y-2 mt-5">
        <h1 className="text-2xl font-bold">System Analytics</h1>
        <span className="text-neutral-500/70 text-sm">
          Deep dive into platform metrics, users, and engagement
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
               <TrendingUp className="w-3 h-3 mr-1" /> 12%
            </span>
          </div>
          <h3 className="text-sm font-medium text-slate-500">Most Active Area</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">Pretoria</p>
          <p className="text-xs text-slate-400 mt-2">Based on 3.2k announcement likes</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Users className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
               <TrendingUp className="w-3 h-3 mr-1" /> 8.5%
            </span>
          </div>
          <h3 className="text-sm font-medium text-slate-500">User Growth</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">+145</p>
          <p className="text-xs text-slate-400 mt-2">New users this month</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-500">Top Engagement</h3>
          <p className="text-lg font-bold text-slate-800 mt-1 truncate" title="Water Outage: Pretoria">Water Outage: Pretoria</p>
          <p className="text-xs text-slate-400 mt-2">145 comments this week</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
              <Truck className="w-5 h-5" />
            </div>
            <span className="flex items-center text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
               <TrendingUp className="w-3 h-3 mr-1 rotate-180" /> 2.1%
            </span>
          </div>
          <h3 className="text-sm font-medium text-slate-500">Truck Drivers</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">-5</p>
          <p className="text-xs text-slate-400 mt-2">Active drivers this week</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">User Growth Trend</h2>
          <div className="h-[300px] w-full">
            <Line 
              data={userGrowthData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false }
                },
                scales: {
                  y: { beginAtZero: false, grid: { color: '#f1f5f9' } },
                  x: { grid: { display: false } }
                }
              }} 
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Department Distribution</h2>
          <div className="h-[250px] w-full flex items-center justify-center relative">
            <Doughnut 
              data={departmentData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } }
                }
              }} 
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-8">
              <div className="text-center">
                <span className="block text-3xl font-bold text-slate-800">100%</span>
                <span className="block text-xs text-slate-500">Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Top Announcements by Engagement</h2>
        <div className="h-[300px] w-full">
          <Bar 
            data={topAnnouncementsData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              indexAxis: 'y',
              plugins: {
                legend: { display: false }
              },
              scales: {
                x: { grid: { color: '#f1f5f9' } },
                y: { grid: { display: false } }
              }
            }} 
          />
        </div>
      </div>
    </>
  );
}

export default memo(Analytics);
