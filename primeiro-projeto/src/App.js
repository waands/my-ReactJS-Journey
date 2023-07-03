import HelloWorld from "./components/HelloWorld";
import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import Lista from "./components/Lista";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <HelloWorld />
      <SayMyName nome="Wanderson Teixeira" />
      <SayMyName nome="Teixeira Wanderson" />
      <Pessoa
        nome="Wandim"
        idade="19"
        profissao="estudante"
        foto="https.via.placeholder.com/150"
      />
      <Lista />
    </div>
  );
}

export default App;
