var Game={};

//shortcuts cuz i likey
l=function(what) {return document.getElementById(what);};
choose=function(array) {return array[Math.floor(Math.random()*array.length)];};

Game.backgroundImage='img/background.png';
Game.bg=new Image();
Game.bg.src=Game.backgroundImage;
Game.background=l('backgroundCanvas').getContext('2d');
Game.background.canvas.width=window.innerWidth
Game.background.canvas.height=window.innerHeight

window.addEventListener('resize', function(event) {
    Game.background.canvas.width=window.innerWidth
    Game.background.canvas.height=window.innerHeight
    Game.background.fillPattern(Game.bg,0,0,Game.background.canvas.width,Game.background.canvas.height,window.innerHeight,window.innerHeight,0,0);
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
    wobble();
}, false)

bigbagel.addEventListener('click', function() {
    wobble();
})

bigbagel.style.position='absolute';
        bigbagel.style.left=l('bagelAnchor').getBoundingClientRect().left-(Game.bagelSize/2)+'px';
        bigbagel.style.top=l('bagelAnchor').getBoundingClientRect().top-(Game.bagelSize/2)+'px';

wobble=function() {
    var wobbletime;
    var freq;
    var decay;
    wobbletime=0;
    freq=2*Math.PI/10;
    decay=0.25;
    setInterval(function() {
        bigbagel.style.position='absolute';
        bigbagel.style.left=l('bagelAnchor').getBoundingClientRect().left-(Game.bagelSize/2)+'px';
        bigbagel.style.top=l('bagelAnchor').getBoundingClientRect().top-(Game.bagelSize/2)+'px';
        if (Math.exp(-decay*wobbletime > 0.01)) {
        Game.bagelScale=1+0.25*Math.cos(freq*wobbletime)*Math.exp(-decay*wobbletime);
        wobbletime++;
        }
    }, 33);
    console.log(l('bagelAnchor').style.left);
}

setInterval(function() {
    Game.bagelSize=256*Game.bagelScale;
    l('bigbagel').style.width = Game.bagelSize + 'px';
    l('bigbagel').style.height = Game.bagelSize + 'px';
}, 33)

console.log('[=='+
            choose(
                ['Hello there.',
                'Musty Crusty moldy cream cheese',
                'Dont cheat plz ._.',
                'I hope yees find de bug',
                'Hows your day?']
            )+'==]');