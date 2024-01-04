import DownloadImageComponent from "@/app/Components/CanvasComponents";
import Nav from "@/app/Components/nav";
import Head from "next/head";

export default function Template() {
  return (
    <div className=" min-w-[1000px]">
      <Nav />
      <div className=" pt-[9rem]"></div>
      <div className=" flex justify-center">
        <DownloadImageComponent />
      </div>
    </div>
  );
}
