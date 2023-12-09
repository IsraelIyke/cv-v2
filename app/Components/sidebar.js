import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-[35vw] h-[60vh] shadow-xl mr-[1rem] rounded-[16px]">
      <aside className="relative flex flex-col justify-center mt-[4rem]">
        <Link
          href="/resume/personal-info"
          className=" bg-[#FF5C00] py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
        >
          Personal Info
        </Link>
        <Link
          href="/resume/experience"
          className=" bg-[#FF5C00] py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
        >
          Experience
        </Link>
        <Link
          href="/resume/contact"
          className=" bg-[#FF5C00] py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
        >
          Contact
        </Link>
        <Link
          href="/resume/skills"
          className=" bg-[#FF5C00] py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
        >
          Skill
        </Link>
        <Link
          href="/resume/template"
          className=" bg-[#FF5C00] py-[0.5rem] px-[3rem] text-[white] text-center text-[0.9rem] font-[600] mb-[1rem]"
        >
          Template
        </Link>
      </aside>
    </div>
  );
}
