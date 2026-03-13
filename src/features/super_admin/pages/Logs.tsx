import { memo } from "react";
import { Activity, AlertTriangle, AlertCircle, Info, Download } from "lucide-react";

function Logs() {
  const getLogIcon = (type: string) => {
    switch(type) {
       case 'error': return <AlertCircle className="w-5 h-5 text-rose-500" />;
       case 'warning': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
       default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getLogBg = (type: string) => {
    switch(type) {
       case 'error': return 'bg-rose-50 border-rose-100';
       case 'warning': return 'bg-amber-50 border-amber-100';
       default: return 'bg-blue-50 border-blue-100';
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 mt-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">System Logs</h1>
          <span className="text-neutral-500/70 text-sm">
            Monitor application events, errors, and audit trails
          </span>
        </div>
        <button className="flex items-center gap-2 border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      <div className="mt-8 bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-250px)] min-h-[400px]">
        <div className="p-4 border-b border-slate-200/60 flex items-center gap-4 bg-slate-50/50">
           <div className="text-sm font-medium text-slate-600 flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-slate-200">
             <Activity className="w-4 h-4 text-emerald-500" /> Live Updates: On
           </div>
           <select className="px-3 py-1.5 border border-slate-200 rounded-md text-sm text-slate-600 bg-white ml-auto focus:outline-none">
             <option>All Events</option>
             <option>Errors Only</option>
             <option>Warnings Only</option>
             <option>Info Only</option>
           </select>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-sm max-h-[600px]">
          {[
            { id: 1, type: 'info', msg: 'Admin user logged in', user: 'admin@markwater.com', time: '10:45:22 AM' },
            { id: 2, type: 'error', msg: 'Failed to connect to database replica', user: 'system', time: '09:12:05 AM' },
            { id: 3, type: 'warning', msg: 'High CPU usage detected on node worker-2', user: 'system', time: '08:30:11 AM' },
            { id: 4, type: 'info', msg: 'New announcement created: "Water outage in..."', user: 'admin@markwater.com', time: 'Yesterday 14:22 PM' },
            { id: 5, type: 'info', msg: 'System backup triggered manually', user: 'system', time: 'Yesterday 12:00 PM' },
            { id: 1, type: 'info', msg: 'Manager user updated profile', user: 'johndoe@markwater.com', time: '10:45:22 AM' },
            { id: 2, type: 'error', msg: 'API request timeout on /api/v1/drivers/sync', user: 'system', time: '09:12:05 AM' },
            { id: 3, type: 'warning', msg: 'Rate limit approaching for IP 192.168.1.4', user: 'system', time: '08:30:11 AM' },
          ].map((log, i) => (
             <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg border ${getLogBg(log.type)}`}>
                <div className="flex items-center gap-3 min-w-0 flex-1">
                   {getLogIcon(log.type)}
                   <span className="font-semibold text-slate-800 truncate">{log.msg}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500 sm:min-w-[200px] justify-between">
                   <span>{log.user}</span>
                   <span className="text-slate-400 font-medium whitespace-nowrap">{log.time}</span>
                </div>
             </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default memo(Logs);
