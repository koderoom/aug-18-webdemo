

let makeAjaxRequest = function(){
    try{
        /*
            http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7023923dd26a725da995c75b65864de5
        */
        let boxRef = document.getElementById("boxid");
        let city = boxRef.value;

        if(city == ""){
            city = "mumbai";
        }

        let appid = "7023923dd26a725da995c75b65864de5";
        let serverUrl = "http://api.openweathermap.org/data/2.5/weather?";
        serverUrl += "q=" + city;
        serverUrl += "&appid=" + appid;
        serverUrl += "&units=metric"

        // AJAX REQUEST :: LAYER 1 to LAYER 2
        let promise = fetch(serverUrl);
        promise.then(function(response){
            
            return response.json();
            // return response.text()
        }).then(function(jsonData){

            console.log(jsonData);

            let refBlock = document.getElementById("refBlock");
            let newBlock = refBlock.cloneNode(true);
            newBlock.removeAttribute("id");

            newBlock.children[1].children[0].innerHTML = jsonData.name;
            newBlock.children[1].children[1].innerHTML = jsonData.main.temp;

            let parentBlock = document.getElementById("parent");
            parentBlock.insertBefore(newBlock, parentBlock.firstChild);
        }).catch(function(err){
            console.log(err);
        });

    }catch(err){
        console.log(err);
    }
};

makeAjaxRequest();