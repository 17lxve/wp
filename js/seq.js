//Answers
var Programming = "If you're learning programming and are having difficulties;<br>"
                + "If you're programming an app and need assistance;<br>"
                + "If you just want to have fun with computers:<br>"
                + "You can contact Timmy at +2250101993733 or kouadiobhegnino@gmail.com";
var Mangas = "Interested in mangas and animes?<br>"
            +"Want to discover pieces of art?<br>"
            +"You like shonens, shojos, seinens, isekais, joseis?<br>"
            +"Message Hassan at +2250779040196 or coulibalyf6@student.iugb.edu.ci"


function swap(){
    //everything i need
    var main = document.getElementById("lis").value;
    var answerer = document.getElementById("real");
    switch(main){
        case 'base' :
            alert("Please select a value before going on");
            break;
        case 'first' :
            //Programming
            answerer.innerHTML = Programming;
            answerer.style.display = "block";
            break;
        case 'second' :
            //Mangas
            answerer.innerHTML  = Mangas;
            answerer.style.display = "block";
            break;
        case 'third' :
            //Player
            answerer.innerHTML  = "Right <br>Chris<br> +2250505201515"
            answerer.style.display = "block";
            break;
        case 'first' :
            //Other
            break;
        default :
            alert('error');
            break;
        
    }

}