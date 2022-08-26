
import React from "react";
import "./style.css";
import Chat from "./components/Chat"

export default function App() {
  return (
    <div className="mainSection">
      <div className="heading" >
      Coffee Shop ☕
      </div>  
      <Chat />
    </div>
  );
}