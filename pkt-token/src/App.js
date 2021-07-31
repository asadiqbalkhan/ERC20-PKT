import "./App.css";
import Web3 from "web3";
import Web3Info from "./Web3Info.js";
import { useWeb3 } from "@openzeppelin/network/react";

const infuraProjectId = "ff5964fc8ce94dc0b44cd1c5d071ce21";

function App() {
  const web3Context = useWeb3(
    `https://ropsten.infura.io/v3/${infuraProjectId}`
  );
  const { networkId, networkName, providerName } = web3Context;

  return (
    <div className="App">
      <h1>Pak Digital Rupee - PKT ERC20</h1>
      <Web3Info title="Web3 Info" web3Context={web3Context} />
    </div>
  );
}

export default App;
