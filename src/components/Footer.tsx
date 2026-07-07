import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-secondary py-3 py-md-5 border-top" style={{ backgroundColor: "rgba(218, 218, 218, 0.25)", borderColor: "rgba(218, 218, 218, 0.5)" }}>
      <div className="container px-3 px-sm-4 px-md-5 py-2 py-md-4">
        
        {/* Main Footer Links */}
        <div className="row g-3 g-md-4 mb-3 mb-md-5">
          
          {/* Logo and Intro Column */}
          <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
            <div 
              id="footer-logo" 
              onClick={() => onPageChange("home")}
              className="d-flex align-items-center mb-2 mb-md-3 cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              <Logo size="sm" isDarkBg={false} />
            </div>
            
            <p className="text-muted small mb-3 mb-md-4 d-none d-sm-block" style={{ maxWidth: "300px" }}>
              Platform parkir digital terdepan yang menghubungkan pengemudi dengan ribuan lokasi parkir cerdas di Indonesia.
            </p>

            {/* Social Icons */}
            <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
              <a 
                href="#facebook" 
                className="d-flex align-items-center justify-content-center rounded-circle bg-light text-muted hover:bg-primary hover:text-white transition-all"
                style={{ width: "32px", height: "32px" }}
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a 
                href="#instagram" 
                className="d-flex align-items-center justify-content-center rounded-circle bg-light text-muted hover:bg-danger hover:text-white transition-all"
                style={{ width: "32px", height: "32px" }}
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="#twitter" 
                className="d-flex align-items-center justify-content-center rounded-circle bg-light text-muted hover:bg-info hover:text-white transition-all"
                style={{ width: "32px", height: "32px" }}
                aria-label="Twitter / X"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Column 1: Menu */}
          <div className="col-6 col-lg-3 col-md-6 mb-2 mb-lg-0">
            <h4 className="text-dark h6 fw-bold mb-2 mb-md-3" style={{ fontSize: "14px" }}>Menu</h4>
            <ul className="list-unstyled d-flex flex-column gap-1.5 mb-0">
              <li>
                <button 
                  onClick={() => onPageChange("home")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("about")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("layanan-produk")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Layanan & Produk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("testimoni")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Testimoni
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("blog")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Layanan */}
          <div className="col-6 col-lg-3 col-md-6 mb-2 mb-lg-0">
            <h4 className="text-dark h6 fw-bold mb-2 mb-md-3" style={{ fontSize: "14px" }}>Layanan</h4>
            <ul className="list-unstyled d-flex flex-column gap-1.5 mb-0">
              <li>
                <button 
                  onClick={() => onPageChange("layanan-produk")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Navigasi Parkir
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("layanan-produk")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Reservasi Slot
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("layanan-produk")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Pembayaran Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("layanan-produk")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Notifikasi Cerdas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange("layanan-produk")} 
                  className="btn btn-link text-muted p-0 text-decoration-none text-start hover:text-primary text-xs"
                  style={{ fontSize: "12px" }}
                >
                  Dashboard Mitra
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak */}
          <div className="col-12 col-lg-3 col-md-6 mb-2 mb-lg-0">
            <h4 className="text-dark h6 fw-bold mb-2 mb-md-3" style={{ fontSize: "14px" }}>Kontak</h4>
            
            <div className="d-flex align-items-start gap-2 mb-2 mb-md-3">
              <MapPin size={14} className="text-primary mt-1 flex-shrink-0" />
              <p className="text-muted small mb-0" style={{ fontSize: "12px" }}>
                Sahid Cyber Tower, Lantai 18, <br className="d-none d-sm-block" />
                Jl. Jend. Sudirman No. Kav 21, <br className="d-none d-sm-block" />
                Jakarta Pusat 10220
              </p>
            </div>

            <div className="d-flex align-items-center gap-2 mb-1 mb-md-2">
              <Mail size={14} className="text-primary flex-shrink-0" />
              <a href="mailto:hello@parkease.co" className="text-muted hover:text-primary text-decoration-none small" style={{ fontSize: "12px" }}>
                hello@parkease.co
              </a>
            </div>

            <div className="d-flex align-items-center gap-2">
              <Phone size={14} className="text-primary flex-shrink-0" />
              <a href="tel:+6281234567890" className="text-muted hover:text-primary text-decoration-none small" style={{ fontSize: "12px" }}>
                +62 812-3456-7890
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-top pt-3 mt-3 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 text-muted small" style={{ borderColor: "#e2e8f0", fontSize: "11px" }}>
          <p id="copyright-text" className="mb-0 text-center text-sm-start">
            © {currentYear} ParkEase.co — IK Developers. All rights reserved.
          </p>
          <a 
            id="wa-footer-link"
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted hover:text-primary text-decoration-none d-flex align-items-center gap-1"
          >
            <span className="rounded-circle bg-success" style={{ width: "6px", height: "6px", display: "inline-block" }} />
            WhatsApp: +62 812-3456-7890
          </a>
        </div>

      </div>
    </footer>
  );
}
