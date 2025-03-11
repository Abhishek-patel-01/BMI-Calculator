import { useState } from "react";

import "./App.css";

// bmi<18.5 Underweight
// bmi 18.5 ne 24.9 ni vache aave to normal weight
// bmi 25 ne 29 ni vache aave to over wight
function App() {
  const [weight, setWeigth] = useState(0);
  const [height, setHeigth] = useState(0);
  const [bmivalue, setBmivalue] = useState(0);
  const [message, setMessage] = useState("");
  const bmiCalulator = () => {
    const bmi = (weight / (height * height)).toFixed(2);
    setBmivalue(bmi);

    if (bmi < 18.5) {
      setMessage("Under weight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage("Normal weight");
    } else if (bmi >= 25 && bmi <= 29) {
      setMessage("Over weight");
    } else {
      setMessage("Obesity");
    }
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-gradient-to-br
    from-gray-900 to-black text-white"
    >
      <div>
        <h1 className="text-4xl font-bold">BMI Calculator</h1>
        <div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="Weight " className="text-2xl my-3">
              Weight in Kg
            </label>
            <input
              type="number"
              className="bg-gray-800 rounded-md px-8 py-2 "
              onChange={(e) => setWeigth(e.target.value)}
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="height " className="text-2xl my-3">
              Height in Mtr
            </label>
            <input
              type="number"
              className="bg-gray-800 rounded-md px-8 py-2 "
              on
              onChange={(e) => setHeigth(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-blue-800 f mt-8 w-full text-2xl py rounded-md"
              onClick={bmiCalulator}
            >
              calculate
            </button>
            <div className="mt-4 bg-gray-800 rounded-md px-8 py-2">
              <h1> Your BMI:{bmivalue ? " " + bmivalue : " Pending"}</h1>
            </div>
          </div>
          <div className="mt-4 bg-gray-800 rounded-md px-8 py-2 ">
            <h1>{bmivalue ? message : "Calculate Pending..."}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
