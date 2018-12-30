window.onload = ()=>{
    try{
        uiAnimate1();
        uiAnimate2();
    }catch(errr){
        console.log(err);
    }
}

window.addEventListener('keyup', (event)=>{
    if(event.keyCode == '13'){
        console.log("ENTER PRESSED");
        
        uiAnimate1();
        uiAnimate2();
    }
});


let uiAnimate1 = ()=>{
    try{
        console.log("UI ANIMATE!!!");

        const elem1 = document.querySelector("#id1");
        console.log(elem1);

        anime({
            targets: elem1,
            translateX: [
              { value: 0, duration: 0 },
              { value: 500, duration: 2200 },
              { value: 0, duration: 1800 }
            ],
            rotate: '5turn',
            duration: 4000,
          
        });
    }catch(err){
        console.log(err);
    }
}


let uiAnimate2 = ()=>{
    try{
        const elem1 = document.querySelector("#id2");
        console.log(elem1);

        
    }catch(err){
        console.log(err);
    }
}

