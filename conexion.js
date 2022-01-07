// Obtenga el servicio mysql
const mysql = require('mysql');

// Agregue las credenciales para acceder a su base de datos
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'grupomind'
});

// conectarse a mysql
connection.connect(function(err) {
    // en caso de error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }else{
        console.log("LA conexion Funciona")
    }
});

// Realizar una consulta
$query = 'SELECT * from usuarios';

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Consulta ejecutada con éxito:", rows);
});

// Cerrar la conexión
connection.end(function(){
    // La conexión se ha cerrado
});
