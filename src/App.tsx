/**
 * 항공 여행 웹사이트 메인 컴포넌트
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import PackagesSection from "./components/PackagesSection";
import TestimonialsSection from "./components/TestimonialsSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-50 to-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <PackagesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
