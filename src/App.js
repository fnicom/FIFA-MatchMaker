import React, { useState } from "react";
import ClubList from "./components/ClubList"; // Certifique-se de importar o componente ClubList
import clubs from "./data/clubs"; // Substitua pelo caminho real

import "./App.css";

const App = () => {
  const [selectedClubs, setSelectedClubs] = useState([]);
  const [isToggled, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const shuffleClubs = async () => {
    setLoading(true);

    // Simulando um processo assíncrono, por exemplo, uma requisição à API
    await sleep(2000);

    // Lógica para sortear dois times
    const shuffledClubs = [...clubs]
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setSelectedClubs(shuffledClubs);
    setLoading(false);
  };

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    <div className="principal">
      <div className="divTitle">
        <h1>Criador de partidas FIFA</h1>
        <span>Clique no botão para escolher equipes aleatoriamente</span>
        <button className="button-style" onClick={shuffleClubs}>
          Sortear Times
        </button>
      </div>

      {/* <button
        onClick={handleToggle}
        className={`button-style-national-no ${isToggled ? "button-style-national" : ""}`}
      >
        ADD SELEÇÕES ? {isToggled ? "SIM" : "NÃO"}
      </button> */}
      {isToggled && <p>Seleções serão incluidas no sorteio</p>}

      {loading && <p>Loading...</p>}

      <ClubList clubs={selectedClubs} />
    </div>
  );
};

export default App;
