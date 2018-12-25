window.onload = ()=>{
    try{
        uiAnimate();
    }catch(err){
        console.log(err);
    }
}

window.addEventListener('keyup', (event)=>{
    if(event.keyCode == '13'){
        console.log("ENTER PRESSED");
        
        uiAnimate();
    }
});


let uiAnimate = ()=>{
    try{
        console.log("UI ANIMATE!!!");

        const elem1 = document.querySelector("#id1");
        console.log(elem1);

        elem1.style.animation = "balltranslate 2s 20";
    }catch(err){
        console.log(err);
    }
}

