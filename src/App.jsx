import React from "react";
import "./App.css";
import { Board } from "./components/Board/Board";
import { Palabras } from "./components/Palabras/Palabras";

const App = () => {
    return (
        <>
            <div className="site-title">
                <h1 >
                    Concept Patches
                </h1>
            </div>
            <div className="site-body">
                <div className="board">
                    <Board/>
                </div>
               <div className="info-panel">
                    <Palabras/>
               </div>
            </div>
            
        </>
        
    );
};

export default App;