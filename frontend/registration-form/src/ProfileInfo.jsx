import { useLocation, useNavigate } from "react-router-dom";

export default function ProfileInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const headerLabel = "font-lexend text-2xl font-semibold";
  
  const listClass = "list-disc list-inside ml-4";
  const infoClass =
    "flex flex-col gap-3 bg-white p-6 rounded-md shadow-md";
    function handleExit() {
        navigate("/");
    }
  return (
    <div className="mx-auto mt-10 max-w-lg p-6 border border-gray-300 rounded-lg shadow-lg bg-blue-200 grid gap-6">
      
      {/* Personal Info */}
      <div className={infoClass}>
        <h1 className={headerLabel}>Personal Information</h1>
        <ul className="flex flex-col gap-1">
          <li><span className="font-semibold">First Name:</span> {state.personalInfo.firstName}</li>
          <li><span className="font-semibold">Last Name:</span> {state.personalInfo.lastName}</li>
          <li><span className="font-semibold">Date of Birth:</span> {state.personalInfo.dateOfBirth}</li>
          <li><span className="font-semibold">Contact Number:</span> {state.personalInfo.contactNumber}</li>
          <li><span className="font-semibold">Email Address:</span> {state.personalInfo.emailAdd}</li>
        </ul>
      </div>

      {/* Address Info */}
      <div className={infoClass}>
        <h2 className={headerLabel}>Address Information</h2>
        <ul className="flex flex-col gap-1">
          <li><span className="font-semibold">Street Address:</span> {state.addressInfo.streetAdd}</li>
          <li><span className="font-semibold">City:</span> {state.addressInfo.city}</li>
          <li><span className="font-semibold">State:</span> {state.addressInfo.state}</li>
          <li><span className="font-semibold">Postal Code:</span> {state.addressInfo.postalCode}</li>
        </ul>
      </div>

      {/* Exit Button */}
      <div className="flex justify-center">
        <button
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-red-600 transition"
          onClick={handleExit} // navigate to home or exit
        >
          Exit
        </button>
      </div>
    </div>
  );
}
