import { useEffect, useState } from "react";
import Common from "./Common";

export default function PersonalInfo({ setCount }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contactNumber: "",
    emailAdd: "",
  });
  const[requiredFields, setRequiredFields] = useState({
    firstName: false,
    lastName: false,
    dateOfBirth: false,
    contactNumber: false,
    emailAdd: false,
  })
  const [firstName, setRequiredFName] = useState(false)
  const [lastName, setRequiredLName] = useState(false)
  const [dateOfBirth, setRequiredDOB] = useState(false)
  const [contactNumber, setRequiredContact] = useState(false)
  const [emailAdd, setRequiredEmail] = useState(false)


  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem("personalInfo"));
    if (savedValues) {
      setValues(savedValues);
    }
  }, []);

  function handleNext(event) {
    event.preventDefault();
    if(values.firstName === ""){
      setRequiredFName(true)
      return
    }
    if(values.lastName === ""){
      setRequiredLName(true)
      return
    }
    if(values.dateOfBirth === ""){
      setRequiredDOB(true)
      return
    }
    if(values.contactNumber === ""){
      setRequiredContact(true)
      return
    }
    if(values.emailAdd === ""){
      setRequiredEmail(true)
      return
    }

    setCount((prev) => prev + 1);
    localStorage.setItem("personalInfo", JSON.stringify(values));
  }
  const inputClass =
    "bg-white rounded-md p-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition";

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      </div>
      <div className="grid grid-rows-8 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="firstName">First Name {firstName && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
          <label htmlFor="lastName">Last Name {lastName && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Enter your first name"
            className={inputClass}
            required
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
            value={values.firstName}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            className={inputClass}
            required
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
            value={values.lastName}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="dateOfBirth">Date of Birth {dateOfBirth && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
        </div>
        <div className="grid">
          <input
            type="date"
            className={inputClass}
            required
            onChange={(e) =>
              setValues({ ...values, dateOfBirth: e.target.value })
            }
            value={values.dateOfBirth}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="contactNumber">Contact Number {contactNumber && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
        </div>
        <div className="grid">
          <input
            type="text"
            placeholder="Enter your phone number"
            className={inputClass}
            required
            onChange={(e) =>
              setValues({ ...values, contactNumber: e.target.value })
            }
            value={values.contactNumber}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="emailAdd">Email Address {emailAdd && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
        </div>
        <div className="grid">
          <input
            type="email"
            placeholder="Enter your email address"
            className={inputClass}
            required
            onChange={(e) =>
              setValues({ ...values, emailAdd: e.target.value })
            }
            value={values.emailAdd}
          />
        </div>
        <div className="flex justify-center p-2">
          <button
            className="cursor-pointer text-white bg-green-500 w-28 py-2 rounded-md hover:bg-green-600 transition"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
