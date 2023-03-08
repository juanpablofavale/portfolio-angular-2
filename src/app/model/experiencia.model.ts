export class experiencia{
    id: Number;
    imgLogo: String;
    nombreempresa: String;
    puesto: String;
    fechadesde: Date;
    fechahasta: Date;
    personaid: Number;

    constructor(id: Number, imglogo: String, nombreempresa: String, puesto: String, fechadesde: Date, fechahasta: Date, personaid: Number){
        this.id = id;
        this.imgLogo = imglogo;
        this.nombreempresa = nombreempresa;
        this.puesto = puesto;
        this.fechadesde = fechadesde;
        this.fechahasta = fechahasta;
        this.personaid = personaid;
        }
}