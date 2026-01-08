import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-white">
          Ticzy: Keuangan
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">
            Privacy Policy
          </Link>
          <Button variant="secondary" size="sm">
            Download App
          </Button>
        </div>
      </div>
    </nav>
  );
}
