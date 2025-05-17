## TOP, RIGHT, BOTTON, LEFT 

- Propriedades como `margin`, `padding` e `border` permitem definirmos valores diferentes para cada um do lados da caixa(box model). 

```
div {
  padding: 20px 40px;
  margin: 30px 100px 60px 200px;
}

div{
  padding: top/bottom right/left;
  margin: top right bottom left;
}
```

## Grid

- Com o `display: grid` é possível definir colunas e linhas para organizar os elementos que estiverem dentro do grid;
  - grid-template-colums = define o total de colunas e o tamanho de cada uma.
  - fr = unidade francional que tem com objetivo distribuir o espaço restante entre os elementos do grid
  - gap = Cria uma distancia entre os elementos do grid, tanto no horizontal quanto vertical.

### align-items e justify-items

- `align-tems`: start | center | end | stretch; alinha os items na horizontal
- `justify-items`: start | center | end | stretch; alinha os items na vertical.
- `place-items`: align justify; é um atalho os dois elementos.

### grid-template-rows

- `grid-template-rows`: 100px auto; Defite o tamanho das linhas
- `grid-auto-rows`: Linhas adicionadas automaticamente com o valor de auto
- `grid-row:`: Define a linha do item, funciona parecido com grid-column

## Flexbox
- `diplay: flex`; Os filhos passam a ter um tamanho flexível e ficam um ao lado do outro.
- `flex-wrap: wrap`; Caso não caiba todos os elementos em uma linha, quebre para a próxima.
- `gap`; Define uma distância entre os elementos. 

### flex

- `flex-grow: 1`; Se o elemento deve crescer para ocupar o espaço vazio. O `0` impede o crescimento, valores maiores funcionam com unidade de `fr` do css grid.
- `flex-basis: 200px`: Valor inicial antes ded distribuir o espaço em branco.
- `flex-shrink: 0`; Caso exista um valor de base, o flex-shrink irá determinar se esse valor pode ser reduzido ou não. `0` significa que ele não pode ser reduzido.
- `flex: 1`; Atalho para as opções anteriores

**- flex vs grid**: Pode se usar os ambos no layout, resolvem problemas diferentes, o GRID tem controle em todos os eixos e o FLEX apenas no total de itens por linha.

### Position 

- Propriedade com valores que remove o elemento do fluxo de padrão do documento. O padrão é o valor `static`.
- `position:fixed` : Fixa o elemento na tela.
- `top, right, left, bottom` : Define o posicionamento dos elementos que não estão no fluxo padrão.
* Quando se mudar o posicionamento de um elemento, muda o eixo de profundidade do mesmo - `z-index` 

