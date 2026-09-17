import { Metadata } from "next";
import ApplicationContent from "./ApplicationContent";
import JsonLd from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Application V-Car Transport | L'état des lieux nouvelle génération",
  description: "Découvrez l'outil technologique propriétaire développé par V-Car pour moderniser et structurer son processus d'état des lieux et de suivi des véhicules.",
  alternates: { canonical: "https://v-car.company/application" },
  openGraph: {
    title: "Application V-Car Transport | L'état des lieux digital",
    description: "Une application propriétaire pour documenter précisément chaque état des lieux, garantir la traçabilité et optimiser le suivi de nos missions.",
    url: "https://v-car.company/application",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "V-Car État des Lieux",
  operatingSystem: "iOS, Android",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR"
  },
  description: "Application propriétaire V-Car pour l'état des lieux digital et l'inspection de véhicules en convoyage."
};

export default function ApplicationPage() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <ApplicationContent />
    </>
  );
}
