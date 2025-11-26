"use client";

import { CalendarDays, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminSidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export default function AdminSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-background border-r border-border
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          mt-16 lg:mt-0 pt-6 lg:pt-8 flex flex-col h-[calc(100vh-4rem)] lg:h-screen
        `}
      >
        <div className="px-6 mb-8">
          <h2 className="text-lg font-bold text-foreground">Pilates Admin</h2>
          <p className="text-sm text-muted-foreground">Studio Management</p>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <Link
            href="/admin"
            onClick={() => setIsSidebarOpen(false)}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/admin"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Overview</span>
          </Link>

          <Link
            href="/admin/classes"
            onClick={() => setIsSidebarOpen(false)}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/admin/classes"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <CalendarDays className="h-5 w-5" />
            <span>Classes</span>
          </Link>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
