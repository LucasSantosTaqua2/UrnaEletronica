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
     let vVoto = parseInt(document.getElementById("cand").value);
     if(vVoto == 13){
         document.getElementById("imgCand").src = "img/galodoido.jpg";
         document.getElementById("nomeCand").innerText = " Galo Doido";
     }else if(vVoto == 19){
        document.getElementById("imgCand").src = "img/noelnatal.jpg";
        document.getElementById("nomeCand").innerText = " Noel Natal";
     }else if(vVoto == 15){
        document.getElementById("imgCand").src = "img/zedasdrogas.jpg";
        document.getElementById("nomeCand").innerText = " Zé da Drogas";
     }else if(vVoto == 24){
        document.getElementById("imgCand").src = "img/joaodabriga.jpg";
        document.getElementById("nomeCand").innerText = " João da Briga";
     }else if(vVoto == 65){
        document.getElementById("imgCand").src = "img/cirirocego.jpg";
        document.getElementById("nomeCand").innerText = " Ciriro Cego";
     }
 }

 function apagar(){
    document.getElementById("cand").value= "";
    document.getElementById("imgCand").src = "img/ini.jpg";
    document.getElementById("nomeCand").innerText = "";  
    voto = "";  
    const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
 }

 function branco(){
    document.getElementById("cand").value= "";
    document.getElementById("imgCand").src = "img/votob.jpg";
    document.getElementById("nomeCand").innerText = "Voto Branco";  
    voto = "";  
    const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
 }

 function confirm(){
   const confirm = new Audio('sound/confirmsound.mp3');
   confirm.play();
   confirm.loop = false;
   document.getElementById("imgCand").src = "img/compvoto.jpg";
   timeoutID = setTimeout(document.getElementById("imgCand").src = "img/fim.jpg", 2000);
 
   
 }

 function ajuda(){
   document.getElementById("help").click;
   window.location.href = "help.html";

 }

 function back(){
   document.getElementById("voltar").click;
   window.location.href = "index.html";
 }