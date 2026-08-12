"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const titles: Record<string, string> = {
    "/": "Home",
    "/beranda": "Beranda",
    "/dashboard": "Dashboard",
    "/history": "History",
};

export function SidebarLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const title = titles[pathname] ?? (pathname === "/" ? "Home" : "Page");

    if (pathname.startsWith("/auth")) {
        return <>{children}</>;
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</span>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
