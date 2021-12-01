# API PROFESSORES

Projeto de uma API Escolar para a finalização do módulo 4 da Resilia Educação.

## Características do projeto

- Padrão de projeto MVC;
- Arquitetura de software REST;
- Operações CRUD;

## Iniciando o projeto
Clone o repositório em sua máquina
```https
git clone https://github.com/nogueiraravel/Api-escola.modulo4.git
```

Instale os pacotes

```https
npm install
```

## Ferramentas necessárias para testar o projeto

* Node.js
[Node.js](https://nodejs.org/en/download/)

* Visual Studio Code
[Visual Studio Code](https://code.visualstudio.com/Download)

* Postman
[Postman](https://www.postman.com/downloads/)


## API Reference

### Get Professores
Retorna todos professores

```https
  GET localhost:3000/escola/professores
```

### Get Professor

```https
  GET localhost:3000/escola/professores/${ID}
```

| Parametro | Tipo     | Descrição                         |
| :-------- | :------- | :---------------------------------- |
| `ID`      | `number` | **Required**. ID do professor |


### Post Professor
Adiciona professor
```https
  POST localhost:3000/escola/professores
```


| Parametro | Tipo     | Descrição                         |
| :-------- | :------- | :---------------------------------- |
| `ID`      | `number` | **Required**. ID do professor |


### Put Professor

```https
  PUT localhost:3000/escola/professores/${ID}
```
Altera professor

| Parametro | Tipo     | Descrição                         |
| :-------- | :------- | :---------------------------------- |
| `ID`      | `number` | **Required**. ID e update professor |


### Delete Professor
Deleta Professor

```https
DELETE localhost:3000/escola/professores/${ID}
```

| Parametro | Tipo     | Descrição                         |
| :-------- | :------- | :---------------------------------- |
| `ID`      | `number` | **Required**. ID e deleta professor |
