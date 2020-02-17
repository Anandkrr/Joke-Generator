const options = { 
  method: 'GET', // specify this is a GET request, not a PUT or POST
  headers: {
    "Accept" : "application/json" // request the response in JSON format
  }
}

document.getElementById("joke_button1").addEventListener('click', event => {
  getJoke("hipster");
})

document.getElementById("joke_button2").addEventListener('click', event => {
  getJoke("history");
})

document.getElementById("joke_button3").addEventListener('click', event => {
  getJoke("bees");
})

document.getElementById("joke_button4").addEventListener('click', event => {
  getJoke(document.getElementById("newJoke").value);
})

function getJoke(searchParam) {
        console.log("https://icanhazdadjoke.com/search?term=" + searchParam);
        fetch("https://icanhazdadjoke.com/search?term=" + searchParam, options)
          .then((resp) => resp.json())
          .then(function(data) {
            const jokes = data.total_jokes;
            document.getElementById("joke").innerHTML = data.results[Math.floor((Math.random() * jokes))].joke;
          })
          .catch(err => {
            console.log("There is some error that needs to be dealt with.")
            document.getElementById("joke").innerHTML = "There are no jokes with given keyword. Try again";
          })
}




