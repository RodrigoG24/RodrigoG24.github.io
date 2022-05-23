var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function(){ // funcion anonima, sin nombre, estas funciones son muy utilizadas con los eventos y nos ayuda a reducir codigo y a tener mejor entendimiento del programa o de lo que el evento esta realizando
    event.preventDefault(); // Prevenir que la pagina recargue (de f5 cuando apretamos el boton)
    var form = document.querySelector("#form-adicionar");
    
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    var tabla = document.querySelector("#tabla-pacientes"); // Le asigno al tbody un nuevo elemento tr

    pacienteTr = document.createElement("tr"); // crear etiqueta tr
    nombreTd = document.createElement("td"); // crear etiqueta td
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");
    
    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso,altura);

    pacienteTr.appendChild(nombreTd); // Le asigno un hijo, le asigno ese elemento para que forme parte de el, pacientTr adopta a nombreTd
    pacienteTr.appendChild(pesoTd); 
    pacienteTr.appendChild(alturaTd); 
    pacienteTr.appendChild(gorduraTd); 
    pacienteTr.appendChild(imcTd);
    console.log(pacienteTr);

    tabla.appendChild(pacienteTr);  
});
