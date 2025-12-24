import { useState } from "react";

export default function JokeFetcher() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJoke = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      setJoke(data);
    } catch (err) {
      setError("Failed to fetch joke. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-400 to-purple-500">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Random Joke Generator</h1>

        {loading && <p className="text-gray-500">Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {joke && !loading && (
          <div className="mb-4">
            <p className="font-semibold">{joke.setup}</p>
            <p className="text-gray-700 mt-2">{joke.punchline}</p>
          </div>
        )}

        <button
          onClick={fetchJoke}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Get a Joke
        </button>
      </div>
    </div>
  );
}
