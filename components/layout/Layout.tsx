import { Fragment } from "react";
import { Navbar, Footer } from "..";
import Head from "next/head";

const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={`${metadata.description}`} />
      </Head>
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </Fragment>
  );
}
