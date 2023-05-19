import React from "react";
import type { MenuProps } from "antd";
import { ethers } from "ethers";

declare const window: Window & { ethereum: any };
export type MenuItem = Required<MenuProps>["items"][number];

export interface Lineg {
  name?: string;
  symbol?: string;
  decimals?: string;
  balanceOf?: string;
}
const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
  router?: string
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
    router,
  } as MenuItem;
};

const InstancedContract = (address: any, abi: any) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(address, abi, signer);
    return Contract;
  } else {
    return;
  }
};

const ObtainAddress = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await signer.getBalance();
    return {
      address,
      balance,
    };
  } else {
    return;
  }
};

export { getItem, InstancedContract, ObtainAddress };
