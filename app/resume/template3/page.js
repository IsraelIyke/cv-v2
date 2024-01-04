import DownloadImageComponent3 from "@/app/Components/CanvasComponents3";
import Nav from "@/app/Components/nav";

export default function Template() {
  return (
    <div>
      <Nav />
      <div className=" pt-[9rem]"></div>
      <div className=" flex justify-center">
        <DownloadImageComponent3 />
      </div>
    </div>
  );
}
