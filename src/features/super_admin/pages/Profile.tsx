import { memo } from "react";
import { User, Mail, Shield, Key } from "lucide-react";

function Profile() {
  return (
    <>
      <div className="flex flex-col space-y-2 mt-5">
        <h1 className="text-2xl font-bold">Super Admin Profile</h1>
        <span className="text-neutral-500/70 text-sm">
          Manage your personal account settings and security
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col items-center shadow-sm">
          <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-slate-400">SA</span>
          </div>
          <h2 className="text-xl font-bold text-slate-800">System Admin</h2>
          <p className="text-sm text-slate-500 mb-6">admin@markwater.com</p>
          <div className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Super Administrator
          </div>
          <p className="text-xs text-slate-400 text-center">Last logged in: Today at 08:45 AM</p>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 p-6 flex flex-col space-y-6">
            <h3 className="text-lg font-semibold text-slate-800">Account Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                  <User className="w-3 h-3" /> Full Name
                </label>
                <input 
                  type="text" 
                  defaultValue="System Admin" 
                  className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20 focus:border-[#0f4c81] transition-all bg-slate-50/50"
                  readOnly 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                  <Mail className="w-3 h-3" /> Email Address
                </label>
                <input 
                  type="email" 
                  defaultValue="admin@markwater.com" 
                  className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]/20 focus:border-[#0f4c81] transition-all bg-slate-50/50"
                  readOnly 
                />
              </div>
            </div>
          </div>
          
          <div className="p-6 flex flex-col space-y-6">
            <h3 className="text-lg font-semibold text-slate-800">Security Tasks</h3>
            <button className="flex items-center gap-3 px-4 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-left transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                <Key className="w-5 h-5 text-slate-500 group-hover:text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Change Password</p>
                <p className="text-xs text-slate-500">Update your current password here</p>
              </div>
            </button>
          </div>
          <div className="bg-slate-50/50 p-4 border-t border-slate-100 flex justify-end gap-3">
             <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">Cancel</button>
             <button className="px-4 py-2 text-sm font-medium bg-[#0f4c81] text-white rounded-lg hover:bg-[#0f4c81]/90 transition-colors shadow-sm">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Profile);
