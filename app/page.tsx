import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen container mx-auto px-6 lg:px-8">
        <div className="pt-24 space-y-24 pb-16">
          <Hero></Hero>
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
