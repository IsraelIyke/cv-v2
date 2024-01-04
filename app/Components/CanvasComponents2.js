"use client";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import Link from "next/link";
import Upload from "./Upload";
import Image from "next/image";

const DownloadImageComponent2 = () => {
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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div className=" flex items-center justify-evenly w-screen">
      <Link href="/resume/template">
        <div className="mt-[-8rem] h-[8rem] w-[5rem] border-r-[4rem]  border-r-green-500 border-l-[4rem] border-l-transparent border-t-[4rem]  border-t-transparent border-b-[4rem] border-b-transparent "></div>
      </Link>

      <div className=" flex flex-col justify-center">
        <button
          onClick={handleDownload}
          className=" bg-green-500 py-[0.6rem] mb-[1rem] text-[white] font-[600]"
        >
          Download Resume
        </button>

        <div ref={divRef} className=" relative  w-[595px] h-[842px]">
          <img
            src="/Template/template3d.png"
            width={1000}
            height={1000}
            className=" absolute w-[100%] h-[100%] -z-10"
          />
          <div className="relative w-[100%] h-[100%] flex items-center py-[1.7rem]">
            {/* right */}
            <div className="w-[60%] h-[100%]  pl-[0.5rem] pr-[0.9rem] mt-[3rem] ">
              <div className=" text-center text-[white] mb-[6rem]">
                <p className="text-[1.8rem] font-[300] uppercase">
                  {personalInfo.firstName}
                </p>
                <p className="text-[1.8rem] font-[700] uppercase">
                  {personalInfo.lastName}{" "}
                </p>
                <p className="text-[0.78rem] font-[400] text-gray-700">
                  {personalInfo.profession}
                </p>
              </div>
              <div className=" ml-[2rem] w-[16rem] flex flex-col">
                <p className="text-[0.9rem] font-[800] uppercase mt-[1rem]">
                  Who I am
                </p>
                <p className="text-[0.66rem] font-[400] mt-[0.5rem]">
                  {personalInfo.about}
                </p>
                <p className="text-[0.9rem] font-[800] uppercase mt-[1.2rem]">
                  Work history
                </p>
                {experienceInfo[0] != undefined &&
                experienceInfo[0].role.length > 0 ? (
                  <>
                    <p className="uppercase mt-[0.2rem] flex justify-between items-end">
                      <p className="text-[0.7rem] font-[600]">
                        <p>{experienceInfo[0].role}</p>
                      </p>
                      <p className="text-[0.6rem] ">
                        {" "}
                        {experienceInfo[0].start} - {experienceInfo[0].finish}
                      </p>
                    </p>
                    <p className="text-[0.6rem] text-[gray]">
                      {" "}
                      {experienceInfo[0].companyName}/
                      {experienceInfo[0].location}
                    </p>
                    <p className="text-[0.6rem] mb-[0.4rem]">
                      {experienceInfo[0].achievements}
                    </p>
                  </>
                ) : (
                  ""
                )}
                {experienceInfo[1] != undefined &&
                experienceInfo[1].role.length > 0 ? (
                  <>
                    <p className="uppercase mt-[0.2rem] flex justify-between items-end">
                      <p className="text-[0.7rem] font-[600]">
                        <p>{experienceInfo[1].role}</p>
                      </p>
                      <p className="text-[0.6rem] ">
                        {" "}
                        {experienceInfo[1].start} - {experienceInfo[1].finish}
                      </p>
                    </p>
                    <p className="text-[0.6rem] text-[gray]">
                      {" "}
                      {experienceInfo[1].companyName}/
                      {experienceInfo[1].location}
                    </p>
                    <p className="text-[0.6rem] mb-[0.4rem]">
                      {experienceInfo[1].achievements}
                    </p>
                  </>
                ) : (
                  ""
                )}
                {experienceInfo[2] != undefined &&
                experienceInfo[2].role.length > 0 ? (
                  <>
                    <p className="uppercase mt-[0.2rem] flex justify-between items-end">
                      <p className="text-[0.7rem] font-[600]">
                        <p>{experienceInfo[2].role}</p>
                      </p>
                      <p className="text-[0.6rem] ">
                        {" "}
                        {experienceInfo[2].start} - {experienceInfo[2].finish}
                      </p>
                    </p>
                    <p className="text-[0.6rem] text-[gray]">
                      {" "}
                      {experienceInfo[2].companyName}/
                      {experienceInfo[2].location}
                    </p>
                    <p className="text-[0.6rem] mb-[0.4rem]">
                      {experienceInfo[2].achievements}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* left */}
            <div className="w-[50%] h-[100%] pl-[2.2rem] pr-[0.9rem] text-[black]">
              <div className="text-[0.6rem] font-[700]">
                <p className="text-[0.9rem] font-[800] uppercase mt-[3rem] mb-[1rem]">
                  CONTACT ME
                </p>
                <p className=" mb-[0.2rem]">Phone: {contactInfo.phoneNumber}</p>
                <p className=" mb-[0.2rem]">Email: {contactInfo.email}</p>
                <p className=" mb-[0.2rem]">Address: {personalInfo.address}</p>
                <p className="text-[0.9rem] font-[800] uppercase mt-[1rem] mb-[1rem]">
                  PROFILE
                </p>
                <p className=" mb-[0.2rem]">
                  Portfolio: {contactInfo.portfolio}
                </p>
                <p className=" mb-[0.2rem]">Linkedin: {contactInfo.linkedin}</p>
                <p className=" mb-[0.2rem]">Github: {contactInfo.github}</p>
                <p className="text-[0.9rem] font-[800] uppercase mt-[1rem] mb-[1rem]">
                  EDUCATION
                </p>
                <p className=" ">{educationInfo.institution1}</p>
                <p className=" text-[0.5rem]">{educationInfo.course1}</p>
                <p className="text-[0.5rem] mb-[0.4rem]">
                  {educationInfo.start1} - {educationInfo.finish1}
                </p>

                <p className="mt-[1rem] ">{educationInfo.institution2}</p>
                <p className=" text-[0.5rem]">{educationInfo.course2}</p>
                <p className="text-[0.5rem] mb-[0.4rem]">
                  {educationInfo.start2} - {educationInfo.finish2}
                </p>

                <p className="text-[0.9rem] font-[800] uppercase mt-[1rem]  mb-[1rem]">
                  LANGUAGE
                </p>
                <p className="mt-[0.3rem] mb-[0.2rem]">IGBO</p>
                <p className="mb-[0.2rem]">HAUSA</p>
                <p className="mb-[0.2rem]">YORUBA</p>
                <p className="mb-[0.2rem]">ENGLISH</p>
                <p className="mb-[0.2rem]">FRENCH</p>

                <p className="text-[0.9rem] font-[800] uppercase mt-[1.2rem]">
                  Skills
                </p>
                <div className=" grid grid-cols-2 text-[0.56rem] uppercase mt-[0.4rem]">
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
      </div>
      <Link href="/resume/template3">
        {" "}
        <div className="mt-[-8rem] h-[8rem] w-[5rem] border-r-[4rem]  border-r-transparent    border-t-[4rem] border-t-transparent border-b-[4rem] border-b-transparent border-l-[4rem]  border-l-green-500"></div>
      </Link>
    </div>
  );
};

export default DownloadImageComponent2;
