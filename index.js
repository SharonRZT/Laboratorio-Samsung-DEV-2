
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    ValideInputs();
});

function ValideInputs(){
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //validar input nombre
    if(nombreValue === ''){
        setErrorFor(nombre, 'Rellene este campo');
    } else if (!isText(nombreValue)) {
        setErrorFor(nombre, 'Nombre inválido');
    }
    else{
        setSuccessFor(nombre)
    }

    //validando input email
    if(emailValue == ''){
        setErrorFor(email, 'Rellene este campo');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email inválido');
    }else{
        setSuccessFor(email);
    }


    //validando input password
    if(passwordValue === ''){
        setErrorFor(password, 'Rellene este campo');
    }else if(passwordValue.length < 8){
        setErrorFor(password, 'No debe tener más de 8 caracteres');
    }else{
        setSuccessFor(password);
    }

    
    //validando input pasword2
    if(password2Value === ''){
        setErrorFor(password2, 'Rellene este campo');
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Las contraseñas no coinciden');
    }else{
        setSuccessFor(password2);
    }

    //alert "Inscripcion Correcta"

    if ( nombreValue !== '' 
    && emailValue !== ''
    && passwordValue !== '' 
    && password2Value !== ''
    && isText(nombreValue) === true 
    && isEmail(emailValue) === true 
    && passwordValue.length >= 8 
    && password2Value === passwordValue) {
       setTimeout(() => { 
        alert('La inscripción ha sido correcta');
    }, 500);
    }


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const alertError = formControl.querySelector('small');
    formControl.className = 'form-control error';
    alertError.innerText = message;

    formControl.classList.add('error');
    formControl.classList.remove('success');
    }

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

    formControl.classList.add('success');
    formControl.classList.remove('error');
    }

function isText (nombre) {
    const ValidName = /^[A-Za-z\s]+$/
    return ValidName.test(nombre)
    }

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)}

}