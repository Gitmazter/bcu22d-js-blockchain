/* Beskrivning
Uppgiftsbeskrivning:

Du skall utveckla en “Att göra lista”. Dvs en applikation med vilket du och andra (så småningom) kan hantera sina att göra listor digitalt.
Det skall så småningom gå att lägga till nya listor, saker och ta bort och redigera listor.

Kravllista, del 1:

    Skapa en layout och struktur för din GTD-app, utgå från SPA principerna.
    Lägg till en array som innehåller din lista och några punkter som skrivs ut på sidan.
    Det skall finnas ett formulär med vilket det ska gå att skriva och lägga till nya punkter till listan.
    Vid varje punkt på listan så skall det finnas en ikon med vilket jag kan klicka och markera den punkten som slutförd och då skall den tas bort från listan.
 */

const to_do = [
    'Make this program',
    'Have a shower beer',
    'Go to work',
];
const to_do_list = document.getElementById('to_do_list');
const input_value = document.getElementById('input_value')


// Create text element and a checkbox for completion.
item_count = 0;
create_list_items = () => {
    while (item_count < to_do.length) {
        const to_do_div = document.createElement('div');
        const id = item_count;
        to_do_div.setAttribute('id', id);
        to_do_div.setAttribute('class', 'to_do_div');
        to_do_list.appendChild(to_do_div);


        const checkbox = document.createElement('button');
        checkbox.setAttribute('class', 'to_do_checkbox');
        checkbox.addEventListener('click', function() {
            const element = document.getElementById(id);
            to_do_list.removeChild(element);
        });

        const to_do_element = document.createElement('h3');
        to_do_element.innerHTML = to_do[item_count];

        to_do_div.appendChild(checkbox);
        to_do_div.appendChild(to_do_element);
        item_count ++;
    }
}
create_list_items();

task_complete = () => {

}

add_item = () => {
    const new_item = input_value.value;
    to_do.push(new_item);
    create_list_items();
}