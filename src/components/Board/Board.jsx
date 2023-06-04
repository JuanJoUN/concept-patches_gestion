import React from "react";
import { useState, useEffect } from "react";
import "./Board.css";
import Concepts from "../data.json";

export const Board = () => {
  // eslint-disable-next-line
  const [letras, setLetras] = useState([]);
  const [descripciones, setDescripciones] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [labels, setLabels] = useState([]);

  const handleLetterClick = (letter) => {
    setSelectedLetters([...selectedLetters, letter]);
    setSelectedWord(selectedWord + letter);
    console.log(selectedWord);
  };
// eslint-disable-next-line
  const checkWord = () => {
    const words = document.querySelectorAll(".word");
    words.forEach((word) => {
      console.log(word.innerHTML);
      if (word.innerHTML.toUpperCase().replaceAll(' ', '') === selectedWord) {
        console.log("encontrada");
        word.classList.add("word-found");
        setSelectedLetters([]);
        setSelectedWord("");
      }else{
        setSelectedLetters([]);
        setSelectedWord("");
      }
    });
  };



  useEffect(() => {
    const letrasObj = {};
    const descriptionObj = {};
    Concepts.forEach(({ positions, description, label}) => {
      positions.forEach(({ letter, position }) => {
        letrasObj[position - 1] = letter.toUpperCase();
        descriptionObj[position - 1] = description;
      });
      setLabels((labels) => !labels.includes(label) ? [...labels, label] : labels);
    });
    setLetras(letrasObj);
    setDescripciones(descriptionObj);
  }, []);
   
  return (
    <>
    <div className="sopa-de-letras">
      <table >
      <tbody>
        {Array(15)
          .fill(null)
          .map((_, i) => (
            <tr key={i}>
              {Array(15)
                .fill(null)
                .map((_, j) => {
                  const position = i * 15 + j;
                  const letra = letras[position];
                  const descripcion = descripciones[position];
                  return (
                    <td
                      key={`${i}-${j}`}
                      title={descripcion}
                      onClick={(e) => {
                        handleLetterClick(letra);
                        e.target.classList.toggle("selected");
                      }
                      }
                      className={"letter"}
                    >
                      {letra}
                    </td>
                  );
                })}
            </tr>
          ))}
      </tbody>
    </table>
    <button className="check-word" onClick={()=>{
      console.log(selectedWord);
      checkWord();
      }} >
      <span>Check word</span>
    </button>
    </div>
    
    </>
  );
};
