import "./App.css";
import Web3 from "web3";
import Web3Info from "./Web3Info.js";
import React from "react";
import { useWeb3 } from "@openzeppelin/network/react";
import PAKToken from "./abi/PAKToken.json";
import UniSwap from "./UniSwap";

const infuraProjectId = "ff5964fc8ce94dc0b44cd1c5d071ce21";
const Contract = require("web3-eth-contract");

function App() {
  // const web3Context = useWeb3(
  //   `https://ropsten.infura.io/v3/${infuraProjectId}`
  // );
  // 0xa5aFEe78e75EBaffdEE9Dcc2829bCf4cACA44463
  // const { networkId, networkName, account, providerName } = web3Context;

  const contract = new Contract(
    PAKToken.abi,
    "0x82C83FdfAa75a3400C8Fc321d1BCc243358f8Ed5"
  );

  console.log(contract);

  return (
    <div className="App">
      <h1>Pak Digital Rupee - PKT ERC20</h1>
      {/* <Web3Info title="Web3 Info" web3Context={web3Context} /> */}
      <UniSwap />
    </div>
  );
}

export default App;
