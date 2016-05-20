document.querySelector('.js-go').addEventListener('click' , onGoBtnClicked);
function onGoBtnClicked() {
  var input = document.querySelector('.js-userinput');
  var value = input.value
    getGifs(value);
}

document.querySelector('.js-userinput').addEventListener ('keypress', onKeyPressed);
function onKeyPressed( e ) {
  if ( e.which === 13 ) {
    onGoBtnClicked()

      var input = e.target
      var value = input.value

      getGifs( value );
  }
}

function getGifs( searchQuery ) {
  var urlEndpoint = 'http://api.giphy.com/v1/gifs/search?q=' + searchQuery + '&api_key=dc6zaTOxFJmzC';
  console.log( urlEndpoint );

  var xhr = new XMLHttpRequest();
  xhr.open('GET', urlEndpoint);
  xhr.addEventListener('load', function(e){
    var data = e.target.response
    pushToDom( data );
  });
  xhr.send();
}

function pushToDom( response ) {
  // turn response into JS object
  response = JSON.parse( response );
  // get data array
  var images = response.data;

  // create container to hold this data
  var container = document.querySelector('.js-container');
  // clear innerHTML since it'll be used for every search
  container.innerHTML = ""

    // loop through array, add IMG html
    images.forEach(function(image){
      // find image
      var src = image.images.fixed_height.url;

      // concat new IMG tax
      container.innerHTML += "<img src='"+ src +"' class='container__image' />";
    });
}
