import Footer from "../components/Navigation/Footer";
import Header from "../components/Navigation/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>
          <Header custom="bg-black" />
          {children}
          <Footer />
        </>
  );
}
