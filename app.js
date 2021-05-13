$(".type").hide();
var speed = 100; 
var margin = 20; 

//Type function:
function type(elem, display, speed, delay){
  setTimeout(function(){

    var text = $(elem).text();
    $(elem).html('');
    $(elem).css('display', display);

    var i = 0;

    var timer = setInterval(function(){
      if (i < text.length){
        $(elem).append(text.charAt(i));
        i++;
      }
      else {
        $(elem).append('<div class="spacer"></div>');
        $(".spacer").css({'height': margin + 'px'});
        clearInterval(timer);
      };
    }, speed);

  }, delay);
};


function displayTime(items){
  return $(items).text().length*speed+speed;
};

type('.type:nth-child(1)', 'inline', speed, 0);
type('.type:nth-child(2)', 'inline', speed, displayTime('.type:nth-child(1)'));
type('.type:nth-child(3)', 'inline', speed, displayTime('.type:nth-child(1), .type:nth-child(2)'));

