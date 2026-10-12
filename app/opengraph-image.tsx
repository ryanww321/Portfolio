import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0c0c0c",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1a1" }}>ryan-whitcomb-portfolio.vercel.app</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 600, letterSpacing: "-0.02em" }}>{siteConfig.name}</div>
          <div style={{ display: "flex", fontSize: 44, color: "#d4d4d4" }}>{"Salesforce, Omnistudio & modern web"}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1a1" }}>
          Experience Cloud · Omniscripts · Next.js · AI-assisted development
        </div>
      </div>
    ),
    size,
  );
}
