export class usuario{
    id: Number;
    nombreusuario: String;
    contraseña: String;
    email: String;
    telefono: String;
    
    constructor(id: Number, nombreusuario: String, contraseña: String, email: String, telefono: String){
        this.id = id;
        this.nombreusuario = nombreusuario;
        this.contraseña = contraseña;
        this.email = email;
        this.telefono = telefono;
    }
}