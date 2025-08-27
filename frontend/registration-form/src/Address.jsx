import { useEffect, useState } from "react";
import Common from "./Common";
export default function Address({ setCount }) {
  const [values, setValues] = useState({
    streetAdd: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [isCheck, setIsCheck] = useState(false);
  const [streetAdd, setRequiredStreet] = useState(false)
  const [city, setRequiredCity] = useState(false)
  const [state, setRequiredState] = useState(false)
  const [postalCode, setRequiredPostal] = useState(false)


  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem("addressInfo"));
    if (savedValues) {
      setValues(savedValues);
    }
    setIsCheck(JSON.parse(localStorage.getItem("isCheck")));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if(values.streetAdd === ""){
      setRequiredStreet(true)
      return
    }
    if(values.city === ""){
      setRequiredCity(true)
      return
    }
    if(values.state === ""){
      setRequiredState(true)
      return
    }
    if(values.postalCode === ""){
      setRequiredPostal(true)
      return
    }
    if (!isCheck) {
      alert("You must agree to the terms and conditions");
      return;
    }
    setCount((prev) => prev + 1);
    localStorage.setItem("addressInfo", JSON.stringify(values));
    localStorage.setItem("isCheck", JSON.stringify(isCheck));
  }

  function handleBack(event) {
    event.preventDefault();
    setCount((prev) => prev - 1);
    localStorage.setItem("addressInfo", JSON.stringify(values));
    localStorage.setItem("isCheck", JSON.stringify(isCheck));
  }

  // Tailwind class with focus effect
  const inputClass =
    "bg-white rounded-md p-2 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition";

  const textareaClass =
    "bg-white rounded-md p-3 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition";

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Address Information</h2>
      </div>
      <div className="grid gap-2">
        <div>
          <label htmlFor="streetAdd">Street Address {streetAdd && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
          <textarea
            placeholder="Enter your street address"
            className={textareaClass}
            required
            onChange={(e) =>
              setValues({ ...values, streetAdd: e.target.value })
            }
            value={values.streetAdd}
          />
        </div>

        <div className="grid grid-cols-2 gap-1">
          <div>
            <label htmlFor="city">City{city && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
            <input
              type="text"
              placeholder="Enter your city"
              className={inputClass}
              required
              onChange={(e) => setValues({ ...values, city: e.target.value })}
              value={values.city}
            />
          </div>
          <div>
            <label htmlFor="state">State {state && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
            <input
              type="text"
              placeholder="Enter your state"
              className={inputClass}
              required
              onChange={(e) => setValues({ ...values, state: e.target.value })}
              value={values.state}
            />
          </div>
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code {postalCode && <span className={Common.requiredLabel.class}>{Common.requiredLabel.text}</span>}</label>
          <input
            type="text"
            placeholder="Enter your postal code"
            className={inputClass}
            required
            onChange={(e) =>
              setValues({ ...values, postalCode: e.target.value })
            }
            value={values.postalCode}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            required
            onChange={(e) => setIsCheck(e.target.checked)}
            checked={isCheck}
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-300 text-black font-medium rounded-md px-4 py-2 hover:bg-gray-400 transition-colors cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-white font-medium rounded-md px-4 py-2 hover:bg-green-600 transition-colors cursor-pointer"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
