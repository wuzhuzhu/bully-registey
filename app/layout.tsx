import { Analytics } from '@vercel/analytics/react';
import cx from "classnames";
import { getServerSession } from "next-auth";

import { inter, sfPro } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "中国恶霸犬注册|血统国际认证",
  description:
    "中国恶霸犬血统注册协会，中国恶霸犬血统国际认证。 China Bully Registry, Real Fair and Professional",
  twitter: {
    card: "summary_large_image",
    title: "中国恶霸犬注册|血统国际认证",
    description:
      "中国恶霸犬血统注册协会，中国恶霸犬血统国际认证。 China Bully Registry, Real Fair and Professional",
    creator: "@chinabullyregistry",
  },
  metadataBase: new URL("https://bullyregistry.cn/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, 'bg-m-3sysdarksurface')}>
        {/* provide session to any wrapped client components */}
        <main>
          {children}
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html >
  );
}
