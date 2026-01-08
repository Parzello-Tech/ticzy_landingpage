import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RetroGrid from "@/components/ui/retro-grid";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { FileText, Cloud, ShieldCheck, Smartphone, ArrowRight } from "lucide-react";

const features = [
  {
    Icon: Smartphone,
    name: "Pencatatan Mudah",
    description: "Catat pemasukan dan pengeluaran Anda dengan cepat dan intuitif.",
    href: "#",
    cta: "Pelajari Lebih Lanjut",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-1 lg:col-span-1",
  },
  {
    Icon: Cloud,
    name: "Sinkronisasi Cloud",
    description: "Data Anda aman dan tersinkronisasi di semua perangkat secara real-time.",
    href: "#",
    cta: "Pelajari Lebih Lanjut",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-2 lg:col-span-2",
  },
  {
    Icon: ShieldCheck,
    name: "Keamanan Terjamin",
    description: "Kami menggunakan standar keamanan industri untuk melindungi data pribadi Anda.",
    href: "#",
    cta: "Pelajari Lebih Lanjut",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-1 lg:col-span-2",
  },
  {
    Icon: FileText,
    name: "Laporan Lengkap",
    description: "Dapatkan wawasan mendalam tentang keuangan Anda dengan laporan terperinci.",
    href: "#",
    cta: "Pelajari Lebih Lanjut",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-3 lg:col-span-1",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background md:shadow-xl">
        <RetroGrid />
        <div className="z-10 flex flex-col items-center text-center px-4">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white backdrop-blur-sm">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-green-500"></span>
            Versi Terbaru Tersedia
          </div>
          <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-tight text-transparent sm:text-7xl lg:text-8xl">
            Ticzy: Keuangan
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
            Kelola keuangan Anda dengan mudah, cerdas, dan aman. Aplikasi pencatatan keuangan terbaik untuk kebutuhan pribadi Anda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base">
              Download Sekarang
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent text-white border-white/20 hover:bg-white/10">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 border-y border-white/10 bg-black/50">
        <Marquee pauseOnHover className="[--duration:20s]">
          {["Keuangan", "Investasi", "Tabungan", "Analisis", "Budgeting", "Smart", "Secure", "Cloud"].map((item) => (
            <div key={item} className="mx-8 text-xl font-bold text-gray-500/50 uppercase tracking-widest">
              {item}
            </div>
          ))}
        </Marquee>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fitur Unggulan
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Semua yang Anda butuhkan untuk mengelola keuangan dengan lebih baik.
          </p>
        </div>
        <BentoGrid className="lg:grid-rows-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Siap Mengatur Keuangan Anda?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna lain yang telah berhasil mengelola keuangan mereka dengan Ticzy.
          </p>
          <Button size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-gray-200">
            Mulai Sekarang Gratis
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
