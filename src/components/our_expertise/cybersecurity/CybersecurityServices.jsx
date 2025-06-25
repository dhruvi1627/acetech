import React from "react";
import CybersecurityServicesImg from "../../../assets/images/our-expertise/cybersecurity/pikaso_enhance__vivid_2K_Standard_r_c_-5.jpg";
import ServicesSection from "../common/ServicesSection";

const CybersecurityServices = () => {
  const services = [
    {
      title: "Network Security",
      content:
        "A secure network is the foundation of your organization’s cybersecurity strategy. ATI’s network security services encompass everything from firewalls and intrusion detection systems (IDS) to virtual private networks (VPNs) and secure access service edge (SASE) solutions. We design, implement, and manage robust network security architectures that protect your data in transit, prevent unauthorized access, and ensure the integrity of your communications.",
    },
    {
      title: "Endpoint Security",
      content:
        "With the rise of remote work and mobile devices, endpoint security has become a critical component of a comprehensive cybersecurity strategy. ATI’s endpoint security solutions protect all devices connected to your network, including laptops, smartphones, and IoT devices. We deploy endpoint detection and response (EDR) tools, antivirus software, and device management solutions to secure your endpoints against malware, ransomware, and other cyber threats.",
    },
    {
      title: "Cloud Security",
      content:
        "As businesses increasingly migrate to the cloud, ensuring the security of cloud environments is paramount. ATI’s cloud security services protect your data and applications in cloud platforms such as AWS, Microsoft Azure, and Google Cloud. We implement cloud-native security controls, encryption, identity and access management (IAM), and continuous monitoring to safeguard your cloud infrastructure and comply with industry regulations.",
    },
    {
      title: "Identity & Access Management (IAM)t",
      content:
        "Managing who has access to your systems and data is a fundamental aspect of cybersecurity. ATI’s IAM solutions ensure that the right people have the right access to the right resources, at the right time. We implement multi-factor authentication (MFA), single sign-on (SSO), role-based access control (RBAC), and identity governance to secure access to your critical assets and reduce the risk of insider threats.",
    },
    {
      title: "Compliance & Risk Management",
      content:
        "Navigating the complex landscape of cybersecurity regulations can be challenging. ATI’s compliance and risk management services help you meet industry standards such as GDPR, HIPAA, PCI-DSS, and ISO 27001. We conduct thorough risk assessments, develop comprehensive security policies, and implement controls to ensure your organization remains compliant and resilient against cyber risks.",
    },
    {
      title: "Incident Response & Recovery:",
      content:
        "In the event of a cyber incident, a swift and effective response is essential to minimize damage. ATI’s incident response and recovery services provide you with a clear, actionable plan for dealing with security breaches. Our experts are ready to assist with containment, eradication, and recovery efforts, ensuring that your business can resume operations quickly and with minimal disruption.",
    },
  ];

  return (
    <ServicesSection
      image={CybersecurityServicesImg}
      imageAlt="Advanced Data Analytics and AI Services"
      services={services}
    />
  );
};

export default CybersecurityServices;
