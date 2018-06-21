$(document).ready(function() {
  for (i=73; i>0; i--){
    document.getElementById("mainSection").innerHTML+="<div class='slide' id='sld"+i+"'><img src='slides/Lost&Found"+i+".png'></div>"
    setTimeout(function(){document.getElementById("instruction").style.opacity = "0";}, 3000);
    };
  });

var cs = 1;

// $(document).click(function() {
//   cs++
//   if(cs>73){
//     cs=1;
//   }
//   console.log('visible: sld'+cs);
//   console.log('hidden: sld'+(cs-1));
//   document.getElementById("sld"+cs).style.visibility="visible";
//   document.getElementById("sld"+(cs-1)).style.visibility="hidden";
// });

$(document).mouseup(function(event) {
  if(cs>73 || cs<0){
    cs=1;
    }
    switch (event.which) {
        case 1:
        nextSlide();
            break;

        case 3:
        event.preventDefault();
        previousSlide();
            break;
    }
});

document.onkeydown = function(e) {
  if(cs>73 || cs<0){
    cs=1;
    }
    switch (e.keyCode) {
        case 37:
            previousSlide();
            break;
        case 38:
            previousSlide();
            break;
        case 39:
            nextSlide();
            break;
        case 40:
            nextSlide();
            break;
    }
};

function nextSlide() {
  cs++
  document.getElementById("sld"+cs).style.visibility="visible";
  document.getElementById("sld"+(cs-1)).style.visibility="hidden";
}

function previousSlide() {
  cs--
  document.getElementById("sld"+cs).style.visibility="visible";
  document.getElementById("sld"+(cs+1)).style.visibility="hidden";
}
if (($( window ).width())<($( window ).height())) {

};

document.oncontextmenu =new Function("return false;") //disabilità click destro del mouse
