import React from "react";
import "./footer.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footermain">
      {/* -------------------------------------------------- */}
      <div className="footerform">
        <h3>
          Sign Up Now to see Newest Update about all interesting things from
          ICTHUB.
        </h3>
        <h6>
          Just insert your email into the field below. You already can to know
          update about our interesting topic. What are you waiting for?
        </h6>{" "}
        <form>
          {" "}
          <div className="contactform">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            ></input>
            <button type="submit" class="btn">
              <MdEmail className="icon1" />
            </button>
          </div>
        </form>
        <p>You can Unsubsribe anytime when you feels our notif is diturbing</p>
      </div>
      {/* --------------------------------------------------- */}
      <div className="subfooter">
        <div className="f1">
          <div id="left">
            <h3>icthub</h3>
          </div>
          {/* -------------------------------- */}
          <div id="right">
            <h3>follow us</h3>
            <FaFacebookF />
            <AiFillLinkedin />
            <AiOutlineInstagram />
            <RiYoutubeLine />
          </div>
        </div>
        {/* ---------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Footer;
