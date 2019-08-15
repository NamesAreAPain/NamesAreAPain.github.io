function toggleHidden(id) {
    let exp = document.getElementById(id);
    console.log(exp);
    if( exp.hasAttribute("hidden")){
        exp.removeAttribute("hidden");
    } else {
        exp.setAttribute("hidden","true");
    }
}
function expandMenu(){
    let exp = document.getElementById("expmenu");
    if(exp.style.display == "table"){
        exp.style.display = "none";
    } else {
        exp.style.display = "table";
    }
}
function expandSubMenu(smc){
    let sml = document.getElementsByClassName(smc);
    console.log("sm toggle");
    if(sml[0].classList.contains("hidden")){
        Array.prototype.slice.call(sml).map(x => x.classList.remove("hidden"));
    } else { 
        Array.prototype.slice.call(sml).map(x => x.classList.add("hidden"));
    }
}
