"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/app/Components/nav";
import Footer from "@/app/Components/footer";
import SideBar from "@/app/Components/sidebar";

const ContactInfo = () => {
  // Contact Information
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [github, setGithub] = useState("");

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("contactInfo")) || {};
    setEmail(storedData.email || "");
    setPhoneNumber(storedData.phoneNumber || "");
    setLinkedin(storedData.linkedin || "");
    setPortfolio(storedData.portfolio || "");
    setGithub(storedData.github || "");
  }, []);

  // Update localStorage when "Next" or "Prev" button is clicked
  const handleButtonClick = () => {
    const contactInfo = { email, phoneNumber, linkedin, portfolio, github };
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
  };

  return (
    <div>
      <Nav />
      <div className=" pt-[6rem]"></div>
      <div className="relative flex flex-col md:flex-row py-[0rem] md:py-[2rem] px-[0.5rem] md:px-[10rem]">
        <SideBar />
        <div className="w-[95vw] md:w-[65vw] max-h-fit min-h-[70vh] ml-[0rem] md:ml-[1rem] rounded-[16px]  px-[0.5rem] md:px-[3rem] pt-[2rem]">
          <div>
            <h3 className="mb-[1rem] font-[600]">Contact Information</h3>
          </div>
          <div className="flex  flex-col md:flex-row justify-between">
            <div className="flex flex-col mb-[1rem]">
              <label className="text-[0.9rem] font-[600]">Email Address</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-[1rem]">
              <label className="text-[0.9rem] font-[600]">Phone Number</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex  flex-col md:flex-row  justify-between">
            <div className="flex flex-col mb-[1rem]">
              <label className="text-[0.9rem] font-[600]">
                LinkedIn Profile
              </label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                type="text"
                placeholder="LinkedIn Profile"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-[1rem]">
              <label className="text-[0.9rem] font-[600]">Portfolio Link</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                type="text"
                placeholder="Portfolio Link"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
              />
            </div>
          </div>
          <div className="flex  flex-col md:flex-row  justify-between">
            <div className="flex flex-col mb-[1rem]">
              <label className="text-[0.9rem] font-[600]">GitHub Profile</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                type="text"
                placeholder="GitHub Profile"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Link href="/resume/experience">
              <button
                className=" bg-[#FF5C00] hover:bg-orange-800 py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mt-[2rem]"
                onClick={handleButtonClick}
              >
                Prev
              </button>
            </Link>
            <Link href="/resume/skills">
              <button
                className=" bg-[#FF5C00] hover:bg-orange-800 py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mt-[2rem]"
                onClick={handleButtonClick}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactInfo;
