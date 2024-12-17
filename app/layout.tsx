import { CartProvider } from 'components/cart/cart-context';
import Popup from 'components/common/Popup';
import Footerx from 'components/homepage/Footerx';
import HomePageBanner from 'components/homepage/HomePageBanner';
import { WelcomeToast } from 'components/welcome-toast';
import { GeistSans } from 'geist/font/sans';
import { getCart, getMenu } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { cookies } from 'next/headers';
import Script from 'next/script';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';


const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);
  const sidemenu = await getMenu('main-menu-1');

  return (
    <html lang="en" className={GeistSans.variable}>
         <head>
        <Script         
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.jdgm = {};
                  window.jdgm.SHOP_DOMAIN = 'dourdinks.myshopify.com';
                  window.jdgm.PLATFORM = 'shopify';          
                  window.jdgm.PUBLIC_TOKEN = '${process.env.NEXT_PUBLIC_JUDGEME_PUBLIC_TOKEN}';
                `
          }}
        />
        <Script strategy="afterInteractive" src="https://cdn.judge.me/widget_preloader.js" />
        <Script strategy="afterInteractive" src="https://cdn1.judge.me/assets/installed.js" />
      </head>

      <body className="">
        <CartProvider cartPromise={cart}>
          <HomePageBanner className='' menu={sidemenu} />
           {/* <Navbar />  */}
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
        </CartProvider>
        <Popup/>
        <Footerx/>
      </body>
    </html>
  );
}
