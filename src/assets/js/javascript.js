

const inc=()=>{
    let add = document.getElementById("sum").innerHTML;
     add++;
     
     document.getElementById("sum").innerHTML=add;
          
} 
 
 
 
 const dec=()=>{
     let decs= document.getElementById("sum").innerHTML;
     if(decs>0)
      decs--;
      document.getElementById("sum").innerHTML=decs;
          
 }

 $(document).ready(function(){
    $(window).scroll(function(){
    if($(this).scrollTop() > 200)
    {
        $(".scroll-button").fadeIn(400);
    }
    else
    $(".scroll-button").fadeOut(400);
    
    
    });
    $(".scroll-button").click(function(){
    $('html,body').animate({
        scrollTop:0
    },1200)
    });

    });



 
 