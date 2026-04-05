import React from "react";
import Navbar from "../components/navbar";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";

import "../stylesheets/audioplayer.css";
import "../stylesheets/bootstrap.min.css";
import "../stylesheets/jquery.fancybox.min.css";
import "../stylesheets/nice-select.css";
import "../stylesheets/owl.carousel.min.css";
import "../stylesheets/owl.theme.default.min.css";
import "../stylesheets/responsive.css";
import "../stylesheets/style.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}
