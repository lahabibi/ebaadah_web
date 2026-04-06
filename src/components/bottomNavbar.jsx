import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiHeadset } from "react-icons/pi";

const BottomNavbar = ({ navLinks, toggleMobileNav, logo }) => {
  return (
    <div className="bottom-bar">
      <div className="two-bar">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/">
              <img
                alt="Ebaadah Logo"
                src={logo} // or import logo
                height={70}
                width={160}
              />
            </a>
          </div>
          <div className="bar-menu" onClick={toggleMobileNav}>
            <i className="fa-solid fa-bars">
              <FaBarsStaggered size={30} />
            </i>
          </div>
        </div>
        <nav className="navbar" style={{ marginBottom: "-16px" }}>
          <ul className="navbar-links">
            {navLinks.map((item) => (
              <li className="navbar-dropdown" key={item.label}>
                {item.path.startsWith("/") ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  <a href={item.path}>{item.label}</a>
                )}
                {item.badge && <span>{item.badge}</span>}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-search">
          <PiHeadset color="#24965e" size={60} />{" "}
          <a
            style={{ textDecoration: "none" }}
            href="callto:+233(0) 545-822-539"
          >
            +233(0) 545-822-539
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
