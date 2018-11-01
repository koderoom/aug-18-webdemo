let weaterFunction = function(){

    let url = "http://api.openweathermap.org/data/2.5/forecast"
    // let inputData = {"q" : inputValue, "APPID": APPID, "units":"metric"};

    let q = "mumbai";
    let APPID = "7023923dd26a725da995c75b65864de5";

    url += `?q=${q}`;
    url += `&APPID=${APPID}`;

    let promise = fetch(url);
    promise.then((data)=>{
        return data.text();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}

window.addEventListener('load', ()=>{
    weaterFunction();
});

