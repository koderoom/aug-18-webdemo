const messageList = ["Good Morning", "Good Night", "Good Afternon", "Hie", "Hello", "Bye", "Byeee", "How are u???", 
                            "U thereee", "yesss",  "hieeeeeee", "nooo"];

let chatMessage = (message)=>{

    let toss  = Math.round(Math.random());
    
    let refid = "she"
    if(toss == 1){
        refid = "he";
    }

    let cloneNode = document.getElementById(refid).cloneNode(true);
    cloneNode.removeAttribute("id");
    cloneNode.style.visibility="visible";

    let chatboxId = document.getElementById("chatbox");
    cloneNode.children[1].children[0].children[0].innerHTML = chatboxId.value || message;
    chatboxId.value = "";

    let parentNode = document.getElementById("parent");
    parentNode.appendChild(cloneNode);

    parentNode.scrollTo(0, parentNode.scrollHeight);
    window.scrollTo(0, document.querySelector("#parent").scrollHeight);
}

setInterval(()=>{
    let boundry = messageList.length - 1;
    let randomMesage = Math.floor(Math.random() * boundry);
    chatMessage(messageList[randomMesage]);
}, 4000);

window.addEventListener('load', ()=> {
    let boundry = messageList.length - 1;
    let randomMesage = Math.floor(Math.random() * boundry);
    chatMessage(messageList[randomMesage]);
});

document.addEventListener("keydown", (event)=> {
    let chatboxId = document.getElementById("chatbox");
    if(event.which === 13 && chatboxId.value){
        chatMessage();
    }
});
