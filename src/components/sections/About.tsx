import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section
      id="about"
      title="About me"
      intro="I am a full-stack developer based in Lahore, working mainly with the MERN stack."
    >
      <Reveal>
        <p className="max-w-3xl text-lg">
          I build modern, responsive web applications that help businesses
          establish a strong online presence, reach more customers, and grow. I
          focus on practical solutions, clean development, and a smooth
          experience from idea to deployment.
        </p>
      </Reveal>
    </Section>
  );
}
