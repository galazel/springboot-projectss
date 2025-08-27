import { useState } from "react";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";
import Message from "./Message";

export default function LandingPage() {
  const [count, setCount] = useState(1);
  if (count == 3) {
    return <Message />;
  }
  return (
    <form
      action=""
      className="mx-auto mt-10 p-10 border border-gray-300 rounded-lg shadow-lg bg-blue-200"
    >
      <div className="mx-auto text-center mb-8">
        <h1 className="text-5xl mb-5">Registration Form</h1>
        <p>Please fill out the following information below</p>
        <p>Step{count}/2</p>
      </div>
      <div className="grid gap-2">
        {count == 1 && <PersonalInfo count={count} setCount={setCount} />}
        {count == 2 && <Address count={count} setCount={setCount} />}
      </div>
    </form>
  );
}
