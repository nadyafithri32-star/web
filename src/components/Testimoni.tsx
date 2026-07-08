import { useState, useEffect } from "react";
import { Star, Quote, CheckCircle2, RefreshCw, ArrowRight, PhoneCall } from "lucide-react";
import { ReviewItem } from "../types";

export default function Testimoni() {
  const [activeFilter, setActiveFilter] = useState<'Semua' | 'Pengguna' | 'Operator' | 'Mitra Hotel' | 'Mitra Bandara'>('Semua');
  const [apiAvatars, setApiAvatars] = useState<string[]>([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiConnected, setApiConnected] = useState(false);

  // Hardcoded Indonesian Reviews matching Screenshot 5 layout exactly
  const initialReviews: ReviewItem[] = [
    {
      id: "rev-1",
      name: "Siti Rahayu",
      role: "Pengendara Harian",
      company: "Karyawan Swasta, Jakarta Selatan",
      avatar: "SR",
      rating: 5,
      category: "Pengguna",
      content: "Tidak perlu muter-muter lagi cari parkir! Dengan ParkEase saya bisa reservasi dulu dari rumah. Sangat praktis dan menghemat waktu saya setiap hari. Fitur notifikasi-nya juga sangat membantu.",
    },
    {
      id: "rev-2",
      name: "Ahmad Fauzi",
      role: "Direktur",
      company: "PT Parking Solutions Indonesia",
      avatar: "AF",
      rating: 5,
      category: "Operator",
      content: "Integrasi IoT yang ditawarkan ParkEase sangat canggih namun mudah dioperasikan. Tim support mereka juga sangat responsif dan profesional. ROI kami meningkat signifikan sejak menggunakan platform ini.",
    },
    {
      id: "rev-3",
      name: "Dewi Kusuma",
      role: "Pengunjung Rutin",
      company: "Pondok Indah Mall, Jakarta",
      avatar: "DK",
      rating: 5,
      category: "Pengguna",
      content: "Aplikasknya sangat user-friendly. Saya bisa lihat ketersediaan parkir sebelum berangkat. Bayarnya pun langsung dari aplikasi, cashless dan mudah! Saya sudah rekomendasikan ke semua teman.",
    },
    {
      id: "rev-4",
      name: "Reza Pratama",
      role: "General Manager",
      company: "Hotel Sahid Jakarta",
      avatar: "RP",
      rating: 5,
      category: "Mitra Hotel",
      content: "Sejak menggunakan ParkEase, komplain tamu soal parkir turun signifikan. Dashboard-nya membantu kami memantau kapasitas secara real-time. Integrasi dengan sistem hotel berjalan sempurna.",
    },
    {
      id: "rev-5",
      name: "Linda Wijaya",
      role: "Co-Founder",
      company: "StartupHub, Jakarta",
      avatar: "LW",
      rating: 5,
      category: "Pengguna",
      content: "Produk yang inovatif! Notifikasi reminder-nya sangat membantu. ParkEase adalah solusi parkir masa depan Indonesia. Kami bahkan mengintegrasikannya dengan aplikasi internal perusahaan kami.",
    },
    {
      id: "rev-6",
      name: "Teguh Wahyu",
      role: "Supervisor Parkir",
      company: "Bandara Soekarno-Hatta",
      avatar: "TW",
      rating: 5,
      category: "Mitra Bandara",
      content: "Volume kendaraan bandara sangat tinggi, tapi ParkEase mampu handle-nya dengan baik. Sistem reservasi sangat membantu penumpang yang ingin memastikan slot parkir sebelum terbang.",
    },
    {
      id: "rev-7",
      name: "Melinda Putri",
      role: "Ibu Rumah Tangga",
      company: "Pengguna Aktif, Bekasi",
      avatar: "MP",
      rating: 5,
      category: "Pengguna",
      content: "Sebagai ibu dengan anak kecil, mencari parkir itu nightmare! Tapi dengan ParkEase sekarang saya bisa fokus berkendara tanpa khawatir. Bayar pun tinggal tap, tidak perlu cari uang receh.",
    },
    {
      id: "rev-8",
      name: "Hendra Setiawan",
      role: "Manajer IT",
      company: "BFSI Group Indonesia",
      avatar: "HS",
      rating: 5,
      category: "Operator",
      content: "Implementasi sistem sangat smooth. Tim teknis sangat membantu. ParkEase adalah solusi parkir integrasi API. Dokumentasinya lengkap dan tim support siap kapanpun dibutuhkan.",
    },
  ];

  // Dynamic API Integration: Fetch random user photos live from randomuser.me public API
  useEffect(() => {
    let active = true;
    async function fetchAvatars() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=8&inc=picture&noinfo");
        if (!res.ok) throw new Error();
        const data = await res.json();
        
        if (active && data?.results) {
          const pics = data.results.map((u: any) => u.picture.medium);
          setApiAvatars(pics);
          setApiConnected(true);
          setApiLoading(false);
        }
      } catch (err) {
        if (active) {
          setApiLoading(false);
          setApiConnected(false);
        }
      }
    }
    
    fetchAvatars();
    return () => {
      active = false;
    };
  }, []);

  const filters: Array<'Semua' | 'Pengguna' | 'Operator' | 'Mitra Hotel' | 'Mitra Bandara'> = [
    'Semua',
    'Pengguna',
    'Operator',
    'Mitra Hotel',
    'Mitra Bandara'
  ];

  const filteredReviews = activeFilter === 'Semua' 
    ? initialReviews 
    : initialReviews.filter(rev => rev.category === activeFilter);

  return (
    <div className="pb-5 text-start">
      {/* 1. HERO BANNER */}
      <section className="py-5 position-relative overflow-hidden text-dark d-flex align-items-center border-bottom" style={{ background: "linear-gradient(180deg, #e3efff 0%, #f0f6ff 100%)", minHeight: "380px" }}>
        {/* Subtle background decoration */}
        <div className="position-absolute inset-0" style={{ opacity: 0.05, pointerEvents: "none" }}>
          <img
            src="https://images.unsplash.com/photo-1517677129300-07b130802f46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWJhciUyMG9yYW5nJTIwc2VueXVtfGVufDB8fDB8fHww"
            alt="Testimonials Banner"
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
                Apa Kata <span style={{ color: "#0d6efd" }}>Mereka yang Puas</span> dengan Solusi Kami?
              </h1>
              <p className="mb-4 text-secondary" style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "600px" }}>
                Lebih dari 500.000 pengemudi cerdas dan 3.000 mitra bisnis telah merasakan kemudahan, efisiensi tinggi, serta kenyamanan luar biasa dari platform ekosistem ParkEase.co.
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
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
                    alt="Satisfied Partner" 
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

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="py-4 border-bottom border-top text-start" style={{ background: "linear-gradient(90deg, rgba(19, 26, 80, 0.08) 0%, rgba(19, 26, 80, 0.02) 100%)", borderColor: "rgba(19, 26, 80, 0.1)" }}>
        <div className="container px-3 px-sm-4 px-md-5">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="h2 fw-bold mb-1" style={{ color: "#0d6efd" }}>4.9/5</div>
              <div className="small fw-bold text-uppercase" style={{ letterSpacing: "1px", color: "#131A50" }}>Rating App Store</div>
            </div>
            <div className="col-md-4 border-md-start border-md-end py-3 py-md-0" style={{ borderColor: "rgba(19, 26, 80, 0.1)" }}>
              <div className="h2 fw-bold mb-1" style={{ color: "#0d6efd" }}>98%</div>
              <div className="small fw-bold text-uppercase" style={{ letterSpacing: "1px", color: "#131A50" }}>Pengguna Puas</div>
            </div>
            <div className="col-md-4">
              <div className="h2 fw-bold mb-1" style={{ color: "#0d6efd" }}>500rb+</div>
              <div className="small fw-bold text-uppercase" style={{ letterSpacing: "1px", color: "#131A50" }}>Ulasan Positif</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED REVIEW (BUDI SANTOSO) */}
      <section id="featured-review" className="py-5 bg-white">
        <div className="container px-3 px-sm-4 px-md-5 py-4">
          <div className="text-center mb-4">
            <h2 className="h4 fw-bold text-dark">Ulasan Unggulan</h2>
          </div>

          <div className="card border-0 bg-light rounded-5 p-4 p-md-5 shadow-sm position-relative text-center text-sm-start" style={{ maxWidth: "850px", margin: "0 auto" }}>
            {/* Quote Icon Background Decorative */}
            <Quote size={80} className="position-absolute text-secondary text-opacity-10" style={{ top: "16px", left: "16px", pointerEvents: "none", zIndex: 0 }} />
            
            <div className="position-relative" style={{ zIndex: 1 }}>
              {/* Review content */}
              <p className="lead text-dark mb-4 italic" style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.7", marginTop: "12px" }}>
                "ParkEase benar-benar mengubah cara kami mengelola parkir. Antrian berkurang drastis dan pendapatan meningkat 30% hanya dalam 2 bulan pertama! Dashboard-nya sangat informatif dan mudah digunakan."
              </p>

              {/* Author profile */}
              <div className="d-flex flex-column flex-sm-row align-items-center gap-3 pt-3 border-top">
                <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold shadow-sm flex-shrink-0" style={{ width: "48px", height: "48px", backgroundColor: "#0B133A" }}>
                  BS
                </div>
                <div>
                  <h4 className="h6 fw-bold text-dark mb-0">Budi Santoso</h4>
                  <p className="text-muted small mb-0 mt-0.5">Manager Operasional · Mall Taman Anggrek, Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALL REVIEWS GRID WITH LIVE API IMAGES */}
      <section className="py-5 bg-light border-top">
        <div className="container px-3 px-sm-4 px-md-5 py-4">
          
          <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mb-4">
            <h2 className="h3 fw-bold text-dark mb-0">Semua Ulasan</h2>
            
            {/* Live API Connector Badge */}
            <div className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 p-2 rounded-pill d-inline-flex align-items-center gap-1">
              {apiLoading ? (
                <>
                  <RefreshCw size={12} className="text-success" style={{ animation: "spin 2s linear infinite" }} />
                  <span className="small">Koneksi API: Menghubungkan...</span>
                </>
              ) : apiConnected ? (
                <>
                  <CheckCircle2 size={12} className="text-success" />
                  <span className="small">API Status: Live (RandomUser API Terkoneksi)</span>
                </>
              ) : (
                <>
                  <span className="rounded-circle bg-warning d-inline-block" style={{ width: "6px", height: "6px" }} />
                  <span className="small">Koneksi API: Standby (Fallback Aktif)</span>
                </>
              )}
            </div>
          </div>

          {/* Filter Categories Row */}
          <div className="d-flex flex-wrap gap-2 mb-4 pb-2" style={{ overflowX: "auto" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`btn btn-sm px-4 py-2 rounded-pill fw-bold transition-all ${
                  activeFilter === f
                    ? "btn-dark text-white shadow-sm"
                    : "btn-white bg-white text-muted border"
                }`}
                style={{ fontSize: "12px", whiteSpace: "nowrap" }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="row g-4">
            {filteredReviews.map((rev, idx) => {
              // Extract a dynamic image from open public API if loaded
              const photoUrl = apiAvatars[idx] || "";
              
              return (
                <div key={rev.id} className="col-lg-4 col-md-6">
                  <div
                    id={rev.id}
                    className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white d-flex flex-column justify-content-between text-start"
                  >
                    <div className="mb-3">
                      {/* Header: Category badge */}
                      <div className="d-flex align-items-center justify-content-end mb-3">
                        <span className="badge bg-secondary bg-opacity-10 text-muted px-2.5 py-1.5 rounded" style={{ fontSize: "9px" }}>
                          {rev.category}
                        </span>
                      </div>

                      {/* Review text */}
                      <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                        {rev.content}
                      </p>
                    </div>

                    {/* Profile info */}
                    <div className="d-flex align-items-center gap-2.5 pt-3 mt-3 border-top flex-shrink-0">
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={rev.name}
                          referrerPolicy="no-referrer"
                          className="rounded-circle border"
                          style={{ width: "36px", height: "36px", objectFit: "cover" }}
                        />
                      ) : (
                        <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center fw-bold small" style={{ width: "36px", height: "36px" }}>
                          {rev.avatar}
                        </div>
                      )}
                      <div>
                        <h4 className="fw-bold text-dark mb-0" style={{ fontSize: "12px" }}>
                          {rev.name}
                        </h4>
                        <p className="text-muted mb-0" style={{ fontSize: "10px" }}>
                          {rev.role} · {rev.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION: CTA */}
      <section className="py-5 text-center text-white border-top" style={{ background: "linear-gradient(135deg, #117094 0%, #1a88b5 100%)" }}>
        <div className="container px-3 px-sm-4 px-md-5 py-3">
          <h2 className="h2 fw-bold text-white mb-2">
            Bergabung & Rasakan Sendiri
          </h2>
          <p className="text-white-50 small mb-4 mx-auto" style={{ maxWidth: "550px" }}>
            Jadilah bagian dari komunitas ParkEase yang terus berkembang.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20ParkEase,%20saya%20tertarik%20bergabung%20dengan%20komunitas%20ParkEase!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg d-inline-flex align-items-center gap-2"
            style={{ fontSize: "14px", backgroundColor: "#0dcbfd", borderColor: "#0dcbfd" }}
          >
            <span>Mulai Sekarang</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
