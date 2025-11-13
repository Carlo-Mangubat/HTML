let display = document.getElementById("display");
    let clickSound = document.getElementById("clickSound");
    function playClick(){
      clickSound.currentTime = 0; // reset sound
      clickSound.play();
    }
    function appendValue(val){
      if (display.innerText === "0" || display.innerText === "Error"){
        display.innerText = val;
      }else{
        display.innerText += val;
      }
    }
    function clearDisplay(){
      display.innerText="0";
    }
    function deleteLast(){
      if (display.innerText.length === 1 || display.innerText === "Error") {
        display.innerText="0";
      }else{
        display.innerText = display.innerText.slice(0, -1);
      }
    }
    function calculate() {
      try{
        display.innerText=eval(display.innerText);
      } catch{
        display.innerText="Error";
      }
    }