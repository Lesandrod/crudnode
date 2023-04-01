require('dotenv').config()
const mysql = require('mysql2')
const conexion = mysql.createConnection(process.env.DATABASE_URL)

conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');

  });module.exports = conexion;

