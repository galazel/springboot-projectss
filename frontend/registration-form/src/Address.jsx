import { useEffect, useState } from "react";
export default function Address({setCount }) {
  const [values, setValues] = useState({
    streetAdd: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem("addressInfo"));
    if (savedValues) {
      setValues(savedValues);
    }
    setIsCheck(JSON.parse(localStorage.getItem("isCheck")));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
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

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Address Information</h2>
      </div>
      <div className="grid gap-2">
        <div>
          <label htmlFor="streetAdd">Street Address</label>
          <textarea
            placeholder="Enter your street address"
            className="bg-white rounded-md p-3 w-full"
            onChange={(e) =>
              setValues({ ...values, streetAdd: e.target.value })
            }
            value={values.streetAdd}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="bg-white rounded-md p-2 w-full"
              onChange={(e) => setValues({ ...values, city: e.target.value })}
              value={values.city}
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="Enter your state"
              className="bg-white rounded-md p-2 w-full"
              onChange={(e) => setValues({ ...values, state: e.target.value })}
              value={values.state}
            />
          </div>
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            placeholder="Enter your postal code"
            className="bg-white rounded-md p-2 w-full"
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
            onChange={(e) => setIsCheck(e.target.checked)}
            checked={isCheck}
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <div className="flex justify-between p-2">
          <button
            type="button"
            className="text-black bg-gray-300 w-20 pt-2 pb-2 pl-3 pr-3 rounded"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="button"
            className="text-black bg-green-500 w-20 pt-2 pb-2 pl-3 pr-3 rounded"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
