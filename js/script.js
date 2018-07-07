let botones = document.querySelectorAll("btn");

botones[0].addEvenListener('click',function(e){
  fetch('http://localhost/proyectos/site/estilos.html').then(function(respuesta){
    respuesta.text().then(t =>
    document.querySelector('#divContenido').innerHTML =t);
  })
});

botones[0].addEvenListener('click',function(e){
  fetch('http://localhost/proyectos/site/procesos.html').then(function(respuesta){
    respuesta.text().then(t =>
    document.querySelector('#divContenido').innerHTML =t);
  })
});

botones[0].addEvenListener('click',function(e){
  fetch('http://localhost/proyectos/site/estilos.html').then(function(respuesta){
    respuesta.text().then(t =>
    document.querySelector('#divContenido').innerHTML =t);
  })
});

botones[0].addEvenListener('click',function(e){
  fetch('http://localhost/proyectos/site/estilos.html').then(function(respuesta){
    respuesta.text().then(t =>
    document.querySelector('#divContenido').innerHTML =t);
  })
});
