import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section
      id="about"
      title="About me"
      intro="I am a full-stack developer based in Lahore, working mainly with the MERN stack."
    >
      <Reveal className="grid gap-6 md:grid-cols-2">
        <p className="text-lg">
          I help businesses build a strong online presence with modern,
          responsive, and user-friendly web applications. From business websites
          to e-commerce platforms, I turn ideas into digital solutions that help
          businesses reach more customers, showcase their services, and grow
          online.
        </p>
        <p className="text-lg">
          My approach starts with understanding your business goals, identifying
          your needs, and suggesting practical solutions. From planning and
          development to testing and deployment, I focus on building reliable,
          easy-to-use, and scalable solutions that deliver real value to your
          business.
        </p>
      </Reveal>
    </Section>
  );
}
