import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import ScrollReveal from "./ScrollReveal";
import DonutChart from "./DOnutChart";
import { ArrowRight } from "lucide-react";
import "./Services.css";

const services = [
  {
    title: "Branding & Visual Identity",
    description:
      "From logos to full brand systems that communicate consistency and credibility.",
    icon: "../src/assets/images/Branding&VisualIdentity.png",
  },
  {
    title: "UI / UX & Product Design",
    description:
      "Intuitive interfaces and experiences designed to engage users and drive results.",
    icon: "../src/assets/images/UIUXdesign.png",
  },
  {
    title: "Marketing & Creative Design",
    description:
      "High-impact designs for social media, campaigns, presentations, and ads.",
    icon: "../src/assets/images/Marketing&CreativeDesign.png",
  },
  {
    title: "Branding & Visual Identity",
    description:
      "From logos to full brand systems that communicate consistency and credibility.",
    icon: "../src/assets/images/Branding&VisualIdentity.png",
  },
  {
    title: "UI / UX & Product Design",
    description:
      "Intuitive interfaces and experiences designed to engage users and drive results.",
    icon: "../src/assets/images/UIUXdesign.png",
  },
  {
    title: "Marketing & Creative Design",
    description:
      "High-impact designs for social media, campaigns, presentations, and ads.",
    icon: "../src/assets/images/Marketing&CreativeDesign.png",
  },
  {
    title: "Branding & Visual Identity",
    description:
      "From logos to full brand systems that communicate consistency and credibility.",
    icon: "../src/assets/images/Branding&VisualIdentity.png",
  },
  {
    title: "UI / UX & Product Design",
    description:
      "Intuitive interfaces and experiences designed to engage users and drive results.",
    icon: "../src/assets/images/UIUXdesign.png",
  },
  {
    title: "Marketing & Creative Design",
    description:
      "High-impact designs for social media, campaigns, presentations, and ads.",
    icon: "../src/assets/images/Marketing&CreativeDesign.png",
  },
];

export default function Services({ limit }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section
      className={`px-6 sm:px-10 text-center ${limit ? "py-16" : "pt-28 pb-16"}`}
    >
      {/* Title sirf full page par dikhega */}
      {!limit && (
        <h2 className="text-4xl font-bold mb-12 uppercase tracking-tighter">
          Our Services
        </h2>
      )}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 max-w-7xl mx-auto">
        {displayServices.map((service, index) => (
          <ScrollReveal key={index} delay={index * 120}>
            <ServiceCard {...service} />
          </ScrollReveal>
        ))}
      </div>

      {limit && (
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-blue-600 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      )}
      {/* Donut Charts: Sirf tab dikhenge jab limit NA HO (Full Services Page par) */}
      {!limit && (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 text-blue-600 max-w-7xl mx-auto">
          <DonutChart value={90} label="Brand Identity" />
          <DonutChart value={85} label="UI / UX Design" />
          <DonutChart value={75} label="Marketing Design" />
        </div>
      )}
    </section>
  );
}
