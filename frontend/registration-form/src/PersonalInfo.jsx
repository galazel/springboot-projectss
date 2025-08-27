import { useEffect,useState } from "react";
export default function PersonalInfo({setCount}) {
  const [values,setValues] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactNumber: '',
    emailAdd: ''
   })
    useEffect(() => {
      const savedValues = JSON.parse(localStorage.getItem('personalInfo'));
      if (savedValues) {
        setValues(savedValues);
      }
    }, []);
    function handleNext(event) 
    {
        event.preventDefault();
        setCount(prev => prev + 1);
        localStorage.setItem('personalInfo', JSON.stringify(values));
    }

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      </div>
      <div className="grid grid-rows-8 gap-1">
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="firstName">First Name</label>
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Enter your first name"
            className="bg-white rounded-md p-2 "
            onChange={(e) => setValues({...values, firstName: e.target.value})}
            value={values.firstName}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            className="bg-white rounded-md p-2 "
            onChange={(e) => setValues({...values, lastName: e.target.value})}
            value={values.lastName}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="dateOfBirth">Date of Birth</label>
        </div>
        <div className="grid">
          <input
            type="date"
            placeholder="Enter your first name"
            className="bg-white rounded-md p-2 "
            onChange={(e) =>setValues({...values, dateOfBirth: e.target.value})}
            value={values.dateOfBirth}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="contactNumber">Contact Number</label>
        </div>
        <div className="grid">
          <input
            type="text"
            placeholder="Enter your phone number name"
            className="bg-white rounded-md p-2 "
            onChange={(e) => setValues({...values, contactNumber: e.target.value})}
            value={values.contactNumber}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="emailAdd">Email Address</label>
        </div>
        <div className="grid">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white rounded-md p-2 "
            onChange={(e) => setValues({...values, emailAdd: e.target.value})}
            value={values.emailAdd}
          />
        </div>
        <div className="flex justify-center p-2">
          <button className="text-black bg-green-500 w-20 pt-2 pb-2 pl-3 pr-3 rounded" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
  
}
