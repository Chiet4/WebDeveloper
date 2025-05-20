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

### aside

- A tag `<aside>` representa uma seção de uma página que é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo. Essas seções são, muitas vezes, representadas como barras laterais. Elas contem explicações laterais, como a definição de um glossário; conteúdo vagamente relacionado, como avisos; a biografia do autor; ou, em aplicações web, informações de perfil ou links de blogs relacionados.
- Consultar se tiver dúvida - [asise](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/aside).

### header

- A tag `<header>` marca o cabeçalho do site, onde geralmente estão a marca, navegação do site e alguma informação introdutória.
- Consultar se tiver dúvida - [header](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/header).
- Se dentro de outra tag, representará o rodapé da mesma.

### footer

- A tag de Rodapé `<footer>`, normalmente um rodapé contém informações sobre o autor da seção de dados, direitos autorais ou links para documentos relacionados.
- Consultar se tiver dúvida - [footer](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/footer).
- Se dentro de outra tag, representará o rodapé da mesma.

### Listas ul

- A tag `<ul>` marca uma lista de itens sem ordem(unordered list). Cada item da lista deve ser marcado com uma `<li><li>`.
- Consultar se tiver dúvida - [ul](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/ul).
- Existe também a `<ol>` que é ordenada. 

### Navegação

- Sem listas e com listas, não é obrigatório o uso de lista.