
function getEvents(){
    console.log("getEvents");
    let url = 'https://elegin.github.io/2020_cpv/';
    axios.get(url)
    .then(response =>  displayEvents(response.data.events))
    .catch(response =>  console.log(response));
    
}


function displayEvents(data){
  console.log(data)
}
