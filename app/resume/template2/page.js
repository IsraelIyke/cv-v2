import DownloadImageComponent from "@/app/Components/CanvasComponents";
import DownloadImageComponent2 from "@/app/Components/CanvasComponents2";
import Footer from "@/app/Components/footer";
import Nav from "@/app/Components/nav";

export default function Template() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" flex justify-center">
        <DownloadImageComponent2 />
      </div>

      {/* <Footer /> */}
    </div>
  );
}
