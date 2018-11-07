let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


let makeAjaxRequest = function(){
    try{
        /*
            https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7023923dd26a725da995c75b65864de5
        */
        let boxRef = document.getElementById("boxid");
        let city = boxRef.value;

        if(city == ""){
            city = "Mumbai";
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

            let refBlock = document.getElementById("refBlock");
            let newBlock = refBlock.cloneNode(true);
            newBlock.classList.remove("invisible");
            newBlock.removeAttribute("id");

            let firstDay = jsonData.list[0];
            let temprature = firstDay.temp.day;

            newBlock.children[1].children[0].children[0].innerHTML = jsonData.city.name + " - " + jsonData.city.country;
            newBlock.children[1].children[1].children[0].children[0].innerHTML = firstDay.weather[0].description;
            newBlock.children[1].children[1].children[0].children[1].children[0].innerHTML = `${temprature}<sup>o</sup>`;

            // forecasts
            for(let i=0; i<jsonData.list.length; i++){
                let iref = jsonData.list[i];
                
                let dref = new Date(iref.dt * 1000);
                let sday = days[dref.getDay()];

                let forecastNewBlock = document.getElementById("forecastRef").cloneNode(true);
                forecastNewBlock.classList.remove("invisible");
                forecastNewBlock.removeAttribute("id");

                forecastNewBlock.children[0].innerHTML = `${sday}`;
                forecastNewBlock.children[2].children[0].innerHTML = `${iref.temp.max}<sup>o</sup>`;
                forecastNewBlock.children[3].children[0].innerHTML = `${iref.temp.min}<sup>o</sup>`;

                let parentRef = newBlock.children[1].children[2];
                parentRef.appendChild(forecastNewBlock);
            }

            let parentBlock = document.getElementById("parent");
            parentBlock.insertBefore(newBlock, parentBlock.firstChild);

            boxRef.value = "";
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