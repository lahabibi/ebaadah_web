import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import PrayerTimes from "./pages/prayerTimes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
    </Routes>
  );
}

export default App;
