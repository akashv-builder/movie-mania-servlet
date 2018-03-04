//variable to store all the info coming from imdb api 
var data;
// variable to store count for favourite
var count = 0;
// variable to apply validation if user directly click add to fav without adding
// a movie
var favvalidation = 0;

// function to hit imdb api and get the required data
function getData() {
	var xmlHttp = new XMLHttpRequest();
	// retrieving the text from the search box
	var word = document.getElementById("usertext").value;
	if (word == "") {
		// if search box is empty
		document.getElementById("errormsg").innerHTML = "*****Please Enter A Movie To Search*****";
	} else {
		// clearing the page before showing the result
		document.getElementById('result').innerHTML = "";
		document.getElementById("cardcontainerformovie").innerHTML = "";
		// url to hit
		var url = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query="
				+ word;

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
							+ "<button id='favouritebutton' class='bg-primary' type='button' style='backgroung-color: blue;' onClick=addToFav("
							+ i
							+ ") class='btn btn-sm btn-secondary'>Add To Favourite</button>"
							+ "</div>"
							+ "<div class='col-md-4 align-self-center my-4'>"
							+ "<img id='posterofmovie' class='img-fluid d-block' src='http://image.tmdb.org/t/p/w500/"
							+ data.results[i].poster_path + "'> </div>";
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
	// applying condition if count<10 then only add to fav
	if (count < 10) {
		var xmlhttp = new XMLHttpRequest();
		alert(i);
		// setting the movie name added on page in respone
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("favoritesadded").innerHTML = xmlhttp.responseText;
				count++;
				favvalidation = 1;
			}
		};
		// values to be sent to servlet
		var params = "moviename=" + data.results[i].title + "&ratings="
				+ data.results[i].vote_average + "&releasedate="
				+ data.results[i].release_date + "&poster="
				+ data.results[i].poster_path + "&overview="
				+ data.results[i].overview;
		// sending data to servlet
		xmlhttp.open('GET', "http://localhost:8080/MovieMagic/JsonParsing?"
				+ params, true);
		xmlhttp.send();
	} else {
		// in case when count>10
		document.getElementById("favoritesadded").innerHTML = "You can not add more then !0 fav movies";
	}
}

// function to show fav movie
function ShowFavourite() {
	// if it is 1 then only show fav else give msg to add fav first
	if (favvalidation == 1) {
		var xmlhttp = new XMLHttpRequest();
		// clearing the page before showing the fav movie
		document.getElementById('result').innerHTML = "";
		document.getElementById("cardcontainerformovie").innerHTML = "";
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				// geting the response in a variable
				var myarr = JSON.parse(this.responseText);
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
							+ "<button id='favouritebutton' class='bg-primary' type='button' onClick=removeFromFav("
							+ i
							+ ") class='btn btn-sm btn-secondary'>Remove From Fav</button>"
							+ "</div>"
							+ "<div class='col-md-4 align-self-center my-4'>"
							+ "<img id='posterofmovie' class='img-fluid d-block' src='http://image.tmdb.org/t/p/w500/"
							+ myarr[i].poster + "'> </div>";
					// displaying the dynamic element created
					document.getElementById('result').insertAdjacentHTML(
							'beforeend', html_code);
				}
			}
		};
		// making xml call to servlet
		xmlhttp.open('GET',
				"http://localhost:8080/MovieMagic/RetriveFromJson?", true);
		xmlhttp.send();
	} else {
		// msg to say add fav first
		document.getElementById("favoritesadded").innerHTML = "Add Some Movie As Favourite First";
	}

}
// function to remove
function removeFromFav(i) {
	var xmlhttp = new XMLHttpRequest();
	alert(i);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// showing the response on the page
			document.getElementById("favoritesadded").innerHTML = xmlhttp.responseText;
		}
	};
	// values to be sent to servlet
	var params = "moviename=" + data.results[i].title;
	// sending value by get to servlet
	xmlhttp.open('GET', "http://localhost:8080/MovieMagic/RemoveMovie?"
			+ params, true);
	xmlhttp.send();
}
