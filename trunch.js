document.getElementsByTagName("body")[0].style.marginLeft = "0px";

var trunch = document.createElement("div");
trunch.id = "trunch";
document.getElementsByTagName('body')[0].appendChild(trunch);

var freshmeat = document.createElement("audio");
freshmeat.id = "freshmeat";
document.getElementsByTagName('body')[0].appendChild(freshmeat);
var freshmeat = document.getElementById("freshmeat");
freshmeat.setAttribute("src", "freshmeat.mp3");
freshmeat.style.display = "none";

document.getElementById("trunch").style.position = "fixed";
document.getElementById("trunch").offsetLeft = "0px";
document.getElementById("trunch").style.bottom = "0px";
document.getElementById("trunch").style.overflow = "hidden";
document.getElementById("trunch").style.zIndex = "3";

var trunchinner = '<img src="Trunch-Face.png"/><img id="mouth" src="Trunch-Mouth.png" style="position:relative; left:-454px"/><img id="whip" src="whip.png" style="position:relative; left:-520px; bottom:-130px;"/>';
document.getElementById("trunch").innerHTML = trunchinner;

var mouth = document.getElementById("mouth");
var whip = document.getElementById("whip");

whip.style.transition = "transform 0.3s ease-in";
whip.style.transformOrigin = "bottom left";
whip.style.transform="rotate(180deg)";

var close = function(){
  mouth.style.top = "0px"
}

var open = function(duration){
  mouth.style.top = "10px"
  //if(typeof duration === 'undefined'){var duration = 500;}
  setTimeout(function(){close();}, duration);
}

var talk = function(){
  freshmeat.play();
  setTimeout(function(){open(900);}, 200);
  setTimeout(function(){open(700);}, 2000);
  setTimeout(function(){open(700);}, 2800);
  setTimeout(function(){open(700);}, 3500);
}

var swingwhip = function(){
  whip.style.transform="rotate(-20deg)";
}

var trunchinit = function(){
  talk();
  setTimeout(function(){swingwhip();}, 4000)
}

document.onload=trunchinit();