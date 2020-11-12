const express = require("express");
const app = express();

app.use("/api", require("./routes/usuarios"))

app.get("/",function(req,res) {
  res.send("mi primer servidor")
})

app.get("/chat",function(req,res) {
  res.send("aqui te aclaramos tus dudas")
})



app.listen(8080,function(){
  console.log("Servidor escuchando en el puerto 8080")
})