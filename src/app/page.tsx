import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen flex-col gap-0 w-full">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
