function resetearFormulario() {
    //console.log('resetear formulario')
    document.getElementById("ftrabajador").value = "";
    document.getElementById("fsemana1").value = "";
    document.getElementById("fsemana2").value = "";
    document.getElementById("fmes").value = "";
    document.getElementById("faño").value = "";
    document.getElementById("fjueves").value = "";
    document.getElementById("fviernes").value = "";
    document.getElementById("fsabado").value = "";
    document.getElementById("flunes").value = "";
    document.getElementById("fmartes").value = "";
    document.getElementById("fmiercoles").value = "";
    document.getElementById("add-euro-1").value = "";
    document.getElementById("add-euro-2").value = "";
    document.getElementById("add-euro-3").value = "";
    document.getElementById("add-euro-4").value = "";
    document.getElementById("add-euro-5").value = "";
    document.getElementById("add-euro-6").value = "";
    document.getElementById("firpf").value = "";
    document.getElementById("ftotal").value = "";
    document.getElementById("fprerpararcuenta").value = "";
}

function capturaImagen() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    
    $objetivo = document.body;
    html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
      // Cuando se resuelva la promesa traerá el canvas
      // Crear un elemento <a>
      let enlace = document.createElement('a');
      let nombreArchivo = "parte_semanal_" + hoy.toLocaleDateString() + "_" + hoy.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) + ".png";
      enlace.download = nombreArchivo;
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
    });
}