

let makeAjaxRequest = function(){
    try{
        /*
            http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7023923dd26a725da995c75b65864de5
        */
        let city = "mumbai";
        let appid = "7023923dd26a725da995c75b65864de5";
        let serverUrl = "http://api.openweathermap.org/data/2.5/weather?";
        serverUrl += "q=" + city;
        serverUrl += "&appid=" + appid;

        // AJAX REQUEST :: LAYER 1 to LAYER 2
        let promise = fetch(serverUrl);
        promise.then(function(response){
            
            return response.json();
        }).then(function(jsonData){

            console.log(jsonData);
        }).catch(function(err){
            console.log(err);
        });

    }catch(err){
        console.log(err);
    }
};

makeAjaxRequest();