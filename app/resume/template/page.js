import DownloadImageComponent from "@/app/Components/CanvasComponents";
import Nav from "@/app/Components/nav";

export default function Template() {
  return (
    <div className="">
      <Nav />
      <div className=" pt-[9rem]"></div>
      <div className=" ml-0 md:ml-[10rem] flex justify-center">
        <DownloadImageComponent />
      </div>
    </div>
  );
}
