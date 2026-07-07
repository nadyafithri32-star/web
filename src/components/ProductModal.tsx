import { X, Check } from "lucide-react";
import { ProductItem } from "../types";

interface ProductModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  // Set badge colors matching the hardware equipment categories using Bootstrap classes
  const badgeClasses: Record<string, string> = {
    "Palang Barrier": "bg-warning text-dark",
    "Kamera Pintar": "bg-primary text-white",
    "Kios Pembayaran": "bg-success text-white",
    "Media Informasi": "bg-info text-dark",
    "Bandara": "bg-warning text-dark",
    "Mall": "bg-primary text-white",
    "Hotel": "bg-success text-white",
  };

  return (
    <div 
      className="modal show d-block" 
      tabIndex={-1} 
      role="dialog" 
      style={{ backgroundColor: "rgba(11, 19, 58, 0.6)", backdropFilter: "blur(4px)", zIndex: 1050 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm" style={{ maxWidth: "360px" }}>
        <div className="modal-content border-0 rounded-4 shadow-lg p-3 p-md-4 bg-white text-start">
          
          <div className="modal-header border-0 pb-0 position-relative">
            <span
              id={`badge-${product.category.toLowerCase().replace(/\s+/g, '-')}`}
              className={`badge px-3 py-1.5 rounded-pill text-uppercase font-monospace ${
                badgeClasses[product.category] || "bg-primary text-white"
              }`}
              style={{ fontSize: "10px" }}
            >
              {product.category}
            </span>
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-2"
              aria-label="Tutup"
              onClick={onClose}
            />
          </div>

          <div className="modal-body pt-3 text-start">
            <h3 id="modal-title" className="h5 fw-bold text-dark mb-2">
              {product.title}
            </h3>

            <p id="modal-desc" className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
              {product.description}
            </p>

            {/* Features (Checkmarks matching the screenshot exactly but more compact) */}
            <div id="modal-features-container" className="d-flex flex-column gap-2.5 mb-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2">
                  <div className="rounded-circle bg-light border d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "20px", height: "20px" }}>
                    <Check size={11} className="text-dark fw-bold" />
                  </div>
                  <span className="text-secondary small font-semibold leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tutup Button (Navy blue, matches Screenshot exactly, more compact) */}
            <button
              id="btn-close-bottom"
              onClick={onClose}
              className="btn text-white w-100 fw-bold py-2.5"
              style={{ backgroundColor: "#0B133A", borderRadius: "12px", fontSize: "12px" }}
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
