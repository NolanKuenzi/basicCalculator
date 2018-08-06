"use strict";

var del = function del() {
    calc.answer.value = calc.answer.value.replace(calc.answer.value[calc.answer.value.length - 1], "");
};

var plus_mine = function plus_mine() {
    if (Math.sign(calc.answer.value[0]) === 1 || calc.answer.value === "") {
        calc.answer.value = "-" + calc.answer.value;
    } else {
        calc.answer.value = calc.answer.value.replace("-", "");
    }
};

var solve = function solve() {
    if (calc.answer.value === "") {
        alert("Please Enter Values to Calculate");
    } else {
        try {
            calc.answer.value = eval(calc.answer.value);
        } catch (error) {
            calc.answer.value = "Syntax Error";
        }
    }
};