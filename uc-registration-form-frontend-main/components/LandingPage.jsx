import { useState } from "react";
import FormRegister from '../components/FormRegister'
import Profile from '../components/Profile'

function LandingPage() 
{
    const [page,setPage] = useState(1)
    return(
        <div className="bg-white flex flex-col gap-1 p-10 m-10 rounded-xl">
            <div className="flex flex-col items-center gap-5">
                <h1 className="font-bold text-4xl">Registration Form</h1>
                <p>Fill out the required details below</p>
            </div>
            <hr className="text-blue-50 m-5"/>
            <div>
                {page == 1 && <FormRegister page={page}/>}
                {page == 2 && <Profile page = {page}/>}
            </div>
        </div>
    )

}

export default LandingPage;
