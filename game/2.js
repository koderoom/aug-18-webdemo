

setInterval(()=>{

    let current = document.querySelector(".animated");
    
    if(current) {
        current.classList.remove("border-dark", "animated", "infinite", "pulse", "slower");

        let next = current.nextElementSibling || document.querySelector(".col-sm-3");
        if(next) {
            next.classList.add("border-dark", "animated", "infinite", "pulse", "slower");
        }
    }

}, 2000);
