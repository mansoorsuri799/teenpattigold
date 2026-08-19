import Link from "next/link";
import { SITE } from "@/lib/site";

/** Shared medium DOWNLOAD NOW CTA — same size site-wide */
const MEDIUM_BTN =
  "relative inline-flex items-center px-6 py-2.5 text-white font-semibold text-sm sm:text-base rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group";

type DownloadButtonProps = {
  className?: string;
  /** Defaults to affiliate APK link. Pass SITE.routes.download on the homepage. */
  href?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

function DownloadIcon() {
  return (
    <span className="ml-2 bg-[#f97316] rounded-full p-1.5 group-hover:scale-110 transition-transform inline-flex">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    </span>
  );
}

export default function DownloadButton({
  className = "",
  href = SITE.downloadUrl,
  onClick,
  "aria-label": ariaLabel,
}: DownloadButtonProps) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const classes = `${MEDIUM_BTN} ${className}`.trim();

  if (isInternal) {
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        <span>DOWNLOAD NOW</span>
        <DownloadIcon />
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      <span>DOWNLOAD NOW</span>
      <DownloadIcon />
    </a>
  );
}
