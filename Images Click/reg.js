document.getElementById("btn").addEventListener("click", Submit);
document.getElementById("name").addEventListener("blur", Check);
document.getElementById("Surname").addEventListener("blur", CheckLOc);
document.getElementById("id").addEventListener("blur", CheckNum);

var Locations = ["Malta","Italy"];


function CheckNum(){
    var x = document.getElementById("id").value;
    if(x.length != 8 || !/[0-9]/g.test(x)){
        alert("A number has only 8 numbers");
    }
    else{
        alert("Thank you");
    }
}
function CheckLOc(){
    var x = document.getElementById("Surname").value;
    if(Locations.includes(x)){
        alert("Location known");
    }else{
        alert("Location unknown");
    }
    
}
function Check(){
    var x = document.getElementById("name").value;
    if(x.length >= 3){
        alert("Bravu");
    }else{
        alert("nono");
    }
}

window.addEventListener("load", SHOW);
var picss = ["<img src='images/owner2.jpg'>","<img src='images/owner3.jpg'>","<img src='images/owner4.jpg'>"];

function SHOW(){
    document.getElementById("pics").innerHTML = picss[0];
    document.getElementById("pics").addEventListener("click", Change);
    var counter = 0;
    function Change(){
        
        counter ++;
        document.getElementById("pics").innerHTML = picss[counter];
        if (counter == picss.length){
            document.getElementById("pics").innerHTML = picss[0];
            counter = 0;
        }
    }
}

 var pep = [];


function People(name, surname, email, id){
    this.name= name;
    this.surname = surname;
    this.email = email;
    this.id = id;
}

function Submit(){
    
    
    
    var name = document.getElementById("name").value;
    var surname = document.getElementById("Surname").value;
    var email = document.getElementById("email").value;
     var id = document.getElementById("id").value;
    

    
    
   
    
    var exists = false;
    
    if(pep.length > 0){
        for(var i = 0; i < pep.length; i++)
        {
            if(pep[i].id == id)
            {
                exists = true;
                alert("Exists"); 
                break;
            }
        }


        if(!exists){
            var person = new People(name, surname, email, id);
            pep.push(person);
            document.getElementById("Users").innerHTML += pep.length+ person.name + person.id
            +"<br/>";

        }
    }
    else{
        var person = new People(name, surname, email, id);
            pep.push(person);
            document.getElementById("Users").innerHTML += pep.length+ person.name + person.id
            +"<br/>";
    }
    console.log(pep);
}

