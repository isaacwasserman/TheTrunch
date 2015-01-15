function rC(nam) {var tC = document.cookie.split('; '); for (var i = tC.length - 1; i >= 0; i--) {var x = tC[i].split('='); if (nam == x[0]) return unescape(x[1]);} return '~';} function wC(nam,val) {document.cookie = nam + '=' + escape(val);} function lC(nam,pg) {var val = rC(nam); if (val.indexOf('~'+pg+'~') != -1) return false; val += pg + '~'; wC(nam,val); return true;} function firstTime(cN) {return lC('pWrD4jBo',cN);} function thisPage() {var page = location.href.substring(location.href.lastIndexOf('\/')+1); pos = page.indexOf('.');if (pos > -1) {page = page.substr(0,pos);} return page;}

var removecookie = function(){
  document.cookie = "pWrD4jBo" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var addTrunch = function(){
  document.getElementsByTagName("body")[0].style.marginLeft = "0px";

  var trunch = document.createElement("div");
  trunch.id = "trunch";
  document.getElementsByTagName('body')[0].appendChild(trunch);

  var freshmeat = document.createElement("audio");
  freshmeat.id = "freshmeat";
  document.getElementsByTagName('body')[0].appendChild(freshmeat);
  var freshmeat = document.getElementById("freshmeat");
  freshmeat.setAttribute("src", "http://raritea.com/TheTrunch/resources/freshmeat.mp3");
  freshmeat.style.display = "none";

  document.getElementById("trunch").style.position = "fixed";
  document.getElementById("trunch").offsetLeft = "0px";
  document.getElementById("trunch").style.bottom = "0px";
  document.getElementById("trunch").style.overflow = "hidden";
  document.getElementById("trunch").style.zIndex = "3";

  var trunchinner = '<img src="http://raritea.com/TheTrunch/resources/Trunch-Face.png"/><img id="mouth" src="http://raritea.com/TheTrunch/resources/Trunch-Mouth.png" style="position:relative; left:-454px"/><img id="whip" src="http://raritea.com/TheTrunch/resources/whip.png" style="position:relative; left:-520px; bottom:-130px;"/>';
  document.getElementById("trunch").innerHTML = trunchinner;

  var mouth = document.getElementById("mouth");
  var whip = document.getElementById("whip");

  whip.style.transition = "transform 0.3s ease-in";
  whip.style.transformOrigin = "bottom left";
  whip.style.transform="rotate(180deg)";
}

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
  if(firstTime(thisPage())){
    addTrunch();
    talk();
    setTimeout(function(){swingwhip();}, 4000);
  }
}

document.onload=trunchinit();