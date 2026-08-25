import { Metadata } from "next";
import ApplicationContent from "./ApplicationContent";

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

export default function ApplicationPage() {
  return <ApplicationContent />;
}
