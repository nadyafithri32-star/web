import { useState } from "react";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { ArticleItem } from "../types";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'Teknologi' | 'Tips & Trik' | 'Berita' | 'Panduan Mitra'>('Semua');
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);

  // Articles Data matching Screenshot 1 exactly
  const articles: ArticleItem[] = [
    {
      id: "art-featured",
      category: "Teknologi",
      title: "Bagaimana IoT Mengubah Industri Parkir di Indonesia",
      description: "Teknologi Internet of Things telah merevolusi cara kita mengelola dan menggunakan lahan parkir. Pelajari bagaimana sensor pintar dan data real-time mengoptimalkan ekosistem parkir perkotaan.",
      date: "10 Juni 2025",
      readTime: "5 menit",
      imageUrl: "https://images.unsplash.com/photo-1506521788701-1e13a4ea2221?auto=format&fit=crop&q=80&w=600",
      featured: true,
    },
    {
      id: "art-1",
      category: "Tips & Trik",
      title: "7 Tips Hemat Waktu Saat Mencari Parkir di Mall",
      description: "Cari parkir di mall besar bisa memakan waktu hingga 20 menit. Ikuti tips praktis ini untuk menemukan slot parkir lebih cepat menggunakan aplikasi ParkEase.",
      date: "5 Juni 2025",
      readTime: "3 menit",
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "art-2",
      category: "Berita",
      title: "ParkEase Resmi Hadir di Bandara Soekarno-Hatta",
      description: "Mulai Juli 2025, penumpang Bandara Soetta dapat menggunakan ParkEase untuk reservasi dan navigasi parkir di semua terminal. Simak detail kerja samanya.",
      date: "1 Juni 2025",
      readTime: "4 menit",
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "art-3",
      category: "Panduan Mitra",
      title: "Panduan Lengkap Mendaftarkan Lahan Parkir sebagai Mitra ParkEase",
      description: "Tertarik menjadi mitra ParkEase? Panduan step-by-step ini akan memandu Anda dari proses pendaftaran, pemasangan sensor IoT, hingga mulai menerima pengguna.",
      date: "28 Mei 2025",
      readTime: "8 menit",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "art-4",
      category: "Teknologi",
      title: "Masa Depan Parkir: Autonomous Vehicle dan Smart City Jakarta",
      description: "Dengan rencana Jakarta sebagai smart city dan tren kendaraan otonom, bagaimana infrastruktur parkir harus berevolusi? ParkEase berbagi visi ke depan.",
      date: "20 Mei 2025",
      readTime: "6 menit",
      imageUrl: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "art-5",
      category: "Berita",
      title: "Studi Kasus: Mall Taman Anggrek Kurangi Keluhan Parkir 70%",
      description: "Bagaimana Mall Taman Anggrek berhasil meningkatkan kepuasan pengunjung dan pendapatan parkir setelah mengimplementasikan sistem IoT terintegrasi ParkEase.",
      date: "15 Mei 2025",
      readTime: "5 menit",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "art-6",
      category: "Panduan Mitra",
      title: "Cara Mengoptimalkan Dashboard Analitik untuk Mitra Parkir",
      description: "Pelajari cara membaca laporan, mengatur tarif dinamis, dan menggunakan data heatmap untuk memaksimalkan utilisasi lahan parkir Anda.",
      date: "10 Mei 2025",
      readTime: "7 menit",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "art-7",
      category: "Tips & Trik",
      title: "5 Fitur Tersembunyi ParkEase yang Jarang Diketahui Pengguna",
      description: "Sudah pakai ParkEase tapi belum tahu semua fiturnya? Temukan 5 fitur tersembunyi yang bisa membuat pengalaman parkir Anda jauh lebih nyaman.",
      date: "3 Mei 2025",
      readTime: "4 menit",
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const categories: Array<'Semua' | 'Teknologi' | 'Tips & Trik' | 'Berita' | 'Panduan Mitra'> = [
    'Semua',
    'Teknologi',
    'Tips & Trik',
    'Berita',
    'Panduan Mitra'
  ];

  const filteredArticles = activeCategory === 'Semua'
    ? articles.filter(art => !art.featured)
    : articles.filter(art => art.category === activeCategory && !art.featured);

  const featuredArticle = articles.find(art => art.featured);

  return (
    <div className="pb-5 text-start">
      {/* 1. HERO BANNER */}
      <section className="py-5 text-center border-bottom" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0F6FF 100%)" }}>
        <div className="container px-3 px-sm-4 px-md-5 py-4">
          <h1 className="display-4 fw-bold text-dark mb-3">
            Insight & Berita Parkir
          </h1>
          <p className="lead text-muted mx-auto mb-0" style={{ maxWidth: "650px" }}>
            Temukan tips, panduan, dan berita terbaru seputar dunia parkir cerdas dari tim ParkEase.
          </p>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SECTION */}
      {featuredArticle && (
        <section className="py-5 bg-white">
          <div className="container px-3 px-sm-4 px-md-5">
            <h2 className="h3 fw-bold text-dark mb-4">Artikel Unggulan</h2>

            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="row g-0">
                {/* Left Image block */}
                <div className="col-lg-6 position-relative" style={{ minHeight: "300px" }}>
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-100 h-100 position-absolute"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Right content box */}
                <div className="col-lg-6 text-white p-4 p-sm-5 d-flex flex-column justify-content-between" style={{ background: "linear-gradient(135deg, #117094 0%, #1a88b5 100%)" }}>
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <span className="badge bg-primary text-uppercase px-2.5 py-1.5 font-monospace" style={{ fontSize: "10px" }}>
                        {featuredArticle.category}
                      </span>
                      <span className="badge bg-secondary text-uppercase px-2.5 py-1.5 font-monospace" style={{ fontSize: "10px" }}>
                        Artikel Pilihan
                      </span>
                    </div>

                    <h3 className="h2 fw-bold tracking-tight mb-3">
                      {featuredArticle.title}
                    </h3>

                    <p className="text-white-50 small mb-0" style={{ lineHeight: "1.6" }}>
                      {featuredArticle.description}
                    </p>
                  </div>

                  <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 pt-4 border-top border-secondary border-opacity-25">
                    <div className="d-flex gap-3 text-white-50 small">
                      <span className="d-flex align-items-center gap-1.5">
                        <Clock size={14} />
                        {featuredArticle.readTime}
                      </span>
                      <span className="d-flex align-items-center gap-1.5">
                        <Calendar size={14} />
                        {featuredArticle.date}
                      </span>
                    </div>

                    <button
                      id="btn-read-featured"
                      onClick={() => setReadingArticle(featuredArticle)}
                      className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2.5 fw-bold rounded-3"
                    >
                      <span>Baca Selengkapnya</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 3. RECENT ARTICLES WITH CATEGORY FILTER */}
      <section className="py-5 bg-light border-top">
        <div className="container px-3 px-sm-4 px-md-5">
          
          {/* Filters Row */}
          <div className="d-flex flex-wrap gap-2 mb-5 overflow-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm rounded-pill px-4 py-2 fw-bold border-0 transition-all ${
                  activeCategory === cat
                    ? "bg-dark text-white shadow"
                    : "bg-white text-muted shadow-sm hover-bg-light border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="row g-4">
            {filteredArticles.map((art) => (
              <div key={art.id} className="col-lg-4 col-md-6">
                <div
                  id={art.id}
                  className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white d-flex flex-column justify-content-between"
                >
                  <div>
                    {/* Photo with category badge */}
                    <div className="position-relative aspect-video bg-light overflow-hidden" style={{ height: "200px" }}>
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        referrerPolicy="no-referrer"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                      <span className="position-absolute top-0 start-0 m-3 badge bg-success text-uppercase px-2.5 py-1.5">
                        {art.category}
                      </span>
                    </div>

                    {/* Content body */}
                    <div className="p-4">
                      <div className="d-flex gap-3 text-muted mb-2" style={{ fontSize: "11px" }}>
                        <span className="d-flex align-items-center gap-1">
                          <Clock size={12} />
                          {art.readTime}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <Calendar size={12} />
                          {art.date}
                        </span>
                      </div>

                      <h3 className="h6 fw-bold text-dark mb-2 leading-snug" style={{ minHeight: "44px" }}>
                        {art.title}
                      </h3>

                      <p className="text-muted small mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: "1.5" }}>
                        {art.description}
                      </p>
                    </div>
                  </div>

                  {/* Baca Selengkapnya Link */}
                  <div className="px-4 pb-4 pt-0">
                    <button
                      id={`btn-read-${art.id}`}
                      onClick={() => setReadingArticle(art)}
                      className="btn btn-link p-0 text-decoration-none text-primary fw-bold small d-inline-flex align-items-center gap-1"
                    >
                      <span>Baca Selengkapnya</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MODAL DETIL ARTIKEL (Simulated reading layout) */}
      {readingArticle && (
        <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(11, 19, 58, 0.6)", backdropFilter: "blur(4px)" }}>
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content border-0 rounded-4 shadow-lg p-3 p-md-4">
              
              <div className="modal-header border-0 pb-0 position-relative">
                <span className="badge bg-primary text-uppercase px-2.5 py-1.5">
                  {readingArticle.category}
                </span>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-2"
                  aria-label="Close"
                  onClick={() => setReadingArticle(null)}
                />
              </div>

              <div className="modal-body pt-3">
                <h2 className="h3 fw-bold text-dark mb-3 pr-4">
                  {readingArticle.title}
                </h2>

                <div className="d-flex gap-3 text-muted small pb-3 mb-4 border-bottom">
                  <span className="d-flex align-items-center gap-1.5">
                    <Clock size={14} />
                    {readingArticle.readTime}
                  </span>
                  <span className="d-flex align-items-center gap-1.5">
                    <Calendar size={14} />
                    {readingArticle.date}
                  </span>
                </div>

                <div className="rounded-4 overflow-hidden mb-4" style={{ maxHeight: "400px" }}>
                  <img
                    src={readingArticle.imageUrl}
                    alt={readingArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="text-muted small" style={{ lineHeight: "1.6" }}>
                  <p className="mb-3">
                    {readingArticle.description}
                  </p>
                  <p className="mb-3">
                    Sistem smart parking berbasis IoT (Internet of Things) yang dikembangkan oleh ParkEase.co mengintegrasikan perangkat keras sensor magnetik/ultrasonik nirkabel di setiap petak parkir dengan server berbasis cloud. Melalui arsitektur ini, status ketersediaan di setiap slot parkir dapat diperbarui secara real-time ke dalam database dan langsung didistribusikan ke aplikasi seluler pengguna.
                  </p>
                  <p className="mb-0">
                    Bagi pengemudi, ini mengeliminasi waktu yang terbuang untuk mengitari gedung parkir secara acak. Dengan estimasi penghematan waktu mencapai 20 menit per pencarian, solusi ini tidak hanya memangkas stres pengendara, tetapi juga mengurangi konsumsi bahan bakar dan emisi karbon yang dihasilkan di dalam area tertutup seperti basement mall atau bandara.
                  </p>
                </div>
              </div>

              <div className="modal-footer border-0 pt-3">
                <button
                  type="button"
                  onClick={() => setReadingArticle(null)}
                  className="btn btn-primary px-4 py-2.5 fw-bold rounded-3"
                  style={{ backgroundColor: "#117094", borderColor: "#117094" }}
                >
                  Tutup Artikel
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
