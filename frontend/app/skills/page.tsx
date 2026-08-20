import type { Metadata } from "next";
import SkillsContent from "./SkillsContent";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Saad Hameed's selected full stack web development projects built with Next.js, React, Node.js and TypeScript.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
