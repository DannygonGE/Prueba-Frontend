// EFECTO MAQUINA DE ESCRIBIR //

var typed = new Typed ('.typed', {
    strings : [
        'Daniel'
    ],
    typeSpeed: 200,
    backSpeed: 0,
    loop: true,
    loopCount: false
})

var typed = new Typed ('.typed2', {
    strings : [
        'Daniel, Maria'
    ],
    typeSpeed: 150,
    backSpeed: 0,
    loop: true,
    loopCount: false
})

// VALIDACION //

const inputs = document.querySelectorAll('#resultado input');
const button = document.getElementById('button');
const formulario = document.getElementById('resultado');



// Expresiones //
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const ValidacionFormulario = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nameInput').classList.remove('nombre_red')
            } else {
                document.getElementById('nameInput').classList.add('nombre_red')
            }
        break;
        case "localizacion":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('loc').classList.remove('nombre_red');
            } else {
                document.getElementById('loc').classList.add('nombre_red');
            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', ValidacionFormulario);
    input.addEventListener('blur', ValidacionFormulario);
})



////////////////////////////////////////////////////

let nombre = document.getElementById('nameInput');

button.addEventListener('click', PredecirNombre)

function PredecirNombre() {
    let info = document.getElementById('nameInput').value

    let loc = document.getElementById('loc').value

    let array = info.split(',');

    console.log(array);
    console.log(loc);
}

const api = () => {
    fetch('https://api.agify.io?name='+name,{ method:'GET'})
    .then(function(response){return response.json();})
}




let output = document.getElementById('output')
document.getElementById('button').addEventListener('click',predictName);
let name = document.getElementById('nameInput');
document.getElementById('nameInput').addEventListener('change',checkName)
function predictName(){
         let name = nameInput.value;

         fetch('https://api.agify.io?name='+name,{ method:'GET'})
         .then(function(response){return response.json();})
         .then(data => {
             if (name != '') {
                output.innerHTML = "I guess &#129300 your age is " + data.age;
                output.style.display = 'block';
                 console.log(data.age);
             }else{
                output.style.display = 'none'; 
             }


         })
         .catch(err => console.log(err));
     }

 function checkName(){
     let name = nameInput.value;
     if (name == '') {
        output.style.display = 'none'; 
     }
}