import Navbar from "../components/navbar";
import DonationHeader from "../components/donationHeader";
import DonationSection from "../components/donationSection";
import DonationMosque from "../components/donationMosque";
import Footer from "../components/footer";
// import { Helmet } from "react-helmet";

import "../stylesheets/audioplayer.css";
import "../stylesheets/bootstrap.min.css";
import "../stylesheets/jquery.fancybox.min.css";
import "../stylesheets/nice-select.css";
import "../stylesheets/owl.carousel.min.css";
import "../stylesheets/owl.theme.default.min.css";
import "../stylesheets/responsive.css";
import "../stylesheets/style.css";

export default function Donation() {
  return (
    <>
      {/* <Helmet>
        {" "}
        <title>Support Ebaadah | Help Us Improve the Islamic App</title>{" "}
        <meta
          name="description"
          content="Support the Ebaadah app by donating. Your contribution helps us improve prayer features, Islamic content, and keep the app free for everyone."
        />{" "}
        <meta
          name="keywords"
          content="support ebaadah, donate islamic app, support muslim app, donation islamic app, help prayer app, islamic charity app"
        />{" "}
        <meta name="robots" content="index, follow" />{" "}
     
        <meta property="og:title" content="Support Ebaadah | Donate Today" />{" "}
        <meta
          property="og:description"
          content="Help us grow Ebaadah and provide better Islamic tools for the community. Your support makes a difference."
        />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:url" content="https://ebaadah.com/donate" />{" "}
        <meta
          property="og:image"
          content="https://ebaadah.com/images/donate-preview.png"
        />{" "}

        <link rel="canonical" href="https://ebaadah.com/donate" />{" "}
      </Helmet> */}
      <Navbar />
      <DonationHeader />
      <DonationSection />
      <DonationMosque />
      <Footer />
    </>
  );
}
