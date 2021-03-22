var i = 0;
var j=0;
var k=0;
var l=0;
var m=0;
var interval = 100;
function typeWriter(txt,set_I,id) {
     
     if (i == txt.length) {
          clrint(set_I)
          setTimeout(() => {
               i = 0;
               
          }, 1000);

          
          setTimeout(() => {
               aktu_ani(txt,id);
          }, 2000);
          
     }
     if (i < txt.length) {
          document.getElementById(id).innerHTML += txt.charAt(i);
          i++;

     }
}
function clrint(set_I){
     clearInterval(set_I);
}
function aktu_ani(txt,id) {
     document.getElementById(id).innerHTML = "";
     var set_I = setInterval(() => {
          typeWriter(txt,set_I,id);
     }, interval);
     
}

setTimeout(() => {
     var id = "demo";
     var txt = 'Aktu Quantum';
     aktu_ani(txt,id);
     
}, 0);

// -----------div1

function typeWriter_div_1(txt,set_I,id) {
     
     if (j == txt.length) {
          clrint(set_I)
          setTimeout(() => {
               j = 0;
               
          }, 1000);

          
          setTimeout(() => {
               aktu_ani_div_1(txt,id);
          }, 2000);
          
     }
     if (j < txt.length) {
          document.getElementById(id).innerHTML += txt.charAt(j);
          j++;

     }
}

function clrint_div_1(set_I){
     clearInterval(set_I);
}
function aktu_ani_div_1(txt,id) {
     document.getElementById(id).innerHTML = "";
     var set_I = setInterval(() => {
          typeWriter_div_1(txt,set_I,id);
     }, interval);
     
}

setTimeout(() => {

     var id = "div_1";
     var txt ="Active Students";
     aktu_ani_div_1(txt,id);
     
}, 0);

// --------------div_2
function typeWriter_div_2(txt,set_I,id) {
     
     if (k == txt.length) {
          clrint(set_I)
          setTimeout(() => {
               k = 0;
               
          }, 1000);

          
          setTimeout(() => {
               aktu_ani_div_2(txt,id);
          }, 2000);
          
     }
     if (k < txt.length) {
          document.getElementById(id).innerHTML += txt.charAt(k);
          k++;

     }
}

function clrint_div_2(set_I){
     clearInterval(set_I);
}
function aktu_ani_div_2(txt,id) {
     document.getElementById(id).innerHTML = "";
     var set_I = setInterval(() => {
          typeWriter_div_2(txt,set_I,id);
     }, interval);
     
}

setTimeout(() => {

     var id = "div_2";
     var txt ="Quantum";
     aktu_ani_div_2(txt,id);
     
}, 0);
// ---------------dvi_3



function typeWriter_div_3(txt,set_I,id) {
     
     if (l == txt.length) {
          clrint(set_I)
          setTimeout(() => {
               l = 0;
               
          }, 1000);

          
          setTimeout(() => {
               aktu_ani_div_3(txt,id);
          }, 2000);
          
     }
     if (l < txt.length) {
          document.getElementById(id).innerHTML += txt.charAt(l);
          l++;

     }
}

function clrint_div_3(set_I){
     clearInterval(set_I);
}
function aktu_ani_div_3(txt,id) {
     document.getElementById(id).innerHTML = "";
     var set_I = setInterval(() => {
          typeWriter_div_3(txt,set_I,id);
     }, interval);
     
}

setTimeout(() => {

     var id = "div_3";
     var txt ="Pages";
     aktu_ani_div_3(txt,id);
     
}, 0);



// ---------div_4


function typeWriter_div_4(txt,set_I,id) {
     
     if (m == txt.length) {
          clrint(set_I)
          setTimeout(() => {
               m = 0;
               
          }, 1000);

          
          setTimeout(() => {
               aktu_ani_div_4(txt,id);
          }, 2000);
          
     }
     if (m < txt.length) {
          document.getElementById(id).innerHTML += txt.charAt(m);
          m++;

     }
}

function clrint_div_4(set_I){
     clearInterval(set_I);
}
function aktu_ani_div_4(txt,id) {
     document.getElementById(id).innerHTML = "";
     var set_I = setInterval(() => {
          typeWriter_div_4(txt,set_I,id);
     }, interval);
     
}

setTimeout(() => {

     var id = "div_4";
     var txt ="Questions";
     aktu_ani_div_4(txt,id);
     
}, 0);

