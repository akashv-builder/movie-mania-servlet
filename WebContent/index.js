var poster;
var data;
function getData() {
	var xmlHttp = new XMLHttpRequest();
	var word = document.getElementById("usertext").value;
	document.getElementById('result').innerHTML = "";
	document.getElementById("cardcontainerformovie").innerHTML = "";
	var url = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query="
			+ word;

	xmlHttp.onreadystatechange = function() {
		if (this.status == 404) {
			document.getElementById('titlemovie1').innerHTML = "404<br><h1>Movie Not Found</h1>";
		}
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			data = myArr;

			for (var i = 0; i < myArr.results.length; i++) {

				var voteNotAvialable;
				if (data.results[i].vote_average == 0) {
					voteNotAvialable = "Rating Not Avialable";
				} else {
					voteNotAvialable = data.results[i].vote_average;
				}
				var releaseDateNotAvialable;
				if (data.results[i].release_date == "") {
					releaseDateNotAvialable = "Release Date  Not Avialable";
				} else {
					releaseDateNotAvialable = data.results[i].release_date;
				}

				if (data.results[i].poster_path == null) {
					poster = "/home/akash/Work/workspace-sts-3.9.2.RELEASE/MovieMagic/images/notavilable.jpg";
				} else {
					poster = "http://image.tmdb.org/t/p/w500/"
							+ data.results[i].poster_path;

				}

				var html_code = "<div class='col-lg-8 my-4'>"
						+ "<h4 id='nameofmovie' class='mb-3 text-white'>"
						+ data.results[i].title
						+ "</h4>"
						+ "<div class='blockquote text-muted'>"
						+ "<p id='descriptionofmovie' class='mb-0'>"
						+ data.results[i].overview
						+ "</p>"
						+ "<div class='row my-2'>"
						+ "<div class='col-3'>Release Date-</div>"
						+ "<div id='releasedateofmovie' class='col-9'>"
						+ releaseDateNotAvialable
						+ "</div>"
						+ "</div>"
						+ "<div class='row my-2'>"
						+ "<div class='col-3'>Rating-</div>"
						+ "<div id='ratingofmovie' class='col-9'>"
						+ voteNotAvialable
						+ "</div>"
						+ "</div>"
						+ "</div>"
						+ "<button id='favouritebutton' type='button' onClick=addToFav("
						+ i
						+ ") class='btn btn-sm btn-secondary'>Add To Favourite</button>"
						+ "</div>"
						+ "<div class='col-md-4 align-self-center my-4'>"
						+ "<img id='posterofmovie' class='img-fluid d-block' src='"
						+ poster + "'> </div>";
				document.getElementById('cardcontainerformovie')
						.insertAdjacentHTML('beforeend', html_code);
			}

		}
	};
	xmlHttp.open("GET", url, true);
	xmlHttp.send();

}

function addToFav(i) {
	var xmlhttp = new XMLHttpRequest();
	alert(i);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("favoritesadded").innerHTML = xmlhttp.responseText;
		}
	};
	//values to be sent to servlet
	var params = "moviename=" + data.results[i].title + "&ratings="
			+ data.results[i].vote_average + "&releasedate="
			+ data.results[i].release_date + "&poster=" + poster + "&overview="
			+ data.results[i].overview;
	xmlhttp.open('GET', "http://localhost:8080/MovieMagic/JsonParsing?"
			+ params, true);
	xmlhttp.send();
}

function ShowFavourite() {
	var xmlhttp = new XMLHttpRequest();
	document.getElementById('result').innerHTML = "";
	document.getElementById("cardcontainerformovie").innerHTML = "";
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myarr = JSON.parse(this.responseText);
			for (var i = 0; i < myarr.length; i++) {

				var voteNotAvialable;
				if (myarr[i].rating == 0) {
					voteNotAvialable = "Rating Not Avialable";
				} else {
					voteNotAvialable = myarr[i].rating;
				}
				var releaseDateNotAvialable;
				if (myarr[i].releasedate == "") {
					releaseDateNotAvialable = "Release Date  Not Avialable";
				} else {
					releaseDateNotAvialable = myarr[i].releasedate;
				}

				if (myarr[i].poster == "") {
					movieposter = "/home/akash/Work/workspace-sts-3.9.2.RELEASE/MovieMagic/images/notavilable.jpg";
				} else {
					movieposter = myarr[i].poster;

				}

				var html_code = "<div class='col-lg-8 my-4'>"
						+ "<h4 id='nameofmovie' class='mb-3 text-white'>"
						+ myarr[i].moviename
						+ "</h4>"
						+ "<div class='blockquote text-muted'>"
						+ "<p id='descriptionofmovie' class='mb-0'>"
						+ myarr[i].overview
						+ "</p>"
						+ "<div class='row my-2'>"
						+ "<div class='col-3'>Release Date-</div>"
						+ "<div id='releasedateofmovie' class='col-9'>"
						+ releaseDateNotAvialable
						+ "</div>"
						+ "</div>"
						+ "<div class='row my-2'>"
						+ "<div class='col-3'>Rating-</div>"
						+ "<div id='ratingofmovie' class='col-9'>"
						+ voteNotAvialable
						+ "</div>"
						+ "</div>"
						+ "</div>"
						+ "<button id='favouritebutton' type='button' onClick=removeFromFav("
						+ i
						+ ") class='btn btn-sm btn-secondary'>Remove From Favourite</button>"
						+ "</div>"
						+ "<div class='col-md-4 align-self-center my-4'>"
						+ "<img id='posterofmovie' class='img-fluid d-block' src='"
						+ movieposter + "'> </div>";
				document.getElementById('result').insertAdjacentHTML(
						'beforeend', html_code);
			}

		}
	};
	xmlhttp.open('GET', "http://localhost:8080/MovieMagic/RetriveFromJson?",
			true);
	xmlhttp.send();
}

function removeFromFav(i) {
	alert(i);
}