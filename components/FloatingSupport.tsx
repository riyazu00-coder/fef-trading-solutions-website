import { brand } from "@/lib/site-data";

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 4.6 3.8 11.22c-1.18.47-1.17 1.12-.22 1.41l4.42 1.38 1.69 5.18c.2.55.1.77.68.77.45 0 .65-.2.9-.44l2.16-2.1 4.49 3.31c.83.46 1.42.22 1.62-.77l2.94-13.84c.3-1.2-.46-1.75-1.48-1.32Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="m8.28 13.74 10.14-6.4c.47-.28.9-.13.55.18l-8.2 7.4-.32 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.1 18.9 6.3 15.4a7.4 7.4 0 1 1 2.32 2.25L5.1 18.9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9.35 8.9c.15-.35.3-.36.57-.36h.43c.17 0 .4.04.6.45.22.5.75 1.8.82 1.93.07.13.1.29.02.46-.19.4-.4.62-.7.96-.15.17-.31.35-.13.66.18.3.8 1.31 1.71 2.12 1.18 1.05 2.08 1.37 2.42 1.52.25.1.44.08.6-.1.2-.23.7-.82.88-1.1.18-.27.37-.23.62-.14.25.08 1.6.75 1.87.89.27.13.45.2.52.31.07.12.07.68-.16 1.33-.24.65-1.36 1.22-1.9 1.27-.49.05-1.12.07-1.8-.11-.42-.12-.95-.3-1.64-.59-2.87-1.24-4.75-4.12-4.9-4.31-.15-.2-1.17-1.55-1.17-2.96 0-1.4.73-2.09.99-2.38.26-.28.56-.35.74-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m5.25 7.25 6.75 5.3 6.75-5.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function FloatingSupport() {
  return (
    <aside
      aria-label="24/7 Support contact options"
      className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
    >
      <div className="w-fit max-w-[calc(100vw-2rem)] rounded-2xl border border-white/[0.12] bg-ink/85 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45),0_0_32px_rgba(34,211,238,0.12)] backdrop-blur-xl">
        <p className="mb-2 rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1.5 text-center text-[10px] font-black uppercase tracking-[0.16em] text-emerald">
          24/7 Support
        </p>

        <div className="flex items-center justify-center gap-2">
          <a
            aria-label={`Telegram ${brand.telegram}`}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-electric/25 bg-electric/10 text-electric shadow-[0_0_24px_rgba(56,189,248,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-electric/45 hover:bg-electric/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-electric/60 focus:ring-offset-2 focus:ring-offset-ink"
            href={brand.telegramUrl}
            rel="noreferrer"
            target="_blank"
            title={`Telegram ${brand.telegram}`}
          >
            <TelegramIcon />
            <span className="sr-only">Telegram</span>
          </a>

          <a
            aria-label={`WhatsApp ${brand.whatsapp}`}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-emerald/25 bg-emerald/10 text-emerald shadow-[0_0_24px_rgba(16,185,129,0.14)] transition duration-200 hover:-translate-y-0.5 hover:border-emerald/45 hover:bg-emerald/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald/60 focus:ring-offset-2 focus:ring-offset-ink"
            href={brand.whatsappUrl}
            rel="noreferrer"
            target="_blank"
            title={`WhatsApp ${brand.whatsapp}`}
          >
            <WhatsAppIcon />
            <span className="sr-only">WhatsApp</span>
          </a>

          <a
            aria-label={`Email ${brand.email}`}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 text-cyan shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan/45 hover:bg-cyan/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan/60 focus:ring-offset-2 focus:ring-offset-ink"
            href={brand.emailUrl}
            rel="noreferrer"
            target="_blank"
            title={`Email ${brand.email}`}
          >
            <EmailIcon />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
