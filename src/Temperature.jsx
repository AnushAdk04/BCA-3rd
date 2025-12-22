import { useState } from "react";

function Temperature() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState(null);

  const convertTemperature = () => {
    if (temperature === "") {
      alert("Please enter a temperature");
      return;
    }

    const temp = parseFloat(temperature);
    let converted = {};

    if (unit === "C") {
      converted = {
        C: temp,
        F: (temp * 9) / 5 + 32,
        K: temp + 273.15,
      };
    } else if (unit === "F") {
      converted = {
        C: ((temp - 32) * 5) / 9,
        F: temp,
        K: ((temp - 32) * 5) / 9 + 273.15,
      };
    } else {
      converted = {
        C: temp - 273.15,
        F: ((temp - 273.15) * 9) / 5 + 32,
        K: temp,
      };
    }

    setResult({
      C: converted.C.toFixed(2),
      F: converted.F.toFixed(2),
      K: converted.K.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-yellow-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Temperature Converter
        </h1>

        {/* Input */}
        <input
          type="number"
          placeholder="Enter temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Unit Selector */}
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="C">Celsius (&deg;C)</option>
          <option value="F">Fahrenheit (°F)</option>
          <option value="K">Kelvin (K)</option>
        </select>

        {/* Convert Button */}
        <button
          onClick={convertTemperature}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Convert
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-2 text-center">
            <p><strong>Celsius:</strong> {result.C} °C</p>
            <p><strong>Fahrenheit:</strong> {result.F} °F</p>
            <p><strong>Kelvin:</strong> {result.K} K</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Temperature;
