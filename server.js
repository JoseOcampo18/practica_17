const express = require('express'); //Importamos la dependencia
var app = express(); //Declaramos una App de Express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public')); //Esta linea espicifica como se llama el directorio virtual, y a donde sera mapeado

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');

app.listen(port); //Levantar el server y ponerlo a la escucha

const { MongoClient, ServerApiVersion } = require("mongodb"); // Inyecta dependencias de mongo
const uri = //Enlace de conexion
  "mongodb+srv://joseocxmpo:Jose2001@cluster0.yuggb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
}); //Cliente
client
  .connect() //Conexión a la base de datos
  .then(() => {
    console.log("Connected to the database "); //Validación 
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`); //Mensaje de error 
  });