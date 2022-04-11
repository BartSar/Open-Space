function check(){
   let k = document.querySelectorAll(".check-buttons input");
   for (i in k) {
      if(i=="entries") break;
      if(k[i].checked != true){
         return false;
      }
   }
   let m = document.querySelectorAll(".levers input");
   for (i in m) {
      if(i=="entries") break;
      if(m[i].value != 100){
         return false;
      }
   }
   return true;
}

let o = document.querySelectorAll(".check-buttons input, .levers input, .launch-button");

for (i in o) {

   try {
      o[i].setAttribute("disabled", "");
   } catch (e) {
   }
}
document.getElementById("okb").addEventListener("click",function (event){
   if(document.getElementById("passwordb").value == "TrustNo1"){
      document.getElementById("okb").setAttribute("disabled", "");
      document.getElementById("passwordb").setAttribute("disabled", "");
      let o = document.querySelectorAll(".check-buttons input, .levers input");
      for (i in o){
         try {
         o[i].removeAttribute("disabled");
         }catch(e){

         }
      }
   }
})


let k = document.querySelectorAll(".check-buttons input, .levers input");

for (i in k) {

   try {
      k[i].addEventListener("change",function(event){
         if(check()){
            document.querySelector(".launch-button").removeAttribute("disabled")
         }
         else{
            document.querySelector(".launch-button").setAttribute("disabled","")
         }
      })
   } catch (e) {
   }
}

document.querySelector(".launch-button").addEventListener("click",function (event) {
   document.querySelector(".rocket").style.top="-50px";
   document.querySelector(".rocket").style.left="450px";
   document.querySelector(".rocket").style.top="-100px";
   document.querySelector(".rocket").style.left="500px";

   document.querySelector(".rocket").style.top="-150px";
   document.querySelector(".rocket").style.left="450px";
   document.querySelector(".rocket").style.top="-200px";
   document.querySelector(".rocket").style.left="600px";
})