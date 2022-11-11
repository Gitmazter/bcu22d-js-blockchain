/*
Beskrivning

Nu skall du skapa en resultatlista som går att använda till valfritt spel.

Det skall dynamsikt gå att lägga till nya spelare till listan. Varje tillagd spelare skall sedan visas med namn samt poäng, börja med 0.
Sedan skall varje spelare ha en “+” och en “-” knapp med vilket du skall kunna öka och minska den spelarens poäng. 
*/


// Constants declaration
const players = [];
const name_input = document.getElementById('name_input');
const scoreboard = document.getElementById('scoreboard_root');


// i == player count
let i = 0;
add_player = () => {

    // Creating and pushing player object
    const p_name = name_input.value;
    let player = {
        'name': p_name,
        'score': 0,
    }
    players.push(player);

    // Creating player elements
    const player_div = document.createElement('div');
    const player_name = document.createElement('h2');
    player_name.innerHTML = p_name;
    const player_score = document.createElement('h2');
    player_score.innerHTML = player['score'];


    // Creating buttons for adding / removing score with event listeners
    // Turned i into constant id to remove bug where only the last player could change scores
    const id = i;
    const add_btn = document.createElement('button');
    add_btn.innerHTML = '+';
    add_btn.addEventListener('click', function() {
        players[id]['score'] +=1;
        player_score.innerHTML = player['score'];
    });

    const sub_btn = document.createElement('button');
    sub_btn.innerHTML = '-';
    sub_btn.addEventListener('click', function() {
        players[id]['score'] -=1;
        player_score.innerHTML = player['score'];
    });

    // Pushing Player Elements To Scoreboard
    scoreboard.appendChild(player_div);
    player_div.appendChild(player_name);
    player_div.appendChild(player_score);
    player_div.appendChild(add_btn);
    player_div.appendChild(sub_btn);
    console.log(players);
    i = i+1;
}