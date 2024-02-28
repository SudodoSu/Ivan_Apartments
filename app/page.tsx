import About from "@/components/About/About";
import Acommodation from "@/components/Acommodations/Acommodation";
import Distances from "@/components/About/Distances";
import Footer from "@/components/Footer/Footer";
import FooterSvg from "@/components/Footer/FooterSvg";
import HeadSwiper from "@/components/HeadSwiper/HeadSwiper";
import Photogalleries from "@/components/Gallery/Photogalleries";
import SendMessage from "@/components/SendMessage/SendMessage";
import TouristGuide from "@/components/TouristGuide/TouristGuide";
import React from "react";

function Home() {
  return (
    <div>
      <header>
        <HeadSwiper />
      </header>
      <main>
        <About />
        <Distances />
        <Acommodation />
        <Photogalleries />
        <TouristGuide />
        <SendMessage />
      </main>
      <footer>
        <FooterSvg />
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
