var Game={};

//shortcuts cuz i likey
l=function(what) {return document.getElementById(what);};
choose=function(array) {return array[Math.floor(Math.random()*array.length)];};

Game.backgroundImage='background.png';
Game.background=l('backgroundCanvas').getContext('2d');
Game.background.canvas.width=window.Game.background.canvas.parentNode.offsetWidth;
Game.background.canvas.height=window.Game.background.canvas.parentNode.offsetHeight;

window.addEventListener('resize', function(e) {
    Game.background.canvas.width=window.Game.background.canvas.parentNode.offsetWidth;
    Game.background.canvas.height=window.Game.background.canvas.parentNode.offsetHeight;
});

CanvasRenderingContext2D.prototype.fillPattern=function(img,X,Y,W,H,iW,iH,offX,offY)
{
		var offX=offX||0;
		var offY=offY||0;
		if (offX<0) {offX=offX-Math.floor(offX/iW)*iW;} if (offX>0) {offX=(offX%iW)-iW;}
		if (offY<0) {offY=offY-Math.floor(offY/iH)*iH;} if (offY>0) {offY=(offY%iH)-iH;}
		for (var y=offY;y<H;y+=iH){for (var x=offX;x<W;x+=iW){this.drawImage(img,X+x,Y+y,iW,iH);}}
}

Game.background.fillPattern('img/'+Game.backgroundImage,0,0,Game.background.canvas.width,Game.background.canvas.height,512,512,0,0);