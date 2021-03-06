function postOnWall(){
    try{
        // 1
        let inpuRef = document.getElementById("inputId");
        let postValue = inpuRef.value;
        inpuRef.value = "";

        // 2
        let refBlock = document.getElementById("refBlock");

        // 3
        let newBlock = refBlock.cloneNode(true);
        newBlock.removeAttribute("id");

        // 4
        newBlock.children[1].children[0].children[0].innerHTML = postValue;


        // 5
        let parentRef = document.getElementById("parentRef");
        parentRef.insertBefore(newBlock, parentRef.firstChild);



    }catch(err){
        console.log(err);
    }
}



function likeCount(currentBtnRef){
    let spanElement = currentBtnRef.children[0];
    
    let counterValue = spanElement.innerHTML;
    let counterNum = Number(counterValue);
    counterNum = counterNum + 1;

    spanElement.innerHTML = counterNum;
}


function refImageUpload(fileRef){
    let uploadedImage = fileRef.files[0];
    let newImageUrl = URL.createObjectURL(uploadedImage);
    
    let imageBlockRef = document.getElementById("refBlockImage");
    imageBlockRef.children[1].children[0].children[0].children[0].src = newImageUrl;
}


function postOnWallImage(fileRef){

    // 1
    let uploadedImage = fileRef.files[0];
    let newImageUrl = URL.createObjectURL(uploadedImage);

    // 2
    let refBlock = document.getElementById("refBlockImage");

    // 3
    let newBlock = refBlock.cloneNode(true);
    newBlock.removeAttribute("id");

    // 4
    newBlock.children[1].children[0].children[0].children[0].src = newImageUrl;


    // 5
    let parentRef = document.getElementById("parentRef");
    parentRef.insertBefore(newBlock, parentRef.firstChild);

}