// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('snip');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

// chec on keyup event of searchbar input field and call search_animal function
document.getElementById('searchbar').addEventListener('keyup', search_animal);

// check when list item is clicked and copy the text after the | to clipboard
document.addEventListener('click', function(e) {
    if (e.target && e.target.matches('li.snip')) {
        let text = e.target.innerText;
        // get all text after the | character
        let text_to_copy = text.substring(text.indexOf("|") + 1);
        // copy to clipboard
        navigator.clipboard.writeText(text_to_copy);
    }
}
);

// hide the list until the searchbar calls the search_animal function
document.getElementById('list').style.display = "none";

// when the searchbar is clicked, show the list
document.getElementById('searchbar').addEventListener('click', function() {
    document.getElementById('list').style.display = "block";
}
);

// hide the list  seonds after the searchbar loses focus
document.getElementById('searchbar').addEventListener('blur', function() {
    setTimeout(function() {
        document.getElementById('list').style.display = "none";
    }, 1000);
}
);
