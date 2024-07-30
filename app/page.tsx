import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import React from "react";
import '../styles/globals.css';


export default function Home() {
  return (
    <main className="">
      <div>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    </main>
  );
}
