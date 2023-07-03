import Item from "./Item";
function Lista() {
  return (
    <>
      <h2>Minha lista!</h2>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985} />
        <Item marca="Fiat" ano_lancamento={1964} />
        <Item marca="Renault" />
      </ul>
    </>
  );
}

export default Lista;
