import { Fragment } from "react";
import { Navbar, Footer } from "..";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </Fragment>
  );
}
