function mUp(obj) {
  document.getElementById("status-bar").style.display = "block";
  document.getElementById("status-bar").style.zIndex = '1';
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}
