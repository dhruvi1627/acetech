import React, { useState, useEffect } from "react";
import genAi from "../../../assets/images/our-expertise/data_ai/Gen-Ai.jpg";
import FeatureSection from "../common/FeatureSection";

const InnovationWithGenAi = () => {
  const [openAccordion, setOpenAccordion] = useState("content-generation");
  const [displayText, setDisplayText] = useState("");
  const fullText = "WITH GENERATIVE AI";
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
      id: "content-generation",
      title: "CONTENT GENERATION",
      content:
        "Leverage GenAI to create high-quality content, including text, images, and videos, tailored to your brand and audience.",
    },
    {
      id: "product-design",
      title: "PRODUCT DESIGN",
      content:
        "Use AI to generate innovative product designs, prototypes, and concepts, accelerating your product development cycle.",
    },
    {
      id: "creative-problem-solving",
      title: "CREATIVE PROBLEM-SOLVING",
      content:
        "Apply GenAI to complex problem-solving scenarios, generating unique solutions and strategies that drive innovation and efficiency.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="INNOVATION"
      animatedText={displayText}
      image={genAi}
      imageAlt="Innovation with Generative AI visualization"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Staying ahead of the competition requires continuous innovation, but traditional methods can be time-consuming and resource-intensive.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Generative AI (GenAI) offers a revolutionary approach to innovation by automating creative processes and generating new ideas, content, and designs. ATI's GenAI solutions help businesses explore new possibilities, optimize creative workflows, and bring innovative products and services to market faster.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="INNOVATE FASTER WITH GENAI"
    />
  );
};

export default InnovationWithGenAi; 