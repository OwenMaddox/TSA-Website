import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Components/Navbar";
import Sources from "./pages/Sources";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/sources" element={<Sources />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
