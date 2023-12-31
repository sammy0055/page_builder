import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Editor App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
