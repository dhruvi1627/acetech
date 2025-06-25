import React from "react";
import BlockchainHero from "../../components/our_expertise/blockchain_and_web3/BlockchainHero";
import BlockchainAbout from "../../components/our_expertise/blockchain_and_web3/BlockchainAbout";
import BlockchainServices from "../../components/our_expertise/blockchain_and_web3/BlockchainServices";
import BlockchainEnhancing from "../../components/our_expertise/blockchain_and_web3/BlockchainEnhancing";
import BlockchainRevolutionizing from "../../components/our_expertise/blockchain_and_web3/BlockchainRevolutionizing";
import BlockchainEmpowering from "../../components/our_expertise/blockchain_and_web3/BlockchainEmpowering";
import BlockchainWhyChoose from "../../components/our_expertise/blockchain_and_web3/BlockchainWhyChoose";

export default function BlockchainPage() {
  return (
    <>
      <BlockchainHero />
      <BlockchainAbout />
      <BlockchainServices />
      <BlockchainEnhancing />
      <BlockchainRevolutionizing />
      <BlockchainEmpowering />
      <BlockchainWhyChoose />
    </>
  );
}
