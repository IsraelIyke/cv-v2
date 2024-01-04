"use client";
// Import necessary modules and components
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/app/Components/nav";
import SideBar from "@/app/Components/sidebar";

const Skills = () => {
  // State for skills and languages
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

  const [languages, setLanguages] = useState(["", "", "", ""]);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("skills")) || {};
    setSkills(storedSkills.skills || [...skills]);

    const storedLanguages = JSON.parse(localStorage.getItem("languages")) || {};
    setLanguages(storedLanguages.languages || [...languages]);
  }, []);

  // Update localStorage when "Next" or "Prev" button is clicked
  const handleButtonClick = () => {
    const skillsInfo = { skills };
    const languagesInfo = { languages };

    localStorage.setItem("skills", JSON.stringify(skillsInfo));
    localStorage.setItem("languages", JSON.stringify(languagesInfo));
  };

  // Update skill at a specific index
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  // Update language at a specific index
  const handleLanguageChange = (index, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = value;
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <div className="pt-[6rem]"></div>
      <div className="relative flex flex-col md:flex-row py-[0rem] md:py-[2rem] px-[0.5rem] md:px-[10rem]">
        {/* Sidebar */}
        <SideBar />

        {/* Skills and Languages Form */}
        <div className="w-[95vw] md:w-[65vw] max-h-fit min-h-[70vh] shadow-xl ml-[0rem] md:ml-[1rem] rounded-[16px] px-[0.5rem] md:px-[3rem] pt-[2rem]">
          <div>
            <h3 className="mb-[1rem] font-[600]">Skills</h3>
          </div>

          {/* Skills Form */}
          <div className="grid grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="mb-[1rem]">
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[10rem] md:w-[11rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-[1rem] font-[600]">Languages</h3>
          </div>
          {/* Languages Form */}
          <div className="grid grid-cols-2">
            {languages.map((language, index) => (
              <div key={index} className="mb-[1rem]">
                <input
                  className="bg-[#F0F0F0] border-[#B1B1B1] border-[1px] py-[0.3rem] px-[0.2rem] w-[10rem] md:w-[11rem] mb-[1rem] rounded-[0.2rem] text-[0.9rem]"
                  type="text"
                  placeholder={`Language ${index + 1}`}
                  value={language}
                  onChange={(e) => handleLanguageChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Link href="/resume/contact">
              <button
                className="bg-[#FF5C00] hover:bg-orange-800 py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mb-[1rem]"
                onClick={handleButtonClick}
              >
                Prev
              </button>
            </Link>
            <Link href="/resume/template">
              <button
                className="bg-[#FF5C00] hover:bg-orange-800 py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mb-[1rem]"
                onClick={handleButtonClick}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
