import { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { profile } from "@/data/portfolio";

export default function Home() {
  // If the browser has a leftover #section hash from a previous visit,
  // scroll back to the top and clear it so the page always opens at the
  // hero section instead of jumping straight to that section.
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{profile.name} — {profile.role}</title>
      </Head>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
