// Exercício 02 — componente reutilizável.
// props -> texto (o que aparece), destino (âncora de destino),
// tipo (aparência) e aoClicar (ação opcional executada no clique).
function BotaoAgendamento({ texto, destino, tipo = "primario", aoClicar }) {
  const classe = tipo === "primario" ? "botao" : `botao botao-${tipo}`;

  return (
    <a className={classe} href={destino} onClick={aoClicar}>
      {texto}
    </a>
  );
}

export default BotaoAgendamento;
