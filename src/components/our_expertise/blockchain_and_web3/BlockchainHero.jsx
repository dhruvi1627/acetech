import React from "react";

import Future_of_Decentralized from "../../../assets/images/our-expertise/blockchain_and_web3/Future-of-Decentralized-1.jpg";
import Future_of_Decentralized_2 from "../../../assets/images/our-expertise/blockchain_and_web3/Future-of-Decentralized-2-qtlray34hhcgrzcff7szvx2k13kzuo7jf23u5vi6pk.jpg";
import HeroSection from "../common/HeroSection";

const BlockchainHero = () => (
  <HeroSection
    subtitle="Blockchain & Web 3.0 Solutions"
    title={"Pioneering the Future of Decentralized Innovation"}
    description={`As the digital landscape continues to evolve, Blockchain and Web 3.0 are at the forefront of this transformation, offering new possibilities for decentralization, transparency, and user empowerment. ATI’s Blockchain & Web 3.0 Solutions are designed to help businesses harness these cutting-edge technologies to build secure, transparent, and decentralized applications that drive innovation and open up new revenue streams. With deep expertise in blockchain development and Web 3.0 ecosystems, ATI is your partner in pioneering the future of digital interactions`}
    leftImage={Future_of_Decentralized_2}
    rightImage={Future_of_Decentralized}
    leftImageAlt="Future_of_Decentralized_2"
    rightImageAlt="Future_of_Decentralized"
    showDecor={true}
  />
);

export default BlockchainHero;
