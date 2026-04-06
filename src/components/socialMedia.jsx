import { FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="">
      <ul className="social-media">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f icon">
              <FaFacebookF />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter icon">
              <FaTwitter />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin">
              <FaTiktok />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}
