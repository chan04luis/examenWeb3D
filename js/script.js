var personas = [
    {id:1, name:'Luis Valle',edad:19},
    {id:2, name:'Adriana May',edad:15},
    {id:3, name:'Moises Guillen',edad:20},
    {id:4, name:'Joaquin Salas',edad:12},
    {id:5, name:'Amado Chan',edad:21},
    {id:6, name:'Jennifer Beatriz',edad:17}
]

var numeros = []

function filtrarMayoresDeEdad(){
    var html = "<ul>";
    var filtro = personas.filter((i) => i.edad > parseInt($("#edad").val()));
    filtro.forEach(i=>{
        html += '<li>Nombre: '+i.name+', edad: '+i.edad+'</li>';
    });
    html += '</ul>';
    $("#ejercicio1").html(html);
}

function agregarNumeros(){
    var num = parseInt($("#numeros").val());
    numeros.push({num:num, cuadrado: (num*num)});
    var filtro = numeros;
    iterarNumeros(filtro);
    $("#numeros").val('');
}
function eliminarNumeros(obj){
    numeros = numeros.filter((i)=>i.num!=obj);
    iterarNumeros(numeros);
}
function iterarNumeros(filtro){
    var html = "<ul>";
    filtro.forEach(i=>{
        html += '<li>Numero: '+i.num+', Cuadrado: '+i.cuadrado+' <button type="button" onclick="eliminarNumeros('+i.num+')">Delete</button></li>';
    });
    html += '</ul>';
    $("#ejercicio2").html(html);
}

function transformarYFiltrar(){
    var filtro = numeros.filter((i) => i.cuadrado > parseInt($("#cuadrado").val()));
    iterarNumeros(filtro);
}

var members = [];

async function postData(url = '', data = {}) {
    const response = await fetch(url);
    return response.json(); 
  }
  postData('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', { answer: 42 })
  .then(data => {
    var html = "<ul>";
    members = data.members;
    members.forEach(i=>{
        html += '<li>Nombre: '+i.name+', edad: '+i.age+'</li>';
    });
    html += '</ul>';
    $("#ejercicio3").html(html);
  }).catch(err => console.log('Solicitud fallida', err));

function ordenarPorNombre(){
    var html = "<ul>";
    members.sort(generaComparador('name')).forEach(i=>{
        html += '<li>Nombre: '+i.name+', edad: '+i.age+'</li>';
    });
    html += '</ul>';
    $("#ejercicio3").html(html);
}

function compare(attr, obj1, obj2) {
    return obj1[attr].localeCompare(obj2[attr]);
 }
 
 function generaComparador(attr) {
   return function (a,b) {
      return compare(attr,a,b);
   }
 }