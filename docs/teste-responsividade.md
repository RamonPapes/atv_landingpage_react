# Exercício 06 — Registro de teste de responsividade

**Página:** homepage Jarsia Melo (React + Vite)
**Como testar:** `npm run dev`, abrir as ferramentas de desenvolvedor (F12) e ativar o
modo de dispositivos móveis (Ctrl+Shift+M).
**Larguras verificadas:** 360 px, 390 px, 414 px (celular), 768 px e 800 px (tablet)
e 1120 px (desktop).

## Problemas encontrados e soluções aplicadas

| # | Problema encontrado | Componente afetado | Solução aplicada |
| - | ------------------- | ------------------ | ---------------- |
| 1 | O menu suspenso abria numa posição fixa (`top: 68px`), 8 px acima da borda do cabeçalho, que mede 76 px. Sobrava um degrau entre o cabeçalho e o menu. | `Header.jsx` — `.nav` | `top: 100%`, para o menu acompanhar a altura real do cabeçalho. |
| 2 | Os links do menu mobile tinham cerca de 20 px de altura e o botão *Menu* cerca de 34 px — área de toque menor que os 44 px recomendados. | `Header.jsx` — `.nav a`, `.menu-botao` | `padding: 11px 4px` nos links e `min-height: 44px` + `cursor: pointer` no botão. |
| 3 | Os dois botões do topo empilhavam com larguras diferentes, deixando o bloco desalinhado. | `Hero.jsx` / `BotaoAgendamento.jsx` — `.grupo-botoes .botao` | `width: 100%` e `text-align: center` abaixo de 800 px. |
| 4 | A grade tinha 3 colunas fixas no desktop e 1 coluna no mobile. Depois do exercício 01 (quarto serviço), o quarto card ficava sozinho na segunda linha, e entre 600 px e 800 px sobrava espaço vazio. | `Servicos.jsx`, `Beneficios.jsx`, `Depoimentos.jsx` — `.grade-*` | `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`, que escolhe a quantidade de colunas conforme a largura disponível. |
| 5 | Ao clicar em *Agendar conversa* ou *Conhecer a profissional*, a página rolava até a seção, mas o título ficava escondido atrás do cabeçalho fixo. | todas as seções com `id` (destino do `BotaoAgendamento`) | `section[id] { scroll-margin-top: 88px; }`. |
| 6 | A caixa de mensagem podia ser arrastada na horizontal e ultrapassava o cartão do formulário, criando rolagem lateral. | `Contato.jsx` — `.formulario textarea` | `resize: vertical`. |
| 7 | O espaço reservado para a fotografia ocupava 340 px de altura no celular, empurrando o restante do conteúdo para muito abaixo da dobra. | `Hero.jsx` — `.foto-placeholder` | `min-height: 230px` abaixo de 800 px. |

## Resultado

Todas as correções ficaram no arquivo `src/App.css`: as de números 4, 5 e 6 valem para
todas as larguras, e as de números 1, 2, 3 e 7 estão dentro do bloco
`@media (max-width: 800px)`. Nenhum componente `.jsx` precisou ser alterado — a
responsividade foi resolvida apenas com CSS.

## Observação sobre a verificação

As correções acima vieram da análise da folha de estilo e da estrutura dos componentes
nas larguras listadas. Convém abrir o modo de dispositivos móveis e conferir cada item
na tela antes de entregar, anexando uma captura de tela de 390 px de largura como
comprovação do teste.
