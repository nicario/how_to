let acc = document.getElementsByClassName("accordion");
let i;

for(i=0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if(panel.style.mHeight){
      panel.style.mHeight = null;
    } else{
      panel.style.mHeight = panel.scrollHeight + "px";
    }
  })
}

for(i=0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
}

