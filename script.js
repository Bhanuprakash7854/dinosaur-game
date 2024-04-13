let dino = document.querySelector("#dino");
let cactus = document.querySelector("#cactus");
let board = document.querySelector(".board");
function jump()
{
    if(dino.classList != "jump")
    {
    dino.classList.add("jump");
    setTimeout(()=>{
        dino.classList.remove("jump");
    },300);
    }
}
board.addEventListener("touchstart",jump);
document.addEventListener("keydown",jump);
let checkalive = setInterval(function  ()
        {
            let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
            let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
            if(dinoTop>110 && (cactusLeft<90 && cactusLeft>50))
            {
                alert("You loose!! Reload to start again...");
            }
        },10);