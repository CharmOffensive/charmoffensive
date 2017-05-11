/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
window.onload = function(){
  var menuButton = document.getElementById("menu-button");

  menuButton.onclick = function(event){
      document.getElementById("dropdown-menu").classList.toggle("show");
  }
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu-button')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
