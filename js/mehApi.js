
function getEvents(){
    let gitPath ="2020_"+window.location.pathname.split("/").pop().split(".")[0]+"/";
    let url = 'https://elegin.github.io/'+gitPath;
    axios.get(url)
    .then(response =>  displayEvents(response.data.tracks))
    .catch(response =>  console.log(response));
    
}


function displayEvents(data){
  if (data.length > 0){
    //1 track sixteen
    //2 track eight
    //3 track one-third
    let trackGrid = ["sixteen", "eight", "five"]
    let text = `
      <div class="section ">
        <div class="container">`;
   
    let tracksColumn = data.length; 
    let eventsRows = []
    for (i = 0, len = tracksColumn; i < len; i++) {
      eventsRows.push(data[i].events.length)
    } 
    maxCnt = Math.max.apply(Math, eventsRows)
    for (i = 0, len = maxCnt; i < len; i++) {
      text += `<div class="row">`
      for (j = 0, ght = tracksColumn; j < ght; j++) {
        if (data[j].events[i] != undefined){

          text += `
          <div class="${trackGrid[tracksColumn-1]} columns ">
            <div class="card">
              <h4><b>${data[j].events[i].type}</b></h4>
              <p>$${data[j].events[i].desc}</p>
            </div>
           </div>          
          `
        }else{
          text += `
          <div class="${trackGrid[tracksColumn-1]} columns ">
            <p >&nbsp;</p>
           </div>
          `;          
        }
      }
      text += `</div>`;
    } 
      text += `</div>`;
    text += `</div>`;


    console.log(text)
    document.getElementById("maincontent").innerHTML = text;
  }else{
    return "shit all"
  }

}

