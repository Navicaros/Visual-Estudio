eventListeners()

function eventListeners(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validar);
}

function validar(e) {
    e.preventDefault();

    const usuario = String(document.querySelector('#usuario').value); 
    const contraseña = String(document.querySelector('#contraseña').value); 

    if (usuario == "1030531250" & contraseña =="lolo") {
        swal.fire({
            icon: 'success',
            title: 'Login exitoso', 
        });    
    } else {
        swal.fire({
            icon: 'error',
            title: 'Usuario o contraseña incorrecta', 
        });       
    }


}