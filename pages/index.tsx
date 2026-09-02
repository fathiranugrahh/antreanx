import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  QueueListIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: "01",
    title: "Isi detail pengaduan",
    description: "Ceritakan kendala dan lengkapi informasi pelanggan melalui formulir singkat.",
    icon: DocumentTextIcon,
  },
  {
    number: "02",
    title: "Dapatkan nomor antrean",
    description: "Nomor antrean dan estimasi waktu tunggu akan langsung ditampilkan.",
    icon: QueueListIcon,
  },
  {
    number: "03",
    title: "Keluhan ditindaklanjuti",
    description: "Tim front desk memproses laporan secara teratur sesuai antrean yang aktif.",
    icon: CheckCircleIcon,
  },
];

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>AntreanX — Layanan Pengaduan IndiBiz</title>
        <meta
          name="description"
          content="Sampaikan pengaduan layanan IndiBiz dengan mudah dan dapatkan nomor antrean secara langsung."
        />
      </Head>

      <div className="min-h-screen overflow-hidden bg-[#f8f8f7] text-[#181817]">
        <header className="relative z-20 border-b border-black/[0.07] bg-[#f8f8f7]/90 backdrop-blur-xl">
          <nav
            className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
            aria-label="Navigasi utama"
          >
            <Link
              href="/"
              className="landing-press flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4"
              aria-label="AntreanX, kembali ke beranda"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white shadow-sm">
                <Image src="/Indibiz.png" alt="" width={31} height={31} priority />
              </span>
              <span>
                <span className="block text-[15px] font-bold leading-none tracking-[-0.02em]">AntreanX</span>
                <span className="mt-1 block text-[11px] font-medium leading-none text-neutral-500">Front Desk IndiBiz</span>
              </span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/login"
                className="landing-press hidden rounded-full px-4 py-2.5 text-sm font-semibold text-neutral-600 transition-colors duration-150 hover:bg-black/[0.04] hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:inline-flex"
              >
                Portal admin
              </Link>
              <Link
                href="/pengaduan"
                className="landing-press inline-flex items-center gap-2 rounded-full bg-[#1b1b1a] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 sm:px-5"
              >
                Buat pengaduan
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </header>

        <main>
          <section className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-red-500/[0.06] blur-[120px]" />
            <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-4 sm:px-8 sm:pt-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-28 lg:pt-12">
              <div className="max-w-2xl">
                <h1 className="landing-reveal landing-delay-1 max-w-[680px] text-[44px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#171716] sm:text-6xl lg:text-[68px]">
                  Keluhan tercatat.
                  <span className="block text-neutral-400">Penanganan lebih terarah.</span>
                </h1>

                <p className="landing-reveal landing-delay-2 mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                  Sampaikan kendala layanan tanpa proses yang rumit. AntreanX membantu setiap laporan masuk ke antrean yang jelas agar tim kami dapat melayani Anda dengan lebih baik.
                </p>

                <div className="landing-reveal landing-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/pengaduan"
                    className="landing-press group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e5282f] px-8 text-base font-bold text-white shadow-[0_10px_30px_rgba(229,40,47,0.2)] transition-[background-color,box-shadow] duration-200 hover:bg-[#cf2027] hover:shadow-[0_12px_34px_rgba(229,40,47,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4"
                  >
                    Mulai pengaduan
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  <a
                    href="#cara-kerja"
                    className="landing-press inline-flex min-h-14 items-center justify-center rounded-full border border-black/10 bg-white px-8 text-base font-bold text-neutral-700 shadow-sm transition-[background-color,border-color] duration-200 hover:border-black/20 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    Lihat cara kerja
                  </a>
                </div>

                <div className="landing-reveal landing-delay-4 mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-neutral-500">
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                    Formulir ringkas
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                    Nomor antrean otomatis
                  </span>
                </div>
              </div>

              <div className="landing-reveal landing-delay-3 relative mx-auto w-full max-w-[530px] lg:mx-0 lg:justify-self-end">
                <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-red-100/70 via-white/20 to-neutral-200/60 blur-2xl" />
                <div className="relative rounded-[30px] border border-black/[0.08] bg-white p-3 shadow-[0_32px_80px_rgba(28,25,23,0.13)] sm:p-4">
                  <div className="overflow-hidden rounded-[22px] border border-black/[0.07] bg-[#f5f5f3]">
                    <div className="flex items-center justify-between border-b border-black/[0.07] bg-white px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50">
                          <QueueListIcon className="h-[18px] w-[18px] text-red-600" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-bold text-neutral-900">Status antrean</p>
                          <p className="mt-0.5 text-[10px] font-medium text-neutral-400">Diperbarui otomatis</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Aktif
                      </span>
                    </div>

                    <div className="p-5 sm:p-7">
                      <div className="rounded-2xl bg-[#1d1d1c] p-5 text-white shadow-lg shadow-black/10 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Nomor antrean Anda</p>
                            <p className="mt-2 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">A012</p>
                          </div>
                          <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/75">Menunggu</span>
                        </div>
                        <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-medium text-white/60">
                          <ClockIcon className="h-4 w-4 text-red-400" aria-hidden="true" />
                          Estimasi pelayanan sekitar <strong className="font-semibold text-white">14 menit</strong>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-black/[0.06] bg-white p-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50">
                            <UserIcon className="h-4 w-4 text-red-600" aria-hidden="true" />
                          </span>
                          <p className="mt-4 text-[11px] font-medium text-neutral-400">Antrean aktif</p>
                          <p className="mt-0.5 text-xl font-bold tracking-tight text-neutral-900">2 pelanggan</p>
                        </div>
                        <div className="rounded-2xl border border-black/[0.06] bg-white p-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                            <ShieldCheckIcon className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                          </span>
                          <p className="mt-4 text-[11px] font-medium text-neutral-400">Laporan Anda</p>
                          <p className="mt-0.5 text-xl font-bold tracking-tight text-neutral-900">Tersimpan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="landing-float absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-black/[0.08] bg-white px-4 py-3 shadow-[0_16px_40px_rgba(28,25,23,0.13)] sm:flex lg:-left-10">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Laporan berhasil dikirim</p>
                    <p className="mt-0.5 text-[10px] font-medium text-neutral-400">Nomor antrean telah dibuat</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cara-kerja" className="border-y border-black/[0.07] bg-white scroll-mt-20">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Cara kerja</p>
                  <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] text-neutral-900 sm:text-4xl">
                    Tiga langkah menuju penanganan yang jelas.
                  </h2>
                  <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
                    Dibuat sederhana agar Anda bisa fokus menjelaskan kendala, sementara sistem mengatur antreannya.
                  </p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-3xl border border-black/[0.07] bg-black/[0.07] md:grid-cols-3">
                  {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <article key={step.number} className="group bg-[#fafaf9] p-6 sm:p-7">
                        <div className="flex items-center justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.07] bg-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
                            <Icon className="h-5 w-5 text-red-600" aria-hidden="true" />
                          </span>
                          <span className="text-xs font-bold tracking-[0.12em] text-neutral-300">{step.number}</span>
                        </div>
                        <h3 className="mt-8 text-base font-bold tracking-[-0.02em] text-neutral-900">{step.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-neutral-500">{step.description}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f8f8f7]">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
              <div className="relative overflow-hidden rounded-[30px] bg-[#1d1d1c] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
                <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[60px] border-red-500/10" />
                <div className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
                <div className="relative mx-auto max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">Kami siap membantu</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Ada kendala dengan layanan Anda?</h2>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
                    Mulai pengaduan sekarang. Informasi yang jelas membantu tim kami memberikan tindak lanjut yang lebih tepat.
                  </p>
                  <Link
                    href="/pengaduan"
                    className="landing-press group mt-8 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition-colors duration-200 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-900"
                  >
                    Buat pengaduan
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-black/[0.07] bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <div className="flex items-center gap-2.5">
              <Image src="/Indibiz.png" alt="IndiBiz" width={24} height={24} />
              <span className="font-semibold text-neutral-700">AntreanX</span>
              <span className="text-neutral-300">•</span>
              <span>Front Desk Platform</span>
            </div>
            <p>PT Telkom Indonesia · IndiBiz Sulbagsel</p>
          </div>
        </footer>
      </div>
    </>
  );
}
