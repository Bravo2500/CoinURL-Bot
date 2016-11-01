//set all urls (only need to edit this)
var urls = 
[
"13l2wi",
"13l2wh",
"13l2wg",
"13l2wf",
"13l2we"
];

//DO NOT EDIT BELOW
//imacro code
var macro;

macro ="CODE:";
macro +="SET !ERRORIGNORE YES"+"\n";
macro +="TAB T=1"+"\n";
macro +="TAB OPEN"+"\n";
macro +="TAB T=2"+"\n";
macro +="URL GOTO=http://cur.lv/{{id}}"+"\n";

//declare sleep function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

//loop thru macro
for(var i in urls)
{
	var url = urls[i];
	
	//set the url to macro
	iimSet("id",url);
	iimPlay(macro);
	
	//10 to 20 second pause
	var randomtime = 10 + (Math.floor(Math.random()*11));
	sleep(randomtime * 1000);
	
	//close tab
	iimPlay("CODE:TAB CLOSE");
	sleep(1000);
}