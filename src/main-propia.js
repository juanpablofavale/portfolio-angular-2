let btnCancel = document.getElementById("cancel")
let btnOk = document.getElementById("ok")
let btnDelete = document.getElementsByClassName("eliminar")
let btnEdit = document.getElementById("editar")
let btnEditImg = document.getElementById("edita-img")
let btnAdd = document.getElementById("agregar")
let tagMain = document.getElementById("main")
let frmInicio = document.getElementById("inicia")

function visible() {
    btnCancel.classList.toggle("visible")
    btnOk.classList.toggle("visible")
    btnEdit.classList.toggle("visible")
    for (i of btnDelete) {
        i.classList.toggle("visible")
    }
    btnAdd.classList.toggle("visible")
    btnEditImg.classList.toggle("visible")
}

function editar() {
    console.log("editando")
    visible()
    console.log(tagMain.innerHTML)
    tagMain.setAttribute("contenteditable", "true")
}

function eliminar() {
    if (confirm("Seguro que desea eliminar?")){
        console.log("eliminando")
    }
}

function ok() {
    if (confirm("Seguro que desea confirmar los cambios y guardar?")) {
        visible()
        tagMain.removeAttribute("contenteditable")
    }
}

function cancel() {
    if (confirm("Seguro que desea cancelar los cambios?")) {
        visible()
        tagMain.removeAttribute("contenteditable")
    }
}

function agregar() {
    console.log("agregar")
}

function iniciar(){
    btnEdit.classList.toggle("visible")
}