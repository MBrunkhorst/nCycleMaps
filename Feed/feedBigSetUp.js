var n2 = "N₂";
var no2 = "NO₂⁻";
var c2h5no = "C₂H₅NO₂";
var nh4 = "NH₄⁺";
var no3 = "NO₃⁻";
var no = "NO";
var n2o = "N₂O";

var selected = nh4;

var button = document.getElementById("moleculeLabel");

var organisms = document.getElementById("organisms");
var card1 = document.getElementById("card1");
var card1Name = document.getElementById("card1Name");
var card1Species = document.getElementById("card1Species");
var card1React1 = document.getElementById("card1React1");
var card1React2 = document.getElementById("card1React2");

var card2 = document.getElementById("card2");
var card2Name = document.getElementById("card2Name");
var card2Species = document.getElementById("card2Species");
var card2React1 = document.getElementById("card2React1");
var card2React2 = document.getElementById("card1React2");
var card3 = document.getElementById("card3");

// Select N2
if (selected == n2) {
    button.innerText = n2;
    organisms.className = "react-tricho";
    card1Name.innerText = "Tricho";
    card1Species.innerText = "Trichodesium";
    card1React1.innerText = n2;
    card1React2.innerText = nh4;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";
}

// Select NO2
if (selected == no2) {
    button.innerText = no2;
    organisms.className = "react-nitrob";
    card1Name.innerText = "NitroB";
    card1Species.innerText = "Nitrobacter";
    card1React1.innerText = no2;
    card1React2.innerText = no3;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";
}

// Select C2H5NO
if (selected == c2h5no) {
    button.innerText = c2h5no;
    organisms.className = "react-sea-turtle react-pelly";
    card1Name.innerText = "Sea Turtle";
    card1Species.innerText = "Eretmochelys";
    card1React1.innerText = c2h5no;
    card1React2.innerText = nh4;

    card2.classList = "visibility-visible";
    card2Name.innerText = "Pelly";
    card2Species.innerText = "Pelagibacter";
    card2React1.innerText = c2h5no;
    card2React2.innerText = nh4;

    card3.classList = "visibility-hidden";
}

// Select NO3
if (selected == no3) {
    button.innerText = no3;
    organisms.className = "react-pseu react-zoe";
    card1Name.innerText = "Pseu";
    card1Species.innerText = "Pseudomonas";
    card1React1.innerText = no3;
    card1React2.innerText = no;
    
    card2.classList = "visibility-visible";
    card2Name.innerText = "Zoe";
    card2Species.innerText = "Zostera";
    card2React1.innerText = no3;
    card2React2.innerText = no;

    card3.classList = "visibility-hidden";
}
// Select NO
if (selected == no) {
    button.innerText = no;
    organisms.className = "react-pseu";
    card1Name.innerText = "Pseu";
    card1Species.innerText = "Pseudomonas";
    card1React1.innerText = no;
    card1React2.innerText = n20;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";
}

//Select N2O
if (selected == n2o) {
    button.innerText = n2o;
    organisms.className = "react-pseu";
    card1Name.innerText = "Pseu";
    card1Species.innerText = "Pseudomonas";
    card1React1.innerText = n2o;
    card1React2.innerText = n2;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";
}


// Select NH4
if (selected == nh4) {
    button.innerText = nh4;
    organisms.className = "react-nitros react-zoe";
    card1Name.innerText = "NitroS";
    card1Species.innerText = "Nitrosomonas";
    card1React1.innerText = nh4;
    card1React2.innerText = no2;

    card2.classList = "visibility-visible";
    card2Name.innerText = "Zoe";
    card2Species.innerText = "Zostera";
    card2React1.innerText = nh4;
    card2React2.innerText = c2h5no;

    card3.classList = "visibility-hidden";
}



