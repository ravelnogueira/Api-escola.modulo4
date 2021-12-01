const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./database.db");

const SchemaProfessores = `
CREATE TABLE IF NOT EXISTS "PROFESSORES" (
  "ID" INTEGER PRIMARY KEY,
  "NOME" VARCHAR(255),
  "GRADUACAO" VARCHAR(100),
  "EXPEDIENTE INTEGER(50),
  "ENDERECO" VARCHAR(255),
  "EMAIL" VARCHAR(255),
  "TELEFONE" VARCHAR(25)
)
`

const InsertProfessores = `
INSERT INTO PROFESSORES (ID, NOME, GRADUACAO, EXPEDIENTE,ENDERECO, EMAIL, TELEFONE)
VALUES
(1, 'Rafael Aquino, 'Node', 24, 'Rua da mata 25', 'node@gmail.com', '(38)99999-8578'),
(2, 'Alesandro Nunes', 'DadosSQL', 12, 'Rua costa e silva 250', 'dados@outlook.com', '(13)96439-0944'),
(3, 'Roberto Carlos', 'Front-end"', 06, 'Rodovia W.luiz 2563', 'front@hotmail.com','(24)99648-5140')
`

function CriaTabela() {
  db.run(SchemaProfessores, (error) => {
       if (error) console.log("Erro ao criar tabela de professores", error);
    });
}

function InsertTabela() {
    db.run(InsertProfessores, (error) => {
       if (error) console.log("Erro ao popular tabela de professores", error);
    });
}

db.serialize(() => {
  CriaTabela();
  InsertTabela();
})