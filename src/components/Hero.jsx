import { useState } from "react";
import { profile, heroSkills } from "@/data/portfolio";
import PrimaryButton from "./PrimaryButton";

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="top" className="grid grid-cols-2 items-center gap-4 lg:gap-12 min-h-[85vh] py-12 lg:py-16">
      <div>
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-muted">
          {profile.eyebrow}
        </p>

        <h1 className="mt-4 lg:mt-6 text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight">
          Hey there, I&apos;m <span className="text-accent">{profile.name}</span>
        </h1>

        <p className="mt-2 text-lg sm:text-xl lg:text-3xl font-bold text-accent2">
          {profile.role}
        </p>

        <p className="mt-4 lg:mt-6 max-w-md text-sm lg:text-base text-muted">
          {profile.intro}
        </p>

        <div className="mt-4 lg:mt-5 flex flex-col gap-2 lg:gap-3">
          {heroSkills.map((row, i) => (
            <div key={i} className="flex flex-wrap gap-2 lg:gap-3">
              {row.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent/50 px-2.5 py-1 lg:px-4 lg:py-1.5 text-[10px] lg:text-xs font-semibold tracking-wide text-accent shadow-[0_0_10px_rgba(34,211,238,0.45)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4">
          <PrimaryButton href={profile.resumeUrl} variant="outline">
            Download Resume
          </PrimaryButton>
          <PrimaryButton href="#contact" variant="solid">
            Contact Me
          </PrimaryButton>
        </div>
      </div>

      {/* Hero visual — replace /public/hero-portrait.png with your own image.
          No card/border here on purpose: the image's edges are faded out via
          a CSS mask so it blends straight into the page background, and a
          glow sits behind it for the lit-up look. */}
      <div className="relative h-[200px] sm:h-[280px] lg:h-[500px] w-full flex items-center justify-center">
        <div
          className="absolute inset-0 blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 50% 50%, #22D3EE 0%, #0E7490 40%, transparent 75%)",
          }}
        />

        {!imageFailed ? (
          <img
            src={profile.heroImage}
            alt={profile.name}
            onError={() => setImageFailed(true)}
            className="relative h-full w-auto max-w-full object-contain object-center"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 85% at 50% 55%, black 55%, transparent 95%)",
              maskImage:
                "radial-gradient(ellipse 70% 85% at 50% 55%, black 55%, transparent 95%)",
            }}
          />
        ) : (
          <span className="relative text-muted text-xs px-3 text-center max-w-[160px] lg:max-w-xs lg:text-sm">
            Drop your hero image at{" "}
            <code className="text-accent2">/public/hero-portrait.png</code>
          </span>
        )}
      </div>
    </section>
  );
}