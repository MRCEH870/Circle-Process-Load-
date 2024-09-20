let percentage = 0 ;
const percentageElement = document.getElementById('percentage');
const progressMessageElement = document.getElementById('progress-message');
const circleElement = document.getElementById('circle');
const checkmarkElement = document.getElementById('checkmark');

function updateProgress(){
    if(percentage <= 100){
        percentageElement.innerHTML = percentage + "%";
        circleElement.style.background=`conic-gradient(
        rgba(0,0,225,0.7) ${percentage *3.6}deg,
        rgba(0,0,225,0.3) ${percentage * 3.6}deg)`;
        percentage++;
    }else{
        percentageElement.style.display = 'none';
        progressMessageElement.style.display = 'none';
        checkmarkElement.style.display='block';
        checkmarkElement.style.animation = 'checkmarkShow 1s forwards'
    }
}

setInterval(updateProgress,100);