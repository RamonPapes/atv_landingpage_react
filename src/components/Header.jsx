import { useState } from "react";
import BotaoAgendamento from "./BotaoAgendamento";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto(!menuAberto);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <div className="container header-conteudo">
        <a className="marca" href="#inicio" onClick={fecharMenu}>
          <span>Jarsia Melo</span>
          <small>Psicologia</small>
        </a>

        <button
          className="menu-botao"
          type="button"
          onClick={alternarMenu}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          {menuAberto ? "Fechar" : "Menu"}
        </button>

        <nav className={menuAberto ? "nav aberta" : "nav"} aria-label="Navegação principal">
          <a href="#inicio" onClick={fecharMenu}>Início</a>
          <a href="#sobre" onClick={fecharMenu}>Sobre</a>
          <a href="#servicos" onClick={fecharMenu}>Serviços</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
          <BotaoAgendamento
            texto="Agendar conversa"
            destino="#contato"
            tipo="pequeno"
            aoClicar={fecharMenu}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
