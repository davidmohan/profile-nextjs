"use client"

import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Experience1 from "@/components/Experience1";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Quotes from "@/components/Quotes";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Profile />
      <About />
      <Experience1 />
      <Skills />
      <Experience />
      <Works />
      <Quotes />
      <Footer />
    </div>
  );
}
