export class persona{
    id: Number;
    nombre: String;
    imgperfil: String;
    subtitulo: String;
    acerca: String;
    usuarioid: Number;

    constructor(id: Number, nombre: String, imgperfil: String, subtitulo: String,acerca: String, userid: Number){
        this.id = id;
        this.nombre = nombre;
        this.imgperfil = imgperfil;
        this.subtitulo = subtitulo;
        this.acerca = acerca;
        this.usuarioid = userid;
    }
}