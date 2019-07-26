const btnCifrar = document.getElementById('btn-cifrar');
const btnDescifrar = document.getElementById('btn-descifrar');
btnCifrar.onclick = ()=> seleccionador(true);
btnDescifrar.onclick = ()=> seleccionador(false);

const seleccionador = (encript) => {
  if (encript) {
    let mensaje = (document.getElementById("mensaje").value).toUpperCase();
    let offset = parseInt(document.getElementById("offset").value);
    mensaje = cipher.encode(offset, mensaje);
    const paraimprimirmensaje = document.getElementById("imprimir"); 
    paraimprimirmensaje.innerHTML = mensaje; 
    } else {
    let mensaje = (document.getElementById("mensaje").value).toUpperCase();
    let offset = parseInt(document.getElementById("offset").value);
    mensaje = cipher.decode(offset, mensaje);
    const paraimprimirmensaje = document.getElementById("imprimir"); 
    paraimprimirmensaje.innerHTML = mensaje;  
    }
};