
/* Objetos literales */

//Clinicas
const ClinicaDefault ={
    id:0,
    nombre:"Seleccione una Clínica...",
    urlDireccion:""
}

const Clinica1 = {
    id : 1,
    nombre:"Pethouse Caprove",
    urlDireccion:"https://maps.app.goo.gl/GTi9YhjZpfxsiBhs8"
}

const Clinica2 = {
    id:2,
    nombre:"Veterinaria Panda",
    urlDireccion:"https://maps.app.goo.gl/hbNtE7i7wExRxbt47"
}

const Clinica3={
    id:3,
    nombre:"Veterinaria ANIMED",
    urlDireccion: "https://maps.app.goo.gl/6SDsiu4TTiezH7ov7"
}

//Servicios
const Servicio1 ={
    id:1,
    nombre:"Baño de Mascota",
    precio:19.99
}

const Servicio2 = {
    id:2,
    nombre:"Desparacitación",
    precio:56.99
}

const Servicio3 = {
    id:3,
    nombre:"Vacunación",
    precio:105.69
}

//Reservaciones
const Reservacion1 ={
    citaID:1,
    nombreMascota:"Shadow",
    nombreClinica:"Pethouse Caprove",
    urlClinica:"https://maps.app.goo.gl/juX2atSGG9qgB6Tv5",
    fecha:"01/01/2025",
    hora:"11:30"
}
const Reservacion2 ={
    citaID:2,
    nombreMascota:"Magna",
    nombreClinica:"Veterinaria Panda",
    urlClinica:"https://maps.app.goo.gl/juX2atSGG9qgB6Tv5",
    fecha:"18/12/2024",
    hora:"09:00"
}
const Reservacion3 ={
    citaID:3,
    nombreMascota:"Totti",
    nombreClinica:"Veterinaria ANIMED",
    urlClinica:"https://maps.app.goo.gl/juX2atSGG9qgB6Tv5",
    fecha:"02/03/2025",
    hora:"15:30"
}

/* Arreglos */
//Clinicas
const Clinicas=[ClinicaDefault,Clinica1,Clinica2,Clinica3]

//Servicios
const Servicios=[Servicio1,Servicio2,Servicio3]

//Reservaciones
const Reservaciones=[Reservacion1,Reservacion2,Reservacion3]

/* Variables globales */
let totalAmount = 0.00

/*logica inicial*/
//Llenar dropdown de Clinicas disponibles
let cbClinicas = document.getElementById("cbClinicas")
Clinicas.forEach(element => {
    let option = document.createElement("option")
    option.textContent = element.nombre
    option.value = element.id
    cbClinicas.appendChild(option)
});

//Llenar dropdown de Servicios Disponibles
let cbServicios1 = document.getElementById("cbServicios1")
for(let i=0; i < Servicios.length; i++){
    let option = document.createElement("option")
    option.textContent = Servicios[i].nombre + " - $" + Servicios[i].precio
    option.value=Servicios[i].precio
    cbServicios1.appendChild(option)   
}

let cbServicios2 = document.getElementById("cbServicios2")
for(let i=0; i<Servicios.length; i++){
    let option = document.createElement("option")
    option.textContent = Servicios[i].nombre + " - $" + Servicios[i].precio
    option.value=Servicios[i].precio
    cbServicios2.appendChild(option)   
}

let cbServicios3 = document.getElementById("cbServicios3")
for(let i=0; i<Servicios.length; i++){
    let option = document.createElement("option")
    option.textContent = Servicios[i].nombre + " - $" + Servicios[i].precio
    option.value=Servicios[i].precio
    cbServicios3.appendChild(option)   
}

//Ocultar dropdown de servicios extras opcionales
let service2 = document.getElementById("servicio2")
service2.style.display="none"

let service3 = document.getElementById("servicio3")
service3.style.display ="none"

//Inicializar monto total a ceros
let lblTotalAmount = document.getElementById("totalAmount")
lblTotalAmount.textContent = parseFloat(totalAmount).toFixed(2)

//calcular costo total de servicios
cbServicios1.addEventListener("change", (event) =>{
    lblTotalAmount.textContent = calcularMontoTotal(cbServicios1.value,cbServicios2.value,cbServicios3.value)
})

cbServicios2.addEventListener("change", (event) =>{
    lblTotalAmount.textContent = calcularMontoTotal(cbServicios1.value,cbServicios2.value,cbServicios3.value)
})

cbServicios3.addEventListener("change", (event) =>{
    lblTotalAmount.textContent = calcularMontoTotal(cbServicios1.value,cbServicios2.value,cbServicios3.value)
})

function calcularMontoTotal(firstServiceValue, SecondServiceValue, ThirdServiceValue){
    
    let sum = parseFloat(firstServiceValue) + parseFloat(SecondServiceValue)  + 
    parseFloat(ThirdServiceValue)
    
    return sum.toFixed(2)
}

//mostrar dropdowns de servicios extras
function addService(){
    let service2 = document.getElementById("servicio2")
    let service3 = document.getElementById("servicio3")

    if(service2.style.display ==="none"){
        service2.style.display = "block"
    }
    else if(service3.style.display==="none"){
        service3.style.display = "block"
    }

    let btnServices = document.getElementById("btnService")
    btnServices.disabled = service3.style.display === "none" ? false : true
}

//Llenar lista de Reservaciones
let lsAppointments = document.getElementById("tableAppointments")
lsAppointments.innerHTML=""
let tableData=""
for(let i=0; i < Reservaciones.length; i++){
    tableData+="<tr>"
    tableData+="<td>"+Reservaciones[i].citaID+"</td>"+"<td>"+Reservaciones[i].nombreMascota+
    "</td>"+"<td><a href=\"" + Reservaciones[i].urlClinica + "\">"
    +Reservaciones[i].nombreClinica+"</a></td>"+
    "<td>"+Reservaciones[i].fecha+" "+Reservaciones[i].hora+"</td>"
    tableData+="</tr>"
}
lsAppointments.innerHTML=tableData



