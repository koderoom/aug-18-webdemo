let refChild = `<img src="2.png" style="object-fit: cover; height:100%;">`;

window.onload = ()=>{
    let current = document.querySelector('.active-pointer');
    current.innerHTML = refChild;
}

setInterval(()=>{
    let rnumber = Math.floor((Math.random() * 4) + 1);
    console.log("Random #", rnumber);

    move(rnumber);
}, 5000);

let move = (rnumber)=>{

    setTimeout(() => {
        if(rnumber){
            let current = document.querySelector('.active-pointer');
            current.classList.remove("active-pointer", "bg-dark");
            current.innerHTML = "";

            let next = current.nextElementSibling || document.querySelector(".col-3");
            next.classList.add("active-pointer", "bg-dark", "make-center");
            next.innerHTML = refChild;

            rnumber = rnumber -1;
            move(rnumber);
        }
    }, 500);
}
