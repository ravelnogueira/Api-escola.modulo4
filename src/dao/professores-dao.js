module.exports = class Professores {
  constructor(bd) {
    this.bd = bd;
  }

  /* GET ALL */

  ProfessoreGet() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM PROFESSORES";
      this.bd.all(query, (error, response) => {
        if(error) 
          reject (`Erro ao acessar o banco de dados`, error);
        else
          resolve (response);
      })
    })
  }

  /* GET ID */

  ProfessorGetID(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM PROFESSORES WHERE ID = (?)";
      this.bd.all(query, id, (error, response) => {
        if(error) 
          reject (`Erro ao acessar o banco de dados`, error);
        else
          resolve (response);
      })
    })
  }

  /* POST */

  ProfessorPost(infos) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO PROFESSORES (NOME, GRADUACAO, EXPEDIENTE, ENDERECO, EMAIL, TELEFONE) VALUES (?, ?, ?, ?, ?, ?)";
      const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5]];
      this.bd.run(query, parametros, (error, response) => {
        if(error) 
          reject (`Erro ao adicionar o professor`, error);
        else
          resolve ("Professor adicionado com sucesso");
      })
    })
  }

  /* DELETE */

  ProfessorDelete(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM PROFESSORES WHERE ID = (?)";
      this.bd.all(query, id, (error, response) => {
        if(error) 
          reject (`Erro ao deletar professor`, error);
        else
          resolve ("Professor deletado");
      })
    })
  }

  /* PUT */

  ProfessorPut(infos, id) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE PROFESSORES SET NOME = (?), GRADUACAO = (?), EXPEDIENTE = (?), ENDERECO = (?), EMAIL = (?), TELEFONE = (?) WHERE ID = (?)";
      const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], id];
      this.bd.run(query, parametros, (error, response) => {
        if(error) 
          reject (`Erro ao alterar o professor`, error);
        else
          resolve ("Professor alterado com sucesso");
      })
    })
  }
}