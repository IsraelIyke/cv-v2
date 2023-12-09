import Image from "next/image";
import Link from "next/link";
import Nav from "../Components/nav";
import Footer from "../Components/footer";

export default function Resume() {
  return (
    <div>
      <Nav />
      <div className="relative flex py-[4rem] px-[1rem] md:px-[9rem] items-center justify-center">
        <div className="relative w-[80vw] md:w-[50vw] h-[30vh] md:h-[70vh]">
          <Image
            src="/images/resume.png"
            alt="resume"
            height={1000}
            width={1000}
            className=" absolute h-[100%] w-[100%] hidden md:block rounded-[16px]"
          />
        </div>
        <div className="absolute md:relative flex flex-col w-[95vw] h-[35vh] md:w-[50vw] md:h-[55vh] bg-[rgba(255, 255, 255, 0.2)] rounded-[16px] shadow-2xl backdrop-blur border-[1px] border-[rgba(255, 255, 255, 0.3)] ml-[0rem] md:ml-[-10rem] px-[1rem] md:px-[4rem]">
          <h4 className=" text-[1.5rem] w-[90%] md:w-[90%] mt-[1rem] md:mt-[2.5rem] font-[600]">
            Create your professional{" "}
            <span className="text-[#FF5C00]">resume</span> in Just minutes
          </h4>
          <ul className=" mt-[1rem] list-disc list-inside text-[0.95rem]">
            <li>Fill every boxes as required</li>
            <li>Choose template</li>
            <li>Download your resume</li>
          </ul>
          <Link href="/resume/personal-info">
            <button className=" bg-[#FF5C00] py-[0.5rem] px-[2rem] text-[white] rounded-[1rem] mt-[2rem]">
              Build Resume
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
