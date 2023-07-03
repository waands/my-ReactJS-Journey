import { useState } from "react";

function Form() {
  function cadastrarUser(e) {
    e.preventDefault();
    console.log(`Usuário ${name} cadastrado com a senha: ${password}!`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>MEU CADASTRO: </h1>
      <form onSubmit={cadastrarUser}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
