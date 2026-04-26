"use client";
import React from "react";

export default function QuoteCircle({ quoteText }: { quoteText: string }) {
  return (
    <div className="animate-fade-left animate-ease-in animate-duration-700 bg-white bg-opacity-65 backdrop-blur-[2px] shadow-md relative right-3 flex w-48 h-48 lg:w-60 lg:h-60 rounded-full justify-center items-center">
      <div className="text-black text-center px-5 font-serif italic text-sm">
        {quoteText}
      </div>
    </div>
  );
}
