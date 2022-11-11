let input_one = document.getElementById("input_1");
let num_one = 0; // is defined by float_finder
let input_two = document.getElementById("input_2");
let num_two = 0; // is defined by float_finder
console.log(input_one, input_two);

const operators = document.querySelectorAll('#operators div');
let chosen_operator = undefined; // is defined in for loop under Float_finder;
let result;


// I need:
// a function to parse either int or float.
// check for index of . to decide. (if parse float, else parse int)

function float_finder() {
    
    if (input_one.value.indexOf(".") || input_one.value.indexOf(",")) {
        num_one = parseFloat(input_one.value);
    } else {
        num_one = parseInt(input_one.value);
    }

    if (input_two.value.indexOf(".") || input_two.value.indexOf(",")) {
        num_two = parseFloat(input_two.value);
    } else {
        num_two = parseInt(input_two.value);
    }
}


// Function to choose the operator
for (i = 0; i < operators.length; i++) {
    let operator = operators[i].innerText;
    //console.log(operator);
    operators[i].addEventListener('click', function() {
        chosen_operator = operator;
        //console.log(chosen_operator);
    });
}


// Function for Dropdown Menu
let opbool = 0;
function operator_dropdown () {
    let dropdown = document.getElementById('operators');
    
    if (opbool == 0) {
        dropdown.style.display = 'block';
        opbool++;
        //console.log(opbool);
    } else {
        dropdown.style.display = 'none';
        opbool--;
        //console.log(opbool);
    }
}

// Function to add calculations under Calculator
let list_parent = document.getElementById('calc_list');
let list_items = [];
function list_maker() {
    let new_item = `${num_one} ${chosen_operator} ${num_two} = ${result}`;
    let li = document.createElement("li");
    li.innerHTML = new_item;
    list_parent.appendChild(li);
}

document.getElementById('calculate').addEventListener('click' , function() {
    //console.log("this will calc");
    float_finder();
    //console.log(num_one, num_two);
    //console.log(chosen_operator);
    switch (chosen_operator) {
        case '+':
            result = num_one + num_two;
            //console.log(result);// push to list under calculator with nums and chosen op ex 5+10=15
            list_maker();
            break;
        case '-':
            result = num_one - num_two;
            //console.log(result);// push to list under calculator with nums and chosen op ex 5+10=15
            list_maker();
            break;
        case '/':
            result = num_one / num_two;
            //console.log(result);// push to list under calculator with nums and chosen op ex 5+10=15
            list_maker();
            break;
        case 'x':
            result = num_one * num_two;
            //console.log(result); // push to list under calculator with nums and chosen op ex 5+10=15
            list_maker();
            break;  
    }      
});

// A dropdown with operators
// A calculate! Button
// A switch statement for operators
// Write all finished calculations under the calculator in a list
// List does not need to save between sessions
