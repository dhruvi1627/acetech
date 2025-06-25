import React, { useState, useEffect } from "react";
import dataDrivenInnovation1 from "../../../assets/images/our-expertise/Digital-Transformation/Digital-Transformation-Enhancing-Operational-Efficiency-qtljq6b6j5lzwe70o3n0sacd12udp4ih7pe8cbradi.jpg";
import FeatureSection from "../common/FeatureSection";

const DtEfficiency = () => {
  const [openAccordion, setOpenAccordion] = useState("agile-implementation");
  const [displayText, setDisplayText] = useState("");
  const fullText = "OPERATIONAL EFFICIENCY";
  const [isTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;

    const type = () => {
      if (isTyping && !isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          timeout = setTimeout(type, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, pauseDuration);
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
          timeout = setTimeout(type, deletingSpeed);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(type, pauseDuration);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting]);

  const accordionData = [
    {
      id: "process-utomation",
      title: "Process Automation",
      content:
        "Automate repetitive tasks with advanced technologies such as robotic process automation (RPA), freeing up your team to focus on strategic initiatives.",
    },
    {
      id: "system-integration",
      title: "SYSTEM INTEGRATION",
      content:
        "Seamlessly integrate your existing systems with new digitalsolutions, ensuring smooth data flow and  operational efficiency.",
    },
    {
      id: "agile-implementation",
      title: "Agile Implementation",
      content:
        "Implement agile methodologies to enhance flexibility, improve collaboration, and accelerate project delivery.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Driving"
      animatedText={displayText}
      image={dataDrivenInnovation1}
      imageAlt="Data-driven innovation visualization with global network"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Many businesses struggle with inefficient processes and outdated systems that hinder growth and innovation.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our digital transformation services streamline your operations by integrating modern technologies, automating routine tasks, and implementing agile methodologies. By optimizing your business processes, we help you reduce costs, increase productivity, and create a more responsive and efficient organization.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="TRANSFORM YOUR BUSINESS TODAY"
    />
  );
};

export default DtEfficiency;
