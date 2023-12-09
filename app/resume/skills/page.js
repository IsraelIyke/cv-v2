"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/app/Components/nav";
import Footer from "@/app/Components/footer";
import SideBar from "@/app/Components/sidebar";

const Skills = () => {
  const [skills, setSkills] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("skills")) || {};
    setSkills(storedData.skills || [...skills]);
  }, []);

  // Update localStorage when "Next" or "Prev" button is clicked
  const handleButtonClick = () => {
    const skillsInfo = { skills };
    localStorage.setItem("skills", JSON.stringify(skillsInfo));
  };

  // Update skill at a specific index
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  return (
    <div>
      <Nav />
      <div className="relative flex flex-col md:flex-row py-[0rem] md:py-[2rem] px-[0.5rem] md:px-[10rem]">
        <SideBar />
        <div className="w-[65vw] max-h-fit min-h-[70vh] shadow-xl ml-[1rem] rounded-[16px] px-[3rem] pt-[2rem]">
          <div>
            <h3 className="mb-[1rem] font-[600]">Skills</h3>
          </div>

          <div className="grid grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="mb-[1rem]">
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[15rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Link href="/resume/contact">
              <button
                className=" bg-[#FF5C00] py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mb-[1rem]"
                onClick={handleButtonClick}
              >
                Prev
              </button>
            </Link>
            <Link href="/resume/template">
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

export default Skills;
