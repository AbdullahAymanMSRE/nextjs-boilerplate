import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Tajawal as TajawalFont } from "next/font/google";
import { cn } from "@/lib/utils";
import { getLangDir } from "rtl-detect";
import { cookies } from "next/headers";
import { Providers } from "@/providers";

const Tajawal = TajawalFont({
  weight: ["400", "700"],
  variable: "--font-tajawal",
  style: ["normal"],
  display: "swap",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Next.js 16 project",
  description:
    "Next.js 16 with Shadcn/UI, React Query, Next Intl and Tailwind CSS",
};

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const store = await cookies();
  const locale = store.get("locale")?.value || "ar";

  return (
    <html dir={getLangDir(locale)} lang={locale}>
      <body className={cn("antialiased", Tajawal.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
