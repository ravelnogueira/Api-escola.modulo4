const ProfessoresDao = require("../dao/professores-dao");

module.exports = (app, bd) => {
  const DaoProfessores = new ProfessoresDao(bd);

  /* GET ALL */

  app.get('/escola/professores', async (req, res) => {
    try {
      const respostaProfessoreGet = await DaoProfessores.ProfessoreGet();
      res.json({resultado: respostaProfessoreGet});

    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })

   /* GET ID */

  app.get('/escola/professores/:ID', async (req, res) => {
    try {
      const id = req.params.ID
      if(parseInt(id)) {
        const respostaProfessorGetID = await 
        DaoProfessores.ProfessorGetID(id);
        if(respostaProfessorGetID) {
          res.json({resultado: respostaProfessorGetID});
        }
        else {
          throw new Error("Nenhum usuario encontrado");
        }
      }
      else {
        throw new Error("Nenhum usuario encontrado");
      }
      
    }
    catch(error){
      res.status(500).json({mensagem: error.mensagem});
    }
  })

  /* POST */

  app.post('/escola/professores', async (req, res) => {
    try {
      const body = req.body;
      const infos = [body.NOME, body.GRADUACAO, body.EXPEDIENTE, body.ENDERECO, body.EMAIL, body.TELEFONE];
      const respostaProfessorPost = await DaoProfessores.ProfessorPost(infos);
      res.json({resultado: respostaProfessorPost});
    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })

  /*PUT */

  app.put('/escola/professores/:ID', async (req, res) => {
    try {
      const id = req.params.ID
      const body = req.body;
      const infos = [body.NOME, body.GRADUACAO, body.EXPEDIENTE, body.ENDERECO, body.EMAIL, body.TELEFONE];
      const respostaProfessorPut = await DaoProfessores.ProfessorPut(infos, id);
      res.json({resultado: respostaProfessorPut});
    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })
  
  /*DELETE*/

  app.delete('/escola/professores/:ID', async (req, res) => {
    try {
      const id = req.params.ID
      const respostaProfessorDelete = await DaoProfessores.ProfessorDelete(id)
      res.json({resultado: respostaProfessorDelete});
    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })


}