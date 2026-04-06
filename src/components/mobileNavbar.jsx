import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const MobileNavbar = ({ navLinks, isOpen, closeMobileNav, logo }) => {
  return (
    <div className={`mobile-nav hmburger-menu ${isOpen ? "open" : ""}`}>
      {/* <div className="res-log">
        <a href="/">
          <img
            src={logo}
            height={70}
            width={160}
            alt="Responsive Logo"
            className="white-logo"
          />
        </a>
      </div> */}
      <div className="res-log mobile-nav-header">
        <a href="/">
          <img
            src={logo}
            height={70}
            width={160}
            alt="Responsive Logo"
            className="white-logo"
          />
        </a>

        <button type="button" id="res-cross" onClick={closeMobileNav}>
          <IoCloseSharp size={30} />
        </button>
      </div>
      <ul>
        {navLinks.map((item) => (
          <li className="menu-item-has-children" key={item.label}>
            {item.path.startsWith("/") ? (
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
                onClick={closeMobileNav}
              >
                {item.label}
              </Link>
            ) : (
              <a
                style={{ textDecoration: "none" }}
                href={item.path}
                onClick={closeMobileNav}
              >
                {item.label}
              </a>
            )}
            {item.badge && <span>{item.badge}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
