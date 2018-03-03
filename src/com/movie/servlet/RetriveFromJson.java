package com.movie.servlet;

import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@WebServlet("/RetriveFromJson")
public class RetriveFromJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public RetriveFromJson() {
        super();

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	PrintWriter out = response.getWriter();
    	JSONParser parser = new JSONParser(); 
    	JSONObject obj = new JSONObject();
    	JSONArray arr = new JSONArray();
    	try {
				arr = (JSONArray)parser.parse(new FileReader("/home/akash/Work/workspace-sts-3.9.2.RELEASE/MovieMagic/favorit.json"));
				out.println(arr);	
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}