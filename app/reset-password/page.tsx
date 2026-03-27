'use client';

export default function ResetPassword() {
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="space-y-4">
        <input placeholder="Enter your email" className="border p-2" />
        <button className="bg-red-500 text-white px-4 py-2">
          Reset Password
        </button>
      </form>
    </div>
  );
}
