import ServiceCard from "./ServiceCard";
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
    <section className="services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
