
const conexion = require('../database/db');

exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const carrera = req.body.carrera;
    conexion.query('INSERT INTO registros SET ?',{nombre:nombre, carrera:carrera}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
              
            res.redirect('/');         
        }
});
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.nombre;
    const rol = req.body.carrera;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{user:nombre, rol:carrera}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};