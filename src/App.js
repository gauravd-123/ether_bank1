// import logo from './logo.svg';

import './App.css';
import input from './components/input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>APML Ether Bank</h1>
        <p>
          <code>Hardhat</code> 
        </p>
        <p>Enter your address.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <input />
      </header>
    </div>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
// import { ethers } from "ethers";
// import "./App.css";

// function App() {
//   const [greeting, doGreeting] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [provider, setProvider] = useState(null);

//   useEffect(() => {
//     const loadProvider = async () => {
//       let contractAddress = "Your Contract address";
//       const url = "http://localhost:8545";
//       const provider = new ethers.providers.JsonRpcProvider(url);
//       const contract = new ethers.Contract(
//         contractAddress,
//         Greeter.abi,
//         provider
//       );
//       setContract(contract);
//       setProvider(provider);
//       // console.log(contract);
//     };
//     loadProvider();
//   }, []);
//   useEffect(() => {
//     const getGreetings = async () => {
//       const greeting = await contract.greet();
//       doGreeting(greeting);
//     };
//     contract && getGreetings();
//   }, [contract]);

//   const changeGreetings = async () => {
//     const input = document.querySelector("#value");
//     const signer = contract.connect(provider.getSigner());
//     signer.setGreeting(input.value);
//     setTimeout(function () {
//       window.location.reload(1);
//     }, 500);
//     setTimeout();
//   };
//   return (
//     <div className="center">
//       <h3>{greeting}</h3>
//       <input className="input" type="text" id="value"></input>
//       <button className="button" onClick={changeGreetings}>
//         Change
//       </button>
//     </div>
//   );
// }

// export default App;