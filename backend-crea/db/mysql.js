const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bvckskxmfjkoywvif4zm-mysql.services.clever-cloud.com',
  user     : 'uprcmftcdv5gff3k',
  password : 'bB23rhfHmvn0rFJl7KPb',
  database : 'bbvckskxmfjkoywvif4zm'
});

connection.connect((error) => {
  if(error){
    console.log(`Error en conexion a bases de datos: ${error}`)
    return;
  }else{
    console.log("Conexion extablecida con el servidor de MySQL")
  }
});

module.exports = {connection: connection}