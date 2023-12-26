import React from "react";

const Produto = ({ dados }) => {
  const imagemEstilo = {
    width: "300px",
    height: "300px",
    objectFit: "cover",
  };

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco} </p>
      =
      <img
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
        style={imagemEstilo}
      />
    </div>
  );
};

export default Produto;
