// Use insert() function to insert the number in textview.
function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

// Removes the end part of the values put into textview.
function backSpace() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

// Removes all of the values put into textview by giving textview an emtpy string as it's value.
function clearAll(){
    var exp = document.form.textview.value;
    document.form.textview.value = ""; 
}

// Calculates the percentage of inserted number and displays it in textview.
function percentage() { 
    var exp = (document.form.textview.value/100);
    document.form.textview.value = exp;
}

// Calculates the trig functions tan, sin, and cos for the inserted number and displays it in textview.
function tan() {
    document.form.textview.value = Math.tan(document.form.textview.value);
}

function sin() {
    document.form.textview.value = Math.sin(document.form.textview.value);
}

function cos() {
    document.form.textview.value = Math.cos(document.form.textview.value);
}

// Use equal() function to return the result based on passed values.
function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp)
    }
}