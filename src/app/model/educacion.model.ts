export class educacion{
    id: Number;
    imglogo: String;
    nombreinstitucion: String;
    titulo: String;
    fechadesde: Date;
    fechahasta: Date;
    personaint: Number;

    constructor(id: Number, imglogo: String, nombreinstitucion: String, titulo: String, fechadesde: Date, fechahasta: Date, personaint: Number){
        this.id = id;
        this.imglogo = imglogo;
        this.nombreinstitucion = nombreinstitucion;
        this.titulo = titulo;
        this.fechadesde = fechadesde;
        this.fechahasta = fechahasta;
        this.personaint = personaint;
        }
}