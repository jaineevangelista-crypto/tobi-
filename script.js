function mostrarFrase(){

const frases=[

"Quem abandona os amigos é pior que lixo.",

"A verdadeira paz só existe quando há compreensão.",

"Enquanto houver esperança, nunca é tarde para mudar.",

"O mundo pode ser cruel, mas ainda vale a pena protegê-lo."

];

const numero=Math.floor(Math.random()*frases.length);

document.getElementById("frase").innerHTML=frases[numero];

}