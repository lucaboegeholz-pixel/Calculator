let Display = document.getElementById("Display");
let Keys = document.getElementById("Keys");
let mirror = document.createElement("span");
mirror.style.visibility = "hidden";
mirror.style.position = "absolute";
mirror.style.whiteSpace = "pre";
mirror.style.fontSize = window.getComputedStyle(Display).fontSize;
mirror.style.fontFamily = window.getComputedStyle(Display).fontFamily;
document.body.appendChild(mirror);

//Display Growing animation
DisplayGrowing = function(){
    mirror.textContent = Display.value;
    let mirrorWidth = mirror.offsetWidth;
    let displayWidth = Display.offsetWidth;
    if(mirrorWidth > displayWidth){
    Display.style.width = mirrorWidth + 20 + "px"
    }
}

Keys.onclick = function(){
    if (event.target.tagName !== "BUTTON") return;
    
    let keyText = event.target.innerText;

    if (keyText === "="){
        try {
            Display.value = eval(Display.value.replace(/x/g, '*'));
        } catch {
            Display.value = "Error";
        }
    }
    else if (keyText === "C"){
        Display.value = ""
    }
    else{
    let number = event.target.innerText;
    Display.value += number;
    DisplayGrowing();
    }
}

