import React from "react";
import { Link } from "gatsby";
import "../css/main.css";
import image1 from "../img/images1.png";
import star from "../img/star.png";
import Layout from "../css/Layout";
import "../css/index.css";
import { ExampleButton } from "../css/button";
// for the react icon
//-------------------------------------------------------------------------------------

import { BiSupport } from "react-icons/Bi";
import { AiFillSetting } from "react-icons/ai";

import { FiServer } from "react-icons/Fi";
import { MdPayment } from "react-icons/md";
import { VscLayersActive } from "react-icons/Vsc";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

// import { FiAlignJustify } from "react-icons/fi";
// upper line for react icon
//---------------------------------------------------------------------------------------
export default function Home() {
  return (
    <Layout>
      {/* first div for just to put all content in one box */}
      <div>
        <div className="home1">
          <div className="home5">
            <p className="home2">
              Managed IT Services
              <br /> Built For Australian Business
            </p>
            <p className="home3">
              Transform your business today with ICTHUB, your comprehensive
              source for communication, IT, voice, and cloud-based solutions.
            </p>
            {/* <FiAlignJustify /> */}
            {/* upper code for hamburger icon form react */}
            <div className="list" style={{ paddingLeft: "60px" }}>
              <ul>
                <li>
                  <ExampleButton style={{ backgroundColor: "#1BB4E9" }}>
                    <Link to="/contact" style={{ color: "white" }}>
                      contact
                    </Link>
                  </ExampleButton>
                </li>

                <li>
                  <ExampleButton>
                    <Link to="/contact" style={{ color: "#1BB4E9" }}>
                      contact
                    </Link>
                  </ExampleButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        <div className="home4">
          <p style={{ color: "" }}>
            Your All Inclusive Partner For IT, Communications & Technology
            Solutions.
          </p>
        </div>
        <div className="home6">
          <div className="home7">
            <center>
              Why Choose
              <br /> ICTHUB
            </center>
          </div>
          <div className="home8">
            A robust, reliable network is more critical than ever. Your team
            needs to stay connected while navigating through the COVID-19
            pandemic.
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        {/* for the blockof ict hub down */}
        <div className="home9">
          <div className="home10">
            <h3>Managed Communications</h3>
            <p>
              Bring your team together! Easy set-up and management for Microsoft
              Teams Collaboration tools, CRM, and business app integrations.
            </p>
          </div>

          <div className="home10">
            <h3>Cyber Security</h3>
            <p>
              Our experts have decades of experience maintaining business
              systems using best security practices for dozens of high-profile
              firms.
            </p>
          </div>

          <div className="home10">
            <h3>Cloud Solutions </h3>
            <p>
              Migrating data and communications to the cloud can be complex and
              tedious; our professionals will seamlessly optimize and manage
              your network.
            </p>
          </div>

          <div className="home10">
            <h3>IT Support </h3>
            <p>
              We offer one point of contact for all your IT solutions. You can
              contact your local dedicated ICTHUB representative 24 hours a day,
              7 days a week.
            </p>
          </div>

          <div className="home10">
            <h3>Network Oversight </h3>
            <p>
              Modern businesses are dependent on reliable network connectivity;
              ICTHUB offers lightning-fast internet, fibre, ethernet, and 4G/5G
              mobile broadband solutions.
            </p>
          </div>

          <div className="home10">
            <h3>Voice and Mobility </h3>
            <p>
              ICTHUB offers seamless set-up and management over all voice
              communication, including MS Team Calling, SIP trunking, virtual
              mobile numbers, virtual fax, and inbound business numbers.
            </p>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        {/* For the review part */}
        <div>
          <div className="home11">
            <center>
              <h3>
                Our Customer
                <br /> Success Stories
              </h3>
              <p>
                We take pride in helping fellow Kiwis improve their network and
                utilize IT solutions, see what they are saying about ICTHUB
              </p>
            </center>
          </div>
          <div className="home12">
            <div className="home13">
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <p>
                Bring your team together! Easy set-up and management for
                Microsoft Teams Collaboration tools.
              </p>
            </div>

            <div className="home13">
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <p>
                Bring your team together! Easy set-up and management for
                Microsoft Teams Collaboration tools.
              </p>
            </div>

            <div className="home13">
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <p>
                Bring your team together! Easy set-up and management for
                Microsoft Teams Collaboration tools.
              </p>
            </div>

            <div className="home13">
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <img src={star} alt="r" />
              <p>
                Bring your team together! Easy set-up and management for
                Microsoft Teams Collaboration tools.
              </p>
            </div>
            {/* put image for smaller screen */}
            {/* <img className="imagebehind" src={image1} alt="image1" /> */}
          </div>

          {/* down div for review part */}
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        {/* down part for --- Turn Key Solutions From the ICTHUB */}
        <div className="key">
          <h2>Turn Key Solutions From the ICTHUB</h2>
        </div>
        <div className="home14">
          <div className="home15">
            <h1>
              <BiSupport />
            </h1>
            <p>Local Support</p>
          </div>
          <div className="home15">
            <h1>
              <AiFillSetting />
            </h1>
            <p>Easy Set-Up</p>
          </div>
          <div className="home15">
            <h1>
              <FiServer />
            </h1>
            <p>System Management</p>
          </div>
          <div className="home15">
            <h1>
              <VscLayersActive />
            </h1>
            <p>Transparency </p>
          </div>
          <div className="home15">
            <h1>
              <MdPayment />
            </h1>
            <p> Fixed Payments</p>
          </div>
          <div className="home15">
            <h1>
              <MdOutlineConnectWithoutContact />
            </h1>
            <p> One Point of Contact</p>
          </div>
        </div>
        <hr />

        {/*------------ upper div for Turn Key Solutions From the ICTHUB  ----finish */}
        {/* ------------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------------ */}
        {/* -----------down div for Stop Dealing With Multiple Vendors  ---- */}
        <div className="home16">
          <h4>Stop Dealing With Multiple Vendors</h4>
          <p>
            Experience One Point of Contact for IT, Communications & Technology
            Solutions.
          </p>
        </div>
        <div className="home17">
          <p>
            Our clients are given a dedicated account manager based in Australia
            to walk them through every step of the turn key process. From the
            initial set-up to discussing options to help your business scale,
            ICTHUB is the only number you need to call.
          </p>
        </div>
        <div className="keybtn">
          <button>
            <Link to="#">Choose ICTHUB for Turn Key</Link>

            <FaArrowRight
              style={{
                fontSize: "18px",
                color: "white",
                paddingLeft: "10px",
              }}
            />
          </button>
        </div>
        {/*------------ upper div for Stop Dealing With Multiple Vendors   ---------finish*/}
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        {/* -----------down div for schedule for consultation  ---- */}
        <div className="home18">
          {/* for image less than 750px screen*/}

          <div id="smallright">
            <img src={image1} alt="s" />
          </div>

          {/* for content */}
          <div id="left">
            <h5>
              Schedule a Free Consultation With One of Our IT Professionals.
            </h5>
            <p>
              We can evaluate your business and propose a custom plan forward to
              help your company scale with our wide range of IT solutions.
            </p>
            <button>
              <Link to="#">Request a Consultation</Link>
              <FaArrowRight
                style={{
                  fontSize: "18px",
                  color: "white",
                  paddingLeft: "10px",
                }}
              />
            </button>
          </div>

          {/* for image */}

          <div id="right">
            <img src={image1} alt="r" />
          </div>
        </div>

        {/*------------ upper div for schedule a free consultation    ---------finish*/}
        {/* --------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------- */}
        {/* -----------down div for partners  ---- */}

        <div className="home19">
          <p>
            We’ve partnered with small, local firms and globally recognized
            corporations. Our past clients demonstrate ICTHUB’s ability to
            handle local accounts and offer them the capability to scale.
          </p>
          <div className="home20">
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />

            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
            <img src={image1} alt="partners" />
          </div>
        </div>
        {/* -----------upper div for partners ------finish  ---- */}
        {/* --------------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------------- */}
        {/* -----------down div for blogs ------finish  ---- */}

        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
        <div className="home22">
          <div id="left">
            <button>BLOG</button>
            <p>Check Our New Blog</p>
          </div>
          {/* ------------------------ */}

          <div id="right">
            <button>Go to Our Blog</button>
          </div>
        </div>

        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
        <div className="blog">
          <div className="blog1">
            <img src={image1} alt="blog " />
            <h3>Managed Communications</h3>
            <p>
              Bring your team together! Easy set-up and management for Microsoft
              Teams Collaboration tools, CRM, and business app integrations.
            </p>
            <Link to="#">
              Read more...
              <FaArrowRight />
            </Link>
          </div>

          <div className="blog1">
            <img src={image1} alt="blog " />
            <h3>Cyber Security</h3>
            <p>
              Our experts have decades of experience maintaining business
              systems using best security practices for dozens of high-profile
              firms.
            </p>
            <Link to="#">
              Read more...
              <FaArrowRight />
            </Link>
          </div>

          <div className="blog1">
            <img src={image1} alt="blog " />
            <h3>Cloud Solutions </h3>
            <p>
              Migrating data and communications to the cloud can be complex and
              tedious; our professionals will seamlessly optimize and manage
              your network.
            </p>
            <Link to="#">
              Read more...
              <FaArrowRight />
            </Link>
          </div>

          <div className="blog1">
            <img src={image1} alt="blog " />
            <h3>IT Support </h3>
            <p>
              We offer one point of contact for all your IT solutions. You can
              contact your local dedicated ICTHUB representative 24 hours a day,
              7 days a week.
            </p>
            <Link to="#">
              Read more...
              <FaArrowRight />
            </Link>
          </div>

          <div className="blog1">
            <img src={image1} alt="blog " />
            <h3>Network Oversight </h3>
            <p>
              Modern businesses are dependent on reliable network connectivity;
              ICTHUB offers lightning-fast internet, fibre, ethernet, and 4G/5G
              mobile broadband solutions.
            </p>
            <Link to="#">
              Read more...
              <FaArrowRight />
            </Link>
          </div>

          <div className="blog1">
            <img src={image1} alt="blog " />
            <h3>Voice and Mobility </h3>
            <p>
              ICTHUB offers seamless set-up and management over all voice
              communication, including MS Team Calling, SIP trunking, virtual
              mobile numbers, virtual fax, and inbound business numbers.
            </p>
            <Link to="#">
              Read more...
              <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* -----------upper div for blogs ------finish  ---- */}

        {/* ---------------------************************************---------------------------------- */}
        {/* 
        down div is the first div for the content to put in one box        
        */}
      </div>
    </Layout>
  );
}
