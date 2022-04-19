const homeText = document.getElementById('homeText');

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = "wheat";
    homeText.textContent = 'HOME';
    homeText.style.color = '#168b64'
    homeText.style.textShadow = "5px 5px 1px #7e168b, 10px 10px 1px #353535";
});

const redBtn = document.getElementById('red');
redBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
    homeText.textContent = 'Red';
    homeText.style.color = '#BEA6A0';
    homeText.style.textShadow = "5px 5px 1px #56423D, 10px 10px 1px #4A271E";
});

const orangeBtn = document.getElementById('orange');
orangeBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = "orange";
    homeText.textContent = 'Orange';
    homeText.style.color = '#00C2FF';
    homeText.style.textShadow = "5px 5px 1px #BEA6A0, 10px 10px 1px #56423D";
})

const purpleBtn = document.getElementById('purple');
purpleBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = "purple";
    homeText.textContent = 'Purple';
    homeText.style.color = '#B8A6B4';
    homeText.style.textShadow = "5px 5px 1px #CE5200, 10px 10px 1px #901A00";
})

const greenBtn = document.getElementById('green');
greenBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = "green";
    homeText.textContent = 'Green';
    homeText.style.color = '#9999CC';
    homeText.style.textShadow = "5px 5px 1px #DBA053, 10px 10px 1px #A06C20";
})

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if(name == "1") {
        document.body.style.backgroundColor = "wheat";
        homeText.textContent = 'HOME';
        homeText.style.color = '#168b64'
        homeText.style.textShadow = "5px 5px 1px #7e168b, 10px 10px 1px #353535";
    } else if (name == "2") {
        document.body.style.backgroundColor = "red";
        homeText.style.color = '#BEA6A0';
        homeText.style.textShadow = "5px 5px 1px #56423D, 10px 10px 1px #4A271E";
        homeText.textContent = 'Red';
    } else if (name == "3") {
        document.body.style.backgroundColor = "orange";
        homeText.textContent = 'orange';
        homeText.style.color = '#00C2FF';
        homeText.style.textShadow = "5px 5px 1px #BEA6A0, 10px 10px 1px #56423D";
    } else if (name == "4") {
        document.body.style.backgroundColor = "purple";
        homeText.textContent = 'purple';
        homeText.style.color = '#B8A6B4';
        homeText.style.textShadow = "5px 5px 1px #CE5200, 10px 10px 1px #901A00";
    } else if(name == "5") {
        document.body.style.backgroundColor = "green";
        homeText.textContent = 'green';
        homeText.style.color = '#9999CC';
        homeText.style.textShadow = "5px 5px 1px #DBA053, 10px 10px 1px #A06C20";
    } 
})