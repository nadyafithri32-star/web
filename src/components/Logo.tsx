import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  isDarkBg?: boolean;
}

export default function Logo({ size = "md", isDarkBg = true }: LogoProps) {
  // Use explicit dimensions and border radius to ensure pixel-perfect rendering across browsers
  const iconStyles = {
    sm: { height: "40px", width: "40px", borderRadius: "12px" },
    md: { height: "50px", width: "50px", borderRadius: "16px" },
    lg: { height: "64px", width: "64px", borderRadius: "22px" }
  };
  
  const titleClasses = {
    sm: "fs-6 fw-bold",
    md: "fs-5 fw-bold",
    lg: "fs-4 fw-bold"
  };
  
  const subtitleStyles = {
    sm: { fontSize: "7.5px", lineHeight: "1.1", fontWeight: "700", marginTop: "2px" },
    md: { fontSize: "9.5px", lineHeight: "1.1", fontWeight: "700", marginTop: "2px" },
    lg: { fontSize: "11px", lineHeight: "1.1", fontWeight: "700", marginTop: "4px" }
  };

  return (
    <div id="parkease-logo-container" className="d-flex align-items-center select-none text-start" style={{ gap: "10px" }}>
      {/* Brand Icon */}
      <div 
        id="parkease-logo-icon"
        className="flex-shrink-0 d-flex align-items-center justify-content-center p-1 shadow-sm position-relative overflow-hidden"
        style={{ 
          ...iconStyles[size], 
          backgroundColor: "#117094",
          boxShadow: "0 4px 6px -1px rgba(17, 112, 148, 0.15)"
        }}
      >
        <svg className="w-100 h-100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized car from image */}
          {/* Windshield */}
          <path d="M12 45 C 12 41, 15 33, 22 33 L 42 33 C 45 33, 47 36, 49 39 L 54 49 L 12 49 Z" fill="#FFFFFF" />
          {/* Side Mirror */}
          <rect x="55" y="41" width="13" height="7" rx="3.5" fill="#FFFFFF" />
          {/* Car Body */}
          <path d="M9 49 L 55 49 C 58 49, 60 51, 60 55 L 58 65 L 9 65 Z" fill="#FFFFFF" />
          {/* Wheel */}
          <rect x="33" y="65" width="16" height="11" rx="4" fill="#FFFFFF" />
          {/* Grille Accent / Indentation */}
          <rect x="9" y="57" width="14" height="3.5" rx="1.75" fill="#117094" />
          {/* Headlight */}
          <ellipse cx="46" cy="57" rx="5.5" ry="5.5" fill="#117094" />
          {/* .co text placed precisely as in the image */}
          <text x="61" y="63" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16.5">.co</text>
        </svg>
      </div>
      
      {/* Brand Text */}
      <div id="parkease-logo-text-block" className="d-flex flex-column justify-content-center" style={{ lineHeight: "1" }}>
        <span 
          id="parkease-logo-title"
          className={`${titleClasses[size]} ${isDarkBg ? "text-white" : "text-dark"}`}
          style={{ letterSpacing: "-0.5px" }}
        >
          ParkEase<span className={isDarkBg ? "text-info" : ""} style={{ color: isDarkBg ? undefined : "#0d6efd" }}>.Co</span>
        </span>
        <div 
          id="parkease-logo-tagline"
          className={`text-uppercase font-monospace d-flex flex-column ${isDarkBg ? "text-info" : ""}`}
          style={{ ...subtitleStyles[size], color: isDarkBg ? undefined : "#0d6efd" }}
        >
          <span>Solusi Parkir</span>
          <span>Cepat &</span>
          <span>Terpercaya</span>
        </div>
      </div>
    </div>
  );
}
