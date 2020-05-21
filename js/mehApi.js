
function getEvents(){
    console.log("getEvents");
    const xhr = new XMLHttpRequest();
    let url = '../2020_cpv'
    xhr.open('GET', url);
    xhr.send(); 
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            console.log(xhr)
        }
      };
      xhr.onerror = function() {
        
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
      };      
    // axios.get(url).then(response => console.log(response));
    //  fetch(url,{
    //     mode: 'no-cors',
    //     headers: {
    //         'Content-Type': 'text/html'
    //     }

    // })
    // .then((resp) => console.log(resp)) 

    // .then(data => console.log(data));
    // fetch('https://elegin.github.io/2020_cpv').then(function (response) {
    //     // The API call was successful!
    //     console.log(response)
    //     return response.text();
    // }).then(function (html) {
    //     // This is the HTML from our response as a text string
    //     console.log(html);
    // }).catch(function (err) {
    //     // There was an error
    //     console.warn('Something went wrong.', err);
    // });
    
}
