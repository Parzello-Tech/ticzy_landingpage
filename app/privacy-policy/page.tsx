import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Kebijakan Privasi</h1>
        <p className="text-gray-400 mb-8">Terakhir Diperbarui: 08 Januari 2026</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Selamat datang di <strong>Ticzy: Keuangan</strong> ("Aplikasi"). Kami di Ticzy ("kami") menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan aplikasi kami.
          </p>
          <p>
            Dengan menggunakan Aplikasi ini, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan beberapa jenis informasi untuk memberikan dan meningkatkan layanan kami kepada Anda:</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">a. Informasi Pribadi (Melalui Google Sign-In)</h3>
          <p>Saat Anda masuk menggunakan Google, kami menerima informasi dasar dari profil Google Anda, yang mungkin mencakup:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li>Nama Lengkap</li>
            <li>Alamat Email</li>
            <li>Foto Profil</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">b. Data Keuangan</h3>
          <p>Aplikasi ini dirancang untuk mencatat keuangan Anda. Kami menyimpan data yang Anda masukkan secara sukarela, seperti:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li>Detail Transaksi (Jumlah, Deskripsi, Tanggal, Kategori)</li>
            <li>Data Buku Keuangan (Nama Buku, Deskripsi)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">c. Data Penggunaan & Perangkat</h3>
          <p>
            Kami mungkin mengumpulkan informasi tentang bagaimana Aplikasi diakses dan digunakan, termasuk namun tidak terbatas pada model perangkat, versi sistem operasi, dan log kesalahan (crash logs) untuk tujuan perbaikan bug dan peningkatan kinerja.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>Kami menggunakan data yang dikumpulkan untuk tujuan berikut:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Menyediakan Layanan:</strong> Untuk memungkinkan Anda mencatat, menyimpan, dan mengelola data keuangan Anda di berbagai perangkat (Sinkronisasi Cloud).</li>
            <li><strong>Autentikasi:</strong> Untuk memverifikasi identitas Anda saat masuk ke Aplikasi.</li>
            <li><strong>Pemeliharaan & Perbaikan:</strong> Untuk memantau penggunaan Aplikasi, mendeteksi masalah teknis, dan meningkatkan pengalaman pengguna.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Penyimpanan dan Keamanan Data</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Penyimpanan Cloud:</strong> Data transaksi dan buku keuangan Anda disimpan secara aman di server cloud kami (menggunakan layanan pihak ketiga terpercaya seperti Supabase/Firebase) untuk memungkinkan fitur sinkronisasi antar perangkat.</li>
            <li><strong>Keamanan:</strong> Kami mengutamakan keamanan data Anda dan menggunakan standar industri untuk melindungi informasi pribadi Anda. Namun, harap diingat bahwa tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Layanan Pihak Ketiga</h2>
          <p>Aplikasi kami menggunakan layanan pihak ketiga yang mungkin mengumpulkan informasi yang digunakan untuk mengidentifikasi Anda. Berikut adalah tautan ke kebijakan privasi penyedia layanan pihak ketiga yang digunakan oleh Aplikasi:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
            <li><a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Sign-In</a></li>
            <li><a href="https://supabase.com/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Supabase</a></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Akses dan Izin Perangkat</h2>
          <p>Aplikasi mungkin meminta izin akses tertentu pada perangkat Anda agar fitur-fitur dapat berfungsi dengan baik:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Penyimpanan (Storage):</strong> Diperlukan untuk fitur Ekspor dan Impor data (CSV/Excel).</li>
            <li><strong>Internet:</strong> Diperlukan untuk sinkronisasi data ke cloud dan autentikasi pengguna.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Penghapusan Data</h2>
          <p>
            Anda memiliki hak untuk meminta penghapusan data pribadi Anda. Jika Anda ingin menghapus akun dan seluruh data keuangan Anda dari sistem kami, Anda dapat melakukannya melalui menu pengaturan di dalam Aplikasi atau menghubungi kami di alamat email dukungan kami.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Perubahan pada Kebijakan Privasi Ini</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami menyarankan Anda untuk meninjau halaman ini secara berkala untuk mengetahui setiap perubahan. Perubahan efektif segera setelah diposting di halaman ini.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Hubungi Kami</h2>
          <p>Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami di:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Email:</strong> [Masukkan Email Support Anda Di Sini]</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
