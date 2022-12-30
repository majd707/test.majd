document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#red").onclick = function(){ document.querySelector( "#example").style.color = "red";
    
    }
    
    document.querySelector("#blue").onclick= function(){ document.querySelector("#example").style.color = "blue";
    
    }
    
    document.querySelector("#green").onclick= function(){ document.querySelector("#example").style.color = "green";
    
    }

});


document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("form").onsubmit = function(){
    var value = document.querySelector("#creative").value; 
    var result = document.querySelector("#output");
    
    var myli = document.createElement("li");
     myLi.innerHTML = value;
     result.appendChild(myLi); 
     return false;
    }
    });