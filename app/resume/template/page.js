import DownloadImageComponent from "@/app/Components/DownloadImageComponent";
import Nav from "@/app/Components/nav";
import Head from "next/head";

export default function Template() {
  return (
    <div className=" min-w-[1000px]">
      <Head>
        <meta name="viewport" content="width=1992px, initial-scale=1.0" />
      </Head>
      <Nav />
      <div className=" pt-[9rem]"></div>
      <div className=" flex justify-center">
        <DownloadImageComponent />
      </div>
    </div>
  );
}
