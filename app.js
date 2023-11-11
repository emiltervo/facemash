document.getElementById("image1").addEventListener("click", function() {
    voteForLeft();
});

document.getElementById("image2").addEventListener("click", function() {
    voteForRight();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        voteForLeft();
    } else if (event.key === "ArrowRight") {
        voteForRight();
    }
});

function voteForLeft() {
    console.log("Voted for Left");
    // Implement vote handling logic here
}

function voteForRight() {
    console.log("Voted for Right");
    // Implement vote handling logic here
}
