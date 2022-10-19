document.getElementById("makeDog").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("makeDog").value;
  if (value === "")
    return;
  console.log(value);
  
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
  
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {	
      let results = "";
      
      results += '<img style.display="flex" src="' + json.message + '" />'
      
      document.getElementById("dog").innerHTML = results;
    });
});

document.getElementById("makeCatboy").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("makeCatboy").value;
  if (value === "")
    return;
  console.log(value);
  
  const url = "https://api.catboys.com/img";
  fetch(url)
  
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {	
      let results = "";
      
      results += '<img src="' + json.url + '" />'
      
      document.getElementById("catboy").innerHTML = results;
    });
});

