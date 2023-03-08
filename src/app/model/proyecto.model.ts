export class proyecto{
    id: Number;
    nombre: String;
    imagen: String;
    descripcion: String;
    enlace: String;
    personaint: Number;

    constructor(id: Number, nombre: String, imagen: String, descripcion: String, enlace: String, personaint: Number){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.personaint = personaint;
    }
}