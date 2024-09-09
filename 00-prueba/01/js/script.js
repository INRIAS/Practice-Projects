const panels=document.querySelectorAll(".panel");

panels.forEach(el => {
    el.addEventListener("click", ()=>{
        RemoverActive();
        el.classList.add("active");
    })
});



function RemoverActive(){
    panels.forEach(el => {
        el.classList.remove("active")
    });
}