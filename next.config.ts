export default {
  env: {
    COMPANY_NAME: "Vercel Inc.",
    TWITTER_CREATOR: "@vercel",
    TWITTER_SITE: "https://nextjs.org/commerce",
    SITE_NAME: "Next.js Commerce",
    SHOPIFY_REVALIDATION_SECRET: "",
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: "c6464232b49e46e4c9d64d7af22fa38f",
    SHOPIFY_STORE_DOMAIN: "dourdinks.myshopify.com",
    JUDGME_API_TOKEN : "23j4V9skYoK0bviue3k-8SqNthA"
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
