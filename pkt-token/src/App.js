import "./App.css";
import Web3 from "web3";
import Web3Info from "./Web3Info.js";
import React, { createContext, useReducer, useEffect } from "react";
import { useWeb3 } from "@openzeppelin/network/react";

const infuraProjectId = "ff5964fc8ce94dc0b44cd1c5d071ce21";

function App() {
  const web3Context = useWeb3(
    `https://ropsten.infura.io/v3/${infuraProjectId}`
  );
  const { networkId, networkName, account, providerName, contract } =
    web3Context;

  // useEffect(() => {
  //   // function goes here
  //   injectWeb3();
  // }, []);

  // injectWeb3 = async () => {
  //   try {
  //     const web3 = await getWeb3();
  //     const account = await web3.eth.getAccounts();

  //     let instance;
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = PKTToken.networks[networkId];
  //     if(networId == 3){

  //     }
  //   }
  // }

  return (
    <div className="App">
      <h1>Pak Digital Rupee - PKT ERC20</h1>
      <Web3Info title="Web3 Info" web3Context={web3Context} />
    </div>
  );
}

export default App;
