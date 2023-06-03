//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function increases the value of displayed number by 1.
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "square root" button is clicked.
function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
           var sqroot = Math.sqrt(num);
            document.frmCalc.txtNumber.value = sqroot;
        }
}

//The following function is called when "floor" button is clicked.
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
           var floor = Math.floor(num);
            document.frmCalc.txtNumber.value = floor;
        }
}

//The following function is called when "round" button is clicked.
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
           var round = Math.round(num);
            document.frmCalc.txtNumber.value = round;
        }
}

//The following function is called when "square" button is clicked.
function square() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
           var square = Math.pow(num,2);
            document.frmCalc.txtNumber.value = square;
        }
}


//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Subtract" button is clicked. 
function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtract";
        }
}

//The following function is called when "Multiply" button is clicked. 
function mul() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "mul";
        }
}

//The following function is called when "division" button is clicked. 
function div() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "div";
        }
}

//The following function is called when "power (^)" button is clicked. 
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "power";
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    var total = 0;
        if (!(isNaN(num))) {
            if (calc == "Add"){
               total  = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            else if(calc == "Subtract"){
                 total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            else if(calc == "mul"){
                 total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            else if(calc == "div"){
                 total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
            else if(calc == "power"){
                var power = Math.pow(prevCalc,num);
                document.frmCalc.txtNumber.value = power;
            }
            
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}