import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
