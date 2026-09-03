function CardServico({ icone, titulo, descricao, modalidade, disponivel }) {
  return (
    <article className="card-servico">
      <span className="icone-servico" aria-hidden="true">{icone}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="rodape-card">
        <span className="modalidade">{modalidade}</span>
        {/* Exercício 05 — texto definido pela prop booleana disponivel. */}
        <span className={disponivel ? "situacao situacao-livre" : "situacao situacao-consulta"}>
          {disponivel ? "Disponível" : "Consulte disponibilidade"}
        </span>
      </div>
    </article>
  );
}

export default CardServico;
