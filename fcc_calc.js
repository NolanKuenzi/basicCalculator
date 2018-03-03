
let del = () => {
    calc.answer.value = calc.answer.value.replace(calc.answer.value[calc.answer.value.length-1], "");
};

let plus_mine = () => {
    if (Math.sign(calc.answer.value[0]) === 1 || calc.answer.value === "") {
        calc.answer.value = "-" + calc.answer.value;
    } else {
        calc.answer.value = calc.answer.value.replace("-", "");
    }
};

let solve = () => {
    if (calc.answer.value === "") {
        alert("Please Enter Values to Calculate");
    } else {
        try { 
            calc.answer.value = eval(calc.answer.value);
        }
        catch(error) {
            calc.answer.value = "Syntax Error";
        }
    } 
};