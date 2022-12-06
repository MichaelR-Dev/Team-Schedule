const team = ["-", "N/A", "Brent","Carlos","Chris","Devin","Eric", "ET", "Jesse","Joey","Jovanny","Keyshawn","Lily","Marco","Marcus","MJ","MR","Ty", "Ms. Wanda"]
const selected = []

let workSelectors = document.getElementsByClassName("workers");
let dateSelector = document.getElementById("date");
let trainerSelector = document.getElementsByClassName("trainerButton");

let date = new Date();
let today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
'-' + date.getDate().toString().padStart(2, 0);

dateSelector.setAttribute('value', today);

for (const element of workSelectors) {
    team.forEach(member => {
        console.log(member);

        let option = new Option(member, member);
        
        element.appendChild(option)
    }); 
}

function addTrainer (e) {
    const newElement = document.createElement('select');

    newElement.name = "worker";
    newElement.class = "workers"

    team.forEach(member => {
        console.log(member);

        let option = new Option(member, member);
        
        newElement.appendChild(option)
    });

    e.outerHTML = newElement.outerHTML;
}