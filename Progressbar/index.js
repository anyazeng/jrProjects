//操控谁？需要拿到谁？
//circle,进度条，btnx2

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle"); //拿到的是array,需要index
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//创建index
let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length ) {
        currentActive = 4;
    };
    console.log("currentActive next", currentActive)
    updateStyle();
})

prev.addEventListener("click", ()=> {
    currentActive--;
    if (currentActive < 1){
    currentActive = 1 ;
    };
    console.log("currentActive prev", currentActive);
    updateStyle();
})

function updateStyle() {
    circles.forEach((circle, index)=>{
        if(index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    });

    const actives =document.querySelectorAll(".active");
    progress.style.width = ((actives.length-1) / (circles.legnth-1)) * 100 + "%";

    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
