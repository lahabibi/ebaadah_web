import { Link } from "react-router-dom";
import msjid from "../assets/images/masjid.png";

export default function DonationMosque() {
  return (
    <>
      <section className="masjid" style={{ backgroundImage: `url(${msjid})` }}>
        <div className="container">
          <div className="row">
            <div className="masjid-text">
              <h3>
                Help ebaadah reach <span>Communities</span>
              </h3>
              <p>Your donations will help build more features for ebaadah.</p>
              <Link
                to="/stripe-donate"
                className="btn"
                style={{ backgroundColor: "#fbc509" }}
              >
                Support The App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
