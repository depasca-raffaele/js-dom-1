let btnAccensione = document.querySelector('#onOffBtn'); //collego il bottone del DOM a js
let lampContainer = document.querySelector('.lamp-container');
let imgList = ['/img/white_lamp.png', '/img/yellow_lamp.png']
//funziona da utilizzare al click
function onClickEventHandler() {
    let imgHtml;
    if(btnAccensione.textContent.includes('Accendi')){
         imgHtml = `<img class="lamp-img" src="${imgList[1]}" alt="immagine lampadina">`;
         btnAccensione.textContent = 'Spegni';
    } else {
         imgHtml = `<img class="lamp-img" src="${imgList[0]}" alt="immagine lampadina">`;
         btnAccensione.textContent = 'Accendi';
    }
   
    lampContainer.innerHTML = imgHtml;
}
//event listener
btnAccensione.addEventListener('click', onClickEventHandler);

