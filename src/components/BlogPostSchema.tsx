import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { SITE } from "@/lib/site";

const BASE = SITE.origin;

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  /** Key summary or first 2-3 paragraphs for AI parsing and articleBody */
  articleBody?: string;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${BASE}${SITE.images.logo}`,
  breadcrumbOnly = false,
  articleBody,
}: BlogPostSchemaProps) {
  const url = `${BASE}/blog/${slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    image,
    author: { "@type": "Organization", name: SITE.name, url: BASE },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}${SITE.images.logo}`,
        ...imageObjectLicensing,
        creditText: `${SITE.name} logo`,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
    ...(articleBody && { articleBody }),
  };
  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      {!breadcrumbOnly && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
        />
      )}
    </div>
  );
}
