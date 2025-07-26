import About2 from "./Components/about2";
import QuestionsSection from "./Components/haveQuestions";
import Insights from "./Components/insightsCorousel";
import OurPracticesSection from "./Components/ourPracticesSection";
import TaxCarousel from "./Components/taxCorousel";
import TestimonialCarousel from "./Components/testimonialCorousel";


export default function Home() {
  return (
    <>
    <TaxCarousel/>
    <About2/>
    {/* <About/> */}
    <Insights/>
    <OurPracticesSection/>
    <TestimonialCarousel/>
    <QuestionsSection/>
    </>
  );
}
 