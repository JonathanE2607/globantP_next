import Footer from "./components/Navigation/Footer";
import Header from "./components/Navigation/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
          <Header custom="bg-gray-500" />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
