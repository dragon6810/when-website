var MouseX;
var MouseY;
var loop = true;

function mousecoords(event) {
    let mousex = event.clientX;
    let mousey = event.clientY;

    MouseX = mousex;
    MouseY = mousey;
}

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

// shortcuts
function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}
function l(what) {return document.getElementById(what);}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

var building = {
    name: [
        "Fishing rod",
        "Fishing Net",
        "Trap"
    ],
    id: [
        "fishrod",
        "fishnet",
        "trap"
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
            display.updatebuildingrows();
        }
    }
    }

        game.time=Date.now();
		game.accumulatedDelay=0;
		game.delayTimeouts=0;
		game.catchupLogic=0;
		game.fpsStartTime=0;
		game.frameNumber=0;
		game.currentFps=game.fps;
		game.previousFps=game.currentFps;
		game.getFps=function()
		{
			game.frameNumber++;
			var currentTime=(Date.now()-game.fpsStartTime )/1000;
			var result=Math.floor((game.frameNumber/currentTime));
			if (currentTime>1)
			{
				game.fpsStartTime=Date.now();
				game.frameNumber=0;
			}
			return result;
		}

        game.fps = game.getFps();

    var upgrade = {
        name: [
            "Metal Rods",
            "Double-Threading",
            "Bait",
            "Stone Cursor",
            "Iron Cursor",
            "Butterfly Clicking"
        ],
        description: [
            "Fishing rod production x2",
            "Fishing net production x2",
            "Trap production x2",
            "Clicking Power x2",
            "Clicking Power x2",
            "Clicking Power x2"
        ],
        image: [
            "metalrod.png",
            "doublethread.png",
            "trapbait.png",
            "stonecursor.png",
            "ironcursor.png",
            "butterfly.png"
        ],
        type: [
            "building",
            "building",
            "building",
            "click",
            "click",
            "click"
        ],
        cost: [
            500,
            1000,
            10000,
            250,
            1000,
            10000
        ],
        buildingindex: [
            0,
            1,
            2,
            -1,
            -1,
            -1
        ],
        requirement: [
            10,
            10,
            10,
            10,
            250,
            500
        ],
        bonus: [
            2,
            2,
            2,
            2,
            2,
            2
        ],
        purchased: [false, false, false, false, false, false],
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
                    display.updatebuildingrows();
                }
            }
        }
    };

    var achievement = {
        name: [
            "Sweaty fingers",
            "Fishy Buisness"
        ],
        description: [
            "Click 1000 times",
            "Catch your first fish"
        ],
        image: [
            "sweatyfingers.png",
            "firstfish.png"
        ],
        type: [
            "click",
            "fish"
        ],
        requirement: [
            1000,
            1
        ],
        objectindex: [
            -1,
            -1
        ],
        awarded: [false, false],

        earn: function(index) {
            this.awarded[index] = true;
        }
    }

    function abbreviatenum(n) {
        let name = [
            'thousand',
            'million',
            'billion',
            'trillion',
            'quadrillion',
            'quintillion',
            'sextillion',
            'septillion',
            'octillion',
            'nonillion',
            'decillion',
            'undecillion',
            'doudecillion',
            'tredecillion',
            'quattuordecillion',
            'quindecillion',
            'sexdecillion',
            'septemdecillion',
            'octodecillion',
            'novemdecillion',
            'vigintillion',
            'unvigintillion',
            'duovigintillion',
            'trevigintillion',
            'quattuorvigintillion',
            'quinvigintillion',
            'sexvigintillion',
            'septvigintillion',
            'octovigintillion',
            'nonvigintillion',
            'trigintillion',
            'untrigintillion',
            'duotrigintillion',
            'googol',
            'infinity'
        ];
            for (i = 0; i < name.length; i++) {
                if (n >= Math.pow(1000, i + 1) && n <= Math.pow(1000, i + 2)) {
                    return Number((n / Math.pow(1000, i + 1)).toFixed(3)).toLocaleString(undefined, {minimumFractionDigits: 3}) + ' ' + name[i];
                } else if (n < 1000) {
                    return n;
                }
            }
    }

var display = {
    updatefish: function() {
        document.getElementById("fish").innerHTML = abbreviatenum((Math.floor(game.fish))) + "<p></p>";
        document.getElementById("fishpersecond").innerHTML = game.getfishpersecond();
        document.title = "Fish Fisher - " + abbreviatenum((Math.floor(game.fish))) + " Fish";
    },

    updateshop: function() {
        document.getElementById("shopcontainer").innerHTML = '<center><shoph1>Shop</shoph1></center> <p></p> <div class="separatorbottom"></div>';
        for (i = 0; i < building.name.length; i++) {
            document.getElementById("shopcontainer").innerHTML += '<div class="shopbutton unselectable" onclick="building.purchase('+i+')"><div id="shopimage"><img src="img/'+building.image[i]+'"> &#10;</div><div id="content"><div id="name">'+building.name[i]+'</div><div id="cost"><span>'+building.cost[i]+'</span> Fish</div><div id="amount"><span>'+building.count[i]+'</span></div></div></div>';
        }
    },

    updateupgrades: function() {
        document.getElementById("upgradecontainer").innerHTML = "<center><shoph1>Upgrades</shoph1></center> <p></p>";
        for (i = 0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == "building" && building.count[upgrade.buildingindex[i]] >= upgrade.requirement[i]) {
                    document.getElementById("upgradecontainer").innerHTML += '<img src="img/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' fish)" onclick="upgrade.purchase('+i+')">';
                } else if (upgrade.type[i] == "click" && game.totalclicks >= upgrade.requirement[i]) {
                    document.getElementById("upgradecontainer").innerHTML += '<img src="img/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' fish)" onclick="upgrade.purchase('+i+')">';
                }
            }
        }
    },

    updateachievements: function() {
        document.getElementById("achievementcontainer").innerHTML = "<center><shoph1>Achievements</shoph1></center> <p></p>";
        for (i = 0; i < achievement.name.length; i++) {
            if (achievement.awarded[i]) {
                document.getElementById("achievementcontainer").innerHTML += '<img src="img/'+achievement.image[i]+'" title="'+achievement.name[i]+' &#10; '+achievement.description[i]+'"> &#10;'
            }
        }
    }
};


    var particleslot = l('particles');
    var str;
    var particles = [];
    var particlen = 50;
    var particle = {};

    for (i = 0; i < particlen; i++) {
		particles[i] = {x:0,y:0,xd:0,yd:0,w:64,h:64,z:0,size:1,dur:2,life:-1,img:'firstfish.png', text:'+'+game.clickvalue};
	}

    updateparticles = function() {
			for (i = 0; i < particlen; i++)
			{
				var me = particles[i];
                var mehtml = l('particle'+i);
				if (me.life!=-1)
				{
					if (!me.text) me.yd+=0.2+Math.random()*0.1;
					me.x+=me.xd;
					me.y+=me.yd;
					me.life++;
					if (me.life>=Game.fps*me.dur)
					{
						me.life=-1;
					}
                    mehtml.style.left = (me.x + me.speedx) + 'px';
                    mehtml.style.top = (me.y + me.speedy) + 'px';
				}

			}
		}

    makeparticle = function(x, y, size, speedx, speedy, dur, img, text) {
        for (var i = 0; i < particlen; i++) {
			var me = particles[i];
			if (me.life != -1)
			{
				if (!me.text) me.yd += 0.2 +Math.random() * 0.1;
				me.x += me.xd;
				me.y += me.yd;
				me.life++;
				if (me.life >= game.fps * me.dur)
				{
					me.life=-1;
				}
			}
            
		}

        setInterval(function() {
            x += (innerWidth / speedx) * 10;
            y += (innerHeight / speedy) * 10;
        }, 10);
        
        particleslot.innerHTML = '';

        for (i = 0; i < particlen; i++) {
            if (particles[i.img] !== 0) {
            str = '<div class="particle'+i+'" style="color:white"><img src="img/'+img+'></div>'
        } else if (particles[i.text] !== 0) {
            str = '<div class="particle'+i+'" style="color:white">'+text+'</div>'
        }
            particleslot.innerHTML += str;
            str = '';
        }

    }

    setInterval(updateparticles(), 10);

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
        upgradepurchased: upgrade.purchased,
        achievementawarded: achievement.awared
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
        if (typeof savedgame.achievementawarded !== "undefined") {
            for (i = 0; i < savedgame.achievementawarded.length; i++) {
                achievement.awarded[i] = savedgame.achievementawarded[i];
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
    makeparticle(MouseX, MouseY, 1, 0, -10, 1000, 0, '+'+game.clickvalue);
}, false);

window.onload = function() {
    loadgame();
    display.updatefish();
    display.updateupgrades();
    display.updateachievements();
    display.updateshop();
    display.updateachievements();
    console.log('[=== ' + choose([
				'You Little Sneak...',
				`How's your day?`,
				'plz no hack |8}',
				'cheated fish will make you sick!',
				'It would be cool if you hit f12',
                `Your're just debugging... right?`
			]) + ' ===]');
}

setInterval(function() {
    for (i = 0; i < achievement.name.length; i++) {
        if (achievement.type[i] == "fish" && game.totalfish >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "click" && game.totalclicks >= achievement.requirement[i]) achievement.earn(i);
        else if (achievement.type[i] == "building" && building.count[achievement.objectindex[i]] >= achievement.requirement[i]) achievement.earn(i);
    }
    game.fish += game.getfishpersecond() / 100;
    game.totalfish += game.getfishpersecond() / 100;
    display.updatefish();
    display.updateachievements();
}, 10);

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