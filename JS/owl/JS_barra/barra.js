// JavaScript code
document.getElementById("list").style.display = "none";


function search_films() 
{
    
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('filme');

    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            document.getElementById("list").style.display = "block";
        }
        else {
            x[i].style.display="list-item";   
            /*document.getElementById("list").style.display = "none";*/
        }
    }
}



