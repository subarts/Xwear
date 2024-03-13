
import AccessoriesShowcase from "@/components/AccessoriesShowcase";
import ClothesShowcase from "@/components/ClothesShowcase";
import Header from "@/components/Header";
import Poizon from "@/components/Poizon";
import ShoesShowcase from "@/components/ShoesShowcase";
import Showcase from "@/components/Showcase";

export default function Home() {

  return (
    <>
    <Header/>
    <main className="wrapper flex flex-col items-center">
      <Showcase />
      <ShoesShowcase/>
      <ClothesShowcase/>
      <AccessoriesShowcase/>
      <Poizon/>
    </main>
    </>
  );
}
