import Section from "../ui/Section";
import ContactForm from "../forms/ContactForm";
import { profile } from "../../data";
import { MailIcon, GithubIcon, LinkedinIcon, LocationIcon } from "../ui/icons";

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
              className="flex items-center gap-3 font-semibold text-sky hover:underline"
              href={`mailto:${profile.email}`}
            >
              <MailIcon />
              {profile.email}
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 hover:underline"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              GitHub
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 hover:underline"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-3">
            <LocationIcon />
            {profile.location}
          </li>
        </ul>
        <ContactForm />
      </div>
    </Section>
  );
}
