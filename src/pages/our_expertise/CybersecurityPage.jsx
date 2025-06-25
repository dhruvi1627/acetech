import React from "react";
import CybersecurityHero from "../../components/our_expertise/cybersecurity/CybersecurityHero";
import CybersecurityAbout from "../../components/our_expertise/cybersecurity/CybersecurityAbout";
import CybersecurityServices from "../../components/our_expertise/cybersecurity/CybersecurityServices";
import CybersecurityProactive from "../../components/our_expertise/cybersecurity/CybersecurityProactive";
import CybersecuritySecuring from "../../components/our_expertise/cybersecurity/CybersecuritySecuring";
import CybersecurityEnsuring from "../../components/our_expertise/cybersecurity/CybersecurityEnsuring";
import CybersecurityWhyChoose from "../../components/our_expertise/cybersecurity/CybersecurityWhyChoose";

export default function CybersecurityPage() {
  return (
    <>
      <CybersecurityHero />
      <CybersecurityAbout />
      <CybersecurityServices />
      <CybersecurityProactive />
      <CybersecuritySecuring />
      <CybersecurityEnsuring />
      <CybersecurityWhyChoose />
    </>
  );
}
