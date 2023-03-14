//Telling the console that we're setting up CAPI. If this doesn't show up, then nothing in here will. 
console.log("Setting up CAPI");

var preventRecursion = false;

function capiHandler(name, value) {
    if (preventRecursion) {
        return;
    }

    preventRecursion = true;

    switch (name) {
        case 'moleculeSelected':

            switch (value) {
                case "n2":
                    break;
                case "no2":
                    break;
                case "c2h5no":
                    break;
                case "nh4":
                    break;
                case "no3":
                    break;
                case "no":
                    break;
                case "n2o":
                    break;
            }
            break;

        default:
            console.log(name, value);
            break;
    }
    preventRecursion = false;
}


var capi = {
    defaults: {
        moleculeSelected: "c2h5no",
    },

    exposeWith: {
        moleculeSelected: {
            alias: "molecule",
            allowedValues: [
                "n2",
                "no2",
                "c2h5no",
                "nh4",
                "no3",
                "no",
                "n2o",
            ],
        },
    },

}

var feedBig = new simcapi.CapiAdapter.CapiModel(capi.defaults);

function addListener(key) {
    feedBig.on("change:" + key, (feedBig, value) => {
        capiHandler(key, value);
    })
}

// 
var item, key;
for (key in capi.defaults) {
    item = capi.exposeWith[key];

    simcapi.CapiAdapter.expose(key, feedBig, item);
    addListener(key);
}

// This needs to be here, its what tells the CAPI to do the thing
simcapi.Transporter.notifyOnReady();

var molecule = feedBig.get("moleculeSelected");
console.log(molecule);


var n2 = "N₂";
var no2 = "NO₂⁻";
var c2h5no = "C₂H₅NO₂";
var nh4 = "NH₄⁺";
var no3 = "NO₃⁻";
var no = "NO";
var n2o = "N₂O";

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

var trichoPath = document.getElementById("tricho-path-span");
var pseuPath = document.getElementById("pseu-path-span");
var pellyPath = document.getElementById("pelly-path-span");
var seaTurtlePath = document.getElementById("sea-turtle-path-span");
var nitroSPath = document.getElementById("nitros-path-span");
var nitroBPath = document.getElementById("nitrob-path-span");
var zoePath = document.getElementById("zoe-path-span");

// Select N2
if (molecule == "n2") {
    button.innerText = n2;
    organisms.className = "react-tricho";
    card1Name.innerText = "Tricho";
    card1Species.innerText = "Trichodesium";
    card1React1.innerText = n2;
    card1React2.innerText = nh4;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";

    trichoPath.innerText = nh4;
}

// Select NO2
if (molecule == "no2") {
    button.innerText = no2;
    organisms.className = "react-nitrob";
    card1Name.innerText = "NitroB";
    card1Species.innerText = "Nitrobacter";
    card1React1.innerText = no2;
    card1React2.innerText = no3;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";

    nitroBPath.innerText = no3;
}

// Select C2H5NO
if (molecule == "c2h5no") {
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

    seaTurtlePath.innerText = nh4;
    pellyPath.innerText = nh4;

}

// Select NO3
if (molecule == "no3") {
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

    pseuPath.innerText = no;
    zoePath.innerText = c2h5no;
}
// Select NO
if (molecule == "no") {
    button.innerText = no;
    organisms.className = "react-pseu";
    card1Name.innerText = "Pseu";
    card1Species.innerText = "Pseudomonas";
    card1React1.innerText = no;
    card1React2.innerText = n20;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";

    pseuPath.innerText = n2o;
}

//Select N2O
if (molecule == "n2o") {
    button.innerText = n2o;
    organisms.className = "react-pseu";
    card1Name.innerText = "Pseu";
    card1Species.innerText = "Pseudomonas";
    card1React1.innerText = n2o;
    card1React2.innerText = n2;
    card2.classList = "visibility-hidden";
    card3.classList = "visibility-hidden";

    pseuPath.innerText = n2;
}


// Select NH4
if (molecule == "nh4") {
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

    nitroSPath.innerText = no2;
    zoePath.innerText = c2h5no;
}


// Adding the event listener to check to see anytime any of the three buttons are changed