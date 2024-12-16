window.onload = (event) => {
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

    /* Arreglos */
    //Clinicas
    const Clinicas=[ClinicaDefault,Clinica1,Clinica2,Clinica3]

    //Servicios
    const Servicios=[Servicio1,Servicio2,Servicio3]

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
    Servicios.forEach(element => {
        let option = document.createElement("option")
        option.textContent = element.nombre + " - $" + element.precio
        option.value=element.precio
        cbServicios1.appendChild(option)
    });

    let cbServicios2 = document.getElementById("cbServicios2")
    Servicios.forEach(element => {
        let option = document.createElement("option")
        option.textContent = element.nombre + " - $" + element.precio
        option.value=element.precio
        cbServicios2.appendChild(option)
    });

    let cbServicios3 = document.getElementById("cbServicios3")
    Servicios.forEach(element => {
        let option = document.createElement("option")
        option.textContent = element.nombre + " - $" + element.precio
        option.value=element.precio
        cbServicios3.appendChild(option)
    });

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
        console.log(firstServiceValue + " - " + SecondServiceValue + " - " +
             ThirdServiceValue)
        let sum = parseFloat(firstServiceValue) + parseFloat(SecondServiceValue)  + 
        parseFloat(ThirdServiceValue)
        
        return sum.toFixed(2)
    }
};

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
};
