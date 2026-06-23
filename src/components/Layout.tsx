import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ChatWidget } from "@/components/ChatWidget";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-app min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidget />
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}
