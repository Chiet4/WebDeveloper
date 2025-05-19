# HTML Semântico

- É importante para acessibilidade, funcionalidades de Browsers, indexadores de máquina.

### Landmarks

- Tags que marcam pontos de referência, introduzidas no ano de lançamento do HTML5. Antes era ultilizado o atributo `role`.
- O efeito dessas tags é similar ao das div's, elas não mudam em nada o contéudo.

```
<main>
<nav>
<section>
<article>
<aside>
<footer>
<header>
```

### main

- A tag `<main>` marca o conteúdo principal. Ex.: Conteúdo de um blog, descrições de produtos...
- A ideia é ultilizar uma por página.

### nav

- A tag `<nav>` marca um bloco de navegação. Ex.: Usado para menus primários e secundário de algum site.
- Use apenas para a navegação essencial.

### article

- A tag `<article>` representa um conteúdo do site que autoexplicativo independente e autocontido. Ao menos um nível de título. Ex.: Lista, um artigo, post de rede social e outros.
- `aria-label` título de região visualmente escondido, mas lido pelo leitor de tela.
- `aria-labelledby` se o título existe na tela, marque o mesmo com um `id` e use este atributo para criar uma relação entre eles.

### section

- A tag `<section>` representa uma seção genérica, geralmente com um título, quando não existir um elemento semântico mais específico para representá-lo.
- Não use com container generico, para isso use a `<div>` para estilização.
- Consultar se tiver dúvida - [article](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/section).
- **Usar quando uma seção deve aparecer logicamente na estrutura de um documento**
