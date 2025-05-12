### TOP, RIGHT, BOTTON, LEFT 

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

### Grid

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