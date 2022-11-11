/*Lunchrestaurangen

På denna lunchrestaurang har de alltid samma lunch på samma veckodagar varje vecka. Exempelvis, på torsdagar är det alltid ärtsoppa med pannkakor, på fredagar tacos och så vidare. Du får självklart hitta på egna rätter! På lördag och söndag är det stängt.

I denna övning så ska du börja med att ta reda på vilken veckodag det är idag. Sedan skall du använda switch för att ta visa vilken lunch som serveras just idag.

Skapa en variabel där du sparar veckodag för dagens datum. Variabeln skall enekelt kunna ändras för att simulera olika dagar.

Extra!

Skapa variabeln för dagens datum med funktioner Date() och getDay()
https://www.w3schools.com/jsref/jsref_getday.asp

Här nedan kan du hämta start repo för övningen:
https://classroom.github.com/a/-xu3ZKk1
Tips!

Läs om switch med Javascript på w3schools
*/
let lunch;
let day;
day = new Date().getDay();
//day = 0; //sunday
//day = 1; //monday
//day = 2; //tuesday
//day = 3; //wednesday
//day = 4; //thursday
//day = 5; //friday
//day = 6; //saturday


const day_input = document.getElementById('day_input')
day_selector = () => {
    const day_choice_raw = day_input.value;
    const day_choice = day_choice_raw.toLowerCase();
    switch (day_choice) {
        case "sunday":
            day = 0;
            break;
        case "monday":
            day = 1;
            break;
        case "tuesday":
            day = 2;
            break;
        case "wednesday":
            day = 3;
            break;
        case "thursday":
            day = 4;
            break;
        case "friday":
            day = 5;
            break;
        case "saturday":
            day = 6;
            break;
    }
    lunch_loader();
}

lunch_loader = () => {
    // choose day above 
    switch (day) {
    case 0:
        day = "Sunday";
        lunch = "Hangover Saline Infusion";
        break;
    case 1:
        day = "Monday";
        lunch = "Chicken Poutine";
        break;
    case 2:
        day = "Tuesday";
        lunch = "Fish and Chips";
        break;
    case 3:
        day = "Wednesday";
        lunch = "Sunset Smoothie Bowl";
        break;
    case 4:
        day = "Thursday";
        lunch = "Crepes with Prosciuotto and Feta";
        break;
    case 5:
        day = "Friday";
        lunch = "1.5L Draft Beer Stein and German Sausages with Baguette";
        break;
    case  6:
        lunch = "Just a Tequila Shot";
        day = "Saturday";
    }
    document.getElementById('day').innerHTML = `Today is: ${day}`;
    document.getElementById('special').innerHTML = `Lunch Special: ${lunch}`;
}
lunch_loader();