setInterval(()=>{
    let rnumber = Math.floor((Math.random() * 4) + 1);
    console.log("Random #", rnumber);

    move(rnumber);
}, 5000);

let move = (rnumber)=>{

    setTimeout(() => {
        if(rnumber){
            let current = document.querySelector('.active-pointer');
            current.classList.remove("active-pointer", "bg-dark", "text-light");

            let next = current.nextElementSibling || document.querySelector(".col-3");
            next.classList.add("active-pointer", "bg-dark", "make-center", "text-light");

            rnumber = rnumber -1;
            move(rnumber);
        }
    }, 500);
}
