export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* SECTION 1: HEADER & LINKTREE STYLE (Atas) */}
      <section className="flex flex-col items-center justify-center py-20 px-4 bg-white shadow-sm">
        <div className="w-24 h-24 bg-blue-500 rounded-full mb-4 overflow-hidden">
          {/* Ganti dengan foto kamu nanti */}
          <img
            src="/profile.jpg"
            alt="Foto Profil Saya"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold">Halo, Saya Valdiaz Gahari</h1>
        <p className="text-slate-500 mt-2 text-center max-w-md">
          Seorang Web Developer yang hobi ngoding sambil ngopi. Selamat datang
          di halaman digital saya!
        </p>

        {/* Tombol ala Linktree */}
        <div className="flex flex-col gap-3 mt-8 w-full max-w-xs">
          <a
            href="https://www.linkedin.com/in/valdiazgahari/"
            className="w-full py-3 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vexuroooxy"
            className="w-full py-3 bg-slate-800 text-white text-center rounded-lg font-semibold hover:bg-slate-900 transition"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="w-full py-3 border-2 border-blue-600 text-blue-600 text-center rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Lihat Project Saya ↓
          </a>
        </div>
      </section>

      {/* SECTION 2: PORTFOLIO PROJECTS (Bawah) */}
      <section id="projects" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-bold mb-8 border-b-2 border-blue-500 w-fit">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contoh Card Project */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Project Toko Online</h3>
            <p className="text-slate-600 text-sm mb-4">
              Membangun e-commerce sederhana dengan fitur keranjang menggunakan
              React.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                Next.js
              </span>
              <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                Tailwind
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Aplikasi Pengelola Tugas</h3>
            <p className="text-slate-600 text-sm mb-4">
              Aplikasi To-Do list dengan sistem simpan data otomatis ke browser.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                JavaScript
              </span>
              <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                Local Storage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-400 text-sm">
        Built with Next.js & Tailwind CSS © 2024
      </footer>
    </main>
  );
}
