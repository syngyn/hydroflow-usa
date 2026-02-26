import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HelmetWrapper({ 
  title, 
  description, 
  canonicalUrl,
  ogImage,
  ogType = 'website',
  children 
}) {
  const fullTitle = title ? `${title} | HydroFLOW USA` : 'HydroFLOW USA - Eco-Friendly Water Conditioning Technology';
  const fullUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://hydroflow-usa.com');

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={ogType} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Twitter */}
        <meta name="twitter:title" content={fullTitle} />
        {description && <meta name="twitter:description" content={description} />}
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Helmet>
      {children}
    </>
  );
}