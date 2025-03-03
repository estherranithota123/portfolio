import PortfolioHeader from "./Components/Header";
import AboutMe from "./Components/About";
import Skills from "./Components/Skills";
import EducationFlipBox from "./Components/Education";
import ProfileSection from "./Components/Home";
import ContactForm from "./Components/Contact";
import PortfolioProjectsComponent from "./Components/Project";


export default function Home() {
  return <>
    <PortfolioHeader/>
    <ProfileSection/>
    <AboutMe/>
    <Skills/>
    <EducationFlipBox/>
    <PortfolioProjectsComponent/>
    <ContactForm/>
  </>
}