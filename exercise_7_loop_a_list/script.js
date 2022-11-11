/*
Beskrivning

Att skriva en loop är en av de mest grundläggande teknikerna vi behöver kunna i alla programmeringsspråk vi jobbar med. Med en loop kan vi få vårt program att upprepa en uppgift från till exempel en telefonlista från början till slut.
Vi ber helt enkelt vårt program att ta alla namn på listan, skriva ut ett namn, ett telefonnummer och en mailadress och gå sedan vidare till nästa namn till listan är slut.

Skapa en html sida med en extern Js-fil.
I din Js-fil skapa en array[] med minst 5 st saker du tycker är kul.
Skriv en for loop som skriver ut din array till html-sidan som en lista <ul> med varje element i din array som en <li>.

Extra!

Gör varannan <li> med annan bakgrundsfärg.

Börja sidan med en tom lista. Lägg istället till dina saker dynamiskt via ett input fält.

Här nedan kan du hämta ett start template till övningen:
https://classroom.github.com/a/LJUeZI39

Tips!

Skapa listor med <ul> och <li> på w3schools
https://www.w3schools.com/html/html_lists.asp

Loopa med en array
https://www.youtube.com/watch?v=O8rdUiRO9NE&feature=youtu.be
 */

const fun_things = [
    'coding',
    'rapping',
    'motorcycles',
    'cooking',
    'bartending',
    'learning',
    'electronics', 
    'windsurfing',
];

const root = document.getElementById('root');
const ul = document.createElement('ul');
let li = document.createElement('li');

ul.innerHTML = 'List of fun stuff';
ul.setAttribute('class', 'ul_bg');
root.appendChild(ul);

add_to_list = () => {
    for (i = 0; i < fun_things.length; i++) {
        const li = document.createElement('li');
        li.innerText = fun_things[i];
        if (i % 2 == 0) {
            li.setAttribute('class', 'bg1');
        } else {
            li.setAttribute('class', 'bg2');
        }
        ul.appendChild(li);
    }
}

add_to_list();