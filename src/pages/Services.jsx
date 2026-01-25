import ServiceCard from "./ServiceCard";
import ScrollReveal from "./ScrollReveal";
import ProgressBar from "./ProgressBar";
import DonutChart from "./DOnutChart";
import "./Services.css";

const services = [
  {
    title: "Branding & Visual Identity",
    description: "From logos to full brand systems that communicate consistency and credibility.",
    icon: "../src/assets/images/Branding&VisualIdentity.png",
  },
  {
    title: "UI / UX & Product Design",
    description: "Intuitive interfaces and experiences designed to engage users and drive results.",
    icon: "../src/assets/images/UIUXdesign.png",
  },
  {
    title: "Marketing & Creative Design",
    description: "High-impact designs for social media, campaigns, presentations, and ads.",
    icon: "../src/assets/images/Marketing&CreativeDesign.png",
  },
   {
    title: "Branding & Visual Identity",
    description: "From logos to full brand systems that communicate consistency and credibility.",
    icon: "../src/assets/images/Branding&VisualIdentity.png",
  },
  {
    title: "UI / UX & Product Design",
    description: "Intuitive interfaces and experiences designed to engage users and drive results.",
    icon: "../src/assets/images/UIUXdesign.png",
  },
  {
    title: "Marketing & Creative Design",
    description: "High-impact designs for social media, campaigns, presentations, and ads.",
    icon: "../src/assets/images/Marketing&CreativeDesign.png",
  },
   {
    title: "Branding & Visual Identity",
    description: "From logos to full brand systems that communicate consistency and credibility.",
    icon: "../src/assets/images/Branding&VisualIdentity.png",
  },
  {
    title: "UI / UX & Product Design",
    description: "Intuitive interfaces and experiences designed to engage users and drive results.",
    icon: "../src/assets/images/UIUXdesign.png",
  },
  {
    title: "Marketing & Creative Design",
    description: "High-impact designs for social media, campaigns, presentations, and ads.",
    icon: "../src/assets/images/Marketing&CreativeDesign.png",
  },
];



export default function Services() {
  return (
    <section className="px-6 sm:px-10 pt-28 pb-16 text-center">
  <h2 className="text-4xl font-bold mb-12">Our Services</h2>

  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
    {services.map((service, index) => (
      <ScrollReveal key={index} delay={index * 120}>
        <ServiceCard {...service} />
      </ScrollReveal>
    ))}
  </div>
  {/* <div className="mt-16 space-y-6 flex flex-col items-center">
  <ProgressBar label="Brand Identity Projects" value={90} />
  <ProgressBar label="UI / UX Design" value={85} />
  <ProgressBar label="Marketing Campaigns" value={75} />
</div> */}
<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 text-blue-600">
  <DonutChart value={90} label="Brand Identity" />
  <DonutChart value={85} label="UI / UX Design" />
  <DonutChart value={75} label="Marketing Design" />
</div>



</section>
  );
}
