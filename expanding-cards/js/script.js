const panels=document.querySelectorAll(".panel");


function removerActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

panels.forEach(panel => {
    panel.addEventListener("click", ()=>{
        removerActiveClass();
        panel.classList.add("active")
    })
})

