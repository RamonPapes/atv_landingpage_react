import { useState } from "react";
import { profissional } from "../data/conteudo";

function Contato() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  function enviarFormulario(evento) {
    evento.preventDefault();
    setMensagemEnviada(true);
    evento.target.reset();
  }

  // Exercício 03 — volta o estado para false e esconde a confirmação.
  function limparMensagem() {
    setMensagemEnviada(false);
  }

  return (
    <section className="secao" id="contato">
      <div className="container contato-grid">
        <div>
          <p className="titulo-secao">Contato</p>
          <h2>Vamos conversar?</h2>
          <p>Preencha os campos para testar a experiência do formulário.</p>
          <ul className="lista-contatos">
            {profissional.telefone && (
              <li>
                <strong>Telefone:</strong>{" "}
                <a href={`tel:${profissional.telefone.replace(/\D/g, "")}`}>
                  {profissional.telefone}
                </a>
              </li>
            )}
            {profissional.email && (
              <li>
                <strong>E-mail:</strong>{" "}
                <a href={`mailto:${profissional.email}`}>{profissional.email}</a>
              </li>
            )}
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href={profissional.linkedin} target="_blank" rel="noreferrer">
                {profissional.linkedinRotulo}
              </a>
            </li>
            <li>
              <strong>CRP:</strong> {profissional.crp}
            </li>
            <li>
              <strong>Atendimento:</strong> {profissional.atendimento}
            </li>
          </ul>
          {(!profissional.telefone || !profissional.email) && (
            <p className="aviso">
              Telefone e e-mail profissionais ainda não foram divulgados. Até lá, o
              formulário e o LinkedIn são os canais indicados para o primeiro contato.
            </p>
          )}
        </div>

        <form className="formulario" onSubmit={enviarFormulario}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" required />

          <label htmlFor="contato">Telefone ou e-mail</label>
          <input id="contato" name="contato" type="text" required />

          <label htmlFor="mensagem">Mensagem inicial</label>
          <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

          <button className="botao" type="submit">Enviar solicitação</button>
          {mensagemEnviada && (
            <div className="bloco-sucesso">
              <p className="mensagem-sucesso">
                Solicitação demonstrativa registrada na interface.
              </p>
              <button
                className="botao botao-secundario botao-pequeno"
                type="button"
                onClick={limparMensagem}
              >
                Limpar mensagem
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contato;
