var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");


button.onclick= function(){
    text.innerHTML = input.value;
}


// var text= "The best school in the world is Digital School";
// var result = text.search("Digital School");
// document.getElementById("result1").innerHTML=result;



// var text= "The best school in the world is Digital School";
// var result = text.search(/Digital School/);
// document.getElementById("result2").innerHTML=result;



// var text= "The best school in the world is Digital School";
// var result = text.replace(/Digital School/,"Another School");
// document.getElementById("result3").innerHTML=result;



//var text= "abcdef";
//var regex=new RegExp('abc');
//document.getElementById("result4").innerHTML=regex.test(text);

//var text= "My school is the best school in the world";
//var regex= /school/g;
//document.getElementById("result5").innerHTML=text.matches(regex)

//var text="Digital school is the best school in the world";
//var regex= /i/g;
//document.getElementById("result6").innerHTML=text.matches(regex);

//var text="Digital school is the best school in the world";
//var regex= /[abc]/g;
//document.getElementById("result7").innerHTML=text.matches(regex);

//var text="Digital school is in top 10 schools in the world";
//var regex= /[0-9]/g;
//document.getElementById("result8").innerHTML=text.matches(regex);

var text="my school is the best school in the world";
var regex/(top|best|school)/g;
document.getElementById("result9").innerHTML=text.match(regex)