import React from "react";
import "./style.css";
import Header from "./Header.js"
import Information from "./Information.js"

export default function App() {
  return (
    <>
      <Header />
      <div className="body--holder">
        <Information />
      </div>
    </>
  );
}
