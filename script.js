document.getElementById("wyslij").addEventListener("click",()=>{
    var gmail1 = document.getElementById("gmail").value;
    var reg = /^([a-z]{1})([a-zA-Z0-9_.-]{0,257})\@([a-zA-Z]{0,257})\.([a-zA-Z]{2,63})$/;
    if(reg.test(gmail1) == true){
        document.getElementById("czy_prawidlowy").innerHTML = "Adres prawidłowy";
    }
    else{
        document.getElementById("czy_prawidlowy").innerHTML = "Adres nieprawidłowy"; 
    }

}
)