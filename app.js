/* Global Variables */
let baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`
let apiKey = ",us&appid=6efe3205df67c4a9ff832c1139ec84d1";
let userReponse = document.getElementById("feelings").value;
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getWeather = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL+zip+key)
    try {
    const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }

  const postData = async ( url = "", data = {} )=>{
    // console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
 
 const updateUI = async () => {
     const request = await fetch("/all")
     try{
     const allData = await request.json()
     console.log(allData);
     document.getElementById("date").innerHTML = allData[0].date;
     document.getElementById("temp").innerHTML = allData[0].temp;    
     document.getElementById("content").innerHTML = allData[0].response;    
     
    }catch(error){
        console.log("error", error)
    }
}

     

document.getElementById("generate").addEventListener("click", takeAction);

function takeAction(e){
    let userZip = document.getElementById("zip").value;
    getWeather(baseURL, userZip, apiKey)
    .then(function(data){
        console.log(data);
        postData("/postData", {temp:data.temp, date:newDate, response:userReponse})

        updateUI()
    })
}    