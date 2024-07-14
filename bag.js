
   // SAle countdowm timer
//    let days = document.getElementById('days');
//    let hrs = document.getElementById('hrs');
//    let mins  = document.getElementById('mins');
//    let sec = document.getElementById('secs');

let Days = document.getElementById('days');
let Hrs = document.getElementById('hrs');
let Mins = document.getElementById('mins');
let Sec = document.getElementById('secs');

let setdate = new Date(" april 18, 2023 00:00:00").getTime();

setInterval(() => {
    let currdate = new Date();
    let diff = currdate - setdate;

    let daysleft = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hrsleft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minsleft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secleft = Math.floor((diff % (1000 * 60)) / 1000);

            Days.innerHTML = daysleft;
            Hrs.innerHTML = hrsleft;
            Mins.innerHTML = minsleft;
            Sec.innerHTML = secleft;

}, 1000);


let placeorderbtn = document.getElementById('ord');
placeorderbtn.addEventListener('click', addtoadd1);

function addtoadd1() {
     window.location.href = "address1.html";
   }

let addtoadd2btn = document.getElementById('add1');
addtoadd2btn.addEventListener('click', addtoadd2);
   
function addtoadd2() {
    window.location.href = "address2.html";
}
   
let paymentbtn = document.getElementById('add1');
paymentbtn.addEventListener('click', payment);
   
function payment() {
    window.location.href = "payment.html";
}
   
