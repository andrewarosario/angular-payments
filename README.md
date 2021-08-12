# **Desafio Frontend PicPay**

Primeiramente, obrigado pelo seu interesse em trabalhar na melhor plataforma de pagamentos do mundo!
Abaixo você encontrará todos as informações necessárias para iniciar o seu teste.

## Avisos antes de começar

- Certifique-se que você recebeu um email de convite de acesso ao layout proposto no **Figma**, caso não tenha recebido, solicite o acesso com o Recruiter. Também há screenshoots do Figma na pasta screenshots. Você não é obrigado a seguir o layout do figma, ele é apenas uma base para que você entenda melhor o desafio proposto.

- Para a entrega do teste você precisará ter two factor habilitado na sua conta do GitHub, você poderá ver o passo a passo nesse tutorial: https://help.github.com/pt/github/authenticating-to-github/configuring-two-factor-authentication

- Com two factor habilitado, você precisa configurar a chave SSH: https://help.github.com/pt/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

- **Para iniciar o teste, crie uma branch a partir da `master` nesse padrão de nomenclatura: dd-mm-yy/nome-sobrenome (por exemplo, 30-04-20/meu-nome)**
- **Quando finalizar o teste, cria uma PR da sua branch para a master e avise o(a) recrutador(a) que o teste está finalizado.**
- Você poderá consultar o Google, Stackoverflow ou algum projeto particular na sua máquina.
- Fique à vontade para perguntar qualquer dúvida aos recrutadores.

- Fique tranquilo, respire, assim como você, também já passamos por essa etapa. Boa sorte! :)

## Setup do projeto

- Angular CLI: 12.1.4
- Node: 12.20.2
- Angular: 12.1.4

## Como Rodar?

- Instale as dependências usando o comando `npm install`
- Na raiz do repositório, rode este comando `ng serve` para iniciar o servidor de desenvolvimento.
- A Aplicação estará disponível na porta `http://localhost:4200/`

<br/>

### Leia com atenção! ⚠️

**1 -** Nosso desafio consiste de uma aplicação (CRUD), que traz uma tabela de itens e que deverá ter paginação. No layout proposto há um botão de filtragem dos itens, isso é um plus que pode contar mais pontos. Esta aplicação consiste de uma tela de login (consultar usuário no fim deste arquivo), para que você tenha acesso à tela de listagem (home). Você poderá utilizar a lib de components que quiser, mas desde que siga o mínimo do layout proposto. Você pode implementar novas features, melhorar o design, tudo que você fizer contará pontos!

**2 -** Temos uma API mock (JSON Server) na qual você utilizará para implementar os seus serviços de CRUD. Os dados estão armazenados no arquivo `db.json` na raiz do projeto.

**3 -** Certifique-se de revisar seu código, a modo que fique o mais organizado possível para a avaliação e entendimento dos avaliadores.

**4 -** Utilize a estrutura de pastas que achar mais adequada, bem como padrões, patterns, práticas de segurança, performance etc.

**5 -** Caso você seja JR e tenha algum receio, não se preocupe, iremos avaliar o que foi entregue, mesmo com pendências.

**6 -** O diferencial para este desafio, é o aprimoramento do mesmo, bem como implementação de práticas de segurança, performance e/ou estrutura.
<br/>
<br/>

### **API**

Para o seu desafio ser mais interativo, estamos utilizando um mock de API, chamado JSON Server. Portanto, é necessário que você instale-o globalmente em sua máquina para ter os recursos da lib.

**1 -** Como instalar? <br/>
`npm install -g json-server`

**2 -** e para rodar (deixar aberto em uma outra aba do terminal, para que ele fique escutando suas ações de CRUD!), digite o seguinte comando na RAÍZ do projeto: `npm run api`

Link para mais detalhes: https://github.com/typicode/json-server

**Rotas:** <br />
`GET: /tasks`<br />
`POST: /tasks`<br />
`PUT: /tasks`<br />
`PATCH: /tasks`<br />
`DELETE: /tasks`<br />

`GET: /account` <br />
`POST: /account` <br />
`PUT: /account` <br />
`PATCH: /account` <br />
`DELETE: /account` <br />
<br/>

### **Models**:<br />

Tasks - Esta é sua lista com agenda de pagamentos. Aqui você cadastrar, editar e excluir um pagamento.<br />
` { "id": 5, "name": "Anthea Pundy", "username": "apundy4", "title": "Software Engineer III", "value": 177.19, "date": "2021-01-01T14:09:51Z", "image": "https://robohash.org/quiaautomnis.png?size=150x150&set=set1", "isPayed": true },`

Account - você usará este usuário para Login da plataforma<br />
`{ "id": 0, "name": "usuario", "email": "usuario@gmail.com", "password": "usuario" }`

<br/>

### **Parametros da API (Json Server):**

paginate:<br />
`GET: /tasks?_page=7` <br />
`GET: /tasks?_page=7&_limit=20`

**Usuário para utilizar no login:**<br />
` "email": "usuario@gmail.com", "password": "usuario"`
<br/>
<br/>

**Orientações e dicas:**

- Esperamos que você consiga completar o mínimo do desafio; Mas não se esqueça, que aqui no PicPay é muito concorrido, então você irá concorrer com outras pessoas desenvolvedoras que também querem muito trabalhar conosco, então, arrebenta, mostre o seu melhor! 😉

- Iremos avaliar cada feature, conceito, pattern, tudo o que você fizer de adicional. Tudo além do proposta contará pontos!

- Caso você esteja concorrendo a uma vaga de Sênior, testes unitários são necessários no teste. Se você estiver concorrendo a uma vaga de JR ou Pleno, não é obrigatorio, mas é um grande diferencial caso seja aplicado os testes.

- Faça commits regulares. Eles são melhores do que um commit gigantesco. Gostaríamos de ver commits organizados e padronizados, então capriche neles!

### **Links úteis**:

https://github.com/BeeTech-global/bee-stylish/tree/master/commits
https://www.conventionalcommits.org/en/v1.0.0/

Qualquer problema por favor contate seu recruiter.

**BOA SORTE !** 😉😉😉
