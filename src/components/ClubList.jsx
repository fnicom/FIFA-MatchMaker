import React from "react";

import StarRating from "./StarRating";

const ClubList = ({ clubs }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        padding: "0",
      }}
    >
      {clubs.map((clube, index) => (
        <li
          key={index}
          style={{
            textAlign: "center",
            padding: "16px",
            background: "#696969",
            width: "160px"
          }}
        >
          <img
            src={clube.imagem}
            alt={clube.nome}
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              objectFit: "cover",
              marginBottom: "8px",
            }}
          />
          {/* Adiciona o texto Player 1 ou Player 2 com base no índice */}
          <p>{index === 0 ? "Player 1" : "Player 2"}</p>
          <p>{clube.nome}</p>
          <p>
            <StarRating rating={clube.rating} />
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ClubList;
