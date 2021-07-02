import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = nombre => {

    const body = document.querySelector('body');

    console.log('Creando h1...')

    const h1 = document.createElement('h1');
    h1.innerText = `El nombre es ${nombre}`;

    body.appendChild(h1);

    //img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // body.appendChild(img);


}
