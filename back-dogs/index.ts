import Server from './classes/server';
import { SERVER_PORT } from './global/enviroment';
import { router } from './routes/router'
import bodyparser from 'body-parser';
import { builtinModules } from 'module';
import cors from 'cors';


const server = Server.instance;
//Body-parser
server.app.use( bodyparser.urlencoded({extended: true}));
server.app.use (bodyparser.json());

//CORS
server.app.use( cors({origin:true, credentials:true}));

//Configuración de las rutas
server.app.use('/', router);

server.start (()=>{
    console.log(`Servidor corriendo en el puerto ${ SERVER_PORT}`);
});