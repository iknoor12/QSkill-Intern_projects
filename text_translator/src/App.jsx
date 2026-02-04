import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {

    if (!inputText.trim()) {
      alert("Enter text first");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${inputText}&langpair=en|${language}`
      );

      const data = await response.json();

      if (data.responseData.translatedText) {
        setOutputText(data.responseData.translatedText);
      } else {
        alert("Translation failed");
      }

    } catch (error) {
      console.error(error);
      alert("Network error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-6 rounded-lg shadow-lg w-130">

        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Text Translator 🌍
        </h1>

        <textarea
          className="w-full border p-2 rounded mb-3"
          rows="4"
          placeholder="Enter English Text..."
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <select
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="pa">Punjabi</option>
        </select>

        <button
          className="w-full bg-blue-500 text-white text-lg py-2 rounded hover:bg-blue-600 transition"
          onClick={translateText}
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        <div className="mt-4 border p-3 rounded min-h-25">
          {outputText || "Translated text will appear here..."}
        </div>

      </div>

    </div>
  );
}

export default App;
