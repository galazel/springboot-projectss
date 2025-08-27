import ProfileInfo from "./ProfileInfo";
import { useNavigate } from "react-router-dom";
export default function Message() 
{
const navigate = useNavigate();
  function handleViewProfile() 
  {
  
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"))
    const addressInfo = JSON.parse(localStorage.getItem("addressInfo"))
    navigate("/profile", {state: {personalInfo, addressInfo}})
    localStorage.clear();
  }
  return (
    <>
      <div className="mx-auto flex flex-col gap-2 items-center justify-center bg-green-600 text-white p-10 rounded-lg ">
        <h1 className="text-5xl">Successfully registered!</h1>
        <p>Your registration is successfull, visit you profile to know more.</p>
        <button
          className="bg-orange-500 rounded-md p-2 cursor-pointer"
          onClick={handleViewProfile}
        >
          Visit Profile
        </button>
      </div>
    </>
  );
}
