<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- PAGE settings -->
<link rel="icon"
	href="https://templates.pingendo.com/assets/Pingendo_favicon.ico">
<title>Movie Mania</title>
<meta name="description"
	content="Wireframe design of a landing page by Pingendo">
<meta name="keywords"
	content="Pingendo bootstrap example template wireframe landing">
<meta name="author" content="Pingendo">
<!-- CSS dependencies -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	type="text/css">
<link rel="stylesheet" href="wireframe1.css">
</head>

<body>

	<nav class="navbar navbar-expand-lg navbar-light bg-dark"> <a
		id="textcolourwhite" class="navbar-brand font-weight-bold one"
		href="../Html/index.html">FlightGo.com</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent" aria-expanded="false"
		aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<div class="btn-group col-6" role="group" aria-label="Basic example">
			<button type="button" class="btn btn-secondary">Home</button>
			<button type="button" class="btn btn-secondary"
				onClick="ShowFavourite()">Show Favorites</button>
			<button type="button" class="btn btn-secondary">Contact Us</button>
		</div>
	</div>
	</nav>
	<div class="container-fluid bg-info">
		<div class="row">
			<div class="mx-auto text-center col-md-6">
				<h3 class="display-4 my-3">Movie Mania</h3>
				<p class="lead text-primary">Movie Mania is a wonderful app to
					catch all the hollywood and bollywood movies at a single place and
					watch their trailers to have a glimpse of the movie. If you are a
					movie maniac, then you are at the right place.</p>
			</div>
		</div>
		<div class="mx-auto text-center col-md-6">
			<div id="imaginary_container">
				<div class="input-group stylish-input-group">
					<input id="usertext" type="text" class="form-control"
						placeholder="Search Movie"> <span
						class="input-group-addon">
						<button class="btn btn-link my-2 my-sm-0" type="submit"
							onClick="getData()">
							<i class="fa d-inline fa-lg fa-search text-primary"></i>
						</button>
					</span>

				</div>
			</div>
		</div>
		</br> </br>

	</div>
	<div id="favoritesadded">Alert if fav is added</div>
	<div class="py-5 bg-primary">
		<div class="container">
			<div id="cardcontainerformovie" class="row"></div>
			<div id="result" class="row"></div>
		</div>
	</div>
	<div class="py-5">
		<div class="container-fluid">
			<div class="row">
				<div class="mx-auto text-center col-md-6">
					<h4 class="mb-3">
						<b>Bold Heading 4</b>
					</h4>
					<div class="carousel slide" data-ride="carousel">
						<div class="carousel-inner bg-light" role="listbox">
							<div class="carousel-item p-5 active">
								<div class="blockquote text-muted mb-0 px-2">
									<p class="mb-0">#1 Blockquoute - Lorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore.</p>
									<div class="blockquote-footer">Someone famous in My
										memories</div>
								</div>
							</div>
							<div class="carousel-item p-5">
								<div class="blockquote text-muted mb-0 px-">
									<p class="mb-0">#2 Blockquoute - Lorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore.</p>
									<div class="blockquote-footer">Someone famous in My
										memories</div>
								</div>
							</div>
							<div class="carousel-item p-5">
								<div class="blockquote text-muted mb-0 px-">
									<p class="mb-0">#3 Blockquoute - Lorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore.</p>
									<div class="blockquote-footer">Someone famous in My
										memories</div>
								</div>
							</div>
						</div>
						<a class="carousel-control-prev" href="#carouselExampleCaptions"
							role="button" data-slide="prev"> <span
							class="carousel-control-prev-icon" aria-hidden="true"></span> <span
							class="sr-only">Previous</span>
						</a> <a class="carousel-control-next" href="#carouselExampleCaptions"
							role="button" data-slide="next"> <span
							class="carousel-control-next-icon" aria-hidden="true"></span> <span
							class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-info p-4">
		<div class="container">
			<div class="row">
				<div class="p-0 col-lg-4 col-md-6">
					<img class="img-fluid"
						src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDW8nO9JhT_pEjebobq9pgUF2cEp0EUb1I&amp;markers=folsom+Ave+san+francisco&amp;center=folsom+Ave+san+francisco&amp;zoom=16&amp;size=640x450&amp;sensor=false&amp;scale=2">
				</div>
				<div class="col-md-5 align-self-center p-4 offset-md-1">
					<h4>Heading</h4>
					<p class="mb-4 text-primary">
						795 Folsom Ave, Suite 600 <br>San Francisco, CA 94107 <br>
						<abbr title="Phone">P:</abbr> (123) 456-7890
					</p>
					<div class="row text-center">
						<div class="col-md-2 col-3">
							<a href="#" target="_blank"><i
								class="fa fa-facebook text-primary fa-2x"></i></a>
						</div>
						<div class="col-md-2 col-3">
							<a href="#" target="_blank"><i
								class="fa fa-twitter text-primary fa-2x"></i></a>
						</div>
						<div class="col-md-2 col-3">
							<a href="#" target="_blank"><i
								class="fa fa-instagram text-primary fa-2x"></i></a>
						</div>
						<div class="col-md-2 col-3">
							<a href="#" target="_blank"><i
								class="fa text-primary fa-2x fa-pinterest-p"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-dark py-3">
		<div class="container">
			<div class="row d-flex justify-content-between">
				<div class="col-lg-4 col-md-6">
					<p class="text-secondary mb-0">Copyright - Lorem ipsum dolor
						sit amet</p>
				</div>
				<div class="col-lg-4 col-md-6">
					<p class="text-secondary mb-0">2018 - Lorem ipsum dolor sit
						amet</p>
				</div>
			</div>
		</div>
	</div>
	<script src="index.js" type="text/javascript"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
		integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
		crossorigin="anonymous"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
		integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
		crossorigin="anonymous"></script>
</body>

</html>
