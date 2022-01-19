var game = {
    fish: 0,
    totalfish: 0,
    totalclicks: 0,
    clickvalue: 1,
    version: 0.10,

    addfish: function(amount) {
        this.fish += amount;
        this.totalfish += amount;
        display.updatefish();
    },

    getfishpersecond: function() {
        var fishpersecond = 0;
        for (i = 0; i < building.name.length; i++) {
            fishpersecond += building.income[i] * building.count[i];
        }
        return fishpersecond;
    }
};

var building = {
    name: [
        "Fishing Rod",
        "Fishing Net",
        "Trap"
    ],
    image: [
        "fishrod.png",
        "fishnet.png",
        "trap.png"
    ],
    count: [0, 0, 0],
    income: [
        1,
        3,
        10
    ],
    cost: [
        15,
        150,
        1000
    ],

    purchase: function(index) {
        if (game.fish >= this.cost[index]) {
            game.fish -= this.cost[index];
            this.count[index]++;
            this.cost[index] = Math.ceil(this.cost[index] * 1.10);
            display.updatefish();
            display.updateshop();
            display.updateupgrades();
        }
    }
    }

    var upgrade = {
        name: [
            "Metal Rods"
        ],
        description: [
            "Boost the durability of the fishing rods, doubling production speed"
        ],
        image: [
            "metalrod.png"
        ],
        type: [
            "building"
        ],
        cost: [
            500
        ],
        buildingindex: [
            0
        ],
        requirement: [
            10
        ],
        bonus: [
            2
        ],
        purchased: [false],
        purchase: function(index) {
            if (!this.purchased[index] && game.fish >= this.cost[index]) {
                if (this.type[index] == "building" && building.count[this.buildingindex[index]] >= this.requirement[index]) {
                    game.fish -= this.cost[index];
                    building.income[this.buildingindex[index]] *= this.bonus[index];
                    this.purchased[index] = true;

                    display.updateupgrades();
                    display.updatefish();
                } else if (this.type[index] == "click" && game.totalclicks >= this.requirement[index]) {
                    game.fish -= this.cost[index];
                    game.clickvalue *= this.bonus[index];
                    this.purchased[index] = true;

                    display.updateupgrades();
                    display.updatefish();
                }
            }
        }
    };

var display = {
    updatefish: function() {
        document.getElementById("fish").innerHTML = game.fish;
        document.getElementById("fishpersecond").innerHTML = game.getfishpersecond();
        document.title = "Fish Fisher - " + game.fish + " Fish";
    },

    updateshop: function() {
        document.getElementById("shopcontainer").innerHTML = "";
        for (i = 0; i < building.name.length; i++) {
            document.getElementById("shopcontainer").innerHTML += '<table class="shopbutton unselectable" onclick="building.purchase('+i+')"><tr><td id="image"><img src="img/'+building.image[i]+'"></td><td id="nameandcost"><p>'+building.name[i]+'</p><p><span>'+building.cost[i]+'</span> Fish</p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>';
        }
    },

    updateupgrades: function() {
        document.getElementById("upgradecontainer").innerHTML = "";
        for (i = 0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == "building" && building.count[upgrade.buildingindex[i]] >= upgrade.requirement[i]) {
                    document.getElementById("upgradecontainer").innerHTML += '<img src="img/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description+' &#10; ('+upgrade.cost[i]+' fish)" onclick="upgrade.purchase('+i+')">';
                } else if (upgrade.type[i] == "click" && game.totalclicks >= upgrade.requirement[i]) {
                    document.getElementById("upgradecontainer").innerHTML += '<img src="img/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description+' &#10; ('+upgrade.cost[i]+' fish)" onclick="upgrade.purchase('+i+')">';
                }
            }
        }
    }
};

function savegame() {
    var gamesave = {
        fish: game.fish,
        totalfish: game.totalfish,
        totalclicks: game.totalclicks,
        clickvalue: game.clickvalue,
        version: game.version,
        buildingcount: building.count,
        buildingincome: building.income,
        buildingcost: building.cost,
        upgradepurchased: upgrade.purchased
    };
    localStorage.setItem("gamesave", JSON.stringify(gamesave));
}

function loadgame() {
    var savedgame = JSON.parse(localStorage.getItem("gamesave"));
    if (localStorage.getItem("gamesave") !== null) {
        if (typeof savedgame.fish !== "undefined") game.fish = savedgame.fish;
        if (typeof savedgame.totalfish !== "undefined") game.totalfish = savedgame.totalfish;
        if (typeof savedgame.totalclicks !== "undefined") game.totalclicks = savedgame.totalclicks;
        if (typeof savedgame.clickvalue !== "undefined") game.clickvalue = savedgame.clickvalue;
        if (typeof savedgame.version !== "undefined") game.version = savedgame.version;
        if (typeof savedgame.buildingcount !== "undefined") {
            for (i = 0; i < savedgame.buildingcount.length; i++) {
                building.count[i] = savedgame.buildingcount[i];
            }
        }
        if (typeof savedgame.buildingincome !== "undefined") {
            for (i = 0; i < savedgame.buildingincome.length; i++) {
                building.income[i] = savedgame.buildingincome[i];
            }
        }
        if (typeof savedgame.buildingcost !== "undefined") {
            for (i = 0; i < savedgame.buildingcost.length; i++) {
                building.cost[i] = savedgame.buildingcost[i];
            }
        }
        if (typeof savedgame.upgradepurchased !== "undefined") {
            for (i = 0; i < savedgame.upgradepurchased.length; i++) {
                upgrade.purchased[i] = savedgame.upgradepurchased[i];
            }
        }
    }
}

function resetgame() {
    if (confirm("Wiping This Save Will Delete All Of Your Progress!")) {
        var gamesave = {};
        localStorage.setItem("gamesave", JSON.stringify(gamesave));
        location.reload();
    }
}

document.getElementById("clicker").addEventListener("click", function() {
    game.totalclicks++;
    game.addfish(game.clickvalue);
}, false);

window.onload = function() {
    loadgame();
    display.updatefish();
    display.updateupgrades();
    display.updateshop();
}

setInterval(function() {
    game.fish += game.getfishpersecond();
    game.totalfish += game.getfishpersecond();
    display.updatefish();
}, 1000);

setInterval(function() {
    display.updatefish();
    display.updateupgrades();
}, 10000);

window.onbeforeunload = function() {
    //savegame();
}

setInterval(function() {
    savegame();
}, 10000)

document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.which == 83) { // crtl + s
            event.preventDefault();
            savegame();
        }
}, false);