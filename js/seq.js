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
            answerer.innerHTML = "Just code duh\nTimmy 0101993733";
            answerer.style.display = "block";
            break;
        case 'second' :
            //Mangas
            answerer.innerHTML  = "Here are a few links<br>Hassan"
            answerer.style.display = "block";
            break;
        case 'third' :
            //Player
            answerer.innerHTML  = "Right \nChris 0505201515"
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