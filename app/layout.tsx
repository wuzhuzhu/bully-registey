import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";

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
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html >
  );
}
