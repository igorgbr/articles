## Articles

I create this repo to organize and search for collabs before publish articles.

---

### List of articles

#### Le Alchimie

##### (Série: Primeiros passos no Elixir)

- [Meus primeiros passos no Elixir - Configuração](https://github.com/igorgbr/articles/blob/main/Elixir/PrimeirosPassos/configuracao.md)
- [Meus primeiros passos no Elixir - Iniciando um projeto com MIX](https://github.com/igorgbr/articles/blob/main/Elixir/PrimeirosPassos/conceitos_iniciais.md)
- Meus primeiros passos no Elixir - Pattern Matching e Funções Built in
- Meus primeiros passos no Elixir - Phoenix

#### Python

- [Iniciando no Django - Pt. 1](https://github.com/igorgbr/articles/blob/main/Python/Iniciando_uma_aplica%C3%A7%C3%A3o_com_Django_Framework.md)

#### General
- [Direto ao ponto: O que é CRUD](https://github.com/igorgbr/articles/blob/main/General/Direto_ao_ponto:_O_que_%C3%A9_CRUD%3F.md)
- [Estamos vivendo uma era estranha...](https://github.com/igorgbr/articles/blob/main/General/Estamos_vivendo_uma_era_estranha%E2%80%A6.md)
- [Programar não é fácil](https://github.com/igorgbr/articles/blob/main/General/Programar_n%C3%A3o_%C3%A9_f%C3%A1cil!.md)
- [Sequelize - A solução para os seus relacionamentos](https://github.com/igorgbr/articles/blob/main/General/Sequelize_%E2%80%94_A_solu%C3%A7%C3%A3o_para_seus_relacionamentos!.md)

---
![estrutura](readme.png)

## Sobre
O Projeto tem como objetivo tornar mais facil o processo de colaboração e publicação de artigos.

## Configuração

Crie um arquivo helper.js com essa estrutura (opcional):

```javascript
const APIKEY = '<SUA_KEY_DO_DEV.TO>';
const pythonPath = './Python/';
const elixirPath = './Elixir/';
const generalPath = './General';

module.exports = {
  APIKEY,
  pythonPath,
  elixirPath,
  generalPath,
};
```

P.S: você pode adaptar os PATHS da forma que achar melhor.

## Como funciona
Se você quiser transferir um artigo do Medium para o Dev.to deve primeiro converter para markdown, você pode utilizar o script 'medium_to_markdown.js'

### Como converter um artigo do Medium para Markdown

É nescessário ter o Node instalado.

clone o repositorio
```Shell
    git clone git@github.com:igorgbr/articles.git
```

Instale a biblioteca
```Shell
    npm install medium-to-markdown
```

Substitua a URL na linha 5
```javascript
    const URL = 'https://medium.com/<@seu_usuario>/<seu_artigo>';
```

Rode o Script
```Shell
    npm run medium-to-md
```

Será gerado no caminho escolhido um arquivo de nome igual ao titulo do artigo no formato MD.


### Como fazer o deploy para o Dev.to

Instale a biblioteca
```Shell
    npm install axios
```
Rode o Script
```Shell
    npm start
```

Insira o nome do arquivo que ira publicar (com a extensão)
O arquivo deve estar na raiz do projeto.
```Shell
    filename: meu_artigo.md
```

Insira seu nome de usuario do dev.to
```Shell
    nome de usuario: igorgbr
```

Insira o titulo do seu artigo
```Shell
    Titulo do artigo: Meu artigo TOP
```

Insira as HASHTAG'S separadas por virgula (opcional)
```Shell
    Tags (separadas por virgula): trybe, elixir
```