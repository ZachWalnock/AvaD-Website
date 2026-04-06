"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

interface InstagramReelProps {
  permalink: string;
  title: string;
}

export default function InstagramReel({ permalink, title }: InstagramReelProps) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "260px",
          padding: 0,
          width: "100%",
        }}
      />
      <p className="mt-4 text-center font-semibold text-dark text-base tracking-wide">
        {title}
      </p>
    </div>
  );
}
