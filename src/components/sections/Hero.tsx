import { useState } from "react";
import { profile } from "../../data";

export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false);
  return (
    <section className="hero-glow px-5 pb-20 pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-semibold text-sky">
            {profile.name}, {profile.title}
          </p>
          <h1 className="mt-4 text-5xl font-extrabold md:text-7xl">
            Web apps that help your business show up and grow online.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/75">
            I turn business ideas and requirements into functional, easy-to-use
            web applications, from the interface to the database and the
            deployed site.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-cobalt px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-125"
            >
              Let's Work Together
            </a>
            <a
              href="#projects"
              className="rounded-full border-2 border-ink px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
            >
              Explore My Work
            </a>
          </div>
        </div>
        <div className="float mx-auto grid aspect-[768/1376] w-56 place-items-center overflow-hidden rounded-[2.5rem] bg-cobalt text-7xl font-extrabold text-white md:w-64">
          {noPhoto ? (
            <span className="font-display">MH</span>
          ) : (
            <img
              src="/profileImage.jpeg"
              alt="Portrait of Muhammad Haris"
              onError={() => setNoPhoto(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
