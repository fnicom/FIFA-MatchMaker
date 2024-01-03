import React, { useState } from "react";
import ClubList from "./components/ClubList"; // Certifique-se de importar o componente ClubList
import clubs from "./data/clubs"; // Substitua pelo caminho real
import { BeatLoader, ScaleLoader } from "react-spinners";

import "./App.css";

const App = () => {
  const [selectedClubs, setSelectedClubs] = useState([]);
  const [isToggled, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const shuffleClubs = async () => {
    setLoading(true);

    // Simulando um processo assíncrono, por exemplo, uma requisição à API
    await sleep(2000);

    if (isToggled) {
      // Lógica para sortear dois times
      // se isToggled for verdadeiro, filtrará todos os times incluindo seleções
      const shuffledClubs = [...clubs]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      setSelectedClubs(shuffledClubs);
      setLoading(false);
    } else {
      // Filtra apenas os clubes com nationalTeam=false
      const shuffledClubs = [...clubs]
        .filter((club) => !club.nationalTeam)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      setSelectedClubs(shuffledClubs);
      setLoading(false);
    }
  };

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    <div className="principal">
      <div className="divTitle">
        <h1>Criador de partidas FIFA</h1>
        <span>Clique no botão para escolher equipes aleatoriamente</span>

        <button
          className={`simple-button ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={shuffleClubs}
        >
          Sortear Times
        </button>
      </div>

      {/* <p className="loading">{loading && <p>Loading...</p>}</p> */}
      <div className="loading">
        <ScaleLoader color={"#36D7B7"} loading={loading} size={15} />
      </div>

      <div className="club-list-container">
        <ClubList clubs={selectedClubs} />
      </div>

      <div className="checkBox-container">
        {/* <button
          onClick={handleToggle}
          className={`button-style-national-no ${
            isToggled ? "button-style-national" : ""
          }`}
        >
          ADD SELEÇÕES ? {isToggled ? "SIM" : "NÃO"}
        </button> */}

        <div className="checkBox-container-div">
          <input
            type="checkbox"
            id="nationalTeamCheckbox"
            checked={isToggled}
            onChange={handleToggle}
          />

          <label htmlFor="nationalTeamCheckbox" className="checkbox-label">
            Adicionar Seleções? {isToggled ? "Sim" : "Não"}
          </label>
        </div>

        {isToggled && <p>Seleções serão incluidas no sorteio</p>}
      </div>

      <span>
        Made w/ love by <a href="https://github.com/fnicom">fnicom s2</a>
      </span>
    </div>
  );
};

export default App;
