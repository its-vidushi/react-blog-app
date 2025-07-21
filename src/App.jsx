import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Write from "./pages/Write/Write";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={<Write />} />
        {/* Add more routes as needed */}
      </Routes>  
    </Router>
  );
}

export default App;
