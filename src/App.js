import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PrayerTimes from "./pages/prayerTimes";
import Donation from "./pages/donation";
import StripeDonation from "./pages/stripeDonation";
import DonationSuccess from "./pages/donationSuccess";
import { ToastContainer } from "react-toastify";
import Contact from "./pages/contact";
import MessageSuccess from "./pages/messageSuccess";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Quran from "./pages/quran";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prayer-times" element={<PrayerTimes />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/stripe-donate" element={<StripeDonation />} />
        <Route path="/donation-success" element={<DonationSuccess />} />
        <Route path="/message-success" element={<MessageSuccess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quran" element={<Quran />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
