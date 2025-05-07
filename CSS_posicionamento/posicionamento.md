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

- Justify-content