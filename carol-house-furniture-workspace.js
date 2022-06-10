/* Open */
function openNav() {
    document.getElementById("hamburger").style.display = "block";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("hamburger").style.display = "none";
  }


// function for back button 

function back(){
    document.location.href = "cart.html";
  }


// js for add to cart button
const add_cart_btn = 
document.getElementById("notification_btn");

const notification = 
document.getElementById("close");

add_cart_btn.addEventListener("click", ()=>
{
    notification.classList.add("show");
})