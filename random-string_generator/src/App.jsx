import { useState, useCallback, useEffect } from "react";

function App() {

  const [randomString, setRandomString] = useState("0");
  const [length, setLength] = useState(0);

  const generateString = useCallback(() => {

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setRandomString(result);

  }, [length]); 

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-7 rounded-lg shadow-lg w-120 text-center">

        <h1 className="text-2xl font-bold mb-8 text-blue-500">
          Random String Generator
        </h1>

        <div className="bg-gray-100 text-lg p-3 rounded mb-6 break-all">
          {randomString}
        </div>

        <input
          type="number"
          value={length}
          min="4"
          max="30"
          className="border p-3 w-full rounded mb-5"
          onChange={(e) => setLength(e.target.value)}
        />

        <button
          onClick={generateString}
          className="w-full bg-blue-400 text-white text-lg py-2 rounded hover:bg-blue-600 transition"
        >
          Generate New String
        </button>

      </div>

    </div>
  );
}

export default App;
