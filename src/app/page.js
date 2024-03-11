
import Header from "@/components/Header";
import ShowCase from "@/components/ShowCase";

export default function Home() {

  return (
    <>
    <Header/>
    <main className="wrapper flex flex-col items-center">
      <ShowCase />
    </main>
    </>
  );
}
