import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import LayananProduk from "./components/LayananProduk";
import Partnership from "./components/Partnership";
import Testimoni from "./components/Testimoni";
import Blog from "./components/Blog";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Page renderer
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onPageChange={setCurrentPage} />;
      case "about":
        return <AboutUs />;
      case "layanan-produk":
        return <LayananProduk />;
      case "partnership":
        return <Partnership onPageChange={setCurrentPage} />;
      case "testimoni":
        return <Testimoni />;
      case "blog":
        return <Blog />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0F6FF 100%)" }}>
      {/* Dynamic Header */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content Stage with transition animations */}
      <main className="flex-grow-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            id="main-viewport"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Structured Footer */}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

