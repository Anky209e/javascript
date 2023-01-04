let count = 0;

// Increases The Counter Value by 1
function increment() {
    
    count = count+1;
    document.getElementById("count-people").innerText = count;
    document.getElementById("message").style.display = "none";
}

// Decreases the Counter Value by 1
function decrement() {
    
    count = count-1;
    if (count >= 0) {
        document.getElementById("count-people").innerText = count;
        document.getElementById("message").style.display = "none";
    }
    else{
        count = 0
        document.getElementById("message").style.display = "block";
        console.warn("Negative Values are not Accepted!")
    }
    
}

// Resets The Counter to 0
function reset() {

    count = 0
    document.getElementById("count-people").innerText = count;
    document.getElementById("message").style.display = "none";

}