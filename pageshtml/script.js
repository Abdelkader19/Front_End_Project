var input=document.querySelectorAll("input")
var bouton=document.getElementById("bouton1")
var reponsejuste=0
var rep=document.getElementById("rep")
function quiz(){
    for(var i=0;i<input.length;i++){
        if (input[i].checked==true && input[i].value=="correct"){
            reponsejuste++;
            input[i].nextElementSibling.style.color="green"
        }
        if (input[i].checked==true && input[i].value=="false"){
            input[i].nextElementSibling.style.color="red"
        }
        if (input[i].value=="correct"){ 
            input[i].nextElementSibling.style.color="green"
        }


    }
    rep.innerHTML="le nombre des reponses juste "+reponsejuste+"/10"
}
bouton.addEventListener('click',quiz)
