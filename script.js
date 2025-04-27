let [seconds,minutes,hours]=[0,0,0]

let display=document.getElementById('displaytime');
let timer=null;
function watch(){
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
        if(minutes===60){
            minutes=0;
            hours++;
        }
    }
    display.innerHTML=String(hours).padStart(2,'0')+":"+String(minutes).padStart(2,'0')+":"+String(seconds).padStart(2,'0');
}

function start(){
    if(timer!==null){
            clearInterval(timer);
    }
    timer=setInterval(watch,1000);
}

function reset(){
    clearInterval(timer);
    timer=null;
    [seconds,minutes,hours]=[0,0,0];
    display.innerHTML=String(hours).padStart(2,'0')+":"+String(minutes).padStart(2,'0')+":"+String(seconds).padStart(2,'0');
}

function stop(){
    clearInterval(timer);
    timer=null;
}