const input = document.getElementById('input');

capitalize = () => {
    let input_string = input.value;
    //console.log(input_string);
    let output_string = input_string.toUpperCase();
    //console.log(output_string);
    input.value = output_string;
}