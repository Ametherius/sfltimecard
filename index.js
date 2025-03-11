function showTime() {
    let time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var ampm = hrs >= 12 ? 'PM' : 'AM';

    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    

    let currentTime = hrs + ":" + mins + ":" + secs + " " + ampm;

    document.getElementById('clock').innerHTML = currentTime;
}

setInterval(showTime, 1000);



showTime();






