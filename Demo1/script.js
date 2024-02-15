function bouton1(){
   let element1 = document.getElementById("input1").value;
   let element2 = document.getElementById("input2").value;
    
  localStorage.setItem("user",element1); 
  localStorage.setItem("pwd",element2); 
}