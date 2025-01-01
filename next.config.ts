export default {
  env: {
    COMPANY_NAME: "Vercel Inc.",
    TWITTER_CREATOR: "@vercel",
    TWITTER_SITE: "https://nextjs.org/commerce",
    SITE_NAME: "Next.js Commerce",
    SHOPIFY_REVALIDATION_SECRET: "",
    SHOPIFY_STORE_DOMAIN: "dourdinks.myshopify.com",
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['cdn.sanity.io'], // Add the domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
