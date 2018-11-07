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

    // collapse the emojis
    $("#navbarNav").collapse("hide");

    let parentNode = document.getElementById("parent");
    parentNode.appendChild(cloneNode);

    parentNode.scrollTo(0, parentNode.scrollHeight);
    window.scrollTo(0, document.querySelector("#parent").scrollHeight);
}

setInterval(()=>{
    let boundry = messageList.length - 1;
    let randomMesage = Math.floor(Math.random() * boundry);
    chatMessage(messageList[randomMesage]);
}, 5000);

window.addEventListener('load', ()=> {
    // add emoji childs
    appendEmojiChildBlocks();

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


let appendEmojiChildBlocks = function(){
    try{
        let emojiParentRef = document.getElementById('emojiParentRef');
        let refBlock = emojiParentRef.children[0];

        let refPoint = 128512;
        for(let i=0; i<80; i++){

            let newEmojiChild = refBlock.cloneNode(true);
            newEmojiChild.style.display = "inline-block";
            newEmojiChild.children[0].innerHTML = "&#" + refPoint;

            emojiParentRef.appendChild(newEmojiChild);

            refPoint++;
        }
    }catch(err){
        console.log(err);
    }
}

let emojiClick = function(ref){
    try{
        let emojiData = ref.children[0].innerHTML;

        let chatboxId = document.getElementById("chatbox");
        chatboxId.value += " " + emojiData;
    }catch(err){
        console.log(err);
    }
}