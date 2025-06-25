import React from "react";
import Blockchain_Web3 from "../../../assets/images/our-expertise/blockchain_and_web3/Blockchain-Web3.0.jpg";
import ServicesSection from "../common/ServicesSection";

const BlockchainServices = () => {
  const services = [
    {
      title: "Smart Contracts",
      content:
        "Smart contracts automate and enforce agreements between parties, eliminating the need for intermediaries and reducing the risk of fraud. ATI’s expertise in smart contract development ensures that your contracts are secure, efficient, and reliable. We develop, audit, and deploy smart contracts for a range of applications, including tokenization, DeFi protocols, and decentralized applications (DApps).",
    },
    {
      title: "Decentralized Applications (DApps)",
      content:
        "DApps are the cornerstone of Web 3.0, providing decentralized, peer-to-peer applications that run on blockchain networks. ATI’s DApp development services help you create user-friendly, scalable, and secure decentralized applications for various industries, from finance and gaming to social media and beyond. We leverage blockchain’s decentralized nature to build DApps that offer greater transparency, security, and user control.",
    },
    {
      title: "NFT Development",
      content:
        "Non-Fungible Tokens (NFTs) are transforming digital ownership, enabling the creation, buying, and selling of unique digital assets on the blockchain. ATI’s NFT development services cover everything from minting and smart contract creation to marketplace development. Whether you’re an artist, a brand, or a business, we help you tap into the growing NFT market and create valuable digital assets.",
    },
    {
      title: "Web 3.0 Integration",
      content:
        "Web 3.0 represents the next evolution of the internet, characterized by decentralization, enhanced privacy, and greater user control. ATI’s Web 3.0 integration services enable businesses to transition to this new era of the web by integrating decentralized technologies, such as blockchain, into their existing platforms. We help you build Web 3.0- enabled websites, decentralized identity systems, and data storage solutions that empower users and protect their privacy.",
    },
    {
      title: "Blockchain Security & Auditing",
      content:
        "Security is paramount in the blockchain ecosystem, where vulnerabilities can lead to significant financial losses and reputational damage. ATI offers comprehensive blockchain security and auditing services to ensure that your blockchain solutions are secure and resilient against attacks. We conduct rigorous smart contract audits, penetration testing, and security assessments to identify and mitigate risks, safeguarding your blockchain projects.",
    },
  ];

  return (
    <ServicesSection
      image={Blockchain_Web3}
      imageAlt="Blockchain_Web3"
      services={services}
    />
  );
};

export default BlockchainServices;
