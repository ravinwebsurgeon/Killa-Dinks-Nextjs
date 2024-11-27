export default {
  env: {
    COMPANY_NAME: "Vercel Inc.",
    TWITTER_CREATOR: "@vercel",
    TWITTER_SITE: "https://nextjs.org/commerce",
    SITE_NAME: "Next.js Commerce",
    SHOPIFY_REVALIDATION_SECRET: "",
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: "c6464232b49e46e4c9d64d7af22fa38f",
    SHOPIFY_STORE_DOMAIN: "dourdinks.myshopify.com"
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
