import { useState } from "react";
import { motion } from "motion/react";
import { Search, Calendar, CreditCard, CheckCircle2, Plane, ShoppingBag, Building2, ChevronRight, PhoneCall } from "lucide-react";
import { ProductItem } from "../types";
import ProductModal from "./ProductModal";
import heroImg from "../assets/images/parking_gate_dark_bg_1783064735313.jpg";

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  const [selectedSector, setSelectedSector] = useState<ProductItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const sectorsData: Record<string, ProductItem> = {
    bandara: {
      id: "sector-bandara",
      category: "Bandara",
      title: "Parking Area Bandara",
      description: "Solusi parkir cerdas area bandara dengan trafik tinggi. Memastikan alur parkir penumpang lancar dan tepat waktu.",
      badgeColor: "bg-danger",
      features: [
        "Integrasi sensor pintar",
        "Dashboard operasional real-time",
        "Laporan analitika trafik",
        "Dukungan teknis handal"
      ]
    },
    mall: {
      id: "sector-mall",
      category: "Mall",
      title: "Parking Area Mall & Pusat Belanja",
      description: "Tingkatkan kenyamanan pengunjung mall menemukan slot parkir kosong secara cepat dan melakukan reservasi mudah.",
      badgeColor: "bg-primary",
      features: [
        "Sistem navigasi slot mall",
        "Pembayaran cashless terintegrasi",
        "Analisis jam sibuk pengunjung",
        "Dukungan teknis handal"
      ]
    },
    hotel: {
      id: "sector-hotel",
      category: "Hotel",
      title: "Parking Area Hotel & Penginapan",
      description: "Sistem valet dan self-parking terintegrasi untuk meningkatkan efisiensi layanan tamu hotel.",
      badgeColor: "bg-success",
      features: [
        "Integrasi tiket valet digital",
        "Monitor ketersediaan slot",
        "Layanan prioritas tamu hotel",
        "Dukungan teknis handal"
      ]
    }
  };

  const handleOpenSector = (sector: ProductItem) => {
    setSelectedSector(sector);
    setModalOpen(true);
  };

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } as any;

  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative text-dark py-5 position-relative" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0F6FF 100%)", minHeight: "550px" }}>
        <div className="position-absolute inset-0 bg-gradient" style={{ background: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, rgba(255, 255, 255, 0) 70%)", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }} />
        
        <div className="container position-relative px-3 px-sm-4 px-md-5" style={{ zIndex: 1 }}>
          <div className="row align-items-center py-5 g-5">
            
            {/* Left Content Column */}
            <div className="col-lg-7 text-start">
              <div className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2 rounded-pill mb-4 d-inline-flex align-items-center gap-2">
                <span className="bg-primary rounded-circle" style={{ width: "8px", height: "8px", display: "inline-block" }} />
                Platform Parkir #1 di Indonesia
              </div>

              <h1 className="display-4 fw-bold text-dark mb-3" style={{ lineHeight: 1.15 }}>
                Make your <span className="text-primary">parking</span>,<br />
                <span className="text-primary text-decoration-underline" style={{ "8px" }}>simplified</span> with us
              </h1>

              <p className="lead text-muted mb-4" style={{ maxWidth: "550px" }}>
                Solusi cerdas bagi pengguna transportasi dan pengunjung mall serta public space yang kesulitan mencari lokasi parkir.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap gap-3 mb-5">
                <button
                  id="btn-hero-mitra"
                  onClick={() => onPageChange("layanan-produk")}
                  className="btn btn-primary btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center gap-2"
                  style={{ borderRadius: "16px" }}
                >
                  <span>Gabung jadi mitra kami!</span>
                  <ChevronRight size={18} />
                </button>
                <button
                  id="btn-hero-layanan"
                  onClick={() => onPageChange("layanan-produk")}
                  className="btn btn-outline-dark btn-lg px-4 py-3 fw-bold"
                  style={{ borderRadius: "16px" }}
                >
                  Lihat Layanan
                </button>
              </div>

              {/* Stats */}
              <div className="row pt-4 border-top border-dark border-opacity-10 g-3" style={{ maxWidth: "500px" }}>
                <div className="col-4">
                  <div className="stats-num text-dark mb-0">500rb+</div>
                  <div className="small text-muted text-compact-stats">Pengguna Aktif</div>
                </div>
                <div className="col-4">
                  <div className="stats-num text-dark mb-0">3rb+</div>
                  <div className="small text-muted text-compact-stats">Mitra Bergabung</div>
                </div>
                <div className="col-4">
                  <div className="stats-num text-dark mb-0">JaBoDeTaBek</div>
                  <div className="small text-muted text-compact-stats">Wilayah Operasional</div>
                </div>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end w-100 max-w-sm mx-auto px-0">
              <div className="p-1 p-sm-4 bg-white rounded-5 border border-primary border-opacity-10 shadow-lg position-relative overflow-hidden w-100" style={{ maxWidth: "400px", borderRadius: "32px" }}>
                <div className="position-absolute bg-primary bg-opacity-10 rounded-circle blur-3xl animate-pulse" style={{ width: "300px", height: "300px", top: "-50px", left: "-50px", filter: "blur(40px)" }} />
                <div className="position-relative">
                  <img
                    src={heroImg}
                    alt="Automatic Parking Gate System"
                    className="img-fluid rounded-4 w-100"
                    style={{ borderRadius: "20px" }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THREE STEP WORKFLOW */}
      <section className="py-5 bg-light text-center">
        <div className="container py-5 px-3 px-sm-4 px-md-5">
          
          <div className="mx-auto mb-5 text-center" style={{ maxWidth: "700px" }}>
            <h2 className="h1 fw-bold text-dark mb-3">
              Nggak Pake Muter, Parkir Langsung Dapet
            </h2>
            <p className="text-muted mb-0">
              Tiga langkah mudah untuk pengalaman parkir yang lebih menyenangkan
            </p>
          </div>

          <motion.div 
            id="three-steps-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="row g-4 justify-content-center"
          >
            {/* Step 1 */}
            <div className="col-md-4">
              <motion.div 
                variants={itemVariants}
                className="card h-100 p-4 border-0 shadow-sm text-start position-relative rounded-4"
              >
                <div className="position-absolute" style={{ top: "20px", right: "25px", fontSize: "4rem", fontWeight: "900", color: "#f1f3f5", fontFamily: "monospace", zIndex: 0 }}>
                  01
                </div>
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                    <Search size={22} />
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-3">Cari & Temukan</h3>
                  <p className="text-muted small mb-0">
                    Lihat lokasi parkir kosong secara real-time di sekitarmu sebelum berangkat.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4">
              <motion.div 
                variants={itemVariants}
                className="card h-100 p-4 border-0 shadow-sm text-start position-relative rounded-4"
              >
                <div className="position-absolute" style={{ top: "20px", right: "25px", fontSize: "4rem", fontWeight: "900", color: "#f1f3f5", fontFamily: "monospace", zIndex: 0 }}>
                  02
                </div>
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                    <Calendar size={22} />
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-3">Reservasi Cepat</h3>
                  <p className="text-muted small mb-0">
                    Pesan slot sebelum tiba, tanpa antri dan tanpa stres kehabisan parkir.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <motion.div 
                variants={itemVariants}
                className="card h-100 p-4 border-0 shadow-sm text-start position-relative rounded-4"
              >
                <div className="position-absolute" style={{ top: "20px", right: "25px", fontSize: "4rem", fontWeight: "900", color: "#f1f3f5", fontFamily: "monospace", zIndex: 0 }}>
                  03
                </div>
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                    <CreditCard size={22} />
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-3">Bayar Digital</h3>
                  <p className="text-muted small mb-0">
                    Berbagai metode pembayaran digital yang aman, cepat, cashless, dan praktis.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* NEW SECTION: BELIEF & NARRATIVE */}
      <section className="py-5 bg-white border-bottom text-start">
        <div className="container py-4 py-md-5 px-3 px-sm-4 px-md-5">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Column: Narrative Content */}
            <div className="col-lg-7">
              <span className="text-primary text-uppercase fw-bold tracking-wider mb-2 d-inline-block" style={{ fontSize: "12px", letterSpacing: "1.5px" }}>
                tentang kami yang kami percaya
              </span>
              <h2 className="h2 fw-bold text-dark mb-3" style={{ lineHeight: "1.3" }}>
                Bahwa waktu adalah aset paling berharga yang dimiliki setiap orang.
              </h2>
              <p className="text-muted mb-0" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                Harapan kami melampaui sekadar mempermudah pencarian ruang kosong; kami ingin mengubah bagaimana masyarakat urban berinteraksi dengan mobilitas harian mereka. Dengan sistem parkir pintar yang terintegrasi, kami berkomitmen untuk menekan angka kemacetan untuk <strong>Membawa Efisiensi, Mengurangi Emisi, Mengembalikan Waktu Anda</strong>.
              </p>
            </div>

            {/* Right Column: Image Box */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: "24px" }}>
                <img 
                  src="https://plus.unsplash.com/premium_photo-1690958385472-b8e011570ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VtYWNldGFuJTIwa290YXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Happy People Smiling" 
                  referrerPolicy="no-referrer"
                  className="img-fluid w-100"
                  style={{ maxHeight: "320px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DETAILED FEATURES */}
      <section className="py-5 border-bottom text-start" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, rgba(142, 197, 255, 0.15) 100%)" }}>
        <div className="container py-5 px-3 px-sm-4 px-md-5">
          <div className="row align-items-center g-5">
            
            {/* Left Column: Image mockup */}
            <div className="col-lg-5 order-last order-lg-first">
              <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: "24px" }}>
                <img 
                  src="https://images.unsplash.com/photo-1780733063331-e0ef4917ca4c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Driver Dashboard Navigator" 
                  referrerPolicy="no-referrer"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Right Column: Features and checkmarks */}
            <div className="col-lg-7">
              <div className="mb-4">
                <h2 className="h1 fw-bold text-dark mb-3">
                  Mulai Bersama, Jadi Lebih Mudah
                </h2>
                <p className="text-muted mb-0">
                  ParkEase menampilkan Maps real-time yang menunjukkan lokasi parkir, jumlah slot tersedia, dan navigasi langkah demi langkah menuju tempat Anda secara otomatis.
                </p>
              </div>

              {/* Checkmarks Grid */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                    <span className="text-secondary fw-semibold small">Lihat ketersediaan slot real-time</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                    <span className="text-secondary fw-semibold small">Navigasi langsung ke slot pilihan</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                    <span className="text-secondary fw-semibold small">Bayar otomatis saat sesi berakhir</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                    <span className="text-secondary fw-semibold small">Notifikasi sebelum durasi habis</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  id="btn-all-features"
                  onClick={() => onPageChange("layanan-produk")}
                  className="btn btn-outline-dark d-flex align-items-center gap-2 px-4 py-2.5"
                  style={{ borderRadius: "12px" }}
                >
                  <span>Lihat Semua Fitur</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: OPERATIONAL REGIONS */}
      <section className="py-5 bg-light text-center">
        <div className="container py-5 px-3 px-sm-4 px-md-5">
          
          <div className="mx-auto mb-5 text-center" style={{ maxWidth: "700px" }}>
            <h2 className="h1 fw-bold text-dark mb-3">
              Disini ParkEase Berdiri
            </h2>
            <p className="text-muted mb-0">
              Beroperasi melayani pengemudi dan mitra parkir di kawasan Jabodetabek
            </p>
          </div>

          {/* Cards block for types of placement */}
          <div className="row g-4 justify-content-center max-w-5xl mx-auto">
            {/* Bandara */}
            <div className="col-md-4">
              <div 
                onClick={() => handleOpenSector(sectorsData.bandara)}
                className="card h-100 p-4 text-center border-1 text-dark cursor-pointer hover-card transition-all"
                style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)", borderColor: "rgba(59, 130, 246, 0.15)", cursor: "pointer", borderRadius: "16px" }}
              >
                <div className="card-body d-flex flex-column justify-content-between p-0" style={{ minHeight: "var(--sector-card-min-height, 180px)" }}>
                  <div>
                    <div className="mx-auto rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center mb-3" style={{ width: "var(--sector-icon-size, 64px)", height: "var(--sector-icon-size, 64px)" }}>
                      <Plane size={28} />
                    </div>
                    <h3 className="h5 fw-bold mb-2 text-dark">Bandara</h3>
                    <p className="text-muted small mb-0">Reservasi slot bandara untuk kelancaran penerbangan Anda.</p>
                  </div>
                  <div className="mt-3">
                    <span className="text-primary text-decoration-none fw-bold small d-inline-flex align-items-center gap-1">
                      Selengkapnya <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mall */}
            <div className="col-md-4">
              <div 
                onClick={() => handleOpenSector(sectorsData.mall)}
                className="card h-100 p-4 text-center border-1 text-dark cursor-pointer hover-card transition-all"
                style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)", borderColor: "rgba(59, 130, 246, 0.15)", cursor: "pointer", borderRadius: "16px" }}
              >
                <div className="card-body d-flex flex-column justify-content-between p-0" style={{ minHeight: "var(--sector-card-min-height, 180px)" }}>
                  <div>
                    <div className="mx-auto rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center mb-3" style={{ width: "var(--sector-icon-size, 64px)", height: "var(--sector-icon-size, 64px)" }}>
                      <ShoppingBag size={28} />
                    </div>
                    <h3 className="h5 fw-bold mb-2 text-dark">Mall</h3>
                    <p className="text-muted small mb-0">Pesan tempat parkir di mall-mall teramai tanpa harus antri.</p>
                  </div>
                  <div className="mt-3">
                    <span className="text-primary text-decoration-none fw-bold small d-inline-flex align-items-center gap-1">
                      Selengkapnya <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel */}
            <div className="col-md-4">
              <div 
                onClick={() => handleOpenSector(sectorsData.hotel)}
                className="card h-100 p-4 text-center border-1 text-dark cursor-pointer hover-card transition-all"
                style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)", borderColor: "rgba(59, 130, 246, 0.15)", cursor: "pointer", borderRadius: "16px" }}
              >
                <div className="card-body d-flex flex-column justify-content-between p-0" style={{ minHeight: "var(--sector-card-min-height, 180px)" }}>
                  <div>
                    <div className="mx-auto rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center mb-3" style={{ width: "var(--sector-icon-size, 64px)", height: "var(--sector-icon-size, 64px)" }}>
                      <Building2 size={28} />
                    </div>
                    <h3 className="h5 fw-bold mb-2 text-dark">Hotel</h3>
                    <p className="text-muted small mb-0">Parkir aman dan terintegrasi untuk kenyamanan menginap.</p>
                  </div>
                  <div className="mt-3">
                    <span className="text-primary text-decoration-none fw-bold small d-inline-flex align-items-center gap-1">
                      Selengkapnya <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="py-5 bg-white text-left">
        <div className="container px-3 px-sm-4 px-md-5">
          <div className="card border-0 bg-light p-4 p-md-5 rounded-4 shadow-sm" style={{ borderRadius: "24px" }}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
              <div className="text-start">
                <h3 className="h4 fw-bold text-dark mb-2">
                  Dapatkan Parkirmu dengan menjadi Mitra kami!
                </h3>
                <p className="text-muted small mb-0">
                  Bergabung sekarang dan nikmati keuntungan menjadi bagian dari ekosistem ParkEase.
                </p>
              </div>
              
              <a 
                id="cta-whatsapp-home"
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow"
                style={{ borderRadius: "16px", backgroundColor: "#117094", border: "none" }}
              >
                <PhoneCall size={18} />
                <span>Hubungi Kami!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Detailed Modal Pop-up */}
      <ProductModal
        product={selectedSector}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

    </div>
  );
}
