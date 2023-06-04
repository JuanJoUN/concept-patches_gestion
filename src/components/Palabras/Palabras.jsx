import React from "react";
import { useState, useEffect } from "react";
import "./Palabras.css";
import Concepts from "../dataCalidad.json";

export const Palabras = () => {
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    Concepts.forEach(({ label }) => {
      setLabels((labels) => !labels.includes(label) ? [...labels, label] : labels);
    });
    console.log("////////////////////////////////////////////");
    
  }, []);
  console.log(labels.length);
  return (
    <>
        <h2>Words</h2>
        <ul>
            {labels.map((label) => (
                <li key={label} className="word">{label}</li>
            ))}
        </ul>
    </>
    
  );
};
