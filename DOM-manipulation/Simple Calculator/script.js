const input_1 = document.getElementById("input1");
const input_2 = document.getElementById("input2");
const addition = document.getElementById("add-btn");
const subtraction = document.getElementById("sub-btn");
const multiplication = document.getElementById("mul-btn");
const division = document.getElementById("div-btn");
const result = document.getElementById("result");

addition.addEventListener( "click", () => {
    if (input_1.value == "" || input_2.value == "") 
    {
        alert("Enter numbers to perform operations");
        return;
    }

    const add_result = Number(input_1.value) + Number(input_2.value);
    
    result.value = add_result;

    input_1.value = "";
    input_2.value = "";
});

subtraction.addEventListener( "click", () => {
    if (input_1.value == "" && input_2.value == "") 
    {
        alert("Enter numbers to perform operations");
        return;
    }

    const sub_result = Number(input_1.value) - Number(input_2.value);
    
    result.value = sub_result;

    input_1.value = "";
    input_2.value = "";
});

multiplication.addEventListener( "click", () => {
    if (input_1.value == "" && input_2.value == "") 
    {
        alert("Enter numbers to perform operations");
        return;
    }

    const mul_result = Number(input_1.value) * Number(input_2.value);
    
    result.value = mul_result;

    input_1.value = "";
    input_2.value = "";
});

division.addEventListener( "click", () => {
    if (input_1.value == "" && input_2.value == "") 
    {
        alert("Enter numbers to perform operations");
        return;
    }

    const div_result = Number(input_1.value) / Number(input_2.value);
    
    result.value = div_result;

    input_1.value = "";
    input_2.value = "";
});