import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { brand } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Company */}

          <div>

            <Logo />

            <p className="mt-6 max-w-sm text-sm leading-7 text-steel">
              Professional MetaTrader 5 software engineered for traders,
              money managers and professional trading operations.
            </p>

            <div className="mt-8 space-y-3 text-sm text-steel">

              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-4 w-4 text-electric" />
                {brand.email}
              </a>

              <a
                href="https://wa.me/971526235196"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-4 w-4 text-electric" />
                +971 52 623 5196
              </a>

              <a
                href={brand.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Send className="h-4 w-4 text-electric" />
                Telegram Support
              </a>

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-white font-bold">
              Products
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-steel">

              <Link href="/trade-copier">Trade Copier MT5</Link>

              <Link href="/products">
                Manual Trade Manager PRO
              </Link>

              <Link href="/products">
                Future Products
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white font-bold">
              Resources
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-steel">

              <Link href="/downloads">Downloads</Link>

              <Link href="/documentation">
                Documentation
              </Link>

              <Link href="/pricing">
                Pricing
              </Link>

              <Link href="/changelog">
                Changelog
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white font-bold">
              Company
            </h3>

            <div className="mt-5 grid gap-3 text-sm text-steel">

              <Link href="/support">
                Support Center
              </Link>

              <Link href="/contact">
                Contact Sales
              </Link>

              <div className="flex items-start gap-3">

                <MapPin className="mt-1 h-4 w-4 text-electric" />

                <span>
                  G7 Emirates NBD Tower
                  <br />
                  477 Street
                  <br />
                  Al Nuaimia 2
                  <br />
                  Ajman
                  <br />
                  United Arab Emirates
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MessageCircle className="h-4 w-4 text-electric" />

                24 Hours Customer Support

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-sm text-steel md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 FEF Trading Solutions. All Rights Reserved.
          </p>

          <p>
            Professional MetaTrader 5 Software
          </p>

          <p>
            Version 2.0
          </p>

        </div>

      </div>

    </footer>
  );
}