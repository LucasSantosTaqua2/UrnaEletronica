 var voto = "";
 var timeoutID;

 function gerarVoto(v){     
    voto += v;
    if(voto.length <= 2){
        document.getElementById("cand").value=voto;
        gerarImagem();
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;

    }
 }

 function gerarImagem(){
     let imgSrc = '';
     let nomeCand = '';
     let vVoto = parseInt(document.getElementById("cand").value);

     switch (vVoto) {
       case 13:
         imgSrc = "img/galodoido.jpg";
         nomeCand = " Galo Doido";
         break;
       case 19:
          imgSrc = "img/noelnatal.jpg";
          nomeCand = " Noel Natal";
          break;
       case 15:
          imgSrc = "img/ze.jpg";
          nomeCand = " Zé Doidinho";
          break;
       case 24:
          imgSrc = "img/joaodabriga.jpg";
          nomeCand = " João da Briga";
          break;
       case 65:
          imgSrc = "img/cirirocego.jpg";
          nomeCand = " Ciriro Cego";
          break;
       case 11:
          imgSrc = "img/merezperece.jpg";
          nomeCand = " Merez Perece";
          break;
       default:
          imgSrc = "img/inva.jpg";
          nomeCand = " Voto Invalido";       
     }
   
     document.getElementById("imgCand").src = imgSrc;
     document.getElementById("nomeCand").innerText = nomeCand;
 }

 function apagar(){
    document.getElementById("cand").value= "";
    document.getElementById("imgCand").src = "img/ini.jpg";
    document.getElementById("nomeCand").innerText = "";  
    voto = "";  
    const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = true;
 }

 function branco(){
    document.getElementById("cand").value= "";
    document.getElementById("imgCand").src = "img/votob.jpg";
    document.getElementById("nomeCand").innerText = "Voto Branco";  
    voto = "";  
    const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = true;
 }

 function confirm(){
   const confirm = new Audio('sound/confirmsound.mp3');
   confirm.play();
   confirm.loop = false;
   document.getElementById("imgCand").src = "img/compvoto.jpg";
   timeoutID = setTimeout(document.getElementById("imgCand").src = "img/fim.jpg", 2000); 
   document.getElementById("cand").value= "";
 }

 function ajuda(){
   document.getElementById("help").click;
   window.location.href = "help.html";

 }

 function back(){
   document.getElementById("voltar").click;
   window.location.href = "index.html";
 }


function helpimage1(){
    document.getElementById("c1").click;
    document.getElementById("fotocan").src = "img/merezperece.jpg";
    document.getElementById("proposta").innerText = "Promete fazer uma grande revolução no ministério da segurança publica, saúde, informação e apoio aos esportes.";
    const c1 = new Audio('sound/merezperece.mp3');
        c1.play();
        c1.loop = false;
}
function helpimage2(){
   document.getElementById("c2").click;
   document.getElementById("fotocan").src = "img/galodoido.jpg";
   document.getElementById("proposta").innerText = "Milho sera grátis para sempre, o preço da carne bovina irá despencar (para não comerem mais frango), dentre outras.";
   const c2 = new Audio('sound/galodoido.mp3');
        c2.play();
        c2.loop = false;
        
}
function helpimage3(){
   document.getElementById("c3").click;
   document.getElementById("fotocan").src = "img/ze.jpg";
   document.getElementById("proposta").innerText = "Dar atenção a tudo que não importa, férias escolares de 11 messes, e dinheiro grátis para todos.";
   const c3 = new Audio('sound/ze.mp3');
        c3.play();
        c3.loop = false;
}
function helpimage4(){
   document.getElementById("c4").click;
   document.getElementById("fotocan").src = "img/noelnatal.jpg";
   document.getElementById("proposta").innerText = "HO-HO-HO natal todo dia, ovo de pascoa grátis.";
   const c4 = new Audio('sound/noelnatal.mp3');
        c4.play();
        c4.loop = false;
}
function helpimage5(){
   document.getElementById("c5").click;
   document.getElementById("fotocan").src = "img/joaodabriga.jpg";
   document.getElementById("proposta").innerText = "Vou lutar pelo país, como lutei nesta luta da foto, apanhei mas tô de pé, igual o Brasileiro... Que gosta de sofrer.";
   const c5 = new Audio('sound/joaodabriga.mp3');
        c5.play();
        c5.loop = false;
}
function helpimage6(){
   document.getElementById("c6").click;
   document.getElementById("fotocan").src = "img/cirirocego.jpg";
   document.getElementById("proposta").innerText = "Dinheiro para todos comprarem alimento. Mas vão se procurar trabalhar.";
   const c6 = new Audio('sound/cirirocego.mp3');
        c6.play();
        c6.loop = false;
}
 let jao = parseInt(fodase.getElementById("cand").value);
