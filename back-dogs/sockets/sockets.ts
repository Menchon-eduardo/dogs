import { Socket } from 'socket.io';
import sockectIO from 'socket.io';
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';
import { emit } from 'process';

export const usuariosConectados = new UsuariosLista();

export const conectarCliente = (cliente:Socket,io:sockectIO.Server) => {

    const usuario = new Usuario (cliente.id);
    usuariosConectados.agregar(usuario);
   

}


//desconectar
export const desconectar =( cliente: Socket, io: sockectIO.Server) =>{

    cliente.on('disconnect', ()=>{
        console.log( "Cliente desconectado");

        usuariosConectados.borrarUsuario(cliente.id);

        io.emit('usuarios-activos', usuariosConectados.getLista());


    });
}

//escuchar mensajes
export const mensaje = (cliente: Socket, io: sockectIO.Server) =>{
    cliente.on('mensaje', (payload: {de: string, cuerpo:string})=>{
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);


    })
}
//configurar usuario
export const configurarUsuario =(cliente:Socket, io:sockectIO.Server)=>{
    cliente.on('configurar-usuario', (payload: {nombre:string}, callback)=>{
        
        usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        io.emit('usuarios-activos', usuariosConectados.getLista());
       
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });
    });
}
//obtener usuarios al usuario que lo está pidiendo
export const obtenerUsuarios =(cliente:Socket, io:sockectIO.Server)=>{
    cliente.on('obtener-usuarios', ()=>{
    io.to(cliente.id).emit('usuarios-activos', usuariosConectados.getLista());
    });
}

