"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/app/Components/nav";
import Footer from "@/app/Components/footer";
import SideBar from "@/app/Components/sidebar";

const EducationInfo = () => {
  // Education Information
  const [institution1, setInstitution1] = useState("");
  const [course1, setCourse1] = useState("");
  const [start1, setStart1] = useState("");
  const [finish1, setFinish1] = useState("");

  const [institution2, setInstitution2] = useState("");
  const [course2, setCourse2] = useState("");
  const [start2, setStart2] = useState("");
  const [finish2, setFinish2] = useState("");

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("educationInfo")) || {};
    setInstitution1(storedData.institution1 || "");
    setCourse1(storedData.course1 || "");
    setStart1(storedData.start1 || "");
    setFinish1(storedData.finish1 || "");

    setInstitution2(storedData.institution2 || "");
    setCourse2(storedData.course2 || "");
    setStart2(storedData.start2 || "");
    setFinish2(storedData.finish2 || "");
  }, []);

  // Update localStorage when "Next" or "Prev" button is clicked
  const handleButtonClick = () => {
    const educationInfo = {
      institution1,
      course1,
      start1,
      finish1,
      institution2,
      course2,
      start2,
      finish2,
    };
    localStorage.setItem("educationInfo", JSON.stringify(educationInfo));
  };

  return (
    <div>
      <Nav />
      <div className="relative flex flex-col md:flex-row py-[0rem] md:py-[2rem] px-[0.5rem] md:px-[10rem]">
        <SideBar />
        <div className="w-[65vw] h-[80vh] shadow-xl ml-[1rem] rounded-[16px] px-[3rem] pt-[2rem]">
          <div>
            <h3 className="mb-[1rem] font-[600]">Education Information</h3>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <h4 className="mb-[0.6rem]">
                Education 1 <span className=" text-[red]">*</span>
              </h4>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Institution</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Institution"
                  value={institution1}
                  onChange={(e) => setInstitution1(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Course</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Course"
                  value={course1}
                  onChange={(e) => setCourse1(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Start Date</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Start Date"
                  value={start1}
                  onChange={(e) => setStart1(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Finish Date</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Finish Date"
                  value={finish1}
                  onChange={(e) => setFinish1(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-[0.6rem]">Education 2</h4>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Institution</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Institution"
                  value={institution2}
                  onChange={(e) => setInstitution2(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Course</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Course"
                  value={course2}
                  onChange={(e) => setCourse2(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Start Date</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Start Date"
                  value={start2}
                  onChange={(e) => setStart2(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[0.9rem] font-[600]">Finish Date</label>
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder="Finish Date"
                  value={finish2}
                  onChange={(e) => setFinish2(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className=" flex justify-between">
            <Link href="/resume/personal-info">
              <button
                className=" bg-[#FF5C00] py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mt-[2rem]"
                onClick={handleButtonClick}
              >
                Prev
              </button>
            </Link>
            <Link href="/resume/experience">
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
      <Footer />
    </div>
  );
};

export default EducationInfo;
