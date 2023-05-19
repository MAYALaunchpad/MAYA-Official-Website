import React, { useState, useEffect } from "react";
import International from "../../components/International";
import "./index.scss";
declare const window: Window & { ethereum: any };
import loges from "../../assets/image/ico6.png";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3ModalTheme } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, bscTestnet, mainnet, polygon } from "wagmi/chains";
import { Web3Button } from "@web3modal/react";
const chains = [bscTestnet];
const projectId = "b98a412bd29c5618fe10c37180fa6813";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

const Cwallet = (posps: any) => {
  const { theme, setTheme } = useWeb3ModalTheme();
  setTheme({
    themeMode: "dark",
    themeVariables: {
      "--w3m-font-family": "Roboto, sans-serif",
      "--w3m-accent-color": "rgb(255, 81, 163)",
      "--w3m-logo-image-url": `${loges}`,
      "--w3m-background-color":'rgb(255, 81, 160)',
      "--w3m-background-image-url":`${loges}`,
      "--w3m-button-hover-highlight-border-radius":"0rem"
    },
  });
  useEffect(() => {}, []);
  return (
    <div className="Headeer">
      <div className="HeaderComponent">
        <div className="HeaderIcones">
          <img src={loges} alt="" />
        </div>
        <div className="HaderButtonGroup">
          <div className="HaderLoser">
          <International />
          </div>
          <div className="HaderButton">
            <WagmiConfig client={wagmiClient}>
              <Web3Button label="Connect Wallet" icon="hide"  />
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cwallet;
