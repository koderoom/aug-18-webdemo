
let chatMessage = ()=>{

    let toss  = Math.round(Math.random());
    
    let refid = "she"
    if(toss == 1){
        refid = "he";
    }

    let cloneNode = document.getElementById(refid).cloneNode(true);
    cloneNode.removeAttribute("id");
    cloneNode.style.visibility="visible";

    let chatboxId = document.getElementById("chatbox");
    if(chatboxId.value){
        cloneNode.children[1].children[0].children[0].innerHTML = chatboxId.value;

        chatboxId.value = "";
    }

    let parentNode = document.getElementById("parent");
    parentNode.appendChild(cloneNode);

    parentNode.scrollTo(0, parentNode.scrollHeight);
    // window.scrollTo(0, document.querySelector("#parent").scrollHeight);
}

setInterval(chatMessage, 4000);

window.addEventListener('load', ()=> {
    chatMessage();
});
