"use client";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import Nav from "./nav";

const DownloadImageComponent = () => {
  const divRef = useRef(null);

  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage for each section on component mount
    const storedPersonalInfo =
      JSON.parse(localStorage.getItem("personalInfo")) || {};
    setPersonalInfo(storedPersonalInfo);

    const storedEducationInfo =
      JSON.parse(localStorage.getItem("educationInfo")) || {};
    setEducationInfo(storedEducationInfo);

    const storedExperienceInfo =
      JSON.parse(localStorage.getItem("experienceInfo")) || {};
    setExperienceInfo(storedExperienceInfo.experiences);

    const storedContactInfo =
      JSON.parse(localStorage.getItem("contactInfo")) || {};
    setContactInfo(storedContactInfo);

    const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    setSkills(storedSkills.skills);
  }, []);
  // console.log(experienceInfo[0].companyName);
  const handleDownload = () => {
    html2canvas(divRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL();
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "div_image.png";
      a.click();
    });
  };

  return (
    <div>
      <Nav />

      <div ref={divRef} className=" relative  w-[595px] h-[842px]">
        <img
          src="/Template/Template1.png"
          width={1000}
          height={1000}
          className=" absolute w-[100%] h-[100%] -z-10"
        />
        <div className="relative w-[100%] h-[100%] flex items-center py-[1.7rem]">
          {/* left */}
          <div className="w-[40%] h-[100%] pl-[2.2rem] pr-[0.9rem] text-[white]">
            <div className=" bg-[white] w-[10rem] h-[10rem]"></div>

            <div className="text-[0.6rem] font-[700]">
              <p className="text-[0.9rem] font-[800] uppercase mt-[2rem]">
                CONTACT ME
              </p>
              <p className=" mb-[0.2rem]">Phone: +2348012345678</p>
              <p className=" mb-[0.2rem]">Email: resume@resume.com</p>
              <p className=" mb-[0.2rem]">Address: {personalInfo.address}</p>
              <p className="text-[0.9rem] font-[800] uppercase mt-[1rem]">
                PROFILE
              </p>
              <p className=" mb-[0.2rem]">Portfolio: resume.portfolio.com</p>
              <p className=" mb-[0.2rem]">
                Linkedin: https://www.linkedin.com/in/resume1
              </p>
              <p className=" mb-[0.2rem]">Github: github.com/Resume</p>
              <p className="text-[0.9rem] font-[800] uppercase mt-[1rem]">
                EDUCATION
              </p>
              <p className=" ">UNIVERSITY OF NIGERIA</p>
              <p className=" text-[0.5rem]">Computer Science</p>
              <p className="text-[0.5rem] mb-[0.4rem]">1999 - 2004</p>

              <p className="text-[0.9rem] font-[800] uppercase mt-[1rem]">
                REFERENCE
              </p>
              <p>Jane Doe</p>
              <p className="text-[0.5rem] mb-[0.4rem]">TEL: +2348012345678</p>
              <p>Jane Doe</p>
              <p className="text-[0.5rem] mb-[0.4rem]">TEL: +2348012345678</p>
              <p>Jane Doe</p>
              <p className="text-[0.5rem] mb-[0.4rem]">TEL: +2348012345678</p>
              <p>John Doe</p>
              <p className="text-[0.5rem] mb-[0.4rem]">TEL: +2348012345678</p>
              <p className="text-[0.9rem] font-[800] uppercase mt-[1rem]">
                LANGUAGE
              </p>
              <p className="mt-[0.3rem] mb-[0.2rem]">IGBO</p>
              <p className="mb-[0.2rem]">HAUSA</p>
              <p className="mb-[0.2rem]">YORUBA</p>
              <p className="mb-[0.2rem]">ENGLISH</p>
              <p className="mb-[0.2rem]">FRENCH</p>
            </div>
          </div>
          {/* right */}
          <div className="w-[60%] h-[100%]  pl-[2.5rem] pr-[0.9rem] ">
            <p className="text-[1.8rem] font-[600] uppercase">
              {personalInfo.lastName}{" "}
              <span className="text-[orange] uppercase">
                {personalInfo.firstName}
              </span>
            </p>
            <p className="text-[0.78rem] font-[400]">
              {personalInfo.profession}
            </p>
            <p className="text-[0.9rem] font-[800] uppercase mt-[1rem]">
              About Me
            </p>
            <p className="text-[0.66rem] font-[400] mt-[0.5rem]">
              {personalInfo.about}
            </p>
            <p className="text-[0.9rem] font-[800] uppercase mt-[1.2rem]">
              PROJECTS/JOB EXPERIENCE
            </p>
            <p className="uppercase mt-[0.2rem] flex justify-between items-end">
              <p className="text-[0.7rem] font-[600]">
                ASSIST. FRONTEND TEAM LEAD
              </p>
              <p className="text-[0.6rem] ">OCT 23 - PRESENT</p>
            </p>
            <p className="text-[0.6rem] text-[gray]">cs/Nigeria</p>
            <ul className="text-[0.6rem] mb-[0.4rem]">
              <li>
                ◽ Monitored and reported project progress, identifying and
                mitigating risks to ensure successful project completion
              </li>
              <li>
                ◽ Assisted in leading frontend project team in planning,
                execution, and delivery of software projects
              </li>
            </ul>

            <p className="uppercase mt-[0.2rem] flex justify-between items-end">
              <p className="text-[0.7rem] font-[600]">
                ASSIST. FRONTEND TEAM LEAD
              </p>
              <p className="text-[0.6rem] ">OCT 23 - PRESENT</p>
            </p>
            <p className="text-[0.6rem] text-[gray]">cs/Nigeria</p>
            <ul className="text-[0.6rem] mb-[0.4rem]">
              <li>
                ◽ Monitored and reported project progress, identifying and
                mitigating risks to ensure successful project completion
              </li>
              <li>
                ◽ Assisted in leading frontend project team in planning,
                execution, and delivery of software projects
              </li>
            </ul>
            <p className="uppercase mt-[0.2rem] flex justify-between items-end">
              <p className="text-[0.7rem] font-[600]">
                ASSIST. FRONTEND TEAM LEAD
              </p>
              <p className="text-[0.6rem] ">OCT 23 - PRESENT</p>
            </p>
            <p className="text-[0.6rem] text-[gray]">cs/Nigeria</p>
            <ul className="text-[0.6rem] mb-[0.4rem]">
              <li>
                ◽ Monitored and reported project progress, identifying and
                mitigating risks to ensure successful project completion
              </li>
              <li>
                ◽ Assisted in leading frontend project team in planning,
                execution, and delivery of software projects
              </li>
            </ul>
            <p className="uppercase mt-[0.2rem] flex justify-between items-end">
              <p className="text-[0.7rem] font-[600]">
                ASSIST. FRONTEND TEAM LEAD
              </p>
              <p className="text-[0.6rem] ">OCT 23 - PRESENT</p>
            </p>
            <p className="text-[0.6rem] text-[gray]">cs/Nigeria</p>
            <ul className="text-[0.6rem] mb-[0.4rem]">
              <li>
                ◽ Monitored and reported project progress, identifying and
                mitigating risks to ensure successful project completion
              </li>
              <li>
                ◽ Assisted in leading frontend project team in planning,
                execution, and delivery of software projects
              </li>
            </ul>
            <p className="text-[0.9rem] font-[800] uppercase mt-[1.2rem]">
              Skills
            </p>
            <div className=" grid grid-cols-2 text-[0.56rem] uppercase mt-[0.4rem]">
              <p className="">HTML/CSS/JS</p>
              <p className="">COLLABORATION</p>
              <p className="">VERSION CONTROL/GIT</p>
              <p className="">RESPONSIVE DESIGN</p>
              <p className="">REACT/NEXT JS</p>
              <p className="">TAILWIND CSS</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleDownload}>Download as Image</button>

      <div>
        <div className="relative flex py-[2rem] px-[10rem]">
          <div className="w-[65vw] max-h-fit min-h-[70vh] shadow-xl ml-[1rem] rounded-[16px] px-[3rem] pt-[2rem]">
            <div>
              <h3 className="mb-[1rem] font-[600]">Personal Information</h3>
              <p>
                Name: {personalInfo.firstName} {personalInfo.lastName}
              </p>
              <p>Profession: {personalInfo.profession}</p>
              <p>address: {personalInfo.address}</p>
              <p>about: {personalInfo.about}</p>
            </div>

            <div>
              <h3 className="mb-[1rem] font-[600]">Education Information</h3>
              <p>Institution 1: {educationInfo.institution1}</p>
              <p>Course 1: {educationInfo.course1}</p>
              <p>start 1: {educationInfo.start1}</p>
              <p>finish 1: {educationInfo.finish1}</p>
              <br />
              <p>Institution 2: {educationInfo.institution2}</p>
              <p>Course 2: {educationInfo.course2}</p>
              <p>start 2: {educationInfo.start2}</p>
              <p>finish 2: {educationInfo.finish2}</p>
            </div>

            <div>
              <h3 className="mb-[1rem] font-[600]">Experience Information</h3>
              {experienceInfo[0] != undefined ? (
                <div>
                  <h3>Experience 1</h3>
                  <p>{experienceInfo[0].companyName}</p>
                  <p>{experienceInfo[0].role}</p>
                  <p>{experienceInfo[0].location}</p>
                  <p>{experienceInfo[0].achievements}</p>
                  <p>{experienceInfo[0].start}</p>
                  <p>{experienceInfo[0].finish}</p>
                  <br />
                  <h3>Experience 2</h3>
                  <p>{experienceInfo[1].companyName}</p>
                  <p>{experienceInfo[1].role}</p>
                  <p>{experienceInfo[1].location}</p>
                  <p>{experienceInfo[1].achievements}</p>
                  <p>{experienceInfo[1].start}</p>
                  <p>{experienceInfo[1].finish}</p>
                  <br />
                  <h3>Experience 3</h3>
                  <p>{experienceInfo[2].companyName}</p>
                  <p>{experienceInfo[2].role}</p>
                  <p>{experienceInfo[2].location}</p>
                  <p>{experienceInfo[2].achievements}</p>
                  <p>{experienceInfo[2].start}</p>
                  <p>{experienceInfo[2].finish}</p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              <h3 className="mb-[1rem] font-[600]">Contact Information</h3>
              <p>Email: {contactInfo.email}</p>
              <p>Phone Number: {contactInfo.phoneNumber}</p>
              <p>linkedin: {contactInfo.linkedin}</p>
              <p>Portfolio: {contactInfo.portfolio}</p>
              <p>GitHub: {contactInfo.github}</p>
            </div>

            <div>
              <h3 className="mb-[1rem] font-[600]">Skills</h3>
              <p> {skills[0]}</p>
              <p> {skills[1]}</p>
              <p> {skills[2]}</p>
              <p> {skills[3]}</p>
              <p> {skills[4]}</p>
              <p> {skills[5]}</p>
              <p> {skills[6]}</p>
              <p> {skills[7]}</p>
              <p> {skills[8]}</p>
              <p> {skills[9]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadImageComponent;
