import { useState } from "react";
import { Heart, Target, Eye, Navigation, ShieldCheck, Zap, PhoneCall, CreditCard, TrendingUp, Wrench } from "lucide-react";

interface PartnerItem {
  name: string;
  type: "mall" | "airport" | "retail" | "hotel";
  logo: string;
  primaryColor: string;
  textColor: string;
}

const partnersData: PartnerItem[] = [
  {
    name: "Summarecon Mall Bekasi",
    type: "mall",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Logo_Summarecon_Mall_Bekasi.png/320px-Logo_Summarecon_Mall_Bekasi.png",
    primaryColor: "from-orange-500 to-red-600",
    textColor: "text-orange-600",
  },
  {
    name: "Kota Kasablanka",
    type: "mall",
    logo: "https://www.kotakasablanka.co.id/images/logo.png",
    primaryColor: "from-sky-500 to-blue-700",
    textColor: "text-sky-700",
  },
  {
    name: "Kuningan City",
    type: "mall",
    logo: "https://www.kuningancity.com/wp-content/uploads/2019/04/logo-kc-new-1.png",
    primaryColor: "from-indigo-500 to-violet-800",
    textColor: "text-indigo-700",
  },
  {
    name: "Plaza Blok M",
    type: "mall",
    logo: "https://seeklogo.com/images/P/plaza-blok-m-logo-FE200D9FBA-seeklogo.com.png",
    primaryColor: "from-yellow-400 to-blue-600",
    textColor: "text-blue-800",
  },
  {
    name: "Mal Botani Square",
    type: "mall",
    logo: "https://botanisquare.com/wp-content/uploads/2021/05/Logo-Botani.png",
    primaryColor: "from-orange-500 to-amber-600",
    textColor: "text-orange-600",
  },
  {
    name: "Senayan City",
    type: "mall",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Senayan_City_logo.svg/512px-Senayan_City_logo.svg.png",
    primaryColor: "from-purple-600 to-indigo-900",
    textColor: "text-purple-700",
  },
  {
    name: "Central Park Mall",
    type: "mall",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Central_Park_Jakarta_Logo.svg/512px-Central_Park_Jakarta_Logo.svg.png",
    primaryColor: "from-emerald-600 to-teal-800",
    textColor: "text-emerald-700",
  },
  {
    name: "Decathlon",
    type: "retail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Decathlon_Logo.svg/512px-Decathlon_Logo.svg.png",
    primaryColor: "from-blue-600 to-sky-500",
    textColor: "text-blue-600",
  },
  {
    name: "HLP Airport",
    type: "airport",
    logo: "https://brandlogo.org/wp-content/uploads/2024/09/Halim-Perdanakusuma-Airport-Logo.png",
    primaryColor: "from-cyan-600 to-blue-800",
    textColor: "text-cyan-700",
  },
  {
    name: "Bintaro Jaya Xchange",
    type: "mall",
    logo: "https://www.bintarojayaxchange.com/img/logo.png",
    primaryColor: "from-red-500 to-blue-700",
    textColor: "text-blue-700",
  },
  {
    name: "Margo City",
    type: "mall",
    logo: "https://margocity.com/assets/images/logo.png",
    primaryColor: "from-orange-500 to-rose-600",
    textColor: "text-orange-600",
  },
  {
    name: "Cibinong City Mall",
    type: "mall",
    logo: "https://cibinongcitymall.com/wp-content/uploads/2021/01/logo-ccm.png",
    primaryColor: "from-yellow-600 to-amber-800",
    textColor: "text-yellow-700",
  }
];

function PartnerLogoCard({ p }: { p: PartnerItem }) {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <style>{`
        .partner-logo-card {
          height: 60px !important;
          padding: 8px !important;
        }
        .partner-logo-img {
          max-height: 40px !important;
        }
        @media (min-width: 576px) {
          .partner-logo-card {
            height: 96px !important;
            padding: 16px !important;
          }
          .partner-logo-img {
            max-height: 64px !important;
          }
        }
      `}</style>
      <div className="card partner-logo-card shadow-sm text-center d-flex align-items-center justify-content-center transition-all border-0 bg-white" style={{ width: "100%", maxWidth: "180px", borderRadius: "16px" }}>
        <div className="d-flex align-items-center justify-content-center w-100 h-100">
          {hasError ? (
            <span className="small fw-bold text-muted text-truncate d-block px-1" style={{ fontSize: '10px' }}>
              {p.name}
            </span>
          ) : (
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              referrerPolicy="no-referrer"
              onError={() => setHasError(true)}
              className="img-fluid partner-logo-img"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
      </div>
    </>
  );
}

function AboutUsImageCard({ src, alt, fallbackIcon: Icon, title }: { src: string; alt: string; fallbackIcon: any; title: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="card border-0 text-white rounded-4 shadow-sm overflow-hidden position-relative" style={{ height: "200px" }}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-100 h-100"
          style={{ objectFit: "cover", opacity: 0.85 }}
        />
      ) : (
        <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 text-center text-white" style={{ background: "linear-gradient(135deg, #0b133a 0%, #1a255c 100%)" }}>
          <div className="bg-white bg-opacity-10 border border-white border-opacity-25 rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: "40px", height: "40px" }}>
            <Icon size={20} className="text-white" />
          </div>
          <span className="small text-white-50" style={{ fontSize: "11px" }}>Gambar belum diatur</span>
        </div>
      )}
      <div className="position-absolute p-3" style={{ bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)" }}>
        <span className="fw-bold small">{title}</span>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const values = [
    {
      id: "visi",
      title: "Visi",
      desc: "Menjadi platform parkir digital terdepan di Indonesia yang menghubungkan jutaan pengemudi dengan ribuan lokasi parkir secara cerdas dan efisien.",
      icon: <Eye className="text-primary" size={20} />,
    },
    {
      id: "misi",
      title: "Misi",
      desc: "Membangun ekosistem parkir yang transparan, efisien, dan bebas stres melalui teknologi IoT, data real-time, dan pengalaman pengguna yang intuitif.",
      icon: <Target className="text-primary" size={20} />,
    },
    {
      id: "nilai",
      title: "Nilai",
      desc: "Inovasi tanpa henti, kolaborasi dengan mitra, kepercayaan pengguna, dan dampak positif bagi lingkungan kota Indonesia.",
      icon: <Heart className="text-primary" size={20} />,
    },
  ];

  return (
    <div className="pb-5 text-start">
      {/* 1. HERO BANNER */}
      <section className="py-5 position-relative overflow-hidden text-dark d-flex align-items-center border-bottom" style={{ background: "linear-gradient(180deg, #e3efff 0%, #f0f6ff 100%)", minHeight: "380px" }}>
        {/* Subtle background decoration */}
        <div className="position-absolute inset-0" style={{ opacity: 0.05, pointerEvents: "none" }}>
          <img
            src="https://images.unsplash.com/photo-1588362951121-3ee319b018b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Corporate meeting background"
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
                Mari Kenali <span style={{ color: "#0d6efd" }}>ParkEase.co</span> Lebih Dekat & Profesional
              </h1>
              <p className="mb-4 text-secondary" style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "600px" }}>
                Kami memadukan teknologi IoT dan kenyamanan seluler tingkat tinggi untuk menciptakan ekosistem parkir yang efisien, transparan, dan bebas stres bagi jutaan pengemudi dan ratusan mitra bisnis di seluruh Indonesia.
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                    alt="Happy Team Smiling" 
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

      {/* 2. WE WERE FOUNDED ON (FOUNDATION SECTION) */}
      <section className="py-5 bg-white">
        <div className="container px-3 px-sm-4 px-md-5 py-4">
          
          <div className="mb-4">
            <h2 className="h1 fw-bold text-dark mb-4">
              We were founded on...
            </h2>
          </div>

          <div className="row g-5 align-items-start">
            
            {/* Left Content Card - Crisis Ruang Parkir */}
            <div className="col-lg-6">
              <div className="card text-dark p-4 p-sm-5 rounded-4 border-1 shadow-sm" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)", borderColor: "rgba(59, 130, 246, 0.15)" }}>
                <h3 className="h4 fw-bold border-bottom border-light-subtle pb-3 mb-4 text-dark">
                  Krisis Ruang Parkir di Perkotaan Indonesia
                </h3>
                
                <p className="text-muted mb-4">
                  Pertumbuhan kendaraan yang pesat tidak diimbangi oleh perluasan lahan parkir. Hal ini diperparah oleh ketiadaan platform informasi digital terpadu, yang berdampak pada:
                </p>

                <div className="d-flex flex-column gap-3">
                  <div className="d-flex gap-3 align-items-start">
                    <div className="rounded-circle bg-primary bg-opacity-15 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "24px", height: "24px" }}>
                      <span className="text-primary fw-bold small" style={{ fontSize: "11px" }}>✓</span>
                    </div>
                    <p className="text-muted small mb-0">
                      <span className="text-dark fw-bold">Bagi Pengemudi:</span> Waktu, bahan bakar, dan energi terbuang sia-sia hanya untuk berputar-putar mencari parkir yang tidak pasti.
                    </p>
                  </div>

                  <div className="d-flex gap-3 align-items-start">
                    <div className="rounded-circle bg-primary bg-opacity-15 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "24px", height: "24px" }}>
                      <span className="text-primary fw-bold small" style={{ fontSize: "11px" }}>✓</span>
                    </div>
                    <p className="text-muted small mb-0">
                      <span className="text-dark fw-bold">Bagi Operator Parkir:</span> Lahan parkir kurang efisien dikelola dan kehilangan pendapatan optimal akibat kebocoran data parkir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Illustration & Values Card */}
            <div className="col-lg-6">
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <AboutUsImageCard
                    src="https://images.unsplash.com/photo-1588362951121-3ee319b018b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Smart Parking Grid"
                    fallbackIcon={Navigation}
                    title="Ekosistem Parkir Cerdas"
                  />
                </div>

                <div className="col-sm-6">
                  <AboutUsImageCard
                    src="https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Customer Support 24/7"
                    fallbackIcon={PhoneCall}
                    title="Customer Service Support"
                  />
                </div>
              </div>

              {/* Visi, Misi, Nilai List Cards */}
              <div className="d-flex flex-column gap-3">
                {values.map((v) => (
                  <div
                    key={v.id}
                    id={`value-${v.id}`}
                    className="card p-4 border-0 shadow-sm bg-light rounded-4"
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "40px", height: "40px", borderRadius: "10px" }}>
                        {v.icon}
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-dark mb-1">{v.title}</h4>
                        <p className="text-muted small mb-0" style={{ fontSize: "12px", lineHeight: "1.5" }}>{v.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MENGAPA MEMILIH KAMI? */}
      <section className="py-5 border-top border-bottom" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, rgba(142, 197, 255, 0.15) 100%)" }}>
        <div className="container px-3 px-sm-4 px-md-5 py-4">
          
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
            <h2 className="h1 fw-bold text-dark mb-3">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-muted small mb-0">
              Keunggulan utama yang membuat ParkEase berbeda dari solusi parkir lainnya
            </p>
          </div>

          <div className="row g-4 justify-content-center max-w-5xl mx-auto">
            {/* Keunggulan 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-white" style={{ background: "linear-gradient(135deg, #117094 0%, #0a5370 100%)" }}>
                <div className="text-white rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255, 255, 255, 0.18)" }}>
                  <Navigation size={22} />
                </div>
                <h3 className="h5 fw-bold text-white mb-3">Navigasi Real-Time</h3>
                <p className="small mb-0" style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)" }}>
                  Panduan langkah demi langkah menuju slot parkir kosong terdekat, menghindari frustrasi berputar-putar tanpa arah yang memboroskan bahan bakar.
                </p>
              </div>
            </div>

            {/* Keunggulan 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-white" style={{ background: "linear-gradient(135deg, #117094 0%, #0a5370 100%)" }}>
                <div className="text-white rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255, 255, 255, 0.18)" }}>
                  <Zap size={22} />
                </div>
                <h3 className="h5 fw-bold text-white mb-3">Reservasi Mudah</h3>
                <p className="small mb-0" style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)" }}>
                  Pesan slot parkir sebelum keberangkatan dengan perkiraan durasi. Sistem menjamin penempatan aman yang telah dipesan secara otomatis.
                </p>
              </div>
            </div>

            {/* Keunggulan 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-white" style={{ background: "linear-gradient(135deg, #117094 0%, #0a5370 100%)" }}>
                <div className="text-white rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255, 255, 255, 0.18)" }}>
                  <ShieldCheck size={22} />
                </div>
                <h3 className="h5 fw-bold text-white mb-3">Aman & Terpercaya</h3>
                <p className="small mb-0" style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)" }}>
                  Keamanan transaksi digital terenkripsi penuh. Sistem monitoring CCTV dan IoT menjamin keamanan kendaraan dan privasi data selama sesi terparkir.
                </p>
              </div>
            </div>

            {/* Keunggulan 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-white" style={{ background: "linear-gradient(135deg, #117094 0%, #0a5370 100%)" }}>
                <div className="text-white rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255, 255, 255, 0.18)" }}>
                  <CreditCard size={22} />
                </div>
                <h3 className="h5 fw-bold text-white mb-3">Terintegrasi dengan Pembayaran Digital Terpercaya</h3>
                <p className="small mb-0" style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)" }}>
                  PARKEE mendukung integrasi dengan berbagai bank digital dan 5 e-wallet populer. LinkAja, GoPay, DANA, ShopeePay, dan OVO memudahkan transaksi pengguna
                </p>
              </div>
            </div>

            {/* Keunggulan 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-white" style={{ background: "linear-gradient(135deg, #117094 0%, #0a5370 100%)" }}>
                <div className="text-white rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255, 255, 255, 0.18)" }}>
                  <TrendingUp size={22} />
                </div>
                <h3 className="h5 fw-bold text-white mb-3">Solusi untuk Optimasi Pendapatan Management</h3>
                <p className="small mb-0" style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)" }}>
                  Sistem parkir yang terhubung menyeluruh dari hardware hingga payment gateway, terbukti mampu meningkatkan income hingga 25%.
                </p>
              </div>
            </div>

            {/* Keunggulan 6 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-white" style={{ background: "linear-gradient(135deg, #117094 0%, #0a5370 100%)" }}>
                <div className="text-white rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(255, 255, 255, 0.18)" }}>
                  <Wrench size={22} />
                </div>
                <h3 className="h5 fw-bold text-white mb-3">Dukungan IT Support Profesional</h3>
                <p className="small mb-0" style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.85)" }}>
                  Tim teknis berpengalaman di industri parkir siap membantu implementasi, pemeliharaan, dan dukungan penuh agar operasional selalu optimal.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BE A PART OF US, JUST LIKE THEY DID */}
      <section className="py-5 bg-white">
        <div className="container px-3 px-sm-4 px-md-5 py-4 text-center">
          
          <div className="mb-3 mb-sm-5 mx-auto" style={{ maxWidth: "600px" }}>
            <h3 className="h1 fw-bold text-dark mb-3">
              Lets be part of us
            </h3>
            <p className="text-muted small mb-0">
              Dipercaya oleh ratusan mitra parkir terkemuka di Indonesia, mulai dari mall terpopuler, bandara internasional, pusat perbelanjaan, hingga pusat kebugaran.
            </p>
          </div>

          {/* Elegant Grid of Raw Logos */}
          <div className="container px-0 py-3">
            <div className="row g-2 g-sm-3 g-md-4 align-items-center justify-content-center max-w-5xl mx-auto">
              {partnersData.map((p, idx) => (
                <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
                  <PartnerLogoCard p={p} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION MITRA */}
      <section className="py-5 bg-light border-top">
        <div className="container px-3 px-sm-4 px-md-5">
          <div className="card border-0 text-white p-4 p-md-5 rounded-4 shadow-lg" style={{ background: "linear-gradient(135deg, #117094 0%, #1a88b5 100%)", borderRadius: "24px" }}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
              <div className="text-start">
                <h3 className="h4 fw-bold mb-2 text-white">
                  Dapatkan Parkirmu dengan menjadi Mitra kami!
                </h3>
                <p className="text-white-50 small mb-0">
                  Gabung dengan ekosistem ParkEase dan tingkatkan pendapatan parkir Anda hingga 40%.
                </p>
              </div>
              
              <a
                id="cta-whatsapp-about"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow"
                style={{ borderRadius: "12px", backgroundColor: "#0dcbfd", borderColor: "#0dcbfd" }}
              >
                <PhoneCall size={18} />
                <span>Hubungi Kami!</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
