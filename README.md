# RestApi

Requisitos necessários
* Instalação do nodejs de preferência última versão
* Instalação do Postgresql, link: https://www.postgresql.org/download/

Procedimentos para rodar backend

1. Realizar instalações todas as dependências: 
```
npm install
```
2: Peço que realize alteração do arquivo config/database.js

3: Realizar migrações do banco :
```
 Sequelize db:migrate
```
4: Inicializar comando:
```
npm start
```