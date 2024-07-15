import React from 'react'

//component import
import MyNavbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";

function page() {
  return (
    <main className="">
      <MyNavbar/>
      <Breadcrumbs/>

    
      
      
      <div className="relative min-h-screen">
        <Footer/>
      </div>
    </main>
  )
}

export default page
