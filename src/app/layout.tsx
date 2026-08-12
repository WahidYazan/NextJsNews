import { SidebarLayout } from "@/components/sidebar-layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "HIDAYAT NUR WAHID",
    description: "Halaman pribadi HIDAYAT NUR WAHID",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} min-h-full flex flex-col`}>
                <TooltipProvider>
                    <SidebarLayout>{children}</SidebarLayout>
                </TooltipProvider>
            </body>
        </html>
    );
}
