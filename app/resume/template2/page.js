import DownloadImageComponent2 from "@/app/Components/CanvasComponents2";
import Nav from "@/app/Components/nav";

export default function Template() {
  return (
    <div>
      <Nav />
      <div className=" pt-[9rem]"></div>
      <div className=" flex justify-center">
        <DownloadImageComponent2 />
      </div>
    </div>
  );
}
