import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
