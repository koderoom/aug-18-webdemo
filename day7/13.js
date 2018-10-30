
let chatMessage = ()=>{

    let toss  = Math.round(Math.random());
    
    let refid = "she"
    if(toss == 1){
        refid = "he";
    }

    let cloneNode = document.getElementById(refid).cloneNode(true);
    cloneNode.removeAttribute("id");
    cloneNode.style.visibility="visible";

    let parentNode = document.getElementById("parent");
    parentNode.appendChild(cloneNode);

    parentNode.scrollTo(0,parentNode.scrollHeight);
    // window.scrollTo(0, document.querySelector("#parent").scrollHeight);
}

setInterval(chatMessage, 2000);