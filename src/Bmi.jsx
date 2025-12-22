 import { useState } from "react"

function Bmi() {
  const[weight,setWeight] = useState('')
  const[height,setHeight] = useState('')
  const[bmi,setBmi] = useState(null)
  const[bmiCategory,setBmiCategory] = useState('')

  function calculateBmi(){

    if(weight && height){
      const heightInMeters = height/100
      const bmiValue = (weight/(heightInMeters*heightInMeters)).toFixed(2)
      setBmi(bmiValue)

      if(bmiValue < 18.5){
        setBmiCategory("UnderWeight")
      }else if(bmiValue >=18.5 && bmiValue < 25){
        setBmiCategory("Normal Weight")
      }else if(bmiValue >=25 && bmiValue < 30){
        setBmiCategory("OverWeight")
      }else{
        setBmiCategory("Obesity")
      }
    }
    else{
      alert("Please Enter Weight & Height")
    }
  }

  return (
    <div className="bg-gradient-to-r from-red-400 to-blue-500 h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl">

        <h2 className="text-3xl text-center font-semibold mb-6">BMI Calculator</h2>

        <div className="mb-4">
          <label className="text-lg font-medium">Weight (Kg)</label>
          <input type="number" className="border border-gray-300 p-3 rounded-md w-full" placeholder="Enter Your Weight in Kilogram" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>

         <div className="mb-4">
          <label className="text-lg font-medium">Height (cm)</label>
          <input type="number" className="border border-gray-300 p-3 rounded-md w-full" placeholder="Enter Your Height in Centimeter" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>

        <button onClick={calculateBmi} className="w-full bg-blue-700 p-3 text-lg text-white font-semibold rounded-lg hover:bg-blue-800">Calculate BMI</button>

        {bmi &&(
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Your BMI: {bmi}</h3>
            <p className="mt-2 font-medium">{bmiCategory}</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Bmi
