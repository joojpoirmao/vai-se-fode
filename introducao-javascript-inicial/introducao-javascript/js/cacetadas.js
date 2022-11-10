let Ppaciente = document.querySelector(".primeiro-paciente")
let Ppeso = Ppaciente.querySelector(".info-peso")
let Paltura = Ppaciente.querySelector(".info-altura")

let peso = Ppeso.textContent
let altura = Paltura.textContent

var Iimc = Ppaciente.querySelector(".info-imc") 

Iimc.textContent = imc(peso, altura)


console.log(imc(peso, altura))

function imc(a, b){
    return a / (b * b);
}

function cu(a, b, c){
    let a = document.querySelector(".tabela-pacientes")
    let b = Ppaciente.querySelector(".info-peso")
    let c = Ppaciente.querySelector(".info-altura")
}