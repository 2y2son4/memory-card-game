"use strict";const grid=document.querySelector(".main__grid"),resultDisplay=document.querySelector(".result"),clueDisplay=document.querySelector(".clue"),resetBtn=document.querySelector(".reset"),cardImgBack="./assets/images/back.png";let cardsChosen=[],cardsChosenId=[],cardsWon=[];function resetGame(){location.reload()}document.addEventListener("DOMContentLoaded",()=>{const s=[{name:"01",img:"./assets/images/01.jpg",imgBW:"./assets/images/bw/01.jpg"},{name:"02",img:"./assets/images/02.jpg",imgBW:"./assets/images/bw/02.jpg"},{name:"03",img:"./assets/images/03.jpg",imgBW:"./assets/images/bw/03.jpg"},{name:"04",img:"./assets/images/04.jpg",imgBW:"./assets/images/bw/04.jpg"},{name:"05",img:"./assets/images/05.jpg",imgBW:"./assets/images/bw/05.jpg"},{name:"06",img:"./assets/images/06.jpg",imgBW:"./assets/images/bw/06.jpg"},{name:"07",img:"./assets/images/07.jpg",imgBW:"./assets/images/bw/07.jpg"},{name:"08",img:"./assets/images/08.jpg",imgBW:"./assets/images/bw/08.jpg"},{name:"09",img:"./assets/images/09.jpg",imgBW:"./assets/images/bw/09.jpg"},{name:"10",img:"./assets/images/10.jpg",imgBW:"./assets/images/bw/10.jpg"},{name:"11",img:"./assets/images/11.jpg",imgBW:"./assets/images/bw/11.jpg"},{name:"12",img:"./assets/images/12.jpg",imgBW:"./assets/images/bw/12.jpg"},{name:"01",img:"./assets/images/01.jpg",imgBW:"./assets/images/bw/01.jpg"},{name:"02",img:"./assets/images/02.jpg",imgBW:"./assets/images/bw/02.jpg"},{name:"03",img:"./assets/images/03.jpg",imgBW:"./assets/images/bw/03.jpg"},{name:"04",img:"./assets/images/04.jpg",imgBW:"./assets/images/bw/04.jpg"},{name:"05",img:"./assets/images/05.jpg",imgBW:"./assets/images/bw/05.jpg"},{name:"06",img:"./assets/images/06.jpg",imgBW:"./assets/images/bw/06.jpg"},{name:"07",img:"./assets/images/07.jpg",imgBW:"./assets/images/bw/07.jpg"},{name:"08",img:"./assets/images/08.jpg",imgBW:"./assets/images/bw/08.jpg"},{name:"09",img:"./assets/images/09.jpg",imgBW:"./assets/images/bw/09.jpg"},{name:"10",img:"./assets/images/10.jpg",imgBW:"./assets/images/bw/10.jpg"},{name:"11",img:"./assets/images/11.jpg",imgBW:"./assets/images/bw/11.jpg"},{name:"12",img:"./assets/images/12.jpg",imgBW:"./assets/images/bw/12.jpg"}];function e(){let e=document.querySelectorAll(".ales");const t=cardsChosenId[0],g=cardsChosenId[1];var i;t===g?(clueDisplay.textContent="Has seleKcionado la misma Ale dos veces, closer 🤦",e[t].setAttribute("src",cardImgBack),e[g].setAttribute("src",cardImgBack)):cardsChosen[0]===cardsChosen[1]?(clueDisplay.textContent="Eres listísima 🥳",e[t].setAttribute("src",s[t].imgBW),e[g].setAttribute("src",s[g].imgBW),e[t].removeEventListener("click",a),e[g].removeEventListener("click",a),cardsWon.push(cardsChosen)):(clueDisplay.textContent="Prueba otra vez, perdedora 🖕",e[t].setAttribute("src",cardImgBack),e[g].setAttribute("src",cardImgBack)),cardsChosen=[],cardsChosenId=[],resultDisplay.textContent=(i=cardsWon.length,0===cardsWon.length?"CERO Ales 😭":1===cardsWon.length?i+" Ale 🤓":i+" Ales 🤓"),cardsWon.length===s.length/2&&(resultDisplay.textContent="Lo sabía, tata. Has ganado.",clueDisplay.textContent="Dale al botoncincli de abajo o... ¡Hasta nunqui!")}function a(){let a=this.getAttribute("data-id");cardsChosen.push(s[a].name),cardsChosenId.push(a),this.setAttribute("src",s[a].img),2===cardsChosen.length&&setTimeout(e,800),this.classList.toggle("flip")}!function(){const e=s.sort(()=>.5-Math.random());let a=e.map(s=>s.name);console.log("Esta es la solución, copiota",a)}(),function(){for(let e=0;e<s.length;e++){const s=document.createElement("img");s.setAttribute("src","./assets/images/back.png"),s.setAttribute("data-id",e),s.setAttribute("class","main__grid-img ales"),s.addEventListener("click",a),grid.appendChild(s)}}()}),resetBtn.addEventListener("click",resetGame),console.log("Feliz punteaños, tata 😘");