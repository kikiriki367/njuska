 function boy() {
    alert("ITS ACTUALLY A GOOD GIRL!!!");
  }
  function girl() {
    alert("YES, SHE IS A GOOD GIRL!!!");
  }

  $(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){//da li postoji sledeca slika
        currentImg.removeClass('active').css('z-index', -10);//ako nije active nhe prikazuje se
        nextImg.addClass('active').css('z-index', 10);// z index su kao layeri da dodje napred
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });