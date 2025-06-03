# Responsivo

Adapta o layout a diferentes tipos/tamanhos de tela e as preferências de usuário.

## Tamanhos

- Unidades relativas com `%`, `vw`, `fr` são mais utilizadas.

## Medias Queries

- Código que é ativado de acordo com o tamanho da tela. Altera o layout, esconde itens e adiciona funcionalidades.

## Flexbox e Grid

- Manipulação do flexbox e o grid para adaptar o conteúdo.

## Tipo de tela

- Considera operações de sites por "touch screen". Adições de padding em um link por exemplo, área de contato maior.

## meta viewport

É essencial para garantir com que o HTML/CSS lide de forma correta com telas de alta densidade. Ela normaliza o PX do css.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### @media

Gera um bloco de código que só é ativado caso a condição entre parêtenses for verdadeira.

- `@media(max-width:500px)`: Abaixo de 500px;
- `@media(min-width:600px)`: Acima de 600px;
- `@media(min-width:800px) and (max-width:900px)`: Entre 800px e 900px

Ler mais [aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_media_queries/Using_media_queries).
