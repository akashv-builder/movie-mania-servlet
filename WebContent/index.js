//variable to store all the info coming from imdb api 
var data;

var poster;
// function to hit imdb api and get the required data
function getData() {
	var xmlHttp = new XMLHttpRequest();
	// retrieving the text from the search box
	var word = document.getElementById("usertext").value;
	if (word == "") {
		// if search box is empty
		document.getElementById("errormsg").innerHTML = "*****Please Enter A Movie To Search*****";
	} else {
		// url to hit
		var url = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query="
				+ word;
		// clearing the page before showing the result
		document.getElementById('result').innerHTML = "";
		document.getElementById("cardcontainerformovie").innerHTML = "";
		document.getElementById("errormsg").innerHTML = "Results Are Below-";
		xmlHttp.onreadystatechange = function() {
			// in case of 404 error
			if (this.status == 404) {
				document.getElementById('titlemovie1').innerHTML = "404<br><h1>Movie Not Found</h1>";
			} else if (this.readyState == 4 && this.status == 200) {
				// storing the response
				var myArr = JSON.parse(this.responseText);
				data = myArr;
				// retrieving the response one by one
				for (var i = 0; i < myArr.results.length; i++) {
					var voteNotAvialable;
					// condition if vote is 0
					if (data.results[i].vote_average == 0) {
						voteNotAvialable = "Rating Not Avialable";
					} else {
						voteNotAvialable = data.results[i].vote_average;
					}
					var releaseDateNotAvialable;
					// condition if date is not avialable
					if (data.results[i].release_date == "") {
						releaseDateNotAvialable = "Release Date Not Avialable";
					} else {
						releaseDateNotAvialable = data.results[i].release_date;
					}
					
					if( data.results[i].poster_path==null){
						poster="./image/notavilable.jpg";
					}
					else{
						poster="http://image.tmdb.org/t/p/w500/"+data.results[i].poster_path;
					}
					
					// creating dynamic card
					var html_code = "<div class='col-lg-8 my-4' style=' background-color: white;'>"
							+ "<h4 id='nameofmovie' class='mb-3 one'><strong>"
							+ data.results[i].title
							+ "</strong></h4>"
							+ "<div class='blockquote text-muted'>"
							+ "<p id='descriptionofmovie' class='mb-0 rubic1'>"
							+ data.results[i].overview
							+ "</p>"
							+ "<div class='row my-2'>"
							+ "<div class='col-3 rubic1'>Release Date-</div>"
							+ "<div id='releasedateofmovie' class='col-9 rubic1'>"
							+ releaseDateNotAvialable
							+ "</div>"
							+ "</div>"
							+ "<div class='row my-2'>"
							+ "<div class='col-3 rubic1'>Rating-</div>"
							+ "<div id='ratingofmovie' class='col-9 rubic1'>"
							+ voteNotAvialable
							+ "</div>"
							+ "</div>"
							+ "</div>"
							+ "<button id='favouritebutton"+i+"' class='btn btn-primary my-2' type='button' onClick=addToFav("
							+ i
							+ ") >Add To Favourite</button>"
							+ "</div>"
							+ "<div class='col-md-4 align-self-center my-4'>"
							+ "<img id='posterofmovie' class='img-fluid d-block' src='"
							+ poster + "'> </div>";
					// setting the dynamic card
					document.getElementById('cardcontainerformovie')
							.insertAdjacentHTML('beforeend', html_code);
				}
			}
		};
		// sending request through get method
		xmlHttp.open("GET", url, true);
		xmlHttp.send();
	}
}

// function to add fav movie
function addToFav(i) {
	var xmlhttp = new XMLHttpRequest();
	// setting the movie name added on page in respone
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("errormsg").innerHTML = xmlhttp.responseText;
			document.getElementById("favouritebutton"+i).disabled = true;
		}
	};
	if( data.results[i].poster_path==null){
		poster="./image/notavilable.jpg";
	}
	else{
		poster="http://image.tmdb.org/t/p/w500/"+data.results[i].poster_path;
	}
	// values to be sent to servlet
	var params = "moviename=" + data.results[i].title + "&ratings="
			+ data.results[i].vote_average + "&releasedate="
			+ data.results[i].release_date + "&poster="
			+ poster + "&overview="
			+ data.results[i].overview;
	// sending data to servlet
	xmlhttp.open('GET', "http://localhost:8081/MovieMagic/JsonParsing?"
			+ params, true);
	xmlhttp.send();
}

// function to show fav movie
function ShowFavourite() {

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// geting the response in a variable
			var myarr = JSON.parse(this.responseText);
			if (myarr.length == 0) {
				// clearing the page before showing the fav movie
				document.getElementById("cardcontainerformovie").innerHTML = "Add Some Favorite Movie First Into Your Favorite List, So that you can acces it later and view it.";
				document.getElementById("result").innerHTML = "";
				document.getElementById("errormsg").innerHTML = "";	
				
			} else {

				// clearing the page before showing the fav movie
				document.getElementById("result").innerHTML = "";
				document.getElementById("cardcontainerformovie").innerHTML = "";
				document.getElementById("errormsg").innerHTML = "Favorite List-";
				// showing the response on page
				for (var i = 0; i < myarr.length; i++) {
					// condition if vote is 0
					var voteNotAvialable;
					if (myarr[i].rating == 0) {
						voteNotAvialable = "Rating Not Avialable";
					} else {
						voteNotAvialable = myarr[i].rating;
					}
					// when release date not avialable
					var releaseDateNotAvialable;
					if (myarr[i].releasedate == "") {
						releaseDateNotAvialable = "Release Date  Not Avialable";
					} else {
						releaseDateNotAvialable = myarr[i].releasedate;
					}
					
					// creating dynamic card to show result
					var html_code = "<div class='col-lg-8 my-4' style=' background-color: white;'>"
							+ "<h4 id='nameofmovie' class='mb-3 one'><strong>"
							+ myarr[i].moviename
							+ "</strong></h4>"
							+ "<div class='blockquote text-muted'>"
							+ "<p id='descriptionofmovie' class='mb-0 rubic1'>"
							+ myarr[i].overview
							+ "</p>"
							+ "<div class='row my-2'>"
							+ "<div class='col-3 rubic1'>Release Date-</div>"
							+ "<div id='releasedateofmovie' class='col-9 rubic1'>"
							+ releaseDateNotAvialable
							+ "</div>"
							+ "</div>"
							+ "<div class='row my-2'>"
							+ "<div class='col-3 rubic1'>Rating-</div>"
							+ "<div id='ratingofmovie' class='col-9 rubic1'>"
							+ voteNotAvialable
							+ "</div>"
							+ "</div>"
							+ "</div>"
							+ "<button id='removefavouritebutton' class='btn btn-primary my-2' type='button' onClick=removeFromFav("
							+ i
							+ ")>Remove From Favourite</button>"
							+ "</div>"
							+ "<div class='col-md-4 align-self-center my-4'>"
							+ "<img id='posterofmovie' class='img-fluid d-block' src='"
							+ myarr[i].poster + "'> </div>";
					// displaying the dynamic element created
					document.getElementById('result').insertAdjacentHTML(
							'beforeend', html_code);
				}
			}
			
		}
	};
	// making xml call to servlet
	xmlhttp.open('GET', "http://localhost:8081/MovieMagic/RetriveFromJson?",
			true);
	xmlhttp.send();
}
// function to remove
function removeFromFav(i) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// showing the response on the page
			document.getElementById("errormsg").innerHTML = xmlhttp.responseText;
			document.getElementById("favouritebutton"+i).disabled = false;
		}
	};
	// values to be sent to servlet
	var params = "index=" + i;
	// sending value by get to servlet
	xmlhttp.open('GET', "http://localhost:8081/MovieMagic/RemoveMovie?"
			+ params, true);
	xmlhttp.send();
}
