import { memo } from "react";
import InputField from "../../shared/components/ui/InputField";
import ActionButton from "../../shared/components/ui/ActionButton";
import { MailCheck } from "lucide-react";

function InvitedUser() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0f4c81]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0f4c81]/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md bg-white border border-neutral-200 shadow-2xl rounded-2xl p-8 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-green-50 rounded-xl mb-4">
            <MailCheck className="size-6 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-[#1e293b]">
            Accept Invitation
          </h1>
          <p className="text-neutral-500 text-sm mt-1 text-center">
            You've been invited to join Markwater. Please complete your profile
            to continue.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <InputField
            label="Full Name"
            placeholder="Your name will appear here"
          />
          <InputField
            label="New Password"
            placeholder="Create a password"
            type="password"
          />
          <InputField
            label="Confirm Password"
            placeholder="Repeat password"
            type="password"
          />

          <div className="pt-2">
            <ActionButton
              label="Get Started"
              Icon={MailCheck}
              onClick={() => {}}
              color="bg-[#0f4c81]"
            />
          </div>
        </form>

        <p className="mt-8 text-xs text-neutral-400 text-center">
          By joining, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default memo(InvitedUser);
