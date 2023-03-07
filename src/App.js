import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="App bg-gray-900 text-gray-50 min-h-screen">
      <Navbar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
      </Routes>
    </div>
  );
}

export default App;
