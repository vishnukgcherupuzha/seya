import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "SEYA Driving School - Best Driving Lessons under Farnborough Driving Center",
  description = "Top-rated SEYA Driving School under Farnborough Driving Center. Professional manual transmission lessons in Farnborough, Hampshire. High pass rates, flexible scheduling from £40/hour.",
  keywords = "SEYA driving school, Farnborough driving center, Farnborough driving lessons, best driving school Farnborough, driving instructor Farnborough, Hampshire driving lessons, manual transmission Farnborough, driving test Farnborough",
  canonical,
  image = "/seyalogo.png",
  type = "website", 
  publishedTime,
  modifiedTime
}) => {
  const siteUrl = "https://seya-driving-school.com"; // Replace with your actual domain
  const fullImageUrl = `${siteUrl}${image}`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    "name": "SEYA Driving School",
    "alternateName": "SEYA Driving School - Farnborough",
    "description": description,
    "url": siteUrl,
    "logo": fullImageUrl,
    "image": fullImageUrl,
    "telephone": "+447912941877",
    "priceRange": "£40-£84",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Farnborough Driving Center",
      "addressLocality": "Farnborough",
      "addressRegion": "Hampshire", 
      "postalCode": "GU14",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.2948",
      "longitude": "-0.7624"
    },
    "openingHours": [
      "Mo-Su 08:00-20:00"
    ],
    "serviceArea": [
      {
        "@type": "City",
        "name": "Farnborough"
      },
      {
        "@type": "City", 
        "name": "Aldershot"
      },
      {
        "@type": "City",
        "name": "Fleet"
      },
      {
        "@type": "City",
        "name": "Camberley"
      }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Farnborough Driving Center"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Driving Lessons",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pay-as-you-go Lessons",
            "description": "Manual transmission lessons at £42 per hour"
          },
          "price": "42",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Block Payment Package",
            "description": "10-hour block payment at £40 per hour"
          },
          "price": "400",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Test Day Package", 
            "description": "Complete test day package with warm-up lesson"
          },
          "price": "126",
          "priceCurrency": "GBP"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150",
      "itemReviewed": {
        "@type": "DrivingSchool",
        "name": "SEYA Driving School"
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="SEYA Driving School" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="SEYA Driving School" />
      <meta name="language" content="en-GB" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="ICBM" content="51.5074, -0.1278" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;