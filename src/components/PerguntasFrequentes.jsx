import { perguntas } from "../data/conteudo";

// Exercício 04 — nova seção montada a partir do array de perguntas.
function PerguntasFrequentes() {
  return (
    <section className="secao" id="perguntas">
      <div className="container">
        <p className="titulo-secao">Perguntas frequentes</p>
        <h2>Dúvidas comuns antes do primeiro contato</h2>
        <div className="lista-perguntas">
          {perguntas.map((item) => (
            <details className="pergunta" key={item.id}>
              <summary>{item.pergunta}</summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerguntasFrequentes;
