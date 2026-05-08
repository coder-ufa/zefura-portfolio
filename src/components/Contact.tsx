"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mt-14 w-full max-w-5xl scroll-mt-24"
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-10">
        <div className="space-y-5 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="mx-auto max-w-sm text-zinc-300">
            Tell us about your next product and we&apos;ll help shape it into a
            standout digital experience.
          </p>

          <a
            href="mailto:zefura.dev@gmail.com"
            className="mx-auto inline-flex rounded-xl border border-violet-300/40 bg-violet-500/25 px-7 py-4 text-lg font-bold text-violet-100 transition-colors duration-200 hover:bg-violet-500/35 sm:text-2xl"
          >
            zefura.dev@gmail.com
          </a>

          <div className="space-y-3 pt-2 text-sm text-zinc-200">
            <a
              href="#"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-violet-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9A3.7 3.7 0 0 0 7.5 20.2h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7Zm9.65 1.35a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Z" />
              </svg>
              <span>zefura.dev</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-violet-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5a20 20 0 0 0-2.5-.1c-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.7v8z" />
              </svg>
              <span>Zefura.Dev</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-zinc-400">
        © 2026 Zefura.dev
      </footer>
    </section>
  );
}
