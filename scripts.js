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
let title = document.getElementById("titles").value;
let firstName = document.getElementById("fname").value;
let surname = document.getElementById("sname").value;
let chosenContext = getSelections();
var data = {
"title": ["Miss", "Mr", "Mrs", "Ms", "Mx", "Doctor"],
"formal": {
	"greetings": [
		{"business": ["Dear", "For The Attention Of", "To whom it may concern"]},
		{"school": ["Dear", "For The Attention Of"]},
		{"friends": ["Dear", "Dearest"]}
		],
	"endings": [
		{"business": ["Yours Sincerely", "Yours Faithfully"]},
		{"school": ["Yours Sincerely", "Yours Faithfully"]},
		{"friends": ["Your most loyal friend", "Your humble and obedient servant", "Your friend"]}
]},
"social": {
	"greetings": [
		{"business": ["Hello", "Hi", "Good morning", "Good afternoon"]},
		{"school": ["Hello", "Hi", "Good morning", "Good afternoon"]},
		{"friends": ["Hello", "Hi", "Hey", "Good morning", "Good afternoon"]}
		],
	"endings": [
		{"business": ["Regards", "Kind regards"]},
		{"school": ["Regards", "Kind regards"]},
		{"friends": ["Best wishes", "Take care", "Catch you later"]}
	]
}
};

// change the below to get your greetings and endings

if (chosenContext.includes("formal") && chosenContext.includes("business")){
	console.log("includes works");
	let greetings = data.formal.greetings[0].business.length;
	console.log(greetings);
	for (var i = 0; i < greetings; i++)
	{
		if ((firstName == "") && (surname == "")){
			if (data.formal.greetings[0].business[i].includes("To whom it may concern")){
			$(".responses").append('<br><textarea id="' + i + '" rows="2" cols="25" readonly>' + data.formal.greetings[0].business[i] + '</textarea><button onclick="clipboard(' + i + ')">Copy text</button>');
		}
		else {
		
		}
		}
		else {
			if (data.formal.greetings[0].business[i].includes("To whom it may concern")){
			
			}
			else {
				$(".responses").append('<br><textarea id="' + i + '" rows="2" cols="25" readonly>' + data.formal.greetings[0].business[i] + " " + title + " " + firstName + " " + surname + '</textarea><button onclick="clipboard(' + i + ')">Copy text</button>');
			}
		}
		

		
	}
	let endings = data.formal.endings[0].business.length;
	console.log(endings);
	for (var i = 0; i < endings; i++)
	{
		var j = greetings + i;
		console.log("value of j: " + j);
		$(".responses").append('<br><textarea id="' + j + '" rows="2" cols="25" readonly>' + data.formal.endings[0].business[i] + '</textarea><button onclick="clipboard(' + j + ')">Copy text</button>');
	}
}
}

// From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard
function clipboard(input) {
  var copyText = document.getElementById(input);
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
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


