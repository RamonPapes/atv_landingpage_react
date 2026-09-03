import BotaoAgendamento from "./BotaoAgendamento";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="etiqueta">Psicologia e acolhimento</span>
          <h1>Um espaço seguro para cuidar de você</h1>
          <p>Um espaço de escuta, acolhimento e reflexão para momentos importantes da sua trajetória.</p>
          <div className="grupo-botoes">
            <BotaoAgendamento texto="Solicitar atendimento" destino="#contato" tipo="primario" />
            <BotaoAgendamento texto="Conhecer a profissional" destino="#sobre" tipo="secundario" />
          </div>
          <small>Atendimento sujeito à disponibilidade.</small>
        </div>
        <figure className="foto-profissional">
          <img
            src="/jarsia_melo.jpg"
            alt="A psicóloga Jarsia Melo sentada em uma poltrona, durante atendimento em consultório"
            width="1024"
            height="559"
          />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
