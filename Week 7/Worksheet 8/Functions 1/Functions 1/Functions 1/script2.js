var word = "Many of life's failures are people who did not realize how close they were to success when they gave up.";

    document.getElementById("h3Wrd").innerHTML = word;
  //  LoadDateTime();



 
    var dateNow = new Date();
    var yearNow = dateNow.getFullYear();
    var monthNow = dateNow.getMonth();
    var dayNow = dateNow.getDate();
    var timeNow = dateNow.getTime();
    
    var wholeDateDetails = "Day: " + dayNow + " Month: " + getMonthName(monthNow+1) + " Year: " + yearNow + "<br>Time: (number of milliseconds since 1970/01/01) " + timeNow;
    
    var dateNowFormat1 = new Date().toLocaleString();
    var dateNowFormat2 = new Date().toLocaleDateString();
    var timeNowFormat1 = new Date().toLocaleTimeString();
    var timeNowFormat2 = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
    
    wholeDateDetails += "<br><br>Date Format 1: " + dateNowFormat1;
    
    wholeDateDetails += "<br><br>Date Format 2: " + dateNowFormat2;
    
    wholeDateDetails += "<br><br>Time Format 1: " + timeNowFormat1;
    
    wholeDateDetails += "<br><br>Time Format 2: " + timeNowFormat2;
    
    document.getElementById("dateDetails").innerHTML = wholeDateDetails;

function subStringPos(substring)
{
    var pos = word.indexOf(substring);
    
    return pos;
}

function posEvent()
{
    var sub = document.getElementById("subTxt").value;
    var pos = subStringPos(sub);
    
    document.getElementById("posSpan").innerHTML = "Substring position: " + pos;
}

function getMonthName(monthNum)
{
    var monthName = '';
    switch(monthNum)
    {
        case 1:
            monthName = 'Jan';
            break;
        case 2:
            monthName = 'Feb';
            break;
        case 4:
            monthName = 'Apr';
            break;
        case 5:
            monthName = 'May';
            break;
        case 6:
            monthName = 'Jun';
            break;
        case 7:
            monthName = 'Jul';
            break;
        case 8:
            monthName = 'Aug';
            break;
        case 9:
            monthName = 'Sep';
            break;
        case 10:
            monthName = 'Oct';
            break;
        case 11:
            monthName = 'Nov';
            break;
        case 12:
            monthName = 'Dev';
            break;
        default:
            monthName = 'Invalid';
            break;
    }
    
    return monthName;
}