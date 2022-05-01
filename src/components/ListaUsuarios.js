import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListaUsuarios() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((res) => {
        console.log(res);
        setUsuario(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return usuario.map((cliente) => (
    <>
      <div className="dados">
        <div className="matrix">
          <img className="img" key={cliente.img} src={cliente.img} alt="" />
          <div className="container">
            <div className="usuario">
              <div className="name">Nome do usuário: {cliente.name}</div>
            </div>
            <div className="id_user">
              <div className="id">ID: {cliente.id}</div>
              <div className="usuario">Username: {cliente.username}</div>
            </div>
          </div>

          <div className="botao">
            <button>Pagar</button>
          </div>
        </div>
      </div>
    </>
  ));
}
