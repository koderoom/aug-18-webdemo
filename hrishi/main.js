window.addEventListener('keyup', function(event){

    if(event.keyCode === 13) {
        console.log("HEllo Hrishi!!!");

        const innerElement = `<img src="1.jpeg" class="img-fluid"  style="object-fit: cover; width:60%">`;

        setTimeout(function(){
            const selElement = document.querySelector(".sel");
            selElement.innerHTML = "";
            selElement.classList.remove("sel");

            const nextElement = selElement.nextElementSibling;
            console.log(nextElement);
            nextElement.innerHTML = innerElement;
            nextElement.classList.add("make-center", "sel");
        }, 200);
        
    }
});