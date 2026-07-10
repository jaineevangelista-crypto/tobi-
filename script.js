/*================================
    EFEITO DE DIGITAÇÃO
================================*/

const texto = "THE FALLEN HERO";

let index = 0;

function escrever(){

    const titulo = document.querySelector(".heroText h2");

    if(index < texto.length){

        titulo.innerHTML += texto.charAt(index);

        index++;

        setTimeout(escrever,120);

    }

}

window.onload = () => {

    document.querySelector(".heroText h2").innerHTML = "";

    escrever();

};



/*================================
    PARTÍCULAS DO MOUSE
================================*/

document.addEventListener("mousemove",(e)=>{


    const particula = document.createElement("span");


    particula.className="mouseParticle";


    particula.style.left=e.clientX+"px";

    particula.style.top=e.clientY+"px";


    document.body.appendChild(particula);



    setTimeout(()=>{

        particula.remove();

    },800);


});



/*================================
    ESTILO DAS PARTICULAS
================================*/


const estilo = document.createElement("style");


estilo.innerHTML=`

.mouseParticle{

position:fixed;

width:8px;

height:8px;

background:red;

border-radius:50%;

pointer-events:none;

box-shadow:

0 0 15px red,

0 0 30px crimson;

animation:

sumir .8s linear forwards;

}


@keyframes sumir{

0%{

transform:scale(1);

opacity:1;

}


100%{

transform:

translateY(-50px)

scale(0);

opacity:0;

}

}

`;


document.head.appendChild(estilo);





/*================================
       CHUVA ANIMADA
================================*/


const canvas=document.createElement("canvas");

canvas.id="rain";


document.body.appendChild(canvas);



const ctx=canvas.getContext("2d");



canvas.width=window.innerWidth;

canvas.height=window.innerHeight;



let gotas=[];


for(let i=0;i<150;i++){


gotas.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

vel:Math.random()*8+4,

tam:Math.random()*20+10


});


}




function chuva(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.strokeStyle="rgba(255,0,0,.25)";

ctx.lineWidth=1;



gotas.forEach(g=>{


ctx.beginPath();


ctx.moveTo(g.x,g.y);


ctx.lineTo(
g.x,
g.y+g.tam
);


ctx.stroke();



g.y+=g.vel;



if(g.y>canvas.height){

g.y=-20;

}


});



requestAnimationFrame(chuva);


}


chuva();




window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});




/*================================
       KAMUI EFFECT
================================*/


const botao=document.querySelector("#btn");



botao.addEventListener("click",()=>{


document.body.classList.add("kamui");


setTimeout(()=>{


document.body.classList.remove("kamui");


},3000);



});




const kamuiCSS=document.createElement("style");


kamuiCSS.innerHTML=`

.kamui{

animation:

kamui 3s ease;

}



@keyframes kamui{


0%{

filter:none;

transform:none;

}


50%{

filter:

blur(8px)

brightness(2);

transform:

rotate(5deg)

scale(.7);


}


100%{

filter:none;

transform:none;

}


}



#rain{

position:fixed;

top:0;

left:0;

z-index:-1;

pointer-events:none;

}



`;


document.head.appendChild(kamuiCSS);





/*================================
    ANIMAÇÃO AO SCROLL
================================*/


const elementos=document.querySelectorAll(
".card,.glass,.images img"
);



const observer=new IntersectionObserver((entradas)=>{


entradas.forEach(entrada=>{


if(entrada.isIntersecting){


entrada.target.style.opacity="1";


entrada.target.style.transform="translateY(0)";


}


});


},{

threshold:.2

});




elementos.forEach(el=>{


el.style.opacity="0";


el.style.transform="translateY(60px)";


el.style.transition="1s";


observer.observe(el);


});






/*================================
    EFEITO DE BRILHO NO MOUSE
================================*/


document.addEventListener(
"mousemove",
(e)=>{


document.documentElement.style.setProperty(

"--mouseX",

e.clientX+"px"

);


document.documentElement.style.setProperty(

"--mouseY",

e.clientY+"px"

);


}

);





/*================================
    SOM DE CLIQUE OPCIONAL
================================*/


document.querySelectorAll("a,button")
.forEach(botao=>{


botao.addEventListener("click",()=>{


let som=new Audio(
"audio/click.mp3"
);


som.volume=.3;


som.play();


});


});