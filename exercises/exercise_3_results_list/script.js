let players = [];
let name_input = document.getElementById('new_player_name');
let player_list = document.getElementById('main');

function new_player (){
    let new_name = name_input.value;
    const player = new Object;
    player.name = new_name;
    player.score = 0;
    players.push(player);
    //console.log(players);
    create_new_player();
}

let i = 0;
function create_new_player() {
    for (i; i < players.length ; i++) {
        let player_name = players[i].name;
        let player_score = players[i].score;
        console.log(player_name, player_score);
        let player_element = document.createElement("h2");
        player_element.innerHTML = `${player_name} : ${player_score}`;

        let goal = document.createElement('div');
        goal.innerText = '+';
        goal.setAttribute("id", `add_score_${player_name}`);
        goal.setAttribute("class", "score_btn");

        let penalty = document.createElement('div');
        penalty.innerText = '-';
        penalty.setAttribute("id", `remove_score_${player_score}`);
        penalty.setAttribute("class", "score_btn");

        player_list.appendChild(player_element);
        player_list.appendChild(goal);
        player_list.appendChild(penalty);



        document.getElementById(`add_score_${player.name}`).addEventListener('click' , function() {
            players[i].score ++;
            
        });       

        document.getElementById(`remove_score_${player.name}`).addEventListener('click' , function() {
            players[i].score --;
        });    

    }
}






//unction new_player() {
//   let new_name = name_input.value
//   const player = new Object;
//   player.name = new_name;
//   player.score = 0;
//   players.push(player); 
//   //console.log(players);
//   let new_player_name = player.name;
//   let new_player_score = player.score;
//   //console.log(new_player_name, new_player_score);
//   let player_element = document.createElement("h2");
//
//   player_element.innerHTML = `${new_player_name} : ${new_player_score}`;
//   //console.log(player_element);
//   
//   let goal = document.createElement('div');
//   goal.innerText = '+';
//   goal.setAttribute("id", `add_score_${player.name}`);
//   goal.setAttribute("class", "score_btn");
//
//   let penalty = document.createElement('div');
//   penalty.innerText = '-';
//   penalty.setAttribute("id", `remove_score_${player.name}`);
//   penalty.setAttribute("class", "score_btn");
//
//   player_element.innerHTML = `${new_player_name} : ${new_player_score}`;
//   player_list.appendChild(player_element);
//   player_list.appendChild(goal);
//   player_list.appendChild(penalty);
//
//   document.getElementById(`add_score_${player.name}`).addEventListener('click' , function() {
//       player.score ++;
//       player_element.innerHTML = `${new_player_name} : ${new_player_score}`;
//       console.log(player.score);
//   });
//
//   document.getElementById(`remove_score_${player.name}`).addEventListener('click' , function() {
//       player.score --;
//       player_element.innerHTML = `${new_player_name} : ${new_player_score}`;
//       console.log(player.score);
//   });
//
