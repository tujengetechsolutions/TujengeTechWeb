"use client";

import { MessageCircleIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WhatsappIcon() {
  const [visible, setVisible] = useState(true);
  const message = encodeURIComponent(
    "Hello TujengeTech, I have an idea I'd like to discuss."
  )

  return (
    <div className="fixed bottom-12 right-6 flex items-end gap-3 z-50">
     {visible && (
        <div className="relative animate-fade-in bg-background rounded-3xl rounded-br-sm max-w-[250px] px-6 py-3 shadow-2xl ring-1 ring-black/5">
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="absolute -top-2 -right-3 rounded-full bg-gray-200 p-1 text-gray-600 hover:bg-gray-300">
            
          <X className="size-3" />
        </button>

        <p className="text-gray-900 text-sm font-semibold">Let's Talk!</p>
        <p className="text-xs text-gray-600 mt-1">Got an Idea? Chat with us on WhatsApp</p>
      </div>

     )}
      <Link
        href={`https://wa.me/254763032344?text=${message}`} target="_blank" 
        className="relative flex items-center justify-center text-white bg-green-500 rounded-full h-16 w-16 shadow-xl transition-transform hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-60 animate-ping" />
        <MessageCircleIcon className="relative z-10" />
      </Link>
    </div>
  );
}