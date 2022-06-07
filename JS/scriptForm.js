window.onload = function () {
    let error='';
    let nombre = document.getElementById('nombre');
    let errorNombre = document.getElementById('errorNombre');
    nombre.onfocus=function () {
        nombre.style.borderColor= "#ced4da"; 
        errorNombre.style.display='none';
    }
    let apellido = document.getElementById('apellido');
    let errorApellido = document.getElementById('errorApellido');
    apellido.onfocus=function () {
       apellido.style.borderColor= "#ced4da"; 
       errorApellido.style.display='none';
    }    
    function validateLetterOb(letter,errorLetter,e){
        expr=/^([a-zA-Z])*$/;
        if(letter.value.length >= 3){
            if (!expr.test(letter.value)) {
                letter.style.borderColor= "red";
                errorLetter.style.display='block';
                errorLetter.innerHTML="Caracteres Invalidos";
                error = true;
            }
        }else{
            letter.style.borderColor= "red";
            errorLetter.style.display='block';
            errorLetter.innerHTML='Debe contener al menos 3 letras';
            error = true;
        }
    }
    let correo = document.getElementById('correo');
    let errorCorreo = document.getElementById('errorCorreo');
    correo.onfocus=function () {
        correo.style.borderColor= "#ced4da"; 
        errorCorreo.style.display='none';
    }
    function validateEmail(e) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(correo.value)) {
            correo.style.borderColor= "red";
            errorCorreo.style.display='block';
            errorCorreo.innerHTML='Debe ser una direccion de correo valida';
            error = true;
        }
    }
    let edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');
    edad.onfocus=function () {
        edad.style.borderColor= "#ced4da"; 
        errorEdad.style.display='none';
    }
    function validateEdad(e) {
        expr = /^[0-9]{1,2}$/;
        if (!expr.test(edad.value)) {
            edad.style.borderColor= "red";
            errorEdad.style.display='block';
            errorEdad.innerHTML='La edad debe ser un número entre 0 y 100';
            error = true;            
        }
    }
    let pais = document.getElementById('pais');
    let errorPais = document.getElementById('errorPais');
    pais.onfocus=function () {
        pais.style.borderColor= "#ced4da"; 
        errorPais.style.display='none';
    } 
    function validatePais(e) {

        if (pais.value == 0) {
            pais.style.borderColor= "red";
            errorPais.style.display='block';
            errorPais.innerHTML='Debe seleccionar un pais';
            error = true;   
        }
        
    }
    let sexo = document.querySelectorAll('[name="sexo[]"]');
    let errorSexo = document.getElementById('errorSexo');
    let CantCheck=0;
    function validateSexo(e) {

        for (let i = 0; i < sexo.length; i++) {
            if (!sexo[i].checked){
                CantCheck+=1;
            };
        }
        if (CantCheck == sexo.length) {
            errorSexo.style.display='block';
            errorSexo.innerHTML='Debe seleccionar un sexo';
            error = true;
        }else{
            errorSexo.style.display='none';
        }
    }
    let tema = document.querySelectorAll('[name="interes[]"]');
    let errorTema = document.getElementById('errorTema');
    function validateTema(e) {    
        let cantCheckTema = 0;
        for (let i = 0; i < tema.length; i++) {
            if (!tema[i].checked){
                cantCheckTema+=1;
            };
        }
        if (cantCheckTema == tema.length) {
            errorTema.style.display='block';
            errorTema.innerHTML='Seleccionar al menos un Tema de Interes'
            error = true;
        }else{
            errorTema.style.display='none';
        }
    }

    var form = document.getElementById("formulario");
    form.addEventListener('submit', function (evento) {
        error=false;
        evento.preventDefault();
        validateLetterOb(nombre,errorNombre);
        validateLetterOb(apellido,errorApellido);
        validateEmail();
        validateEdad();
        validatePais();
        validateSexo();
        validateTema();
        if(!error) modal.style.display = "block";
    })    
    

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function modal() {

  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}