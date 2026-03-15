import { memo } from "react";
import InputField from "../../shared/components/ui/InputField";
import ActionButton from "../../shared/components/ui/ActionButton";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../consts/routes.auth";

function SignUp() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0f4c81]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0f4c81]/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-lg bg-white border border-neutral-200 shadow-2xl rounded-2xl p-8 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-[#0f4c81]/10 rounded-xl mb-4">
            <UserPlus className="size-6 text-[#0f4c81]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1e293b]">Create Account</h1>
          <p className="text-neutral-500 text-sm mt-1">
            Join the Markwater platform today
          </p>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <InputField label="Name" placeholder="Enter your name" />
          <InputField label="Surname" placeholder="Enter your surname" />
          <div className="md:col-span-2">
            <InputField
              label="Email Address"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <InputField
            label="Password"
            placeholder="Create a password"
            type="password"
          />
          <InputField
            label="Confirm Password"
            placeholder="Repeat password"
            type="password"
          />

          <div className="md:col-span-2 pt-4">
            <ActionButton
              label="Create Account"
              Icon={UserPlus}
              onClick={() => {}}
              color="bg-[#0f4c81]"
            />
          </div>
        </form>

        <div className="mt-8 text-center border-t border-neutral-100 pt-6">
          <p className="text-sm text-neutral-500">
            Already have an account?{" "}
            <Link
              to={SIGN_IN}
              className="text-[#0f4c81] font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(SignUp);
