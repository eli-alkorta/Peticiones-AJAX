'use strict'

// Petición AJAX para recibir y pintar datos de un .txt //

const button = document.querySelector('#cargar');

function getInfo(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'datos.txt', true);

  xhr.onload = function() {
    if(this.status === 200){
      document.querySelector('#listado').innerHTML = `<h3>${this.responseText}</h3>`;
    }
  }
  xhr.send();
}


button.addEventListener('click', getInfo);

// Petición AJAX para pintar datos de un JSON //

const empleado = document.querySelector('#boton1');

function employerInfo(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'empleado.json', true);

  xhr.onload = function() {
    if(this.status === 200){
      const person = JSON.parse(this.responseText);
      const html = `
      <ul>  
          <li>ID: ${person.id}</li>
          <li>Nombre: ${person.nombre}</li>
          <li>Empresa: ${person.empresa}</li>
          <li>Trabajo: ${person.trabajo}</li>
      </ul>`;
        document.querySelector('#empleado').innerHTML = html;     
    }
  }
  xhr.send();
}

empleado.addEventListener('click', employerInfo);

// 
const empleados = document.querySelector('#boton2');

function employersInfo(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'empleados.json', true);

  xhr.onload = function() {
    if(this.status === 200){
      const personal = JSON.parse(this.responseText);

      let html = '';
      personal.map(person => {
        html += `
      <ul>  
          <li>ID: ${person.id}</li>
          <li>Nombre: ${person.nombre}</li>
          <li>Empresa: ${person.empresa}</li>
          <li>Trabajo: ${person.trabajo}</li>
      </ul>`;
      document.querySelector('#empleados').innerHTML =  html;  
      })         
    }
  }
  xhr.send();
}

empleados.addEventListener('click', employersInfo);


