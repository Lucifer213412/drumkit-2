    
    
   //for selecting on clickd function.
    for(var i=0;i<document.querySelectorAll(".drum").length;i++)
 {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){


    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);

})
 }

// for key down or key oress function.

document.addEventListener("keydown",function (event){   
    //console.log(event.key);  
    makeSound(event.key)

});

        function makeSound(key)  
    {
     switch(key){

        case"w":
        
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();

        break;

        case"a":
        var crash1= new Audio("sounds/crash.mp3");
        crash1.play();
        break;
        
        case"s":
        var kickBass= new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
         
        case"d":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case"j":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case"k":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case"l":
        var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;  

        
     
        default:console.log(buttonInnerHtml);
    }
     // alert("i got clicked")
        //var audio = new Audio("sounds/tom-1.mp3");
        //audio.play();
    };

