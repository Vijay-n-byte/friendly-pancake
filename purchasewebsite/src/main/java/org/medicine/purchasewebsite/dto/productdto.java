package org.medicine.purchasewebsite.dto;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

public class productdto {
    private String productname;
	private String description;
	private int cost;
	private String category;
	private String timings;
	private String language;
	private int totalseats;
	private String day;
	
//	private MultipartFile img;

public productdto() {
	super();
}
public String getProductname() {
	return productname;
}
public void setProductname(String productname) {
	this.productname = productname;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public int getCost() {
	return cost;
}
public void setCost(int cost) {
	this.cost = cost;
}
public String getCategory() {
	return category;
}
public void setCategory(String category) {
	this.category = category;
}
public String getTimings() {
	return timings;
}
public void setTimings(String timings) {
	this.timings = timings;
}
public String getLanguage() {
	return language;
}
public void setLanguage(String language) {
	this.language = language;
}
public int getTotalseats() {
	return totalseats;
}
public void setTotalseats(int totalseats) {
	this.totalseats = totalseats;
}
public String getDay() {
	return day;
}
public void setDay(String day) {
	this.day = day;
}
@Override
public String toString() {
	return "productdto [productname=" + productname + ", description=" + description + ", cost=" + cost + ", category="
			+ category + ", timings=" + timings + ", language=" + language + ", totalseats=" + totalseats + ", day="
			+ day + "]";
}
public productdto(String productname, String description, int cost, String category, String timings, String language,
		int totalseats, String day) {
	super();
	this.productname = productname;
	this.description = description;
	this.cost = cost;
	this.category = category;
	this.timings = timings;
	this.language = language;
	this.totalseats = totalseats;
	this.day = day;
}





	

    
    
	
	
}
