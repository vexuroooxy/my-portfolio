export default function Home() {
  return (
    // Tambahkan 'dark' di sini jika ingin ngetest manual, atau biarkan adaptif ke sistem
    <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Vexurooo<span className="text-blue-600">xy</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <svg
              className="w-6 h-6 text-slate-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HOME (FULL SCREEN) */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 text-center bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="relative inline-block p-1.5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 mb-10 shadow-2xl">
            <img
              src="/profile.jpg"
              className="w-44 h-44 rounded-full border-8 border-white dark:border-slate-900 object-cover transform hover:scale-105 transition-transform duration-500"
              alt="Valdiaz Gahari"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Valdiaz Gahari
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Bridging the gap between{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              Physical Hardware
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-700 dark:text-purple-400">
              Modern Web Ecosystems
            </span>
            .
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold hover:bg-slate-50 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT (FULL SCREEN) */}
      <section
        id="about"
        className="min-h-screen flex items-center py-20 px-6 bg-white dark:bg-slate-900 transition-colors"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 bg-slate-800 dark:bg-slate-700 rounded-2xl rotate-3 flex items-center justify-center border-2 border-slate-700 shadow-2xl">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl -rotate-6 -z-10 opacity-10"></div>
              <svg
                className="w-24 h-24 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Saya adalah seorang developer yang memiliki ketertarikan besar
              pada dunia{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Internet of Things (IoT)
              </span>{" "}
              dan pengembangan web modern.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Saat ini, saya fokus membangun ekosistem digital menggunakan{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Laravel
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Next.js
              </span>
              .
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["PHP", "Laravel", "Next.js", "C++", "MySQL", "Tailwind"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS (FULL SCREEN) */}
      <section
        id="projects"
        className="min-h-screen flex items-center py-20 px-6 bg-slate-50 dark:bg-slate-950"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-2xl font-bold mb-10 border-b-2 border-blue-500 w-fit text-slate-900 dark:text-white mx-auto md:mx-0">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card RFID */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                {/* Pastikan file ini ada di /public atau ganti sementara ke URL luar jika belum ada */}
                <img
                  src="/ss-rfid.jpg"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="RFID Project"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  IOT SYSTEM
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  RFID Attendance
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Sistem absensi real-time terintegrasi hardware ESP32.
                </p>
                <div className="flex gap-2 text-[10px] font-mono text-slate-400">
                  <span>#LARAVEL</span> <span>#ESP32</span> <span>#MYSQL</span>
                </div>
              </div>
            </div>

            {/* Card Finance */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                <img
                  src="/ss-finance.jpg"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Finance Manager"
                />
                <div className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  WEB APP
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  Finance Manager
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Aplikasi manajemen keuangan pribadi dengan laporan visual.
                </p>
                <div className="flex gap-2 text-[10px] font-mono text-slate-400">
                  <span>#REACT</span> <span>#NODEJS</span> <span>#MONGODB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-20 px-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Let's Work Together!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            Tertarik kolaborasi atau ingin dibuatkan sistem kustom? Yuk,
            ngobrol!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/6287805795220"
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 hover:shadow-lg hover:-translate-y-1 transition-all w-full md:w-auto"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:gaharivaldiaz19@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all w-full md:w-auto border border-slate-200 dark:border-slate-700"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 dark:border-slate-800 py-12 px-6 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <div className="font-bold text-xl text-slate-900 dark:text-white mb-2">
              Vexurooo<span className="text-blue-600">xy</span>
            </div>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Valdiaz Gahari. All rights
              reserved.
            </p>
          </div>
          <div className="mt-8 text-center">
            <span className="text-[10px] text-slate-300 dark:text-slate-600 tracking-[0.2em] uppercase font-bold">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
