let postList = [];

let firstPost = {"post" : "Happy Diwali!!!"};
postList.push(firstPost);

let secondPost = {"post" : "Hello CDAC!!"};
postList.push(secondPost);

let thirdPost = {"post" : "Hello DAC!!"};
postList.push(thirdPost);

let fourthPost = {"post" : "Hello KHARGHAR"};
postList.push(fourthPost);


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


let prepareAppWall = function(){
    try{
        for(let i=0; i<postList.length; i++){
            let postRef = postList[i];

            let parentRef = document.getElementById("parent");
            let refBlock = parentRef.lastElementChild;
        
            let newChild = refBlock.cloneNode(true);
            newChild.children[1].innerHTML = postRef.post;
            parentRef.insertBefore(newChild, parentRef.firstChild);
        }
    }catch(err){
        console.log(err);
    }
}


let onloadfunction = function(){
    prepareAppWall();
}

window.addEventListener('load', onloadfunction);



