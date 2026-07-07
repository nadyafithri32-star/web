import { useState } from "react";
import { PhoneCall, Sparkles } from "lucide-react";
import { ServiceItem, ProductItem } from "../types";
import ProductModal from "./ProductModal";

export default function LayananProduk() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

  // Layanan List (6 Cards) matching Screenshot 3 exactly
  const services: ServiceItem[] = [
    {
      id: "srv-1",
      title: "Navigasi Real-time & Pencarian Lokasi",
      description: "Sistem menampilkan Maps yang menunjukkan lokasi parkir dan jumlah slot yang tersedia secara langsung.",
      iconName: "navigation",
    },
    {
      id: "srv-2",
      title: "RFID & Kamera Plate Recognition",
      description: "Sistem pengenalan plat kendaraan secara otomatis untuk akses masuk dan keluar yang lebih cepat dan akurat.",
      iconName: "camera",
    },
    {
      id: "srv-3",
      title: "Manajemen Slot Parkir Otomatis",
      description: "Sistem alokasi slot secara otomatis dan memberikan konfirmasi beserta kode QR atau nomor reservasi.",
      iconName: "grid",
    },
    {
      id: "srv-4",
      title: "Integrasi Pembayaran & E-Parking",
      description: "Sistem mendukung berbagai metode pembayaran digital yang diproses otomatis saat sesi parkir berakhir.",
      iconName: "payment",
    },
    {
      id: "srv-5",
      title: "Sistem Notifikasi & Alert Real-time",
      description: "Harga tarif yang sesuai dengan kondisi pasar dan panduan menuju lokasi parkir yang dipilih dalam waktu nyata.",
      iconName: "bell",
    },
    {
      id: "srv-6",
      title: "Manajemen Operasi Sistem Pintar",
      description: "Platform manajemen operasi terpadu yang memungkinkan operator parkir memantau dan mengontrol seluruh lahan.",
      iconName: "settings",
    },
  ];

  // Produk List (4 Cards) matching hardware equipment categories we provide to partners
  const products: ProductItem[] = [
    {
      id: "prod-palang",
      category: "Palang Barrier",
      title: "Palang Parkir Otomatis",
      description: "Palang otomatis berkecepatan tinggi dilengkapi sensor ganda untuk kontrol masuk-keluar kendaraan yang lancar & aman.",
      badgeColor: "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25",
      features: [
        "Buka-tutup sangat cepat (< 1.5 detik)",
        "Lengan palang dengan indikator LED",
        "Sensor anti-tabrak (Infrared & Loop)",
        "Motor heavy-duty untuk trafik padat",
      ],
    },
    {
      id: "prod-kamera",
      category: "Kamera Pintar",
      title: "Kamera LPR & ANPR (Plate Scanner)",
      description: "Kamera pemindai bertenaga AI untuk membaca plat nomor kendaraan otomatis, mendukung akses cepat tanpa tiket fisik.",
      badgeColor: "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25",
      features: [
        "Akurasi deteksi plat nomor hingga 99%",
        "Dual-Lens & Infrared untuk kondisi malam",
        "Integrasi database lisensi kendaraan",
        "Pencatatan waktu masuk & keluar presisi",
      ],
    },
    {
      id: "prod-kios",
      category: "Kios Pembayaran",
      title: "Kios Dispenser Tiket & RFID Mandiri",
      description: "Mesin dispenser tiket masuk otomatis (manless) yang andal, mendukung tiket thermal dan kartu nirkontak RFID.",
      badgeColor: "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25",
      features: [
        "Printer thermal cepat & anti-macet",
        "Mendukung kartu RFID & kartu e-money",
        "Sistem panduan suara (voice guide)",
        "Casing baja kokoh tahan air (outdoor)",
      ],
    },
    {
      id: "prod-layar",
      category: "Media Informasi",
      title: "Layar Informasi Tarif & Slot Parkir",
      description: "Layar display LED dinamis untuk menginformasikan sisa slot parkir kosong dan tarif secara real-time kepada pengendara.",
      badgeColor: "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25",
      features: [
        "Display LED tingkat kecerahan tinggi",
        "Update data slot kosong secara real-time",
        "Tampilan tarif interaktif",
        "Dapat menampilkan iklan & pengumuman",
      ],
    },
  ];

  const hotspotsData: Record<string, { title: string; category: string; description: string; productRef: ProductItem }> = {
    kamera: {
      title: "Kamera LPR & ANPR (Plate Scanner)",
      category: "Kamera Pintar",
      description: "Kamera pemindai bertenaga AI untuk membaca plat nomor kendaraan otomatis, mendukung akses cepat tanpa tiket fisik.",
      productRef: products[1]
    },
    palang: {
      title: "Palang Parkir Otomatis",
      category: "Palang Barrier",
      description: "Palang otomatis berkecepatan tinggi dilengkapi sensor ganda untuk kontrol masuk-keluar kendaraan yang lancar & aman.",
      productRef: products[0]
    },
    kios: {
      title: "Kios Tiket & RFID Mandiri",
      category: "Kios Pembayaran",
      description: "Mesin dispenser tiket masuk otomatis (manless) yang andal, mendukung tiket thermal dan kartu nirkontak RFID.",
      productRef: products[2]
    },
    layar: {
      title: "Layar Informasi Tarif & Slot",
      category: "Media Informasi",
      description: "Layar display LED dinamis untuk menginformasikan sisa slot parkir kosong dan tarif secara real-time kepada pengendara.",
      productRef: products[3]
    }
  };

  const handleOpenDetail = (product: ProductItem) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="pb-5">
      {/* 1. TOP BANNER */}
      <section className="py-5 position-relative overflow-hidden text-dark d-flex align-items-center border-bottom" style={{ background: "linear-gradient(180deg, #e3efff 0%, #f0f6ff 100%)", minHeight: "380px" }}>
        {/* Subtle background decoration */}
        <div className="position-absolute inset-0" style={{ opacity: 0.05, pointerEvents: "none" }}>
          <img
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1200"
            alt="Waving Driver Banner"
            referrerPolicy="no-referrer"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        
        <div className="container position-relative py-3 py-md-4 px-3 px-sm-4 px-md-5" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Column: Text & Buttons */}
            <div className="col-lg-7 text-start">
              <h1 className="display-5 fw-bold mb-3 text-dark" style={{ lineHeight: "1.2" }}>
                Solusi <span style={{ color: "#0d6efd" }}>Layanan & Produk</span> Terbaik Untuk Kenyamanan Parkir
              </h1>
              <p className="mb-4 text-secondary" style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "600px" }}>
                Solusi terlengkap bagi Pengguna Transportasi and Pengunjung pusat perbelanjaan serta ruang publik lainnya untuk mendapatkan transparansi, reservasi instan, dan pembayaran non-tunai yang bebas hambatan.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn px-4 py-3 fw-bold text-white shadow-sm hover-brightness transition-all d-inline-flex align-items-center gap-2" 
                  style={{ backgroundColor: "#0d6efd", borderRadius: "12px", border: "none" }}
                >
                  <PhoneCall size={16} />
                  <span>Daftar Sekarang</span>
                </a>
              </div>
            </div>

            {/* Right Column: Featured Image */}
            <div className="col-lg-5 col-12 d-block">
              <div className="position-relative">
                {/* Decorative blue ring behind the card */}
                <div className="position-absolute rounded-circle d-none d-sm-block" style={{ border: "2px solid rgba(13, 110, 253, 0.2)", width: "300px", height: "300px", top: "-20px", right: "-20px", zIndex: 0 }} />
                
                <div className="card border-0 shadow-lg overflow-hidden position-relative" style={{ borderRadius: "24px", zIndex: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600" 
                    alt="Modern Parking Structure" 
                    referrerPolicy="no-referrer"
                    className="img-fluid w-100"
                    style={{ minHeight: "220px", maxHeight: "360px", objectFit: "cover" }}
                  />
                  {/* Subtle blend gradient over the image */}
                  <div className="position-absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,33,44,0.05) 0%, rgba(5,33,44,0.15) 100%)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LAYANAN SECTION */}
      <section id="layanan-kami" className="py-5 bg-white">
        <div className="container px-3 px-sm-4 px-md-5 py-4">
          
          <div className="row g-4">
            {services.map((srv) => (
              <div key={srv.id} className="col-lg-4 col-md-6">
                <div
                  id={srv.id}
                  className="card h-100 p-4 border-0 shadow-sm bg-light text-start position-relative overflow-hidden"
                  style={{ borderRadius: "16px" }}
                >
                  {/* Decorative Blue Dot Accent */}
                  <span className="position-absolute rounded-circle bg-primary" style={{ top: "24px", left: "24px", width: "10px", height: "10px" }} />
                  
                  <div className="ps-4 mt-1">
                    <h3 className="h6 fw-bold text-dark mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: "1.6", fontSize: "12px" }}>
                      {srv.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PRODUK KAMI SECTION */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container px-3 px-sm-4 px-md-5 py-4">
          
          <div className="text-center mb-5">
            <h2 className="h1 fw-bold text-dark">
              Produk kami
            </h2>
          </div>

          <div className="row g-5 align-items-center">
            
            {/* Left Visual Illustration Column */}
            <div className="col-lg-5 d-flex justify-content-center">
              <div className="card border-0 p-4 shadow-lg rounded-5 bg-white overflow-hidden position-relative w-100" style={{ maxWidth: "380px" }}>
                <div className="position-absolute" style={{ top: "-40px", left: "-40px", right: "-40px", bottom: "-40px", background: "radial-gradient(circle, rgba(255,122,0,0.05) 0%, rgba(37,99,235,0.05) 100%)", pointerEvents: "none" }} />
                
                <div className="position-relative w-100 h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Sparkles size={16} className="text-warning" />
                      <span className="fw-bold text-muted small" style={{ fontSize: "10px", letterSpacing: "1px" }}>ECOSYSTEM LIVE VIEW</span>
                    </div>
                  </div>

                  {/* High Fidelity Interactive SVG representing the barrier gate system layout */}
                  <div className="position-relative my-auto w-100 bg-light border border-light-subtle rounded-4 p-2 overflow-hidden d-flex align-items-center justify-content-center" style={{ aspectRatio: "4/3" }}>
                    <svg className="w-100 h-100" style={{ maxHeight: "200px" }} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Grey concrete island base of the parking lane */}
                      <path d="M10 115 C 10 100, 190 100, 190 115 L 180 135 C 180 140, 20 140, 20 135 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
                      <path d="M25 118 L 175 118 L 165 130 L 35 130 Z" fill="#94A3B8" opacity="0.5" />
                      
                      {/* Left Mast holding LPR dual cameras */}
                      <rect x="52" y="112" width="6" height="4" fill="#334155" />
                      <rect x="54" y="30" width="2" height="82" fill="#475569" />
                      <rect x="55" y="42" width="10" height="2" fill="#475569" />
                      <rect x="55" y="62" width="10" height="2" fill="#475569" />
                      
                      {/* LPR Cameras */}
                      <g transform="translate(62, 34)">
                        <rect x="0" y="0" width="16" height="8" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
                        <polygon points="12,0 17,2 17,6 12,8" fill="#CBD5E1" />
                        <circle cx="15" cy="4" r="1.5" fill="#000" />
                        <circle cx="15" cy="4" r="0.5" fill="#3B82F6" />
                        <rect x="-1" y="2" width="2" height="4" rx="0.5" fill="#64748B" />
                      </g>
                      <g transform="translate(62, 54)">
                        <rect x="0" y="0" width="16" height="8" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
                        <polygon points="12,0 17,2 17,6 12,8" fill="#CBD5E1" />
                        <circle cx="15" cy="4" r="1.5" fill="#000" />
                        <circle cx="15" cy="4" r="0.5" fill="#3B82F6" />
                        <rect x="-1" y="2" width="2" height="4" rx="0.5" fill="#64748B" />
                      </g>

                      {/* Automatic Barrier Gate Housing */}
                      <g transform="translate(80, 75)">
                        <rect x="0" y="0" width="16" height="38" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                        <rect x="0" y="8" width="16" height="6" fill="#EF4444" />
                        <line x1="2" y1="14" x2="6" y2="8" stroke="#FFFFFF" strokeWidth="1" />
                        <line x1="6" y1="14" x2="10" y2="8" stroke="#FFFFFF" strokeWidth="1" />
                        <line x1="10" y1="14" x2="14" y2="8" stroke="#FFFFFF" strokeWidth="1" />
                        <circle cx="8" cy="22" r="2.5" fill="#FF7A00" opacity="0.3" />
                        <circle cx="8" cy="22" r="1" fill="#FF7A00" />
                      </g>

                      {/* Automatic Barrier Arm */}
                      <circle cx="88" cy="81" r="3.5" fill="#94A3B8" stroke="#1E293B" strokeWidth="1" />
                      <g transform="translate(10, 78)">
                        <line x1="0" y1="3" x2="78" y2="3" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" />
                        <line x1="12" y1="3" x2="18" y2="3" stroke="#FBBF24" strokeWidth="3.5" />
                        <line x1="24" y1="3" x2="30" y2="3" stroke="#FBBF24" strokeWidth="3.5" />
                        <line x1="36" y1="3" x2="42" y2="3" stroke="#FBBF24" strokeWidth="3.5" />
                        <line x1="48" y1="3" x2="54" y2="3" stroke="#FBBF24" strokeWidth="3.5" />
                        <line x1="60" y1="3" x2="66" y2="3" stroke="#FBBF24" strokeWidth="3.5" />
                        <line x1="5" y1="3" x2="73" y2="3" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" />
                      </g>

                      {/* Slim vertical information display */}
                      <g transform="translate(110, 50)">
                        <rect x="7" y="25" width="2" height="38" fill="#475569" />
                        <rect x="0" y="0" width="16" height="25" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                        <rect x="1.5" y="1.5" width="13" height="11" rx="1.5" fill="#020617" stroke="#3B82F6" strokeWidth="0.5" />
                        <line x1="3" y1="4" x2="10" y2="4" stroke="#EF4444" strokeWidth="0.8" />
                        <line x1="3" y1="7" x2="12" y2="7" stroke="#10B981" strokeWidth="0.8" />
                        <line x1="3" y1="10" x2="8" y2="10" stroke="#3B82F6" strokeWidth="0.8" />
                        <rect x="3" y="15" width="10" height="2" fill="#F1F5F9" opacity="0.4" />
                        <rect x="4" y="19" width="8" height="2" fill="#FBBF24" opacity="0.6" />
                      </g>

                      {/* Manless ticket dispenser on the right */}
                      <g transform="translate(142, 45)">
                        <rect x="0" y="0" width="22" height="68" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                        <rect x="0" y="60" width="22" height="4" fill="#0B133A" rx="1" />
                        <rect x="3" y="6" width="16" height="12" rx="1" fill="#334155" stroke="#475569" strokeWidth="0.5" />
                        <rect x="4" y="24" width="6" height="6" rx="1" fill="#2563EB" />
                        <circle cx="7" cy="27" r="1.5" fill="#FFFFFF" />
                        <rect x="12" y="26" width="7" height="1.5" rx="0.5" fill="#020617" />
                        <line x1="13" y1="29" x2="18" y2="29" stroke="#E2E8F0" strokeWidth="1" />
                        <rect x="3" y="38" width="16" height="10" rx="1.5" fill="#0F172A" stroke="#475569" strokeWidth="0.5" />
                        <circle cx="11" cy="43" r="2" fill="#FF7A00" opacity="0.3" />
                        <circle cx="11" cy="43" r="1" fill="#FF7A00" />
                        <circle cx="6" cy="54" r="0.5" fill="#64748B" />
                        <circle cx="11" cy="54" r="0.5" fill="#64748B" />
                        <circle cx="16" cy="54" r="0.5" fill="#64748B" />
                      </g>
                    </svg>

                    {/* Interactive Hotspot Buttons with absolute layouts converted to styles */}
                    {/* 1. Kamera LPR & ANPR */}
                    <div 
                      className="position-absolute"
                      style={{ top: "28%", left: "34%", zIndex: 10 }}
                      onMouseEnter={() => setHoveredHotspot("kamera")}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <button
                        id="hotspot-kamera"
                        onClick={() => handleOpenDetail(hotspotsData.kamera.productRef)}
                        className="border-0 rounded-circle d-flex align-items-center justify-content-center p-0 position-relative transition-all"
                        style={{ width: "24px", height: "24px", backgroundColor: "#FF7A00" }}
                        aria-label="Kamera LPR & ANPR"
                      >
                        <span className="position-absolute rounded-circle bg-warning bg-opacity-75" style={{ inset: 0, transform: "scale(1.5)", animation: "ping 1.5s infinite", opacity: 0.5 }} />
                        <span className="rounded-circle bg-white shadow-sm" style={{ width: "10px", height: "10px" }} />
                      </button>
                      
                      {hoveredHotspot === "kamera" && (
                        <div className="position-absolute bottom-100 start-50 translate-middle-x mb-2 bg-dark text-white text-uppercase px-2 py-1 rounded shadow-lg text-nowrap" style={{ fontSize: "9px", fontWeight: "800", zIndex: 20 }}>
                          CCTV Camera / LPR
                        </div>
                      )}
                    </div>

                    {/* 2. Palang Parkir */}
                    <div 
                      className="position-absolute"
                      style={{ top: "52%", left: "24%", zIndex: 10 }}
                      onMouseEnter={() => setHoveredHotspot("palang")}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <button
                        id="hotspot-palang"
                        onClick={() => handleOpenDetail(hotspotsData.palang.productRef)}
                        className="border-0 rounded-circle d-flex align-items-center justify-content-center p-0 position-relative transition-all"
                        style={{ width: "24px", height: "24px", backgroundColor: "#FF7A00" }}
                        aria-label="Palang Parkir Otomatis"
                      >
                        <span className="position-absolute rounded-circle bg-warning bg-opacity-75" style={{ inset: 0, transform: "scale(1.5)", animation: "ping 1.5s infinite", opacity: 0.5 }} />
                        <span className="rounded-circle bg-white shadow-sm" style={{ width: "10px", height: "10px" }} />
                      </button>

                      {hoveredHotspot === "palang" && (
                        <div className="position-absolute bottom-100 start-50 translate-middle-x mb-2 bg-dark text-white text-uppercase px-2 py-1 rounded shadow-lg text-nowrap" style={{ fontSize: "9px", fontWeight: "800", zIndex: 20 }}>
                          Palang Barrier
                        </div>
                      )}
                    </div>

                    {/* 3. Layar Tarif */}
                    <div 
                      className="position-absolute"
                      style={{ top: "34%", left: "58%", zIndex: 10 }}
                      onMouseEnter={() => setHoveredHotspot("layar")}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <button
                        id="hotspot-layar"
                        onClick={() => handleOpenDetail(hotspotsData.layar.productRef)}
                        className="border-0 rounded-circle d-flex align-items-center justify-content-center p-0 position-relative transition-all"
                        style={{ width: "24px", height: "24px", backgroundColor: "#FF7A00" }}
                        aria-label="Layar Tarif & Informasi"
                      >
                        <span className="position-absolute rounded-circle bg-warning bg-opacity-75" style={{ inset: 0, transform: "scale(1.5)", animation: "ping 1.5s infinite", opacity: 0.5 }} />
                        <span className="rounded-circle bg-white shadow-sm" style={{ width: "10px", height: "10px" }} />
                      </button>

                      {hoveredHotspot === "layar" && (
                        <div className="position-absolute bottom-100 start-50 translate-middle-x mb-2 bg-dark text-white text-uppercase px-2 py-1 rounded shadow-lg text-nowrap" style={{ fontSize: "9px", fontWeight: "800", zIndex: 20 }}>
                          Layar Informasi
                        </div>
                      )}
                    </div>

                    {/* 4. Kios Tiket */}
                    <div 
                      className="position-absolute"
                      style={{ top: "40%", left: "78%", zIndex: 10 }}
                      onMouseEnter={() => setHoveredHotspot("kios")}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <button
                        id="hotspot-kios"
                        onClick={() => handleOpenDetail(hotspotsData.kios.productRef)}
                        className="border-0 rounded-circle d-flex align-items-center justify-content-center p-0 position-relative transition-all"
                        style={{ width: "24px", height: "24px", backgroundColor: "#FF7A00" }}
                        aria-label="Kios Tiket Mandiri"
                      >
                        <span className="position-absolute rounded-circle bg-warning bg-opacity-75" style={{ inset: 0, transform: "scale(1.5)", animation: "ping 1.5s infinite", opacity: 0.5 }} />
                        <span className="rounded-circle bg-white shadow-sm" style={{ width: "10px", height: "10px" }} />
                      </button>

                      {hoveredHotspot === "kios" && (
                        <div className="position-absolute bottom-100 start-50 translate-middle-x mb-2 bg-dark text-white text-uppercase px-2 py-1 rounded shadow-lg text-nowrap" style={{ fontSize: "9px", fontWeight: "800", zIndex: 20 }}>
                          Kios Tiket Mandiri
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-3 bg-light border rounded-3 text-center text-muted fw-bold small mt-3" style={{ fontSize: "10px", letterSpacing: "1px" }}>
                    KETUK LINGKARAN ORANYE UNTUK DETAIL ALAT
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Cards List */}
            <div className="col-lg-7 d-flex flex-column gap-3 text-start">
              {products.map((prod) => {
                return (
                  <div
                    key={prod.id}
                    id={prod.id}
                    className="card text-white border-0 shadow-lg rounded-4 overflow-hidden d-flex flex-row align-items-stretch"
                    style={{ backgroundColor: "#0B133A", minHeight: "var(--layanan-card-min-height, 140px)" }}
                  >
                    {/* Left Side Content */}
                    <div className="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                      <div>
                        <span className={`badge px-2.5 py-1.5 rounded-pill text-uppercase font-monospace mb-2 ${prod.badgeColor}`} style={{ fontSize: "10px" }}>
                          {prod.category}
                        </span>
                        <h3 className="h5 fw-bold text-white mb-2">
                          {prod.title}
                        </h3>
                      </div>
                      <p className="text-white-50 small mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: "1.5" }}>
                        {prod.description}
                      </p>
                    </div>

                    {/* Right Side Vertical Orange Button */}
                    <button
                      id={`btn-detail-${prod.id}`}
                      onClick={() => handleOpenDetail(prod)}
                      className="border-0 px-2 d-flex flex-column align-items-center justify-content-center gap-2 flex-shrink-0"
                      style={{ width: "56px", backgroundColor: "#FF7A00", color: "#fff" }}
                      title="Klik untuk detail selengkapnya"
                    >
                      <svg className="text-white" style={{ width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      
                      <span 
                        className="text-white fw-bold text-uppercase text-center"
                        style={{ fontSize: "9px", letterSpacing: "2px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        Selengkapnya
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION MITRA */}
      <section className="py-5 bg-white">
        <div className="container px-3 px-sm-4 px-md-5">
          <div className="card border-0 text-white p-4 p-md-5 rounded-4 shadow-lg" style={{ background: "linear-gradient(135deg, #117094 0%, #1a88b5 100%)", borderRadius: "24px" }}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 text-start">
              <div>
                <h3 className="h4 fw-bold mb-2 text-white">
                  Dapatkan Parkirmu dengan menjadi Mitra kami!
                </h3>
                <p className="text-white-50 small mb-0">
                  Sinergikan area komersial Anda dengan jaringan navigasi parkir cerdas kami.
                </p>
              </div>
              
              <a
                id="cta-whatsapp-layanan"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow"
                style={{ borderRadius: "12px" }}
              >
                <PhoneCall size={18} />
                <span>Hubungi kami!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP MODAL COMPONENT */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}
