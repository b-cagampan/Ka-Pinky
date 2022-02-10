let date = new Date();
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let time = ["12","1","2","3","4","5","6","7","8","9","10","11"];

function calendar() {
    document.getElementById("calendar").innerHTML = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
calendar();