# Homepage — Jarsia Melo (React + Vite)

Prática guiada de **Componentes e Props** (React + Vite).
A interface foi dividida em componentes reutilizáveis, cada um com uma
responsabilidade, e os dados são enviados do componente pai (`App`) para os
filhos por meio de **props**.

## Como executar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run lint     # oxlint
```

## Estrutura

```
src/
├── components/
│   ├── Botao.jsx           props: texto, cor, aoClicar, tipo
│   ├── Secao.jsx           props: id, kicker, titulo, descricao, children, fundo
│   ├── Header.jsx          props: nome, registro, links, aoClicarContato
│   ├── Hero.jsx            props: titulo, descricao, textoBotao, aoClicar, destaques
│   ├── Sobre.jsx           props: nome, apresentacao, formacao
│   ├── Servicos.jsx        props: itens
│   ├── CardServico.jsx     props: icone, titulo, descricao
│   ├── Beneficios.jsx      props: etapas
│   ├── Depoimentos.jsx     props: itens          (useState)
│   ├── CardDepoimento.jsx  props: texto, autor, contexto
│   ├── Contato.jsx         props: email, telefone (useState + eventos)
│   └── Footer.jsx          props: nome, registro, ano, aviso
├── data/conteudo.js        listas usadas com map()
├── App.jsx                 monta a página e envia as props
├── App.css                 estilos da página e dos componentes
├── index.css               variáveis de cor e estilos globais
└── main.jsx                inicia o React
```

## Onde cada conceito aparece

| Conceito | Onde ver |
| --- | --- |
| Definição do componente | `function Botao(...)` em `src/components/Botao.jsx` |
| Retorno de JSX | `return (<button ...>{texto}</button>)` |
| Exportação | `export default Botao` |
| Importação e uso | `import Botao from './Botao.jsx'` e `<Botao texto="..." />` |
| Prop de texto | `texto="Quero conversar"` |
| Prop de função | `aoClicar={irParaContato}` (sem parênteses) |
| Prop de objeto/lista | `itens={servicos}`, `links={links}` |
| Lista com `map()` | `Servicos.jsx`, `Header.jsx`, `Beneficios.jsx`, `Depoimentos.jsx` |
| Estado com `useState` | `Depoimentos.jsx` (mostrar mais) e `Contato.jsx` (formulário) |
| Evento | `onSubmit`, `onChange` e `onClick` em `Contato.jsx` |
| Composição com `children` | `Secao.jsx` envolvendo o conteúdo das seções |
| CSS responsivo | `@media` no final de `App.css` |

## Cuidados éticos aplicados

Conforme a situação-problema da prática, a página **não**:

- promete cura ou garante resultados;
- inventa formação, titulação ou número de registro profissional — esses campos
  ficam como espaços de preenchimento (`____`, `CRP __/______`) para serem
  confirmados pela profissional;
- publica depoimentos reais: os relatos são **demonstrativos**, marcados com
  selo visível na interface;
- substitui avaliação psicológica — o rodapé traz o aviso e a seção de contato
  indica o canal de emergência (CVV 188).

O envio do formulário é simulado: os dados permanecem no estado do componente,
no navegador, e nada é transmitido.
