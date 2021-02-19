
function change(){
    let user = document.querySelector(".nome").value;

    if(user != ""){
        //alert("ok")
        document.querySelector(".sub").disabled = false;
    }
    else{
        document.querySelector(".sub");
    }  
    
}

/*Se sottoscritto, allora nella pagina News sarà visibile solo un pulsante “Unsubscribe” */
function sub(){

    let user = document.querySelector(".nome").value;
    let i = 0;
    try{
        localStorage.setItem(i,user);
        i++;
    }catch(e){
        alert("impossibile salvare")
    }
    
    document.querySelector(".label").style.visibility="hidden";
    document.querySelector(".nome").style.visibility="hidden";
    document.querySelector(".sub").style.visibility="hidden";
    document.querySelector(".unsub").style.visibility="visible";
}

/*cancella la sotto scrizione*/
function Delete(){
    localStorage.clear();
    document.querySelector(".label").style.visibility="visible";
    document.querySelector(".nome").style.visibility="visible";
    document.querySelector(".sub").style.visibility="visible";
    document.querySelector(".unsub").style.visibility="hidden";
}

function benvenuto(){
    if(localStorage != null){
        alert("Benvenuto")
    }
}