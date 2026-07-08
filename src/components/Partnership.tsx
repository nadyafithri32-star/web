import { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  Cpu, 
  Coins, 
  ShieldCheck, 
  BarChart3, 
  X, 
  MessageSquare,
  Wrench,
  Sparkles
} from "lucide-react";

interface PartnershipProps {
  onPageChange: (page: string) => void;
}

interface ProgramDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  requirements: string[];
  investment: string;
  waMessage: string;
}

export default function Partnership({ onPageChange }: PartnershipProps) {
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null);

  // Kenapa Bermitra dengan ParkEase (5 Grids)
  const features = [
    {
      title: "Teknologi Terpadu",
      description: "Sistem manajemen parkir terintegrasi dengan hardware dan software mutakhir yang siap digunakan secara real-time.",
      icon: Cpu,
      color: "text-primary bg-primary bg-opacity-10"
    },
    {
      title: "Solusi Siap Pakai & Fleksibel",
      description: "Paket kemitraan yang dapat disesuaikan sepenuhnya dengan skala operasional, kapasitas, dan kebutuhan bisnis Anda.",
      icon: Wrench,
      color: "text-warning bg-warning bg-opacity-10"
    },
    {
      title: "Ekosistem Pembayaran Lengkap",
      description: "Dukungan multi-payment modern: QRIS instan, e-wallet populer, kartu uang elektronik (e-money), hingga tunai.",
      icon: Coins,
      color: "text-success bg-success bg-opacity-10"
    },
    {
      title: "Dukungan Teknis & After Sales",
      description: "Tim ahli kami siap memberikan dukungan teknis 24/7 untuk memastikan kelancaran operasional parkir Anda tanpa henti.",
      icon: ShieldCheck,
      color: "text-info bg-info bg-opacity-10"
    },
    {
      title: "Peningkatan Pendapatan",
      description: "Optimalkan pendapatan parkir Anda melalui sistem pencegah kebocoran dana, analitik real-time, dan laporan otomatis.",
      icon: BarChart3,
      color: "text-danger bg-danger bg-opacity-10"
    }
  ];

  // Proses bergabung
  const steps = [
    { number: 1, title: "Daftar Online", desc: "Isi formulir pendaftaran kemitraan secara online atau hubungi admin WhatsApp." },
    { number: 2, title: "Seleksi & Survei", desc: "Tim ahli kami melakukan verifikasi dokumen dan survei fisik kelayakan lokasi Anda." },
    { number: 3, title: "Penawaran Kerjasama", desc: "Penyusunan rencana proposal investasi, skema bagi hasil, atau sewa kelola." },
    { number: 4, title: "Pemasangan Sistem", desc: "Instalasi seluruh hardware cerdas (palang parkir otomatis, kamera LPR, kios tiket)." },
    { number: 5, title: "Sistem Go-Live & Training", desc: "Pelatihan staf operator lapangan dan peluncuran resmi akses dashboard mitra." }
  ];

  // Program kemitraan detail data for modal
  const programDetails: Record<string, ProgramDetail> = {
    lokasi: {
      id: "lokasi",
      title: "Mitra Lokasi (Landowner Partnership)",
      category: "Program 01",
      description: "Didesain khusus untuk pemilik lahan, pengelola gedung, rumah sakit, mall, atau ruko yang ingin melakukan modernisasi total manajemen parkir untuk mencegah kebocoran pendapatan.",
      benefits: [
        "Instalasi seluruh perangkat keras (hardware) secara gratis/subsidi penuh",
        "Sistem parkir handal berbasis kamera pintar LPR & ANPR otomatis",
        "Dashboard analisis pendapatan terpadu yang dapat diakses 24/7",
        "Pencegahan kebocoran kas parkir hingga 100% dengan transaksi cashless"
      ],
      requirements: [
        "Memiliki hak milik atau hak kelola resmi atas lahan parkir aktif",
        "Kapasitas minimal area parkir untuk 20 mobil atau 50 motor",
        "Lokasi strategis di pusat keramaian atau komersial",
        "Koneksi internet/listrik dasar yang stabil di pos pintu masuk"
      ],
      investment: "IDR 0,- (Bagi hasil bulanan) atau Paket Mandiri Fleksibel",
      waMessage: "Halo%20ParkEase,%20saya%20tertarik%20dengan%20Program%20Mitra%20Lokasi.%20Mohon%20info%20selengkapnya."
    },
    teknologi: {
      id: "teknologi",
      title: "Mitra Teknologi (System Integrator / API Partner)",
      category: "Program 02",
      description: "Bagi perusahaan software, integrator sistem, atau penyedia solusi IT yang ingin mengintegrasikan fungsionalitas manajemen parkir & pembayaran ParkEase ke dalam ekosistem mereka sendiri.",
      benefits: [
        "Akses penuh ke API & SDK developer ParkEase yang terdokumentasi lengkap",
        "Dukungan teknis dedicated tingkat tinggi dari core engineering team",
        "Skema komisi (revenue-sharing) berjenjang yang sangat kompetitif",
        "Sertifikasi resmi sebagai Partner Integrasi Resmi ParkEase"
      ],
      requirements: [
        "Perusahaan berbadan hukum (CV/PT) atau tim developer profesional",
        "Memiliki pemahaman dasar tentang integrasi API web & IoT",
        "Memiliki portofolio klien atau proyek yang sedang berjalan",
        "Berkomitmen menjaga standar keamanan data pengguna"
      ],
      investment: "Gratis Registrasi API (Skema Profit Sharing per transaksi)",
      waMessage: "Halo%20ParkEase,%20saya%20tertarik%20dengan%20Program%20Mitra%20Teknologi.%20Mohon%20info%20integrasi%20API."
    },
    bisnis: {
      id: "bisnis",
      title: "Mitra Bisnis (Franchise & Referral Agency)",
      category: "Program 03",
      description: "Program kemitraan bagi agen, makelar properti, atau distributor peralatan keamanan yang ingin mendistribusikan produk ParkEase dan mendapatkan komisi pasif berkelanjutan.",
      benefits: [
        "Komisi penjualan awal yang besar untuk setiap deal instalasi baru",
        "Bagi hasil pasif (recurring fee) dari total biaya transaksi bulanan klien",
        "Akses penuh ke materi pemasaran fisik, brosur digital, dan demo produk",
        "Pelatihan intensif teknik penjualan & operasional produk gratis"
      ],
      requirements: [
        "Memiliki jaringan relasi yang luas dengan pemilik gedung/lahan",
        "Memiliki motivasi tinggi dalam pemasaran dan pengembangan bisnis",
        "Menghadiri sesi training produk wajib yang diselenggarakan online",
        "Mampu mempresentasikan keunggulan solusi cerdas ParkEase"
      ],
      investment: "IDR 0,- (Tanpa biaya lisensi keagenan)",
      waMessage: "Halo%20ParkEase,%20saya%20tertarik%20dengan%20Program%20Mitra%20Bisnis.%20Mohon%20info%20komisi%20keagenan."
    }
  };

  const stepColors = [
    {
      bg: "#EFF6FF", // Blue 50
      text: "#1E3A8A", // Blue 900
      desc: "#475569", // Slate 600
      badgeBg: "#DBEAFE", // Blue 100
      badgeText: "#1D4ED8", // Blue 700
      stepLabel: "#2563EB", // Blue 600
    },
    {
      bg: "#DBEAFE", // Blue 100
      text: "#1E3A8A", // Blue 900
      desc: "#334155", // Slate 700
      badgeBg: "#BFDBFE", // Blue 200
      badgeText: "#1D4ED8", // Blue 700
      stepLabel: "#1D4ED8", // Blue 700
    },
    {
      bg: "#93C5FD", // Blue 300
      text: "#0F172A", // Slate 900
      desc: "#1E293B", // Slate 800
      badgeBg: "#60A5FA", // Blue 400
      badgeText: "#1E3A8A", // Blue 900
      stepLabel: "#1E3A8A", // Blue 900
    },
    {
      bg: "#2563EB", // Blue 600
      text: "#FFFFFF",
      desc: "#E2E8F0", // Slate 200
      badgeBg: "#1D4ED8", // Blue 700
      badgeText: "#FFFFFF",
      stepLabel: "#93C5FD", // Blue 300
    },
    {
      bg: "#1E3A8A", // Blue 900
      text: "#FFFFFF",
      desc: "#F1F5F9", // Slate 100
      badgeBg: "#1e3a8a", // Blue 900 (darker)
      badgeText: "#FFFFFF",
      stepLabel: "#BFDBFE", // Blue 200
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="bg-light py-5 border-bottom overflow-hidden position-relative" style={{ minHeight: "450px", display: "flex", alignItems: "center" }}>
        {/* Decorative elements */}
        <div className="position-absolute rounded-circle bg-primary bg-opacity-10" style={{ width: "350px", height: "350px", top: "-100px", right: "-100px", filter: "blur(50px)" }} />
        <div className="position-absolute rounded-circle bg-warning bg-opacity-10" style={{ width: "250px", height: "250px", bottom: "-50px", left: "-50px", filter: "blur(50px)" }} />

        <div className="container px-3 px-sm-4 px-md-5 position-relative">
          <div className="row g-5 align-items-center">
            
            {/* Left Column (Content) */}
            <div className="col-lg-7 text-start">
              <h1 className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: "1.15" }}>
                Berkolaborasi Membangun <br />
                <span className="text-primary">Ekosistem Parkir Otomatis</span> <br />
                di Indonesia
              </h1>

              <p className="lead text-muted mb-4" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                Kami percaya, kolaborasi dengan para mitra akan mempercepat transformasi menuju ekosistem parkir cerdas dan parkir otomatis yang efisien di seluruh wilayah Indonesia.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#proses-gabung"
                  className="btn btn-primary btn-lg px-4 py-3 fw-bold rounded-3 d-inline-flex align-items-center gap-2 shadow"
                  style={{ fontSize: "14px" }}
                >
                  <span>Gabung jadi mitra kami</span>
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => onPageChange("layanan-produk")}
                  className="btn btn-outline-secondary btn-lg px-4 py-3 fw-bold rounded-3"
                  style={{ fontSize: "14px" }}
                >
                  Lihat Layanan
                </button>
              </div>
            </div>

            {/* Right Column (Visual Grid) */}
            <div className="col-lg-5">
              <div className="row g-3">
                <div className="col-6">
                  {/* Image 1 Mockup */}
                  <div className="card border-0 rounded-4 shadow-sm overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" 
                      alt="Smartphone App Map" 
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="col-6 pt-4">
                  {/* Image 2 Mockup */}
                  <div className="card border-0 rounded-4 shadow-sm overflow-hidden mb-3" style={{ aspectRatio: "4/3" }}>
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
                      alt="Business Discussion" 
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Image 3 Mockup */}
                  <div className="card border-0 rounded-4 shadow-sm overflow-hidden" style={{ aspectRatio: "1/1" }}>
                    <img 
                      src="https://images.unsplash.com/photo-1588362951121-3ee319b018b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya2lyJTIwZ2F0ZXxlbnwwfHwwfHx8MA%3D%3D" 
                      alt="Parking Lot Aerial" 
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: KENAPA BERMITRA DENGAN PARKEASE */}
      <section className="py-5 bg-white">
        <div className="container px-3 px-sm-4 px-md-5 py-4 text-center">
          
          <div className="mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            <h2 className="h1 fw-bold text-dark mb-3">
              Kenapa Bermitra Dengan <span className="text-primary">ParkEase?</span>
            </h2>
            <p className="text-muted small mb-0">
              Kami menghadirkan ekosistem lengkap untuk memastikan kemitraan yang saling menguntungkan, andal, dan berkelanjutan bagi bisnis Anda.
            </p>
          </div>

          {/* Grid Layout (5 items styled beautifully) */}
          <div className="row g-4 justify-content-center max-w-5xl mx-auto">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={idx}
                  className="col-lg-4 col-md-6"
                >
                  <div className="card h-100 p-4 border-0 shadow-sm bg-light rounded-4 text-start d-flex flex-column justify-content-between">
                    <div>
                      <div className={`p-3 rounded-3 d-inline-flex mb-3 ${feat.color}`}>
                        <IconComp size={24} />
                      </div>
                      <h3 className="h6 fw-bold text-dark mb-2">{feat.title}</h3>
                      <p className="text-muted small mb-0" style={{ lineHeight: "1.5" }}>
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: PROSES PENDAFTARAN */}
      <section id="proses-gabung" className="py-5 bg-light border-top border-bottom">
        <div className="container px-3 px-sm-4 px-md-5 py-4 text-center">
          
          <div className="mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            <h2 className="h1 fw-bold text-dark mb-3">
              Proses Pendaftaran
            </h2>
            <p className="text-muted small mb-0">
              Alur bergabung menjadi mitra ParkEase yang cepat, transparan, dan terukur.
            </p>
          </div>

          {/* Step Timeline Grid (5 Steps) */}
          <div className="p-0 bg-transparent border-0">
            <div className="row g-4 justify-content-center">
              {steps.map((step, idx) => {
                const colors = stepColors[idx];
                return (
                  <div key={idx} className="col-lg col-md-6 col-12">
                    <div 
                      className="card h-100 p-3 p-md-4 border-0 rounded-4 shadow-sm text-start transition-all hover-card"
                      style={{ 
                        backgroundColor: colors.bg,
                        color: colors.text,
                        border: "1px solid rgba(59, 130, 246, 0.12)"
                      }}
                    >
                      <div className="d-flex align-items-center gap-2 mb-2 mb-md-3">
                        <span 
                          className="badge rounded-pill d-flex align-items-center justify-content-center font-bold" 
                          style={{ 
                            minWidth: "24px",
                            height: "24px",
                            padding: "0",
                            backgroundColor: colors.badgeBg,
                            color: colors.badgeText,
                            fontSize: "11px"
                          }}
                        >
                          {step.number}
                        </span>
                        <span 
                          className="fw-bold uppercase font-monospace" 
                          style={{ fontSize: "10px", color: colors.stepLabel }}
                        >
                          Langkah {step.number}
                        </span>
                      </div>
                      
                      <h3 className="h6 fw-bold mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="small mb-0 font-medium animate-text-compact" style={{ lineHeight: "1.5", color: colors.desc }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: JENIS PROGRAM KEMITRAAN */}
      <section className="py-5 bg-white">
        <div className="container px-3 px-sm-4 px-md-5 py-4 text-center">
          
          <div className="mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            <h2 className="h1 fw-bold text-dark mb-3">
              Jenis Program <span className="text-primary">Kemitraan</span>
            </h2>
            <p className="text-muted small mb-0">
              Pilih jenis kemitraan yang paling sesuai dengan model bisnis dan kesiapan operasional Anda.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="row g-4 justify-content-center max-w-5xl mx-auto">
            
            {/* Card 1: Mitra Lokasi */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-dark p-4 rounded-4 border-1 shadow-sm d-flex flex-column justify-content-between" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)", borderColor: "rgba(59, 130, 246, 0.15)", minHeight: "var(--partnership-card-min-height, 420px)" }}>
                <div className="text-start">
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 font-monospace">PROGRAM 01</span>
                  <h3 className="h5 fw-bold text-dark mb-2">Mitra Lokasi</h3>
                  <p className="text-muted small mb-4" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    Pemilik area parkir yang ingin meningkatkan efisiensi dan pendapatan melalui sistem otomatis ParkEase secara real-time.
                  </p>

                  <div className="border-top border-light-subtle pt-3 d-flex flex-column gap-2">
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Instalasi hardware gratis</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Sistem manajemen terpadu</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Laporan pendapatan real-time</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProgram(programDetails.lokasi)}
                    className="btn btn-primary w-100 fw-bold rounded-3 py-2.5 small"
                    style={{ fontSize: "12px" }}
                  >
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Mitra Teknologi */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-dark p-4 rounded-4 border-1 shadow-sm d-flex flex-column justify-content-between" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)", borderColor: "rgba(59, 130, 246, 0.3)", minHeight: "var(--partnership-card-min-height, 420px)" }}>
                <div className="text-start">
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 font-monospace">PROGRAM 02</span>
                  <h3 className="h5 fw-bold text-dark mb-2">Mitra Teknologi</h3>
                  <p className="text-muted small mb-4" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    Perusahaan teknologi atau integrator yang ingin mengembangkan atau menghubungkan solusi berbasis platform ParkEase.
                  </p>

                  <div className="border-top border-light-subtle pt-3 d-flex flex-column gap-2">
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Akses API & SDK Cepat</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Dukungan teknis dedicated</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Revenue sharing kompetitif</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProgram(programDetails.teknologi)}
                    className="btn btn-primary w-100 fw-bold rounded-3 py-2.5 small"
                    style={{ fontSize: "12px" }}
                  >
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Mitra Bisnis */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-dark p-4 rounded-4 border-1 shadow-sm d-flex flex-column justify-content-between" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)", borderColor: "rgba(59, 130, 246, 0.15)", minHeight: "var(--partnership-card-min-height, 420px)" }}>
                <div className="text-start">
                  <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 font-monospace">PROGRAM 03</span>
                  <h3 className="h5 fw-bold text-dark mb-2">Mitra Bisnis</h3>
                  <p className="text-muted small mb-4" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    Agen penjualan independen, distributor alat sekuriti, atau freelancer yang ingin memasarkan ekosistem parkir cerdas ParkEase.
                  </p>

                  <div className="border-top border-light-subtle pt-3 d-flex flex-column gap-2">
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Program komisi menarik</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Training & sertifikasi gratis</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5" />
                      <span className="text-muted small" style={{ fontSize: "11px" }}>Materi pemasaran eksklusif</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProgram(programDetails.bisnis)}
                    className="btn btn-primary w-100 fw-bold rounded-3 py-2.5 small"
                    style={{ fontSize: "12px" }}
                  >
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: BOTTOM HERO BANNER */}
      <section className="bg-light py-5 border-top">
        <div className="container px-3 px-sm-4 px-md-5">
          <div className="card border-0 text-white p-4 p-md-5 rounded-4 shadow-lg position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #117094 0%, #1a88b5 100%)", borderRadius: "24px" }}>
            {/* Background glowing effects */}
            <div className="position-absolute bg-primary bg-opacity-20 rounded-circle" style={{ width: "250px", height: "250px", right: "-50px", bottom: "-50px", filter: "blur(40px)" }} />
            <div className="position-absolute bg-warning bg-opacity-10 rounded-circle" style={{ width: "200px", height: "200px", left: "-50px", top: "-50px", filter: "blur(40px)" }} />

            <div className="position-relative row g-4 align-items-center text-start">
              
              {/* Text content column */}
              <div className="col-lg-8">
                <span className="badge bg-white bg-opacity-20 border border-white border-opacity-25 px-3 py-2 rounded-pill mb-3 fw-bold small" style={{ color: "#060606" }}>Mulai Bermitra</span>
                
                <h2 className="h2 fw-bold text-white mb-3">
                  Mari Bangun Kolaborasi Cerdas untuk <br />
                  <span className="text-white">Masa Depan Mobilitas.</span>
                </h2>

                <p className="text-white-50 mb-0 small" style={{ lineHeight: "1.6" }}>
                  Hubungi tim kemitraan kami dan temukan skema program terbaik untuk lokasi atau bisnis Anda. Kami siap mendampingi setiap langkah digitalisasi Anda.
                </p>
              </div>

              {/* CTAs column */}
              <div className="col-lg-4 d-flex flex-column gap-2 pt-2 pt-lg-0">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20ParkEase,%20saya%20tertarik%20untuk%20mengajukan%20kerjasama%20kemitraan%20sekarang!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow"
                  style={{ borderRadius: "12px", backgroundColor: "#25D366", borderColor: "#25D366" }}
                >
                  <MessageSquare size={16} />
                  <span>Ajukan Kerjasama Sekarang!</span>
                </a>
                <a
                  href="#proses-gabung"
                  className="btn btn-outline-light btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2"
                  style={{ borderRadius: "12px" }}
                >
                  <span>Pelajari Program</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedProgram && (
        <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(11, 19, 58, 0.6)", backdropFilter: "blur(4px)", zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content border-0 rounded-4 shadow-lg p-3 p-md-4">
              
              <div className="modal-header border-0 pb-0 position-relative">
                <span className="badge bg-primary text-uppercase px-2.5 py-1.5">
                  {selectedProgram.category}
                </span>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-2"
                  aria-label="Close"
                  onClick={() => setSelectedProgram(null)}
                />
              </div>

              <div className="modal-body pt-3 text-start">
                <h3 className="h4 fw-bold text-dark mb-3">
                  {selectedProgram.title}
                </h3>

                <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                  {selectedProgram.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="h6 fw-bold text-dark mb-3">Manfaat Utama:</h4>
                  <div className="d-flex flex-column gap-2.5">
                    {selectedProgram.benefits.map((benefit, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-2">
                        <div className="rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "20px", height: "20px" }}>
                          <span className="small fw-bold" style={{ fontSize: "10px" }}>✓</span>
                        </div>
                        <span className="text-secondary small font-semibold leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-4 pt-2">
                  <h4 className="h6 fw-bold text-dark mb-2">Persyaratan Kemitraan:</h4>
                  <ul className="text-secondary small pl-4 mb-0" style={{ lineHeight: "1.6" }}>
                    {selectedProgram.requirements.map((req, idx) => (
                      <li key={idx} className="mb-1">{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Investment Estimate info */}
                <div className="card p-3 border-0 bg-light rounded-3 d-flex flex-row align-items-center justify-content-between">
                  <div>
                    <span className="text-uppercase text-muted font-monospace" style={{ fontSize: "9px" }}>Estimasi Investasi Awal</span>
                    <p className="fw-bold text-dark mb-0 small mt-0.5">{selectedProgram.investment}</p>
                  </div>
                  <span className="rounded-circle bg-success" style={{ width: "8px", height: "8px" }} />
                </div>
              </div>

              <div className="modal-footer border-0 pt-3">
                <div className="w-100 d-flex flex-column flex-sm-row gap-2">
                  <a
                    href={`https://wa.me/6281234567890?text=${selectedProgram.waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success flex-grow-1 fw-bold rounded-3 py-2.5 d-inline-flex align-items-center justify-content-center gap-2"
                    style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
                  >
                    <MessageSquare size={16} />
                    <span>Daftar via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(null)}
                    className="btn btn-light px-4 py-2.5 fw-bold rounded-3"
                  >
                    Tutup
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
