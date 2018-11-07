

let makeAjaxRequest = function(){
    try{
        /*
            https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7023923dd26a725da995c75b65864de5
        */
        let boxRef = document.getElementById("boxid");
        let city = boxRef.value;

        if(city == ""){
            city = "Raniganj";
        }

        let cnt = 7;

        let appid = "7023923dd26a725da995c75b65864de5";
        let serverUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?";
        serverUrl += "q=" + city;
        serverUrl += "&appid=" + appid;
        serverUrl += "&cnt=" + cnt;
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

            let firstDay = jsonData.list[0];
            let temprature = firstDay.temp.day;

            newBlock.children[1].children[0].children[0].innerHTML = jsonData.city.name + " - " + jsonData.city.country;
            newBlock.children[1].children[1].children[0].children[0].innerHTML = firstDay.weather[0].description;
            newBlock.children[1].children[1].children[0].children[1].children[0].innerHTML = `${temprature}<sup>o</sup>`;

            // forecasts

            let parentBlock = document.getElementById("parent");
            parentBlock.insertBefore(newBlock, parentBlock.firstChild);
        }).catch(function(err){
            console.log(err);
        });

    }catch(err){
        console.log(err);
    }
};


window.addEventListener('load', ()=>{
    makeAjaxRequest();
});