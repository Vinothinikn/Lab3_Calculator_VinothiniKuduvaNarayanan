//Global variables
var preNumber = 0;
var operator = "";

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function appendNumber(number) {
   document.getElementById("result").value += number;
  }

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var input = parseFloat(document.getElementById("result").value);
        if (!(isNaN(input))) {
            input--;
            document.getElementById("result").value = input;
        }
}

//The following function increases the value of displayed number by 1.
function increment() {
    var input = parseFloat(document.getElementById("result").value);
        if (!(isNaN(input))) {
            input++;
            document.getElementById("result").value = input;
        }
}

//The following function is called when "square root" button is clicked.
function sqrt() {
    var input = parseFloat(document.getElementById("result").value);
        if (!(isNaN(input))) {
           var sqroot = Math.sqrt(input);
           document.getElementById("result").value = sqroot;
        }
}

//The following function is called when "floor" button is clicked.
function floor() {
    var input = parseFloat(document.getElementById("result").value);
        if (!(isNaN(input))) {
           var floor = Math.floor(input);
           document.getElementById("result").value = floor;
        }
}

//The following function is called when "round" button is clicked.
function round() {
    var input = parseFloat(document.getElementById("result").value);
        if (!(isNaN(input))) {
           var round = Math.round(input);
           document.getElementById("result").value = round;
        }
}

//The following function is called when "square" button is clicked.
function square() {
    var input = parseFloat(document.getElementById("result").value);
        if (!(isNaN(input))) {
           var square = Math.pow(input,2);
           document.getElementById("result").value= square;
        }
}

function performOperation(operand){
    var input = parseFloat(document.getElementById("result").value);
    if (!(isNaN(input))) {
        preNumber = input;
        document.getElementById("result").value = "";  
        if(operand == "+"){
            operator = "Add";
        } 
        else if(operand == "-"){
            operator = "Subtract";
        }else if(operand == "*"){
            operator = "mul";
        }
        else if(operand == "/"){
            operator = "div";
        }
        else if(operand == "^"){
            operator = "power";
        }
    }
}
//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var input = parseFloat(document.getElementById("result").value);
    var total = 0;
        if (!(isNaN(input))) {
            if (operator == "Add"){
               total  = preNumber + input;
               document.getElementById("result").value = total;
            }
            else if(operator == "Subtract"){
                 total = preNumber - input;
                 document.getElementById("result").value = total;
            }
            else if(operator == "mul"){
                 total = preNumber * input;
                 document.getElementById("result").value = total;
            }
            else if(operator == "div"){
                 total = preNumber / input;
                 document.getElementById("result").value = total;
            }
            else if(operator == "power"){
                 total = Math.pow(preNumber,input);
                document.getElementById("result").value = total;
            }
            
}}

function clear() {
	document.getElementById("result").value  = "";
	preNumber = 0;
	operator = "";
}