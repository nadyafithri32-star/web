import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top shadow-sm py-3" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
      <div className="container px-3 px-sm-4 px-md-5">
        
        {/* Logo Section */}
        <div 
          id="navbar-logo" 
          onClick={() => handleNavClick("home")}
          className="navbar-brand d-flex align-items-center cursor-pointer select-none"
          style={{ cursor: "pointer" }}
        >
          <Logo size="md" isDarkBg={false} />
        </div>

        {/* Mobile Menu Button */}
        <button
          id="btn-mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar-toggler border-0 p-2 text-dark d-md-none"
          type="button"
          aria-label="Toggle Menu"
          style={{ outline: "none", boxShadow: "none" }}
        >
          {mobileMenuOpen ? <X size={24} className="text-dark" /> : <Menu size={24} className="text-dark" />}
        </button>

        {/* Desktop & Collapsible Mobile Navigation */}
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? "show d-block" : "d-none d-md-flex"} justify-content-between align-items-center mt-3 mt-md-0 w-100`}>
          <div className="navbar-nav mx-auto gap-2 gap-md-3">
            <button
              id="nav-home"
              onClick={() => handleNavClick("home")}
              className={`nav-link border-0 bg-transparent text-start py-2 px-3 rounded transition-colors ${
                currentPage === "home" ? "text-primary fw-bold" : "text-secondary"
              }`}
            >
              Home
            </button>
            
            <button
              id="nav-about"
              onClick={() => handleNavClick("about")}
              className={`nav-link border-0 bg-transparent text-start py-2 px-3 rounded transition-colors ${
                currentPage === "about" ? "text-primary fw-bold" : "text-secondary"
              }`}
            >
              About Us
            </button>

            {/* Solusi Dropdown Navigation */}
            <div 
              id="nav-solusi-container"
              className="nav-item dropdown position-relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                id="nav-solusi-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`nav-link border-0 bg-transparent text-start py-2 px-3 rounded d-flex align-items-center gap-1 transition-colors ${
                  currentPage === "layanan-produk" || currentPage === "partnership" ? "text-primary fw-bold" : "text-secondary"
                }`}
              >
                <span>Solusi</span>
                <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "none" }} />
              </button>

              {/* Solusi Dropdown Menu */}
              {dropdownOpen && (
                <div 
                  id="nav-solusi-dropdown"
                  className="dropdown-menu show d-block position-absolute shadow-lg border-1 p-2 rounded-3"
                  style={{ 
                    backgroundColor: "#ffffff", 
                    minWidth: "240px", 
                    top: "100%", 
                    left: 0, 
                    zIndex: 1050 
                  }}
                >
                  <button
                    id="nav-solusi-item-layanan"
                    onClick={() => handleNavClick("layanan-produk")}
                    className={`dropdown-item w-100 text-start py-2 px-3 rounded border-0 ${
                      currentPage === "layanan-produk" ? "bg-light text-primary fw-bold" : "text-dark"
                    }`}
                  >
                    <div className="d-flex flex-column">
                      <span className="fw-bold">Layanan & Produk</span>
                      <span className="text-muted" style={{ fontSize: "11px" }}>Lihat opsi cerdas parkir kami</span>
                    </div>
                  </button>
                  <button
                    id="nav-solusi-item-partnership"
                    onClick={() => handleNavClick("partnership")}
                    className={`dropdown-item w-100 text-start py-2 px-3 rounded border-0 mt-1 ${
                      currentPage === "partnership" ? "bg-light text-primary fw-bold" : "text-dark"
                    }`}
                  >
                    <div className="d-flex flex-column">
                      <span className="fw-bold">Partnership</span>
                      <span className="text-muted" style={{ fontSize: "11px" }}>Gabung sebagai mitra kami</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-testimoni"
              onClick={() => handleNavClick("testimoni")}
              className={`nav-link border-0 bg-transparent text-start py-2 px-3 rounded transition-colors ${
                currentPage === "testimoni" ? "text-primary fw-bold" : "text-secondary"
              }`}
            >
              Testimoni
            </button>

            <button
              id="nav-blog"
              onClick={() => handleNavClick("blog")}
              className={`nav-link border-0 bg-transparent text-start py-2 px-3 rounded transition-colors ${
                currentPage === "blog" ? "text-primary fw-bold" : "text-secondary"
              }`}
            >
              Blog
            </button>
          </div>

          {/* Right Header Widget: Quick Call Action */}
          <div className="d-flex align-items-center mt-3 mt-md-0 px-3 px-md-0">
            <button
              id="btn-nav-cta"
              onClick={() => handleNavClick("layanan-produk")}
              className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 fw-semibold w-100 w-md-auto"
              style={{ borderRadius: "12px" }}
            >
              <Sparkles size={14} />
              <span>Gabung Sekarang</span>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
