"use client";

import { useState, useEffect } from "react";
import integrations from "@/data/integrations";

interface WhatsAppPopupProps {
  isOpen: boolean;
  onClose: () => void;
  certificationTitle: string;
  price: number;
}

export default function WhatsAppPopup({
  isOpen,
  onClose,
  certificationTitle,
  price,
}: WhatsAppPopupProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Generate WhatsApp link
      const message = encodeURIComponent(
        `Hi, I want to buy ${certificationTitle} Dumps for $${price}. Please provide more details.`
      );
      const whatsappUrl = `https://wa.me/${integrations.WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${message}`;

      // Generate QR code using a QR code API
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;
      setQrCodeUrl(qrApiUrl);
    }
  }, [isOpen, certificationTitle, price]);

  if (!isOpen) return null;

  const message = encodeURIComponent(
    `Hi, I want to buy ${certificationTitle} Dumps for $${price}. Please provide more details.`
  );
  const whatsappUrl = `https://wa.me/${integrations.WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors w-6 h-6 flex items-center justify-center z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="pt-2">
          <h3 className="text-2xl font-bold text-[#032D60] mb-2 text-center">
            Contact Us on WhatsApp
          </h3>
          <p className="text-[#444444] text-sm mb-6 text-center">
            Scan the QR code or click the button below to start a conversation
          </p>

          {/* QR Code and Instructions Side by Side */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* QR Code Section */}
            <div className="flex-1 flex flex-col gap-6 items-center justify-center">
              {qrCodeUrl && (
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg border-2 border-[#E5E5E5]">
                    <img
                      src={qrCodeUrl}
                      alt="WhatsApp QR Code"
                      className="w-46 h-46"
                    />
                  </div>
                </div>
              )}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#0176D3] hover:bg-[#014486] text-white font-medium cursor-pointer py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Opon WhatsApp
              </button>
            </div>

            {/* Border Divider */}
            <div className="hidden md:block w-px bg-[#E5E5E5]"></div>
            <div className="md:hidden w-full h-px bg-[#E5E5E5]"></div>

            {/* Instructions Section */}
            <div className="flex-1 bg-[#F3F3F3] rounded-lg p-4 text-left h-full border border-[#E5E5E5]">
              <h4 className="text-sm font-semibold text-[#032D60] mb-2">
                What happens next?
              </h4>
              <ul className="text-xs text-[#444444] space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-[#0176D3] font-bold">1.</span>
                  <span>Click the button below or scan the QR code to open WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0176D3] font-bold">2.</span>
                  <span>A pre-filled message will be ready with your certification details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0176D3] font-bold">3.</span>
                  <span>Send the message and our team will respond within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0176D3] font-bold">4.</span>
                  <span>We&apos;ll provide payment details and access to your dumps</span>
                </li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Button */}
          
        </div>
      </div>
    </div>
  );
}

