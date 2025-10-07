import type { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import SkipLink from "@/layouts/SkipLink";
import { organization, defaultMeta } from "@/config/organization";
import { siteConfig } from "@/config/site";

interface MainLayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
  canonicalPath?: string;
  structuredData?: Array<Record<string, unknown>>;
}

const MainLayout = ({
  children,
  title = defaultMeta.title,
  description = defaultMeta.description,
  canonicalPath = "/",
  structuredData = [],
}: MainLayoutProps) => {
  const canonicalUrl = `${siteConfig.baseUrl}${canonicalPath}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: organization.name,
      legalName: organization.legalName,
      url: siteConfig.baseUrl,
      logo: siteConfig.ogImage,
      sameAs: organization.sameAs,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@wiliss.com",
          url: `${siteConfig.baseUrl}/#comunidad`,
        },
      ],
    },
    ...structuredData,
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <SkipLink />
      <Header />
      <main id="principal" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
