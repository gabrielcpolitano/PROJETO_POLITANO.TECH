import HeroSection from "./components/HeroSection.jsx"
import Navbar from "./components/Navbar.jsx"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection.jsx"

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-{#121212}">
        <Navbar />
        <div class="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </div>
      </main>
  );
}
