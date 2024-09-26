let cont = document.querySelectorAll(".container");
let song = document.querySelector(".song");

cont.forEach((song)=>{
    song.addEventListener("click", ()=>{
        console.log("clicked");
    })
})