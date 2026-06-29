import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vite SPA
      </footer>
    </div>
  );
}
