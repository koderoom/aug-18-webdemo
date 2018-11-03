

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

        // AJAX REQUEST
        let promise = fetch(serverUrl);

        // promise.then(); // ON SUCCESS
        promise.then(function(){

        });

        // promise.catch(); // ON ERROR
        promise.catch(function(err){
            console.log(err);
        });

    }catch(err){
        console.log(err);
    }
};