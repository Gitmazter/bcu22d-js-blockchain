/*Beskrivning

En av de viktigaste funktionerna att förstå oavsett programmeringsspråk är att ta reda på om något är sant eller falskt.

Skapa en ny html-sida med en extern Js-fil.

På html-sidan så skall det finnas ett inputfält samt en knapp. I inputfältet så uppmanar vi besökaren att fylla i sin ålder. Sedan skall vi kolla om besökaren är för ung (under 18 år), precis rätt (18 eller över - yngre än 65 år) eller för gammal (65 år eller över).

När vi klickar på knappen så skall vi kunna fånga värdet som en variabel och sedan uppdatera sidan efter att vi kollat det lämnade värdet.

I din Js-fil så skall du skriva en if sats som kollar om det är en siffra vi får som input, och sedan kolla och skriv ut om besökaren är för ung, för gammal eller precis rätt!

Här nedan kan du hämta start repo för övningen:
https://classroom.github.com/a/mF1vO0Ow*/

const age_input = document.getElementById('age_input');
const function_field = document.getElementById('function_field');
const reply = document.getElementById('reply');

age_check = () => {
    const age = age_input.value;
    //console.log(age);

    if (age < 18) {
        reply.innerHTML = 'Damn shawty u too young';
    } else if (age >= 18 && age < 65) {
        reply.innerHTML = 'Ayo hit me up this weekend';
    }  else {
        reply.innerHTML = 'Need help to cross the roadizzle?';
    }
    
}