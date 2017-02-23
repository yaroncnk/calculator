$(document).ready(function(){
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    var answer = "";
    var equation ="";
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
		number = $(this).text();
		equation = equation + number;
		totaldiv.text(equation);
    });
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		equation = equation + operator;
		number = "";
		totaldiv.text(equation);
    });
    $("#clear,#clearall").click(function(){
		number = "";
		equation ="";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
			answer = "";
			equation ="";
		}
    });
    $("#equals").click(function(){
	 	/* if (operator === "+"){
			answer = (parseInt(newnumber, 10) + parseInt(number,10)).toString(10);
		} else if (operator === "-"){
			answer = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);
		} else if (operator === "/"){
			answer = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			answer = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
		} */
		answer = eval(equation);
		totaldiv.text(answer);
		answer ="";
		number = "";
		newnumber = "";
		equation = "";
    });
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#one").click();
       } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 46) {
            $("#clearall").click();
        } else if (keycode === 8) {
            $("#clear").click();
        } else if (keycode === 13) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        } else if (keycode === 47) {
            $("#divide").click();
        } else if(keycode === 190) {
            $("dot").click();
        }
        else if(keycode === 219) {
            $("bracketL").click();
        }
        else if(keycode === 221) {
            $("bracketR").click();
        }
    });
});