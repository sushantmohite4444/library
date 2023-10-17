function view(c){
  var img= document.getElementById("img");
  console.log(img);
  if(c==1){
    img.src="istockphoto-492120206-612x612.jpg";
  }
  else if(c==2){
    img.src="egal.jpg";
  }
  else if(c==3){
    img.src="shivaji-maharaj-king.jpg";
  }
  else if(c==4){
    img.src="lord_hanuman.jpg ";
  }
  }
  
  function display(){
    let cu= document.getElementById("contact_info");
    console.log(cu);
    if(cu.style.display !="block"){
      cu.style.display="block";
    }
    else{
      cu.style.display ="none";
    }
  }