import type { Metadata } from "next";
import { SITE } from "@/lib/site";

// page.tsx in this segment is a client component ("use client"), and Next ignores a
// metadata export from one — which is why /quote was the only kind of route left
// declaring the site root as its canonical. A segment layout IS a server component,
// so the canonical lives here. Only `alternates` is set; title, description and the
// rest still come from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: `${SITE.url}/quote` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
