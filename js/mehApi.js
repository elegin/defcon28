
function getEvents(){
    let gitPath ="2020_"+window.location.pathname.split("/").pop().split(".")[0]+"/";
    let url = 'https://elegin.github.io/'+gitPath;
    axios.get(url)
    .then(response =>  displayEvents(response.data.events))
    .catch(response =>  console.log(response));
    
}


function displayEvents(data){
  console.log(data.length)
  if (data.length > 0){
    for (i = 0, len = data.length, text = ""; i < len; i++) {
      console.log(text)
      text += ` <div class="card">
                  <div class="container">
                      <h4><b>${data[i].type}</b></h4>
                      <p>${data[i].desc}</p>
                  </div>
                </div>`
      // text += `<div class="card">`
      //   text += `<div class="container">`
      //     text += `<h4><b>${data[i].type}</b></h4>`
      //     text += `<p>${data[i].desc}</p>`
      //   text += `</div">`  
      // text += `</div">`
    }
    console.log(text)
    document.getElementById("maincontent").innerHTML = text;
  }else{
    return "shit all"
  }

}
{/* <div class="card">
  <img src="img_avatar2.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>Jane Doe</b></h4> 
    <p>Interior Designer</p> 
  </div>
</div> */}