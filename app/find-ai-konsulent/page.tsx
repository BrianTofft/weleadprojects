import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FindAIConsultantForm from "./FindAIConsultantForm";

export const metadata: Metadata = {
  title: "Find AI-konsulent",
  description:
    "Har du brug for en erfaren AI-konsulent? We Lead Projects matcher jer med den rette profil inden for AI-strategi, governance og implementering.",
  alternates: {
    canonical: "https://www.weleadprojects.com/find-ai-konsulent",
  },
};

export default function FindAIKonsulentPage() {
  return (
    <>
      <Nav />
      <FindAIConsultantForm />
      <Footer />
    </>
  );
}
