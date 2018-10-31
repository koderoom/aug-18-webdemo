
function postHere(btnRef){
    try{
        let postValue = btnRef.parentElement.children[0].value;

        let parentRef = document.getElementById("parent");
        let refBlock = parentRef.lastElementChild;
        
        let newChild = refBlock.cloneNode(true);
        newChild.children[1].innerHTML = postValue;
        parentRef.insertBefore(newChild, parentRef.firstChild);

        btnRef.parentElement.children[0].value = "";
    }catch(err){
        console.log(err);
    }
}