// Audio Elements
var startAud = document.getElementById('startAud');
var driveAud = document.getElementById('driveAud');
var brakeAud = document.getElementById('brakeAud');
var stopAud = document.getElementById('stopAud');

// Event Elements - to be used with Event Listeners
var btnStart = document.getElementById('btnStart');
var btnDrive = document.getElementById('btnDrive');
var btnBrake = document.getElementById('btnBrake');
var btnStop = document.getElementById('btnStop');

var allAudio = [startAud, driveAud, brakeAud, stopAud];

function stopAllAudio()
{
    for(i=0; i < allAudio.length; i++)
    {
        allAudio[i].pause();
        allAudio[i].currentTime = 0;
    }
}
//literal notation
var car = {
    make: "Fiat",
    model: "Cinquecento ",
    imageSource : "images/fiat.jpg",
    colour: "White",
    year: 2017,
    started: false,
    start: function(){         
        if(car.started)
        {
            alert('Car already started!');
        }
        else{           
        
            car.started = true;
            stopAllAudio();
            startAud.play();
            alert("Car on!");
        }
            },
    drive: function(){ 
            if(car.started)
            {
                stopAllAudio();
                driveAud.play();
                alert("Vroom Vroom!");
            }
            else
            {
                alert('You need to start the car first!');
            }
            },
    stop: function(){ 
            if(car.started)
            {
                stopAllAudio();
                stopAud.play();
                alert("Car has stopped!");
                car.started = false;
            }
            else
            {
                alert('The car is already stopped!');
            }
            },
    brake: function(){ 
            if(car.started)
            {
                stopAllAudio();
                brakeAud.play();
                alert("Sudden Brake!");
            }
            else
            {
                alert('The car is already stopped!');
            }
            
            },
    
};

document.getElementById('carSection').innerHTML = '<span class = "blue">Make: </span><span>' + car.make + '</span><br><span class = "blue">Model: </span><span>' + car.model + '</span><br><span class = "blue">Colour: </span><span>' + car.colour + '</span><br><span class = "blue">Year: </span><span>' + car.year+ '</span>';

document.getElementById('carImage').innerHTML = '<img src = ' + car.imageSource + '>';


btnStart.addEventListener('click', car.start);
btnDrive.addEventListener('click', car.drive);
btnBrake.addEventListener('click', car.brake);
btnStop.addEventListener('click', car.stop);