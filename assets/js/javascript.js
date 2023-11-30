document.getElementById("chatbotButton").onclick = function() {
    document.getElementById("chatbotPopup").style.display = "block";
  }
  
  document.querySelector(".close").onclick = function() {
    document.getElementById("chatbotPopup").style.display = "none";
  }
  
  // Close the popup if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById("chatbotPopup")) {
      document.getElementById("chatbotPopup").style.display = "none";
    }
  }
  