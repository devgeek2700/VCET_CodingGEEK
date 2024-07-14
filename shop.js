// t-shit-men-sort by:-

let sel_box = document.getElementById('sel_box');
let sel_text = document.getElementById('sel_text');
let options = document.getElementsByClassName('options')

for(option of options){
     option.onclick = function(){
          sel_text.innerHTML = this.textContent;
     }
}


//t-shirt men Size Section:-


let multi_divs = ["menu1", "menu2", "menu3"];
let visible_id = null;
let bg_div  = document.getElementById('bg_div');
let visited_color = document.getElementById('visited_color');


function opendivs(div_id){
     if(visible_id == div_id){
          visible_id = null;
           bg_div.style.background = "transparent";
     }

     else{
          visible_id = div_id;
          bg_div.style.background = "#fff";
          
     }

     hide_multi_divs();
}

function hide_multi_divs(){
     let i, divid , div;

     for(i = 0; i<multi_divs.length; i++){
          divid = multi_divs[i];
          div = document.getElementById(divid);
          if(visible_id === divid){
               div.style.display = "block";
               
          }

          else{
               div.style.display = "none";
               
          }
     }
}


// Clear text:-


function clearcheckbox(){
     let cleartext = document.getElementById('two_m');
     let checkbox = document.getElementById('mychecks');
     let checkbox1 = document.getElementById('mychecks1');
     let checkbox2 = document.getElementById('mychecks2');
     let checkbox3 = document.getElementById('mychecks3');
     let checkbox4 = document.getElementById('mychecks4');
     let checkbox5 = document.getElementById('mychecks5');
     let checkbox6 = document.getElementById('mychecks6');
     let checkbox7 = document.getElementById('mychecks7');
     let checkbox8 = document.getElementById('mychecks8');
     let checkbox9 = document.getElementById('mychecks9');
     let checkbox10 = document.getElementById('mychecks10');
     let checkbox11 = document.getElementById('mychecks11');
     let checkbox12 = document.getElementById('mychecks12');
     let checkbox13 = document.getElementById('mychecks13');
     let checkbox14 = document.getElementById('mychecks14');
     let checkbox15 = document.getElementById('mychecks15');
     let checkbox16 = document.getElementById('mychecks16');
     let checkbox17 = document.getElementById('mychecks17');
     let checkbox18 = document.getElementById('mychecks18');
     let checkbox19 = document.getElementById('mychecks19');
     let checkbox20= document.getElementById('mychecks20');
     let checkbox21 = document.getElementById('mychecks21');
     let checkbox22 = document.getElementById('mychecks22');
     let checkbox23 = document.getElementById('mychecks23');
     let checkbox24 = document.getElementById('mychecks24');
     let checkbox25 = document.getElementById('mychecks25');
     let checkbox26 = document.getElementById('mychecks26');
     let checkbox27 = document.getElementById('mychecks27');
     let checkbox28 = document.getElementById('mychecks28');
     let checkbox29 = document.getElementById('mychecks29');
     

     if(checkbox.checked == true || checkbox1.checked == true || checkbox2.checked == true || checkbox3.checked == true || checkbox4.checked == true || checkbox5.checked == true|| checkbox6.checked == true|| checkbox7.checked == true|| checkbox8.checked == true|| checkbox9.checked == true|| checkbox10.checked == true|| checkbox11.checked == true|| checkbox12.checked == true|| checkbox13.checked == true|| checkbox14.checked == true|| checkbox15.checked == true|| checkbox16.checked == true|| checkbox17.checked == true|| checkbox18.checked == true|| checkbox19.checked == true|| checkbox20.checked == true|| checkbox21.checked == true|| checkbox22.checked == true|| checkbox23.checked == true|| checkbox24.checked == true|| checkbox25.checked == true|| checkbox26.checked == true|| checkbox27.checked == true|| checkbox28.checked == true|| checkbox29.checked == true){
          cleartext.style.display = "block";
     }

     else{
          cleartext.style.display = "none";
     }
}



function restartclear(){
     location.reload();
}


let slide_btn = document.getElementById('mywishbtn');
slide_btn.addEventListener('click', openmbuy);

function openmbuy() {
     window.location.href = "mbuyitem.html";
   }

let slide_btn1 = document.getElementById('mywwishbtn');
slide_btn1.addEventListener('click', openwmbuy);

function openwmbuy() {
     window.location.href = "wmbuyitem.html";
   }

let slide_btn2 = document.getElementById('mykwishbtn');
slide_btn2.addEventListener('click', openkbuy);

function openkbuy() {
     window.location.href = "kdbuyitem.html";
   }

let addtobagbtn = document.getElementById('cartbtn');
addtobagbtn.addEventListener('click', addtobag);

function addtobag() {
     window.location.href = "bag.html";
   }






