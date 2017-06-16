//written by Amy Pham with modified code from http://codepen.io/arkwis/pen/chnop

function strokeEffect(){

  //assign ids to paths to access
  var idNum = 0;
  var step = 0;
  var groups = jQuery('.aspirations>svg');
  var paths = "";
  var playing = true;

  //set up ids
  for(var i = 0; i < groups.length; i++){
    paths = jQuery(groups[i]).children('path');
    for(var j = 0; j < paths.length; j++){
      paths[j].setAttribute('id', step+"i"+j);
    }
    step++;
  }

  step = 0;
  function playAni(){
    if(step == jQuery('.aspirations>svg').length){
      step = 0;
    }

    play(step);
    if(playing)
      setTimeout(playAni, 1800);
    step++;

    jQuery(window).blur(function(){
      playing = false;
    });
  };
  playAni();

  jQuery(window).focus(function(){
    if(!playing){
      playing = true;
      playAni();
    }
  });

  //code modified from http://codepen.io/arkwis/pen/chnop
  function play(current) {
    var current_frame = 0;
    var total_frames = 22;
    var path = new Array();
    var length = new Array();

    jQuery('.aspirations>svg:nth-child('+(current+1)+')').attr('class', 'letterPath animated');
    
    var i = 0;
    while(document.getElementById(current+'i'+i)){
      path[i] = document.getElementById(current+'i'+i);
      l = path[i].getTotalLength();
      length[i] = l;
      path[i].style.strokeDasharray = l + ' ' + l; 
      path[i].style.strokeDashoffset = l;
      i++;
    }
    var handle = 0;
    
    var draw = function() {
      var progress = current_frame/total_frames;
      current_frame++;
      //draw paths
      for(var j=0; j<path.length;j++){
        path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
        path[j].setAttribute("class", "letterPath");
        path[j].style.strokeWidth = 3;
      }

      handle = window.requestAnimationFrame(draw);

      //when finished
      if(current_frame == total_frames){
        for(var j=0; j<path.length;j++){
          path[j].style.strokeDashoffset = 0;
          path[j].setAttribute("class", "letterPath");
        }  
        window.cancelAnimationFrame(handle);
        setTimeout(undraw, 1300);
      }
    };
    
    var undraw = function() {
      var progress = current_frame/total_frames;
      current_frame--;

      //undraw paths
      for(var j=0; j<path.length;j++){
        path[j].style.strokeDashoffset = Math.ceil(length[j] * (1 + progress));
        path[j].setAttribute("class", "letterPath");
      }
      handle = window.requestAnimationFrame(undraw);

      //when finished
      if (progress == 0) {
        for(var j=0; j<path.length;j++){
          path[j].style.strokeWidth = 0;
          path[j].setAttribute("class", "letterPath");
        }
        window.cancelAnimationFrame(handle);
        jQuery('.aspirations>svg:nth-child('+(current+1)+')').attr('class', 'letterPath');
      }
    };

    draw();
  }
}

