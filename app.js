const express = require('express');
require('dotenv').config();
var cors = require('cors');
const { socketController } = require('./sockets/controller');

        const app = express();
        const port = process.env.PORT || 3000;
        const index = proccess.env.INDEX || "clicker-game/";
        const server = require('http').createServer(app);
        const io = require('socket.io')(server)
        //Conexion a la base de datos
        //Middlewares
        //CORS
        app.use(cors());
        //Parseo y lectura del body
        app.use(express.json());
        //Directorio publico
        const socket = ()=>{
            io.on('connection',(socket)=>socketController(socket,io))
        }
        socket()
        app.use(index,express.static('public'))
        server.listen(port,()=>{
                 console.log(`SERVER ON: http://localhost:${port}/${index}`);
         });
