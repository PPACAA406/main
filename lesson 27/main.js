function showMessage(){
    alert("This message is inside the function");

}

showMessage();
function sum(number1, number2){
    return number1 + number2;

}

console.log(sum(25,5));

function dsFunction(){
    var localVar ="Digital School";
    alert(localVar)
}
dsFunction();

function toCelecius(f){
    return(5/9) * (f-32)
}
console.log("54 fahernheit is equal to" + toCelecius(54)+"celsius");
var result=toCelecius(54);
console.log("54 fahernheit is equal to" + result+"celcius");

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toSeconds(60));

var car={
    name:"Merdeces";
    color:"white";
    year:2020,
    kilometres:0,
    startEngine : function(){
        alert("testtttt")
    }
    get getKilometers(){
        return this.kilometres;
    }
};
console.log(car.getKilometers)

car.setKilometers=100;

console.log(car.getKilometers);



