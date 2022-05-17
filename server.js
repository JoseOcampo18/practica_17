const express = require('express'); //Importamos la dependencia
var app = express(); //Declaramos una App de Express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public')); //Esta linea espicifica como se llama el directorio virtual, y a donde sera mapeado

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');

//primera ruta (está al nivel de la raíz /)
app.get('/', function (req, res){ 
    res.send(`<DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1> Hola Mundo </h1></html>`);
});

//segunda ruta 
app.get('/person/:id', function (req, res) {
    res.render('person', {ID: req.params.id, message: req.query.message, times: req.query.times});
});

//ruta student
app.get('/student', function (req, res) {
    res.render('index');
})

//ruta student para POST
app.post('/student', (req, res) => {
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
})

//Se agrega como parametro el callback, para que se ejecute ANTES que el route handeler
app.post('/personjson', express.json({type: '*/*'}, (req, res) => {
    console.log('El objeto contiene:' , (req.body));
    console.log('Nombre:' , req.body.firstname);
    console.log('Apellido: ', req.body.lastname);
}));

app.listen(port); //Levantar el server y ponerlo a la escucha

const { MongoClient, ServerApiVersion } = require("mongodb"); // Iinyectando dependencias de mongo
const uri = //Incluimos el enlace de conexion
  "mongodb+srv://joseocxmpo:Jose2001@cluster0.yuggb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
}); //generamos el cliente
client
  .connect() //Nos conectamos a la base de datos
  .then(() => {
    console.log("Connected to the database "); // si la conexion es valida mandamos el mensaje
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`); // Si no se puede conectar mandamos el error
  });