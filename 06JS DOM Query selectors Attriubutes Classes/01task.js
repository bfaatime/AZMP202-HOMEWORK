let fontSize = 16; 

function increaseFont() {
    fontSize += 2; 
  document.getElementById("text").style.fontSize = fontSize + "px";
}

function decreaseFont() {
  if (fontSize > 6) { 
    fontSize -= 2; 
    document.getElementById("text").style.fontSize = fontSize + "px";
  }
}

function applyColor() {
  const color = document.getElementById("colorInput").value;
  document.getElementById("text").style.color = color;
}