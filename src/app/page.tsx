import Image from "next/image";
import Navbar from './../Components/Navbar';
import Hero from "@/Components/Hero";
import BarsikTable from "@/Components/BarsikTable";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-[#181F2D] to-[#111419] font-primary text-white">

      <div className="bg-heroBg w-full h-[1616px]">  <Navbar />
        <Hero />
        <BarsikTable />


      </div>
    </main>
  );
}
