import { useLocation } from "react-router-dom";
export default function ProfileInfo() 
{
    const {state} = useLocation();
    return(
        <div className="mx-auto mt-10 max-w-lg p-10 border border-gray-300 rounded-lg shadow-lg bg-blue-200 grid grid-rows-2 gap-5">
            <div>
                <h1 className="font-lexend text-2xl">Personal Information</h1>
            </div>
            <div>
                <h2>Address Information</h2>
            </div>
        </div>
    )
}