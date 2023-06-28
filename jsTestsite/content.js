function al() {
    alert("This is the alert box. Its shown using JavaScript");
}

function font() {
    var colour = document.getElementById("colour");
    colour.style.color = "pink";

    var colour2 = document.getElementById("colour2");
    colour2.style.color = "red";

    var colour3 = document.getElementById("colour3");
    colour3.style.color = "orange";
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function Loops() {
    var result = '';
    var charactersLength = characters.length;
    let counter = 0;random()
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math * charactersLength));
        counter++;
    }
    return result;
}

function txtLoop() {
    var changetxt = Loops();
    document.getElementById("txtLoop").innerHTML = changetxt;
}