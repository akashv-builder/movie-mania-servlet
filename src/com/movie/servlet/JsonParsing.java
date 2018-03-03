package com.movie.servlet;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;



@WebServlet("/JsonParsing")
public class JsonParsing extends HttpServlet {
	//global array
	JSONArray jarray = new JSONArray();
	private static final long serialVersionUID = 1L;
	//array of json objects
    public JsonParsing() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//now first we will read the file and then check the count
		JSONObject json = new JSONObject();
		
		//setting response type
		response.setContentType("application/json");
		String moviename = request.getParameter("moviename");
		PrintWriter out = response.getWriter();
		//shows the city added
		out.print("Thank you for adding <b>"+moviename+"</b> to your favorite locations");
		String rating = request.getParameter("ratings");
		String releasedate = request.getParameter("releasedate");
		String poster = request.getParameter("poster");
		String overview = request.getParameter("overview");
		//json object to store key value pairs
		
			json.put("moviename", moviename);
			json.put("rating", rating);
			json.put("releasedate", releasedate);
			json.put("poster", poster);
			json.put("overview", overview);
						
		//if length exceeds 10, warning message is issued
		if(jarray.size() < 10) {
			jarray.add(json);
		}
		
		else {
			System.out.println("You have exceeded your limit");
		}
		
		FileWriter jsonFile=null;
		
		try {
		jsonFile =  new FileWriter("/home/akash/Work/workspace-sts-3.9.2.RELEASE/MovieMagic/favorit.json");
		jsonFile.write(jarray.toString());
		System.out.println(json.toString());
		}catch(Exception e){
			System.out.println("Please enter a valid path where you want to store your json");
		}finally {
			jsonFile.flush();
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}