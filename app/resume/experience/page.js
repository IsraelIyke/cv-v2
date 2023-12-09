"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/app/Components/nav";
import Footer from "@/app/Components/footer";
import SideBar from "@/app/Components/sidebar";

const ExperienceInfo = () => {
  // Experience Information
  const [experiences, setExperiences] = useState([
    {
      companyName: "",
      role: "",
      location: "",
      start: "",
      finish: "",
      isCurrentlyWorking: false,
      achievements: "",
    },
    {
      companyName: "",
      role: "",
      location: "",
      start: "",
      finish: "",
      isCurrentlyWorking: false,
      achievements: "",
    },
    {
      companyName: "",
      role: "",
      location: "",
      start: "",
      finish: "",
      isCurrentlyWorking: false,
      achievements: "",
    },
  ]);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("experienceInfo")) || {};
    setExperiences(storedData.experiences || [...experiences]);
  }, []);

  // Update localStorage when "Next" or "Prev" button is clicked
  const handleButtonClick = () => {
    const experienceInfo = { experiences };
    localStorage.setItem("experienceInfo", JSON.stringify(experienceInfo));
  };

  // Update finish date based on checkbox
  const handleCheckboxChange = (index, e) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].isCurrentlyWorking = e.target.checked;
    updatedExperiences[index].finish = e.target.checked ? "Present" : "";
    setExperiences(updatedExperiences);
  };

  // Update other input fields
  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  return (
    <div>
      <Nav />
      <div className="relative flex flex-col md:flex-row py-[0rem] md:py-[2rem] px-[0.5rem] md:px-[10rem]">
        <SideBar />
        <div className="w-[95vw] md:w-[65vw] max-h-fit min-h-[70vh] shadow-xl ml-[0rem] md:ml-[1rem] rounded-[16px] px-[0.5rem] md:px-[3rem] pt-[2rem]">
          <div>
            <h3 className="mb-[1rem] font-[600]">Experience Information</h3>
          </div>

          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col mb-[2rem]">
              <h4 className="mb-[0.6rem]">Experience {index + 1}</h4>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col mb-[0rem]">
                  <label className="text-[0.9rem] font-[600]">
                    Company Name
                  </label>
                  <input
                    className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                    type="text"
                    placeholder="Company Name"
                    value={experience.companyName}
                    onChange={(e) =>
                      handleInputChange(index, "companyName", e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col mb-[0rem]">
                  <label className="text-[0.9rem] font-[600]">Role</label>
                  <input
                    className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                    type="text"
                    placeholder="Role"
                    value={experience.role}
                    onChange={(e) =>
                      handleInputChange(index, "role", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row  justify-between">
                <div className="flex flex-col mb-[0rem]">
                  <label className="text-[0.9rem] font-[600]">Location</label>
                  <input
                    className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] md:w-[14rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                    type="text"
                    placeholder="Location"
                    value={experience.location}
                    onChange={(e) =>
                      handleInputChange(index, "location", e.target.value)
                    }
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col mb-[0rem]">
                    <label className="text-[0.9rem] font-[600]">
                      Start Date
                    </label>
                    <input
                      className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[7rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                      type="text"
                      placeholder="Start Date"
                      value={experience.start}
                      onChange={(e) =>
                        handleInputChange(index, "start", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-[0rem]">
                    <label className="text-[0.9rem] font-[600]">
                      Finish Date
                    </label>
                    <input
                      className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[7rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                      type="text"
                      placeholder="Finish Date"
                      value={experience.finish}
                      onChange={(e) =>
                        handleInputChange(index, "finish", e.target.value)
                      }
                      disabled={experience.isCurrentlyWorking}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-[1rem]">
                <input
                  type="checkbox"
                  id={`currentlyWorking${index}`}
                  checked={experience.isCurrentlyWorking}
                  onChange={(e) => handleCheckboxChange(index, e)}
                />
                <label
                  htmlFor={`currentlyWorking${index}`}
                  className="ml-[0.5rem] text-[0.9rem]"
                >
                  Currently Working
                </label>
              </div>
              <div className="flex flex-col mb-[1rem]">
                <label className="text-[0.9rem] font-[600]">Achievements</label>
                <textarea
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[100%] h-[5rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  placeholder="Achievements"
                  value={experience.achievements}
                  onChange={(e) =>
                    handleInputChange(index, "achievements", e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <Link href="/resume/education">
              <button
                className=" bg-[#FF5C00] py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mb-[1rem]"
                onClick={handleButtonClick}
              >
                Prev
              </button>
            </Link>
            <Link href="/resume/contact">
              <button
                className=" bg-[#FF5C00] py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mb-[1rem]"
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

export default ExperienceInfo;
