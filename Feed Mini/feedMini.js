//Telling the console that we're setting up CAPI. If this doesn't show up, then nothing in here will. 
console.log("Setting up CAPI");

var preventRecursion = false;

function capiHandler(name, value) {
    if (preventRecursion) {
        return;
    }

    preventRecursion = true;

    switch (name) {
        case 'waterSelected':
            break;

        case 'foodSelected':
            break;

        case 'airSelected':
            break;

        default:
            console.log(name, value);
            break;
    }
    preventRecursion = false;
}

// Getting each of the buttons from the html doc and making variables here for them 

let waterBtn = document.getElementById("water_btn");
let foodBtn = document.getElementById("food_btn");
let airBtn = document.getElementById("air_btn");

//This little bit is just me making sure that each button is registering when its being clicked 

function btnChecker() {
    if (waterBtn.checked) {
        console.log("water is checked");
        feedMini.set("waterSelected", true);
        feedMini.set("foodSelected", false);
        feedMini.set("airSelected", false);
    }
    if (foodBtn.checked) {
        console.log("food is checked");
        feedMini.set("waterSelected", false);
        feedMini.set("foodSelected", true);
        feedMini.set("airSelected", false);
    }
    if (airBtn.checked) {
        console.log("air is checked");
        feedMini.set("waterSelected", false);
        feedMini.set("foodSelected", false);
        feedMini.set("airSelected", true);
    }
}

var capi = {
    defaults: {
        waterSelected: false,
        foodSelected: false,
        airSelected: false,
    },

    exposeWith: {
        waterSelected: {
            alias: "waterSelected"
        },
        foodSelected: {
            alias: "foodSelected"
        },
        airSelected: {
            alias: "airSelected"
        },
    }
}

var feedMini = new simcapi.CapiAdapter.CapiModel(capi.defaults);

function addListener(key) {
    feedMini.on("change:" + key, (feedMini, value) => {
        capiHandler(key, value);
    })
}

// 
var item, key;
for (key in capi.defaults) {
    item = capi.exposeWith[key];

    simcapi.CapiAdapter.expose(key, feedMini, item);
    addListener(key);
}

// This needs to be here, its what tells the CAPI to do the thing
simcapi.Transporter.notifyOnReady();


// Adding the event listener to check to see anytime any of the three buttons are changed

let buttonRadios = document.querySelectorAll("input[type=\"radio\"]");
for (let radio of buttonRadios) {
    radio.addEventListener("change", btnChecker);
}

