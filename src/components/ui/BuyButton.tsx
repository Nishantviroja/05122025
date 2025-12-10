"use client";

import { useState, useEffect } from "react";
import WhatsAppPopup from "./WhatsAppPopup";
import integrations from "@/data/integrations";

interface BuyButtonProps {
  certificationTitle: string;
  price: number;
  className?: string;
  children: React.ReactNode;
}

export default function BuyButton({
  certificationTitle,
  price,
  className,
  children,
}: BuyButtonProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hi, I want to buy ${certificationTitle} Dumps for $${price}. Please provide more details.`
    );
    const whatsappNumber = integrations.WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    if (isMobile) {
      // Direct redirect on mobile
      window.open(whatsappUrl, "_blank");
    } else {
      // Show popup on tablet/desktop
      setShowPopup(true);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
      <WhatsAppPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        certificationTitle={certificationTitle}
        price={price}
      />
    </>
  );
}

