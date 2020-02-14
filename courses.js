var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
for (var i = 0; i < 4; i++) {
    // When the user clicks the button, open the modal 
    btn[i].onclick = function () {
        modal[i].style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span[i].onclick = function () {
        modal[i].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }
    // When the user clicks anywhere outside of the modal, close it

}console.log(btn);

