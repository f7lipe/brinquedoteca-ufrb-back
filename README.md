# <p align = "center"> API - Brinquedoteca UFRB </p>


##  :clipboard: Descrição

Interface para gerenciamento administrativo da brinquedoteca da UFRB. 

***

## :computer:	Tecnologias e conceitos 

- Node.js
- Express
- JavaScript 
- SQL

***

## :rocket: Rotas
### :baby: Criança 
```yml
POST /children
    - Rota para registar uma nova criança
    - headers: {Bareer token}
    - body:{
          "name": "Fulaninho de Tal",
          "cpf": "xxxxxxxxxxx", 
          "birthDate": "15-AUGUST-1999",
          "address": "Rua dos desenvolvedores, Nº 3",
          "obs": "Quebrou o brinquedo do coleguinha",
          "photo_url": "",
          "guardians": [
                        {
                         "name": "Fulana de Tal",
                          "cpf": "xxxxxxxxxxx", 
                          "birthDate": "5-AUGUST-1990",
                          "address": "Rua dos desenvolvedores, ap 3",
                          "photo_url": "",
                          "email": "fulana@detal.com",
                          "phone": "xxxxxxxxxx"
                        },
                        {
                         "name": "Fulano de Tal",
                         "cpf": "xxxxxxxxxxx", 
                         "birthDate": "25-AUGUST-1991",
                          "address": "Rua das desenvolvedoras, ap 2",
                          "photo_url": "",
                          "email": "fulano@detal.com",
                          "phone": "xxxxxxxxxx"
                          }
                        ]
           }

```

```yml 
GET /children/:id
    - Rota para obter uma criança através do id
    - headers: {Bareer token}
    - body: {}
```
    
```yml 
GET /children
    - Rota para obter todas as crianças 
    - headers: {Bareer token}
    - body: { }
```

    
```yml 
PUT /children/:id
    - Rota para atualizar uma criança através do id 
    - headers: {Bareer token}
    - body: {
           "name": "Fulaninho de Tal",
           "cpf": "xxxxxxxxxxx", 
           "birthDate": "15-AUGUST-2019",
           "address": "Rua dos desenvolvedores, Nº 3",
           "photo_url": ""
    }
```

```yml 
DELETE /children/:id
    - Rota para deletar uma criança através do id 
    - headers: {Bareer token}
    - body: { }
```



***

## 🏁 Rodando a aplicação

Esse projeto foi criado com o Node.js e outras tecnologias. Para rodar a aplicação. Se você não tiver o Node instalado, faça através de

```
https://nodejs.org/en/download/
```

⤵️ Em seguinda, clone esse repositório na sua máquina:

```
git clone https://github.com/f7lipe/brinquedoteca-ufrb-back/
```

⚙️ Crie uma variável de ambiente (.env) na raíz do seu projeto com as variáveis a seguir. 
```yml
   PORT = 5000
   DATABASE_URL = postgres://postgres:password6@database_url/database_name
   MODE = PROD
``` 


💻 Abra um terminal na pasta do projeto e rode o seguinte comando:

```
npm install
```

🏁 Finalizado o processo, rode

```
npm run dev
```
