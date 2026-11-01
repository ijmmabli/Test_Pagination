let link = document.getElementsByClassName('link');

let currentValue = 1;

function activeLink(){
    for(l of link){
        l.classList.remove("active");
        //console.log(l);
    }
    event.target.classList.add('active');
    currentValue = event.target.value;
    //console.log(currentValue);
};

function backBtn(){
    if(currentValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add('active');
        console.log(currentValue);
    };
}

function nextBtn(){
    if(currentValue < 6){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add('active');
        console.log(currentValue);
    };
}