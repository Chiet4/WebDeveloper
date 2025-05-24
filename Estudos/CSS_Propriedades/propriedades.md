## Algumas unidades de medida

### rem
- Unidade relativa ao tamanho da fonte do elemento raiz `<html>`.

### vh e vw
- O `vh` representa o tamanho da altura de tela visível (viewport height) e `vw` da largura (viewport width). `100vw = 100% da tela`.
- Entender um pouco mais - [Unidade](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units).

### Calc
- Não é bem uma unidade, é uma função css que retorna o valor com base no cálculo efetuado. Pode se combinar com as unidades. Ex.: `calc(100vw/3)` - um terço da tela.

## Background
- O **background** pode receber outro valores além de cores sólidas, como imagens e gradientes. A diferença entre `img` e o `backgroup`, é que primeiro faz parte do conteúdo, já o segundo é apenas estilo.
- Ler um pouco sobre [backgroup](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders).

## Pseudo Classes
### Estado
- Permite definirmos o estilo de diferentes estados do elemento html.
- `:hover` - Mouse por cima
- `:focus` - Elemento em foco, usando o teclado (tab).
- `:active` - Quando clicamos no elemento.
- `:visited` - Para links que já foram visitados.
- **Ler mais em** - [Pseudo-Classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)

### Seletores
- `:first-child` - Seleciona o primeiro elemento.
- `:last-child` - Seleciona o último elemento.
- `:ntd-child(4)` - Seleciona o elemento pelo numero do mesmo.[even, odd, 3n]
- **Ler mais em** - [seletores](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elements).

### :not
- Nega selação de um elemento especifico.

## Pseudo Elements 
### ::before e ::after
Os pseudo elements `::after` e `::before` criam elementos HTML com base no seletor.
- `content` - Definir um conteúdo para o elemento é essencial para ele existir, mesmo que o conteúdo esteja vazio.
- Ver mais [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).
