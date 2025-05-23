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