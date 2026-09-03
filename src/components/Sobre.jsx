import { formacao, profissional } from "../data/conteudo";

function Sobre() {
  return (
    <section className="secao" id="sobre">
      <div className="container sobre-grid">
        <div>
          <p className="titulo-secao">Sobre</p>
          <h2>Psicóloga {profissional.nome}</h2>
          <p>
            Atuação em psicologia clínica pela abordagem da {profissional.abordagem},
            com atendimento {profissional.atendimento.toLowerCase()}. Bióloga por
            formação, é mestre em Educação de Jovens e Adultos e soma experiência
            como consultora e docente.
          </p>
          <p className="registro">
            <strong>CRP {profissional.crp}</strong>
          </p>

          <h3 className="subtitulo">Formação acadêmica</h3>
          <ul className="lista-formacao">
            {formacao.map((item) => (
              <li key={item.id}>
                <strong>{item.curso}</strong>
                <span>
                  {item.instituicao}
                  {item.periodo && ` · ${item.periodo}`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="quadro-compromissos">
          <h3>Compromissos do atendimento</h3>
          <ul>
            <li>Escuta profissional</li>
            <li>Respeito</li>
            <li>Sigilo</li>
            <li>Atendimento agendado</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Sobre;
