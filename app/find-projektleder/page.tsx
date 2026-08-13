import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FindProjectForm from "./FindProjectForm";

export const metadata: Metadata = {
  title: "Find Projektleder",
  description:
    "Har du brug for en erfaren projektleder? We Lead Projects matcher dig med den rette konsulent. Book et gratis intromøde eller send en forespørgsel.",
  alternates: {
    canonical: "https://www.weleadprojects.com/find-projektleder",
  },
};

export default function FindProjektlederPage() {
  return (
    <>
      <Nav />
      <FindProjectForm />
      <Footer />
    </>
  );
}
