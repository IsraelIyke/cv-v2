import DownloadImageComponent from "@/app/Components/CanvasComponents";
import Footer from "@/app/Components/footer";
import Nav from "@/app/Components/nav";
import Head from "next/head";

export default function Template() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=1992px, initial-scale=1.0" />
      </Head>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" flex justify-center">
        <DownloadImageComponent />
      </div>

      {/* <Footer /> */}
    </div>
  );
}
