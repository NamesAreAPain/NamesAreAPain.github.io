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
    console.log("toggle");
    if(exp.style.display == "table"){
        exp.style.display = "none";
    } else {
        exp.style.display = "table";
    }
}
