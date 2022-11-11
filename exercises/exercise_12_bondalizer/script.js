/* My name is Bond, James Bond!
Uppgiften

Skapa en kontaktlista (object array) med minst 4 personer. 
Den skall innehålla minst för och efternamn som egna key-pair-values.

Använd prompt() eller skapa ett formulär och en knapp via vilket besökaren 
kan skriva i ett förnamn på en person. Sök i listan om du hittar en träff. 
I så fall skriv ut på sidan eller i konsollen en hälsning: 
"His name is Efternamn, Förnamn Efternamn!". 
Hittar du ingen träff skriv istället "Agent not found!".
Pseudokod

Skriv först uppgiften som pseudokod. 
Hur skulle flödet för applikationen se ut? 
Vilka steg och uppgifter behöver du göra?
Lösningen

Lös uppgiften med riktig kod!
*/
const agents = [
    {first_name:"James", last_name:"Bond"},
    {first_name:"Kim", last_name:"Possible"},
    {first_name:"Johnny", last_name:"English"},
    {first_name:"Snoop", last_name:"Dogg"}
]

const input = document.getElementById('name_input');
const body = document.getElementById('body');

function agent_find () {
    let name_query = input.value;
    //console.log(name_query);

    const found_agent = agents.find(function(agent, index) {
        if(agent.first_name == name_query) {
            return true;
        } 
    });

    console.log(found_agent);

    if (found_agent) {
        let agent_greeting = document.createElement('h3');
        agent_greeting.innerText = `Their name is ${found_agent.last_name}, ${found_agent.first_name} ${found_agent.last_name}`;
        body.appendChild(agent_greeting);
    } else {
        let agent_greeting = document.createElement('h3');
        agent_greeting.innerText = `Cannot find this agent`;
        body.appendChild(agent_greeting);
    }
 
}
