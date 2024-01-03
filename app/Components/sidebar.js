import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

export default function SideBar() {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle((prev) => !prev);
  }
  return (
    <div>
      <CiMenuKebab
        className="mb-[1rem] mt-[2rem] text-[1.5rem] block md:hidden"
        onClick={handleClick}
      />

      <div className="w-[95vw] hidden md:block h-[42vh] md:w-[35vw] md:h-[60vh] shadow-xl mr-[1rem] rounded-[16px]">
        <aside className="relative flex flex-col justify-center mt-[1rem] md:mt-[4rem]">
          <Link
            href="/resume/personal-info"
            className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
          >
            Personal Info
          </Link>
          <Link
            href="/resume/education"
            className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
          >
            Education
          </Link>
          <Link
            href="/resume/experience"
            className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
          >
            Experience
          </Link>
          <Link
            href="/resume/contact"
            className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
          >
            Contact
          </Link>
          <Link
            href="/resume/skills"
            className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
          >
            Skill
          </Link>
          <Link
            href="/resume/template"
            className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
          >
            Template
          </Link>
        </aside>
      </div>

      {/* mobile */}
      {toggle && (
        <div className="w-[95vw] h-[35vh] block md:hidden md:w-[35vw] md:h-[60vh] shadow-xl mr-[1rem] rounded-[16px]">
          <aside className="relative flex flex-col justify-center mt-[1rem] md:mt-[4rem]">
            <Link
              href="/resume/personal-info"
              className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
            >
              Personal Info
            </Link>
            <Link
              href="/resume/education"
              className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
            >
              Education
            </Link>
            <Link
              href="/resume/experience"
              className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
            >
              Experience
            </Link>
            <Link
              href="/resume/contact"
              className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
            >
              Contact
            </Link>
            <Link
              href="/resume/skills"
              className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
            >
              Skill
            </Link>
            <Link
              href="/resume/template"
              className=" bg-[#FF5C00] hover:bg-orange-900 py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
            >
              Template
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
