var Game={};

//shortcuts cuz i likey
l=function(what) {return document.getElementById(what);};
choose=function(array) {return array[Math.floor(Math.random()*array.length)];};

Game.bagels=0;
Game.bagelsPerSecond=0;
Game.clickingPower=1;

Game.clickBagel=function() {
    Game.bagels+=Game.clickingPower;
    Game.updateDisplay();
}

Game.updateDisplay=function() {
    l('data').innerHTML='Bagels: '+Game.bagels+'<br>Bagels per second: '+Game.bagelsPerSecond;
    bigbagel.style.left=l('bagelAnchor').getBoundingClientRect().left-(Game.bagelSize/2)+'px';
    bigbagel.style.top=l('bagelAnchor').getBoundingClientRect().top-(Game.bagelSize/2)+'px';
    l('wrapper').setAttribute('width:',window.innerWidth+'px');
    Game.updateBuildings();
}

Game.buildings=[];
Game.makeBuilding=function(id, name, offsx, offsy, cps, cost, requirement) {
    var building = {id:id, name:name, offsx:offsx, offsy:offsy, cps:cps, cost:cost, requirement:requirement, amount:0};
    Game.buildings.push(building);
}

//Making buildings
Game.makeBuilding('toaster','Toaster', 0, 0, 1, 10, 5);

setInterval(function() {
    //Game.updateDisplay();
}, 100);

Game.updateBuildings=function() {
    var str='<div id="title">Shop</div>';
    for (var i=0;i<Game.buildings.length;i++) {
        var me=Game.buildings[i];
        str+='<div id="shopbutton"><div id="'+me.id+'"<div id="shopimg '+me.id+'" style="background:url(img/bigbagel.png) '+me.offsx+' '+me.offsy+';background-size:64px 64px;"</div></div><div id="content"><div id="name">'+me.name+'</div><div id="cost"><img src="img/tinybagel.png">'+me.cost+'</div><div id="amount">'+me.amount+'</div></div></div>'
    }
    l('shop').innerHTML=str;
    str='';
}

Game.buyMode=1;

if (l('shopbutton')) {
l('shopbutton').addEventListener('click', function() {
    for (i=0; i<buildings.length; i++) {
        var me=buildings[i];
        if (l(me.id)) {
            Game.buildingSys.buy(me.id, Game.buyMode);
            updateBuildings();
        }
    }
}, false)
}

Game.buildingSys={
    buy: function(what, amount) {
        for (i=0; i<buildings.length; i++) {
            var me = buildings[i];
            if (what=me.id && Game.bagels>=me.cost) {
                me.amount+=amount;
                for (i=0; i<me.amount; i++) {
                    me.cost*=1.15;
                }
            }
        }
    },
    free: function(what, amount) {
        for (i=0; i<buildings.length; i++) {
            var me = buildings[i];
            if (what=me.id) {
                me.amount+=amount;
                for (i=0; i<me.amount; i++) {
                    me.cost*=1.15;
                }
            }
        }
    }
}

Game.leftBackground=l('leftCanvas').getContext('2d');
Game.leftBackground.canvas.width=window.innerWidth/3;
Game.leftBackground.canvas.height=window.innerHeight;

Game.backgroundImage='img/background.png';
Game.bg=new Image();
Game.bg.src=Game.backgroundImage;
Game.background=l('backgroundCanvas').getContext('2d');
Game.background.canvas.width=window.innerWidth;
Game.background.canvas.height=window.innerHeight;

window.addEventListener('resize', function(event) {
    Game.background.canvas.width=window.innerWidth
    Game.background.canvas.height=window.innerHeight
    Game.background.fillPattern(Game.bg,0,0,Game.background.canvas.width,Game.background.canvas.height,window.innerHeight,window.innerHeight,0,0);
    Game.leftBackground.canvas.width=window.innerWidth/3;
    Game.leftBackground.canvas.height=window.innerHeight;
});

CanvasRenderingContext2D.prototype.fillPattern=function(img,X,Y,W,H,iW,iH,offX,offY)
{
		var offX=offX??0;
		var offY=offY??0;
		if (offX<0) {offX=offX-Math.floor(offX/iW)*iW;} if (offX>0) {offX=(offX%iW)-iW;}
		if (offY<0) {offY=offY-Math.floor(offY/iH)*iH;} if (offY>0) {offY=(offY%iH)-iH;}
		for (var y=offY;y<H;y+=iH){for (var x=offX;x<W;x+=iW){this.drawImage(img,X+x,Y+y,iW,iH);}}
}

Game.bg.onload=function() {
    Game.background.fillPattern(Game.bg,0,0,Game.background.canvas.width,Game.background.canvas.height,window.innerHeight,window.innerHeight,0,0);
}

bigbagel=l('bigbagel');

Game.bagelScale=1;
Game.bagelSize=256*Game.bagelScale;

bigbagel.addEventListener('mouseover', function(e) {
    //wobble();
}, false)

bigbagel.addEventListener('click', function() {
    Game.clickBagel();
})

bigbagel.style.position='absolute';
        bigbagel.style.left=l('bagelAnchor').getBoundingClientRect().left-(Game.bagelSize/2)+'px';
        bigbagel.style.top=l('bagelAnchor').getBoundingClientRect().top-(Game.bagelSize/2)+'px';

wobble=function() {
    clearInterval(wobbling);
    var wobbletime;
    var freq;
    var decay;
    wobbletime=0;
    freq=2*Math.PI/10;
    decay=0.25;
    var wobbling = setInterval(function() {
        bigbagel.style.position='absolute';
        bigbagel.style.left=l('bagelAnchor').getBoundingClientRect().left-(Game.bagelSize/2)+'px';
        bigbagel.style.top=l('bagelAnchor').getBoundingClientRect().top-(Game.bagelSize/2)+'px';
        if (Math.exp(-decay*wobbletime > 1)) {
        Game.bagelScale=1+0.25*Math.cos(freq*wobbletime)*Math.exp(-decay*wobbletime);
        wobbletime++;
        } else clearInterval(wobbling);
    }, 33);
}

window.addEventListener('resize', Game.updateDisplay());

setInterval(function() {
    Game.bagelSize=256*Game.bagelScale;
    l('bigbagel').style.width = Game.bagelSize + 'px';
    l('bigbagel').style.height = Game.bagelSize + 'px';
}, 33)

console.log('[== '+
            choose(
                ['Hello there.',
                'Musty Crusty moldy cream cheese',
                'Dont cheat plz ._.',
                'I hope yees find de bug',
                'Hows your day?']
            )+' ==]');