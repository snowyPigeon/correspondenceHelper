// selected button colors
var activeColor = "#CCFFFF"; // changeable value

// set up default button colors
var defaultColor = "#FFCCFF"; // changeable value
document.getElementById("business").style.backgroundColor = defaultColor;
document.getElementById("school").style.backgroundColor = defaultColor;
document.getElementById("friends").style.backgroundColor = defaultColor;
document.getElementById("formal").style.backgroundColor = defaultColor;
document.getElementById("social").style.backgroundColor = defaultColor;
document.getElementById("getRecs").style.backgroundColor = defaultColor;

// initialise button states
var businessOn = false;
var schoolOn = false;
var friendsOn = false;
var formalOn = false;
var socialOn = false;

// Get the greetings and endings
function getRecommendations(){
let chosenContext = getSelections();
// get the json object storing our greetings and endings
const data = require('correspondence.json');
// change the below to get your greetings and endings
/* $('#response').html("Greeting: " + data.current.weather[0].description + ", Temp: " +
						data.current.temp + "C" + ", Temp Feels Like: " + data.current.feels_like + "C" + ", Wind Speed: " +
						new_speed + " MPH" + ", Dew Point: " + data.current.dew_point + "C"); */


}

// Get the chosen context and style
function getSelections(){
	var selections = [];
	if (businessOn == true){
		selections.push("business");
	}
	if (schoolOn == true){
		selections.push("school");
	}
	if (friendsOn == true){
		selections.push("friends");
	}
	if (formalOn == true){
		selections.push("formal");
	}
	if (socialOn == true){
		selections.push("social");
	}
	console.log("You selected: " + selections);
	return selections;
}

function toggleBusiness(){
	var business = document.getElementById("business");
	if (business.style.backgroundColor !== activeColor){
		document.getElementById("business").style.backgroundColor = activeColor;
		document.getElementById("school").style.backgroundColor = defaultColor;
		document.getElementById("friends").style.backgroundColor = defaultColor;
		businessOn = true;
		schoolOn = false;
		friendsOn = false;
	}
	else {
		document.getElementById("business").style.backgroundColor = defaultColor;
		businessOn = false;
	}
}

function toggleSchool(){
	var school = document.getElementById("school");
	if (school.style.backgroundColor !== activeColor){
		document.getElementById("school").style.backgroundColor = activeColor;
		document.getElementById("business").style.backgroundColor = defaultColor;		
		document.getElementById("friends").style.backgroundColor = defaultColor;
		schoolOn = true;
	    businessOn = false;
		friendsOn = false;
	}
	else {
		document.getElementById("school").style.backgroundColor = defaultColor;
		schoolOn = false;
	}
}

function toggleFriends(){
	var friends = document.getElementById("friends");
	if (friends.style.backgroundColor !== activeColor){
		document.getElementById("friends").style.backgroundColor = activeColor;
		document.getElementById("school").style.backgroundColor = defaultColor;
		document.getElementById("business").style.backgroundColor = defaultColor;
		friendsOn = true;
		businessOn = false;
		schoolOn = false;
	}
	else {
		document.getElementById("friends").style.backgroundColor = defaultColor;
		friendsOn = false;
	}
}

function toggleFormal(){
	var formal = document.getElementById("formal");
	if (formal.style.backgroundColor !== activeColor){
		document.getElementById("formal").style.backgroundColor = activeColor;
		document.getElementById("social").style.backgroundColor = defaultColor;
		formalOn = true;
		socialOn = false;
	}
	else {
		document.getElementById("formal").style.backgroundColor = defaultColor;
		formalOn = false;
		
	}
	console.log("formal toggled");
}

function toggleSocial(){
	var social = document.getElementById("social");
	if (social.style.backgroundColor !== activeColor){
		document.getElementById("social").style.backgroundColor = activeColor;
		document.getElementById("formal").style.backgroundColor = defaultColor;
		socialOn = true;
		formalOn = false;
	}
	else {
		document.getElementById("social").style.backgroundColor = defaultColor;
		socialOn = false;
	}
	console.log("social toggled");
}

// Get the chosen style
function getStyle(){
	let styleArray = [formal, social];
	
}

// Set the chosen style
function setStyle(){
	
}

// Get the title
function getTitle(){
	let titleArray = [miss, mr, mrs, ms, mx, doctor];
}

// Set the title
function setTitle(){
	
}

// Event listeners
document.getElementById("business").addEventListener("click", 
toggleBusiness);

document.getElementById("school").addEventListener("click", 
toggleSchool);

document.getElementById("friends").addEventListener("click", 
toggleFriends);

document.getElementById("formal").addEventListener("click", 
toggleFormal);

document.getElementById("social").addEventListener("click", 
toggleSocial);

document.getElementById("getRecs").addEventListener("click", 
getRecommendations);

