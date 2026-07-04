import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/site-data";

export function Logo() {
  return (
    <Link
      href="/"
      className="focus-ring flex shrink-0 items-center rounded-md"
      aria-label={`${brand.name} home`}
    >
      <Image
        src="/images/fef-logo-ai.png"
        alt="FEF Trading Solutions"
        width={260}
        height={80}
        priority
        className="h-10 w-auto max-w-[200px] object-contain sm:h-12 sm:max-w-[240px]"
      />
    </Link>
  );
}
