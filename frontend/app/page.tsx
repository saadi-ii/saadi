import type { Metadata } from "next";
import HomeContent from "./home/HomeContent";

export const metadata: Metadata = {
  title: "Saad Hameed — Full Stack Web Developer",
  description:
    "Saad Hameed is a full stack web developer crafting modern, high-performance web applications with Next.js, React, Node.js and TypeScript.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeContent />;
}
