import HomeBisnis from "@/components/home/bisnis/HomeBisnis";
import HeroSection from "@/components/home/hero/HeroSection";
import HomeKomoditas from "@/components/home/komoditas/HomeKomoditas";
import PetaKomoditas from "@/components/home/komoditas/PetaKomoditas";
import PemdesHome from "@/components/home/pemdes/PemdesHome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeKomoditas />
      <HomeBisnis />
      <PemdesHome />
    </>
  );
}
