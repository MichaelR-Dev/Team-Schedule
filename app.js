const team = ["-","Brent","Carlos","Chris","Devin","Eric", "ET", "Jesse","Joey","Jovanny","Keyshawn","Lily","Marco","Marcus","MJ","MR","Ty"]
const selected = []

let workSelectors = document.getElementsByClassName("workers");
let dateSelector = document.getElementById("date");

let date = new Date();
let today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
'-' + date.getDate().toString().padStart(2, 0);

dateSelector.setAttribute('value', today);

for (const element of workSelectors) {
    team.forEach(member => {
        console.log(member);

        let option = new Option(member, member);
        option.onclick = selectMember;
        
        element.appendChild(option)
    }); 
}