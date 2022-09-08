import React,{useEffect} from "react";
import "./App.css";
import WhyCASection from "./Sections/WhyCASection";
import BenefitSection from "./Sections/BenefitSection";
import DutiesSection from "./Sections/DutiesSection";
import Footer from "./components/Footer";
import Header from "./Sections/Header";
import { OuterLayout } from "./styles/Layout";
import aos from 'aos'
import 'aos/dist/aos.css'
import ScrolledButton from "./components/ScrolledButton";

function App() {


  useEffect(()=>{
    aos.init({duration: 3000})
  },[])

  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <main>
          <WhyCASection />
          <BenefitSection />
          <DutiesSection />
        </main>
      </OuterLayout>
      <Footer />
      <ScrolledButton />
    </div>
  );
}

export default App;
