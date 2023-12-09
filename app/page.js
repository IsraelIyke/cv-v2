import Link from "next/link";
import CanvasComponent from "./Components/CanvasComponents";
import Nav from "./Components/nav";
import Image from "next/image";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className=" flex flex-col items-center">
        <h2 className=" font-[700] text-[2rem] my-[2rem] w-[30vw] text-center">
          Create a <span className="text-[#FF5C00]">resume</span> that secures
          your <span className="text-[#FF5C00]">dream job</span>
        </h2>
        <p className=" w-[40vw] text-center mb-[3rem]">
          Build a resume thats piques the interest of recruiters and gets you
          hired. It&lsquo;s fast and easy to use.
        </p>
        <Link href="/resume">
          {" "}
          <button className=" bg-[#FF5C00] text-[white] px-[2rem] py-[0.5rem] rounded-[2rem]">
            Try for free
          </button>
        </Link>
      </div>
      <div>
        <h3 className=" text-[1.6rem] font-[600] text-center mt-[4rem]">
          Build your <span className=" text-[#FF5C00]">resume</span> in 3 steps
        </h3>
        {/* edit */}
        <div className=" flex justify-between px-[20rem] mt-[3rem]">
          <div className="relative w-[50vw] flex">
            <Image
              src="/images/image2.png"
              alt="edit"
              height={1000}
              width={1000}
              className="  h-[10rem] w-[10rem]"
            />
            <div className=" flex items-center text-[#FF5C00]">
              <p className=" text-[2rem] font-[600] mr-[1rem]">1</p>
              <div className=" flex flex-col">
                <p className=" text-[0.9rem] font-[600]">Fill in Details</p>
                <p className=" text-[0.6rem] w-[20vw]">
                  Fill in the blanks and see results in real-time.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[50vw]"></div>
        </div>
        {/* template */}
        <div className=" flex justify-between px-[20rem] mt-[1rem]">
          <div className=" w-[50vw]"></div>

          <div className="relative w-[50vw] flex">
            <Image
              src="/images/image1.png"
              alt="edit"
              height={1000}
              width={1000}
              className="  h-[10rem] w-[10rem]"
            />
            <div className=" flex items-center text-[#FF5C00]">
              <p className=" text-[2rem] font-[600] mr-[1rem]">2</p>
              <div className=" flex flex-col">
                <p className=" text-[0.9rem] font-[600]">Pick a Template</p>
                <p className=" text-[0.6rem] w-[20vw]">
                  Fill in the blanks and see results in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* download */}
        <div className=" flex justify-between px-[20rem] mt-[3rem]">
          <div className="relative w-[50vw] flex">
            <Image
              src="/images/image3.png"
              alt="edit"
              height={1000}
              width={1000}
              className="  h-[10rem] w-[10rem]"
            />
            <div className=" flex items-center text-[#FF5C00]">
              <p className=" text-[2rem] font-[600] mr-[1rem]">3</p>
              <div className=" flex flex-col">
                <p className=" text-[0.9rem] font-[600]">Download</p>
                <p className=" text-[0.6rem] w-[20vw]">
                  Download your resume, apply, get more interviews.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[50vw]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
