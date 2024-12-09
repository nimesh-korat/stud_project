import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Firesensor from "./pages/Firesensor";
import Alchoholsensor from "./pages/Alchohol";
import Irsensor from "./pages/Smoke";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/firesensor" element={<Firesensor />} />
          <Route path="/smokesensor" element={<Irsensor />} />
          <Route path="/alcoholsensor" element={<Alchoholsensor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
