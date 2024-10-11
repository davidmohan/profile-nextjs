"use client"

import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Profile />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
