function resetearFormulario() {
    //console.log('resetear formulario')
    document.getElementById("fhoras").value = "";
    document.getElementById("ffecha").value = "";
    document.getElementById("fempresa").value = "";
    document.getElementById("fobra").value = "";
    document.getElementById("fdescripcion").value = "";
    document.getElementById("fmaterial").value = "";
    clearArea(); //llama a la función clearArea de index.js para limpiar el cuadro de firma
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
      let nombreArchivo = "parte_" + hoy.toLocaleDateString() + "_" + hoy.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }) + ".png";
      enlace.download = nombreArchivo;
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
    });
}
