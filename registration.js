var yes=false;
// let no=false;
function validate(){
    var text =document.getElementById("f_name");
    let e =text.value;
   let s =e.match(/[a-z]/gi);
   let t =e.match(/[0-9]/g);
   document.getElementById("info").innerHTML="only 6 character  and 2 digit required";
   let len = s.length;
   let num= t.length;
    if(len == 6 && num == 2){
        document.getElementById("info").innerHTML="Correct input"; 
        yes=true;
    }
    else{
        document.getElementById("info").innerHTML="only 6 character  and 2 digit required";
        yes=false;
    }
}
function display(){
    if(yes==true){
        return true;
    }
    else{
        alert("ooopps!!!!!");
        return false;
    }
}