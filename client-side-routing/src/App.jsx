import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2 className="text-2xl">This is my Home Page</h2>;
}

function About() {
  return <h2 className="text-2xl">This is my About Page</h2>;
}

function Contact() {
  return <h2 className="text-2xl">This is my Contact Page</h2>;
}

function App() {
  return (
    <div className="p-5 grid place-items-center">

      {/* Navigation */}
      <nav className="flex gap-15 mb-10 mt-3">
        <Link to="/" className="text-blue-500 text-3xl">Home</Link>
        <Link to="/about" className="text-blue-500 text-3xl">About</Link>
        <Link to="/contact" className="text-blue-500 text-3xl">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
