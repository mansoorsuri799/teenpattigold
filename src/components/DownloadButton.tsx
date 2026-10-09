import Link from "next/link";
import { SITE } from "@/lib/site";

/** Shared medium DOWNLOAD NOW CTA — same size site-wide */
const MEDIUM_BTN =
  "download-btn relative inline-flex items-center px-6 py-2.5 text-primary font-semibold text-sm sm:text-base rounded-full border-2 border-accent bg-accent transition-colors duration-300 group";

type DownloadButtonProps = {
  className?: string;
  /** Defaults to the APK link. Pass SITE.routes.home on the download page. */
  href?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

function DownloadIcon() {
  return (
    <span className="ml-2 inline-flex group-hover:scale-110 transition-transform text-[#140E07]">
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.523 15.341a1.023 1.023 0 1 1-2.046 0 1.023 1.023 0 0 1 2.046 0m-8.999 0a1.023 1.023 0 1 1-2.046 0 1.023 1.023 0 0 1 2.046 0m9.237-6.04l1.729-2.994a.407.407 0 0 0-.148-.555.41.41 0 0 0-.557.148l-1.75 3.032A10.9 10.9 0 0 0 12 8.308c-1.69 0-3.282.385-4.685 1.074L5.564 6.35a.41.41 0 0 0-.557-.148.407.407 0 0 0-.148.555l1.729 2.994C3.98 11.046 2.546 13.422 2.25 16.146h19.5c-.297-2.724-1.73-5.1-4.239-6.845" />
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
