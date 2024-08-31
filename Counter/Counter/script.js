let username;

document.getElementById("submit").onclick = function(){
    username= document.getElementById("input").value;
    console.log("The username is: ", username);
    document.getElementById("puser").innerText = username;
}

let radius;
document.getElementById("submit2").onclick = function(){
    radius = document.getElementById("input2").value * 3.14;
    document.getElementById("area").innerText = radius;
}

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}



/*
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
*/