import { memo } from "react";
import { Settings as SettingsIcon, Bell, Palette, Database } from "lucide-react";

function Settings() {
  return (
    <>
      <div className="flex flex-col space-y-2 mt-5">
        <h1 className="text-2xl font-bold">System Settings</h1>
        <span className="text-neutral-500/70 text-sm">
          Configure global application settings and preferences
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 border-r border-slate-200/60 pr-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium transition-colors">
             <SettingsIcon className="w-4 h-4" />
             General
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
             <Bell className="w-4 h-4 text-slate-400" />
             Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
             <Palette className="w-4 h-4 text-slate-400" />
             Appearance
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
             <Database className="w-4 h-4 text-slate-400" />
             Data Management
          </button>
        </div>

        <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col space-y-6">
             <h3 className="text-lg font-semibold text-slate-800">General Configuration</h3>
             <div className="space-y-4">
                <div className="flex flex-col space-y-1.5">
                   <label className="text-sm font-medium text-slate-700">Application Name</label>
                   <input type="text" defaultValue="MarkWater" className="max-w-md px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20 focus:border-[#0f4c81] transition-all" />
                </div>
                <div className="flex flex-col space-y-1.5">
                   <label className="text-sm font-medium text-slate-700">Support Email</label>
                   <input type="email" defaultValue="support@markwater.com" className="max-w-md px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20 focus:border-[#0f4c81] transition-all" />
                </div>
                <div className="flex items-center justify-between py-3 max-w-md">
                   <div>
                      <p className="text-sm font-medium text-slate-700">Maintenance Mode</p>
                      <p className="text-xs text-slate-500">Temporarily disable access to all non-admin users</p>
                   </div>
                   <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition pl-1 translate-x-1" />
                   </button>
                </div>
             </div>
          </div>
          <div className="bg-slate-50/50 p-4 flex justify-end gap-3">
             <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">Discard</button>
             <button className="px-4 py-2 text-sm font-medium bg-[#0f4c81] text-white rounded-lg hover:bg-[#0f4c81]/90 transition-colors shadow-sm">Save Preferences</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Settings);
