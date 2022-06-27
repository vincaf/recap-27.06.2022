const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let counter = document.getElementById('counter');

let centesimi = 0;
let secondi = 0;
let minuti = 0;
let ore = 0;

let counterValue = 0;
let clock; 
let valueCheck = false;

function stamp(){
    counter.innerHTML = counterValue;
} 

function addUnit(){
    counterValue = ore + ':' + minuti + ':' + secondi + ':' + centesimi;
    centesimi++
    if (centesimi > 99){
        centesimi = 0;
        secondi++;
    }
    if (secondi > 59){
        secondi = 0;
        minuti++;
    }
    if (minuti > 59){
        minuti = 0;
        ore++
    }
    stamp();
};

startBtn.addEventListener('click', function(){
    if (valueCheck === false){
        clock = setInterval(addUnit, 10);
        valueCheck = true;   
    }
});

stopBtn.addEventListener('click', function(){
    clearInterval(clock);
    valueCheck = false;
});

resetBtn.addEventListener('click', function(){
    centesimi = 0;
    secondi = 0;
    minuti = 0;
    ore = 0;
    counter.innerHTML = "0:0:0:0"
    clearInterval(clock);
    valueCheck = false;
});
