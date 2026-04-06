import { useState } from "react";

import Sunset from "./sunset";
import Sunrise from "./sunrise";
import Location from "./location";
import SocialMedia from "./socialMedia";
import BottomNavbar from "./bottomNavbar";
import MobileNavbar from "./mobileNavbar";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/color-bg.jpg";
import { useNavbarData } from "../hooks/useNavbarData";

export const NAV_LINKS = [
  { label: "Ebaadah", path: "/" },
  { label: "Prayer Times", path: "/prayer-times" },
  { label: "Quran", path: "/quran", badge: "WIP" },
  { label: "Blog", path: "#" },
  { label: "Donate", path: "/donate" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { formattedSunrise, formattedSunset, location } = useNavbarData();

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <>
      <header
        className="two position-relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Top bar */}
        <div className="container">
          <div className="top-bar">
            {/* Sunrise & Sunset */}
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className="d-flex align-items-center">
                  <Sunrise time={formattedSunrise} />
                  <Sunset time={formattedSunset} />
                </div>
              </div>
              {/* Social Media */}
              <div className="col-xl-2">
                <SocialMedia />
              </div>
              {/* Location */}

              <div className="col-xl-5">
                <div className="d-flex align-items-center login">
                  <Location city={location?.city} country={location?.country} />
                </div>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <BottomNavbar
            navLinks={NAV_LINKS}
            toggleMobileNav={toggleMobileNav}
            logo={logo}
          />
        </div>
        {/* Mobile nav */}
        <MobileNavbar
          navLinks={NAV_LINKS}
          isOpen={isMobileNavOpen}
          closeMobileNav={closeMobileNav}
          logo={logo}
        />
      </header>
      <div className="dev-announcement">
        <div className="ticker">
          <p>
            🚧 Ebaadah mobile app and website are currently under development.
            When ready app will be released on appstore and playstore. Contact
            us at info@ebaadah.com. | Ebaadah mobile app and website are
            currently under development. When ready app will be released on
            appstore and playstore. Contact us at info@ebaadah.com. | Ebaadah
            mobile app and website are currently under development. Some When
            ready app will be released on appstore and playstore. Contact us at
            info@ebaadah.com.
          </p>
        </div>
      </div>
    </>
  );
}
