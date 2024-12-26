import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto flex flex-col">
      <Navbar></Navbar>
      <main className="pt-20">
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}
