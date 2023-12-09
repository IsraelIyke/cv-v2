import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" h-[5rem] border-b-2 border-[1px] flex justify-between items-center font-[600]">
      <Link href="/">
        <h3 className=" pl-[1rem]">
          ug<span className="text-[#FF5C00] -ml-1">Project</span>
        </h3>
      </Link>
    </nav>
  );
}
