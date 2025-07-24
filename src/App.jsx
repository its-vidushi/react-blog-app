import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Write from "./pages/Write/Write";
import AllPosts from "./pages/Read/AllPosts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-posts" element={<AllPosts />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={<Write />} />
      
      </Routes>  
    </Router>
  );
}

export default App;
