import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import InputField from "../../shared/components/ui/InputField";
import ActionButton from "../../shared/components/ui/ActionButton";
import { SIGN_UP } from "../consts/routes.auth";
import { useRoleSelection, type Role } from "../../shared/context/roleselection.context";

function SignIn() {
  const { currentRole, setRole } = useRoleSelection();
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("Signing in as:", currentRole);
    // Basic redirection logic based on role
    if (currentRole === 'superadmin') {
      navigate('/admin');
    } else if (currentRole === 'manager') {
      navigate('/manager');
    } else if (currentRole === 'mediateam') {
      navigate('/media');
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0f4c81]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0f4c81]/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md bg-white border border-neutral-200 shadow-2xl rounded-2xl p-8 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-[#0f4c81]/10 rounded-xl mb-4">
            <LogIn className="size-6 text-[#0f4c81]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1e293b]">Welcome Back</h1>
          <p className="text-neutral-500 text-sm mt-1">
            Please sign in to your account
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <InputField
            label="Email Address"
            placeholder="Enter your email"
            type="email"
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold text-[#1e293b] uppercase tracking-wider ml-1">
              Select Role
            </label>
            <select
              value={currentRole}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full h-12 px-4 bg-white border border-neutral-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f4c81]/20 focus:border-[#0f4c81] outline-hidden transition-all appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='螺旋状的向下箭头'/%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.25rem'
              }}
            >
              <option value="manager">Manager</option>
              <option value="superadmin">Super Admin</option>
              <option value="mediateam">Media Team</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-neutral-300 text-[#0f4c81] focus:ring-[#0f4c81]"
              />
              <span className="text-xs text-neutral-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-xs text-[#0f4c81] font-semibold hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <div className="pt-2">
            <ActionButton
              label="Sign In"
              Icon={LogIn}
              onClick={handleSignIn}
              color="bg-[#0f4c81]"
            />
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            Don't have an account?{" "}
            <Link
              to={SIGN_UP}
              className="text-[#0f4c81] font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(SignIn);
