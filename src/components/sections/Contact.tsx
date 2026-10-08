import Section from "../ui/Section";
import ContactForm from "../forms/ContactForm";
import { profile } from "../../data";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let's talk about your project"
      intro="Tell me what you are building, or reach out about a role. I will reply by email."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <ul className="space-y-3 text-lg">
          <li>
            <a
              className="font-semibold text-sky underline"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a
              className="underline"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="underline"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>{profile.location}</li>
        </ul>
        <ContactForm />
      </div>
    </Section>
  );
}
