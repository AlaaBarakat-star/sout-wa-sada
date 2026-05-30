import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import About from"./pages/About";
import Artists from "./pages/Artists";
import Home from "./pages/Home";
import Mood from "./pages/Mood";
import Poetry from "./pages/Poetry";
import Quiz from "./pages/Quiz";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<h1>مرحبا بك مع صوت وصدى</h1>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/artists" element={<Artists/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/mood" element={<Mood/>} />
        <Route path="/poetry" element={<Poetry/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;