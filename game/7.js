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
    }catch(err){
        console.log(err);
    }
}

