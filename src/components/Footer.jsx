import { profissional } from "../data/conteudo";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <strong>Jarsia Melo — Psicologia</strong>
        <p>Informações institucionais sujeitas à confirmação profissional.</p>
        <p>CRP: {profissional.crp} | © {anoAtual} — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;