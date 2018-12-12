

setInterval(()=>{

    let current = document.querySelector(".animated");
    
    if(current) {
        current.classList.remove("border-dark", "animated", "infinite", "pulse", "slower");
        current.classList.add("animated", "slideOutRight");

        let next = current.nextElementSibling || document.querySelector(".col-sm-3");
        if(next) {
            setTimeout(()=>{
                current.classList.remove("animated", "slideOutRight");
                next.classList.add("border-dark", "animated", "infinite", "pulse", "slower");
            }, 500);
        }
    }

}, 2500);
