import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Quran from "./pages/quran";
import Contact from "./pages/contact";
import Donation from "./pages/donation";
import PrayerTimes from "./pages/prayerTimes";
import StripeDonation from "./pages/stripeDonation";
import MessageSuccess from "./pages/messageSuccess";
import DonationSuccess from "./pages/donationSuccess";

import "./App.css";
import "./stylesheets/style.css";
import "./stylesheets/responsive.css";
import "./stylesheets/nice-select.css";
import "./stylesheets/audioplayer.css";
import "./stylesheets/bootstrap.min.css";
import "./stylesheets/owl.carousel.min.css";
import "./stylesheets/jquery.fancybox.min.css";
import "./stylesheets/owl.theme.default.min.css";

import "react-toastify/dist/ReactToastify.css";

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
