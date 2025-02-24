var mailAd = ["@gmail.com",  "@inbox.lv", "@yahoo.com" , "@yandex.ru","@outlook.com","@mail.ru"];
var warnings = ["Check the e-mail field. It cannot be empty, start with '.' or be longer than 64 symbols!", "Invalid value In the last field! Please input a positive number."];
let mail_domain, mail_local, warningPlace, numberInput, warnedN, warnedE, dataOK = 1;
window.addEventListener('DOMContentLoaded', (event) => {
    let sheltie = document.getElementById("sheltie");
    let corgi = document.getElementById("corgi");
    let basenji = document.getElementById("basenji");
    let sennenhund = document.getElementById("berner-sennenhund");
    let spaniel = document.getElementById("spaniel");
    let pei = document.getElementById("shar-pei");
    let shep = document.getElementById("east-european-shepherd");
    let papillon = document.getElementById("papillon");
    sheltie.addEventListener('click',function(){ Show(0, 0)});
    corgi.addEventListener('click', function(){ Show(0, 1)});
    basenji.addEventListener('click', function(){ Show(1, 0)});
    sennenhund.addEventListener('click', function(){ Show(1, 1)});
    spaniel.addEventListener('click', function(){ Show(2, 0)});
    pei.addEventListener('click', function(){ Show(2, 1)});
    shep.addEventListener('click', function(){ Show(3, 0)});
    papillon.addEventListener('click', function(){ Show(3, 1)});
        // Get elements after the document has loaded
        var eyesOpening = document.getElementById('eyes-opening').innerHTML;
        var eyesClosing = document.getElementById('eyes-closing').innerHTML;
        var opened = false;
        document.getElementById('light-mode-button').addEventListener('click', function() {
            // Trigger eye and pupil animations
            if(!opened){
                document.getElementById('eyes').innerHTML = eyesOpening;
                opened = true;
            }
            else if(opened){
                document.getElementById('eyes').innerHTML = eyesClosing;
                opened = false;
            }
        });
});

//from this point mostly plain document object model is used
function checkBeforeSubmission(){
    checkData(0);
    checkData(1);
    if(warnedN || warnedE)return false;
    return true;
}
function checkData(suspect){
    let warning, warningText, classP;
    if(!suspect){
        let toCheck = String(mail_local.value).replaceAll(' ','');
        if(toCheck[0]=='.' || toCheck.length > 64 || toCheck==''){
            if(warnedE) return 0;
            dataOK=0;
            mail_local.style.backgroundColor = "salmon";
            warningText = document.createTextNode(warnings[0]);
            classP = "warning_E";
            warnedE = true;
        }else{dataOK = 1;}
    }
    else{
        let toCheck = Number(numberInput.value);
        if(toCheck < 0 || !Number.isInteger(toCheck)){
            if(warnedN)return 0;
            dataOK = 0;
            numberInput.style.backgroundColor="salmon";
            warningText = document.createTextNode(warnings[1]);
            classP = "warning_N";
            warnedN = true;
        }else{dataOK = 1;}
    }
    if(!dataOK){
        warning = document.createElement("p");
        warning.appendChild(warningText);
        warning.className = (classP);
        warningPlace.appendChild(warning);
    }else{
        if(!suspect){ var elements = document.getElementsByClassName("warning_E"); mail_local.style.backgroundColor = "white"; warnedE = false;}
        else{ var elements = document.getElementsByClassName("warning_N"); numberInput.style.backgroundColor = "white"; warnedN = false;}
        while(elements.length > 0) elements[0].parentNode.removeChild(elements[0]);
    }
}

//here mostly jquery is used
// var hellspawnSpawned = false;
// $(window).scroll(function(e) {
//     var distanceScrolled = $(this).scrollTop();
//     $('.banner').css({"filter" : "blur("+distanceScrolled/60+"px)"});
//     if(distanceScrolled>300 && !hellspawnSpawned){
//         hellspawnSpawned = true;
//         var newMarquee = $('<marquee direction="right" height="80" width="105%"><img src="images/doggy.gif" width="100" height="100"></marquee>');  //create elements w/ jquery
//         $( ".navbar-nav" ).append(newMarquee); //append new element
//     }
// });
async function Show(ind, side){ //side 0 = left, side 1 = right
    let flag = 20;
    for(let i = 0; i<4; i++){
        if($('.hidden-left').eq(i).css("left") == '0px'){
            $('.hidden-left').eq(i).animate({left:'-100%'}, 500);
            await delay(400);
            $('.hidden-left').eq(i).css({'display':'none'}); 
            flag = i + 10;
            console.log(flag);
        }  else if($('.hidden-right').eq(i).css("right") == '0px'){
            $('.hidden-right').eq(i).animate({right:'-100%'}, 500);
            await delay(400);  
            $('.hidden-right').eq(i).css({'display':'none'});
            flag = i;
            console.log(flag);
        }
        if(ind == flag && side == 1|| ind == flag-10 && side == 0) return 0;
    }
    if(side==0 && (flag <10 || flag-10 != ind)){
        $(".hidden-left").eq(ind).css({'display' : 'block'})
        $(".hidden-left").eq(ind).animate({ left: "0"}, 500);
        flag = 20;
    }
    else if (flag>=10 || flag!=ind){
        $(".hidden-right").eq(ind).css({'display' : 'block'})
        $(".hidden-right").eq(ind).animate({right: "0"}, 500);
        flag = 20;
    }
}
function delay(milliseconds){ //makes text look better when disappearing after the delay
    return new Promise(resolve => { setTimeout(resolve, milliseconds); });
}