/*
    Skapa en array som innehåller minst 15 korta ord.
    Använd en for loop som skapar knappar till webbsidan för alla ord. Dvs en knapp per ord.
    När besökaren klickar på ett ord så skall detta ordet läggas till i en ny array, visa inget resultat förutom att tex knappen ändrar färg eller liknande.
    Det skall finnas en fast knapp på sidan där det står “Skriv ut”. Klickar användaren på denna knapp så skall de ord som tidigare klickats på (som finns i den nya arrayn) skrivas ut som en mening på sidan.

    Bonus:
    Skapa ett formulär där besökaren skriver en siffra ovanför orden.
    Slumpa sedan ut en mening med så många ord som besökaren anget när besökaren klickar på knappen “Skriv ut”.
*/

const words = [
    'great',
    'balls',
    'magic',
    'laptop',
    'beach',
    'cookie',
    'smoke',
    'forest',
    'cheese',
    'chair',
    'fire',
    'marshmallow',
    'cook',
    'barbeque',
    'nice',
    'man',
];

// Values for poem maker
let print_string = ' ';
const root = document.getElementById('root');
const output_field = document.getElementById('output');

// Values for randomizer
const length_input = document.getElementById('length_input');

// function to create buttons with word words[i]
// set attribute ('class', 'word_btn');
// set attribute ('type', 'button');
// set attribute onClick='choose_word();
create_buttons = () => {
    for (i = 0; i < words.length; i++) {
        const button = document.createElement('button');
        button.setAttribute('class', 'word_btn');
        button.setAttribute('type', 'button');
        button.setAttribute('onClick', 'choose_word()');
        button.innerText = words[i];
        button.style.backgroundColor = 'green';
        root.appendChild(button);

        button.addEventListener('click', function()  {
            const btn_txt = button.innerHTML;
            //console.log(btn_txt);
            print_string += btn_txt;
            print_string += ' ';
            button.style.backgroundColor = 'red';
            button.style.color = 'white';
            //console.log(print_list);
        });
    }
}
create_buttons();

//function to print the selected words to H2 id 'output'
print = () => {
    output_field.innerHTML = print_string;
}

// funtion to create random assortment of words from list
// take input and display error msg if value greater than words.length
// 
randomize = () => {
    const length_value = length_input.value;

    //console.log(length_value);  
    //console.log(words.length);

        if (length_value >= 1 && length_value <= words.length) {
            print_string = ' ';
            for (i = 0; i < length_value; i++) {
                let random_value = Math.floor(Math.random() * words.length);
                console.log(random_value);
                print_string += words[random_value];
                print_string += ' ';
            }
            output_field.innerHTML = print_string;
        } else {
            output_field.innerHTML = 'This number is either not a number or less than 1 or too large, write a number between 1 and 15';
        }

}



//working but hacky
reset = () => {
    location.reload();
}