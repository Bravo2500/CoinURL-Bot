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
var macro_open, macro_click, macro_close;

macro_open ="CODE:";
macro_open +="SET !ERRORIGNORE YES"+"\n";
macro_open +="TAB T=1"+"\n";
macro_open +="TAB OPEN"+"\n";
macro_open +="TAB T=2"+"\n";
macro_open +="URL GOTO=http://cur.lv/{{id}}";

macro_click ="CODE:";
macro_click +="FRAME F=2"+"\n";
macro_click +="TAG POS=1 TYPE=A ATTR=ID:skip-ad"

macro_close ="CODE:";
macro_close +="TAB CLOSE";

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
	
	//open url
	iimSet("id",url);
	iimPlay(macro_open);
	
	//10 to 20 second pause
	var randomtime = 10 + (Math.floor(Math.random()*11));
	sleep(randomtime * 1000);
	
	//click "skip ad"
	iimPlay(macro_click);
	
	//5 to 15 second pause
	var randomtime = 5 + (Math.floor(Math.random()*11));
	sleep(randomtime * 1000);
	
	//close tab
	iimPlay(macro_close);
	sleep(1000);
}