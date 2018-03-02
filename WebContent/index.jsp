<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
  
     <h1 class="display-3 text-capitalize">MovieBiz</h1>
     <p class="lead text-muted">All your movies, one click away. </p>
     
     <input type="text" id="usertext">
     <button type="submit" onClick="getData()">CLICK ME</button>
     <hr>
     <button type="submit" onClick="ShowFavourite()">favorite</button>
     
    <div id="content"></div>
    <div id="favorites"></div>
    <div id="result"></div>
	<script src="index.js" type="text/javascript"></script>
</body>
</html>