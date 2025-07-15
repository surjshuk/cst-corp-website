import { Locations, Section, Values } from "@/components/sections";
import Image from "next/image";
import { HIGHLIGHT } from "../assets";

const page = () => {
  return (
    <>
      {/* Mission Section */}
      <div data-id="mission">
        <Section
          id="mission"
          subtitle="Our Mission"
          title="Empowering Industries with Responsible, Impactful AI Solutions."
          description1="At CST, our mission is to develop and deploy cutting-edge artificial intelligence technologies that transform industries, enhance operational efficiency, and unlock measurable business value. We strive to help enterprises navigate the complexities of AI adoption while prioritizing security, ethics, and sustainability."
          description2="By fostering a culture of continuous innovation and deep domain expertise, we build AI-driven solutions tailored to address real-world challenges in sectors like oil & gas, manufacturing, and healthcare. Our commitment is to deliver reliable, scalable, and impactful AI systems that empower clients to lead confidently in the age of intelligence."
        />
        <section className="relative h-screen z-10">
          <Image
              src={HIGHLIGHT}
              alt="highlight"
              fill
              priority
              className="object-cover"
          />
        </section>
      </div>

      {/* Team Section */}
      <div data-id="team">
        <Section
          id="team"
          subtitle="CST Team"
          title="At CST Corp, we believe exceptional teams build transformative technology. Our team combines AI researchers, product strategists, and system architects collaborating to solve the toughest operational challenges."
          description1="With expertise spanning artificial intelligence, cloud infrastructure, edge computing, and industrial analytics, our people engineer scalable, enterprise-grade solutions tailored for mission-critical environments."
          description2="We prioritize a culture of curiosity, integrity, and relentless innovation. Every solution we deploy reflects our commitment to quality, security, and lasting client partnerships — ensuring every project we undertake drives measurable business impact."
          top={false}
          sectionStyles="py-20 space-y-10"
        />
      </div>

      {/* Values Section */}
      <div data-id="values">
        <Values />
      </div>

      {/* Locations Section */}
      <div data-id="location">
        <Locations />
      </div>
    </>
  );
};

export default page;