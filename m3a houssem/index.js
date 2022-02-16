// var f = document.getElementById("4").addEventListener("click",ok) ;
// var DT = document.getElementById("5").addEventListener("click",DT) ;
// var T = document.getElementById("6").addEventListener("click",T) ;
// function ok (){
//     var a = document.getElementById("1").value;
//     var b = document.getElementById("2").value;
//     var c = a-b; document.getElementById("3").value =c ;

// } 
// function DT () {
   
//    document.getElementById("1").value =20;
//    ok() ;
// }
// function T (){
//     document.getElementById("1").value =30;
//     ok() ; 
// }

 console 
 btn: <button type="button" id="myBtn" class="click-btn"disabeled="">Click Me</button>

  // Selecting the element
  let btn = document.getElementById('myBtn');
  // Setting new attributes
  btn.setAttribute('class', 'click-btn');
  btn.setAttribute('disabled', '');

