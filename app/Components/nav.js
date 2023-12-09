import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" h-[5rem] border-b-2 border-[1px] flex pl-[1rem] items-center font-[600]">
      <h3>
        ug<span className="text-[#FF5C00] -ml-1">Project</span>
      </h3>
    </nav>
  );
}
