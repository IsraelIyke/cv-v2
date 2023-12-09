"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/app/Components/nav";
import Footer from "@/app/Components/footer";
import SideBar from "@/app/Components/sidebar";

export default function Info() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [about, setAbout] = useState("");

  // Fetch data from localStorage only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("personalInfo")) || {};
      setFirstName(storedData.firstName || "");
      setLastName(storedData.lastName || "");
      setProfession(storedData.profession || "");
      setAddress(storedData.address || "");
      setCity(storedData.city || "");
      setState(storedData.state || "");
      setZipCode(storedData.zipCode || "");
      setAbout(storedData.about || "");
    }
  }, []);

  // Update localStorage when "Next" or "Prev" button is clicked
  const handleButtonClick = () => {
    const personalInfo = {
      firstName,
      lastName,
      profession,
      address,
      city,
      state,
      zipCode,
      about,
    };
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  };

  return (
    <div>
      <Nav />
      <div className="relative flex flex-col md:flex-row py-[0rem] md:py-[2rem] px-[0.5rem] md:px-[10rem]">
        <SideBar />

        <div className="w-[95vw] min-h-[100vh] max-h-fit md:w-[65vw] md:h-[100vh] shadow-xl ml-[0rem] md:ml-[1rem] rounded-[16px] px-[1rem] md:px-[3rem] pt-[2rem]">
          <div>
            <h3 className="mb-[1rem] font-[600]">Personal Information</h3>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <label className="text-[0.9rem] font-[600]">First Name</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[15rem] rounded-[0.2rem] text-[0.9rem] mb-[1rem] md:mb-[0]"
                placeholder="First Name"
                value={firstName}
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[0.9rem] font-[600]">Last Name</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[15rem]  rounded-[0.2rem] text-[0.9rem]"
                placeholder="Last Name"
                value={lastName}
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between  flex-col md:flex-row  mt-[1.5rem]">
            <div className="flex flex-col">
              <label className="text-[0.9rem] font-[600]">Profession</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem]  w-[100%] md:w-[15rem]  mb-[1rem] md:mb-[0] rounded-[0.2rem] text-[0.9rem]"
                placeholder="Profession"
                value={profession}
                name="profession"
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[0.9rem] font-[600]">Address</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[15rem]  rounded-[0.2rem] text-[0.9rem]"
                placeholder="Address"
                value={address}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between mt-[1.5rem]">
            <div className="flex flex-col">
              <label className="text-[0.9rem] font-[600]">City</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem]  w-[100%] md:w-[10rem]  rounded-[0.2rem] text-[0.9rem]"
                placeholder="City"
                value={city}
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[0.9rem] font-[600]">State</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem]  w-[100%] md:w-[10rem]  rounded-[0.2rem] text-[0.9rem]"
                placeholder="State"
                value={state}
                name="state"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[0.9rem] font-[600]">Zip Code</label>
              <input
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[10rem]  rounded-[0.2rem] text-[0.9rem]"
                placeholder="Zip Code"
                value={zipCode}
                name="zipCode"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-[1.5rem]">
              <label className="text-[0.9rem] font-[600]">About</label>
              <textarea
                className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] h-[10rem] rounded-[0.2rem] text-[0.9rem]"
                placeholder="About"
                value={about}
                name="about"
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex justify-between">
            <Link href="/resume">
              <button
                className=" bg-[#FF5C00] py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mt-[2rem]"
                onClick={handleButtonClick}
              >
                Prev
              </button>
            </Link>
            <Link href="/resume/education">
              <button
                className=" bg-[#FF5C00] py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mt-[2rem]"
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
}
