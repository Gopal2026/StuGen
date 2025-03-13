let list=document.getElementById("list");
let card=document.getElementById("nav-card");
let cross=document.getElementById("cross");
cross.style.display="none";

list.onclick=function(){
    card.style.display="block";
    list.style.display="none";
    cross.style.display="block";
}
cross.onclick=function(){
    card.style.display="none";
    list.style.display="block";
    cross.style.display="none";
}
