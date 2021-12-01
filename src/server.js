const {app, porta} = require("./app");

app.listen(porta, () => {
  console.log(`Estamos no ar pela porta: ${porta} :)`);
})