import Image from "next/image";

//component import
import MyNavbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";


export default function Home() {
  return (
    <main className="">
      <MyNavbar/>
      <Breadcrumbs/>

      {/* <img className="sm:w-14 md:w-20 xl:w-48" src="/6936227_cloth_clothes_clothing_neck_shirt_icon.png"></img> */}{/* test size of screen adavtive*/}
      
      <div className="grid mt-20 mx-20 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-5 gap-4  ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="relative min-h-screen">
        <Footer/>
      </div>
    </main>
  );
}
