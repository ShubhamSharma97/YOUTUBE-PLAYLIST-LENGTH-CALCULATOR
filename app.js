// Calculating Total Time of Playlist
function gettingPlaylistLength() {
    let videos = document.querySelectorAll(
        "span.ytd-thumbnail-overlay-time-status-renderer"
    );
    let totalTime = 0;
    for (let i = 0; i < videos.length; i++) {
        let time = videos[i].innerHTML; //\n hh:mm:ss \n
        totalTime = totalTime + gettingSeconds(time);
    }

    //Calculating time at diffrent speeds
    let time1x = gettingTimeFromSeconds(totalTime);
    let time1_25x = gettingTimeFromSeconds(Math.ceil(totalTime / 1.25));
    let time1_50x = gettingTimeFromSeconds(Math.ceil(totalTime / 1.5));
    let time1_75x = gettingTimeFromSeconds(Math.ceil(totalTime / 1.75));
    let time2x = gettingTimeFromSeconds(Math.ceil(totalTime / 2.0));

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "5px";
    container.style.right = "5px";
    container.style.border = "2px dotted Black";
    container.style.padding = "5px";
    container.style.background = "#DA4167";
    container.style.zIndex = "7000";

    const text = document.createElement("span");
    text.innerHTML = `Playlist Length<br>1.00x : ${time1x}<br>1.25x: ${time1_25x}<br>1.50x: ${time1_50x}<br>1.75x: ${time1_75x}<br>2.00x: ${time2x}`;
    text.style.fontSize = "25px";
    text.style.color = "#ffffff";

    container.appendChild(text);
    document.body.appendChild(container);
}

function gettingTimeFromSeconds(totalTime) {
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = totalTime % 60;

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${hours}:${minutes}:${seconds}`;
}

function gettingSeconds(videoTime) {
    videoTime = videoTime.trim(); // \n hh:mm:ss \n to hh:mm:ss
    let videoArray = videoTime.split(":"); // hh:mm:ss to ['hh','mm','ss']

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (videoArray.length == 2) {
        minutes = parseInt(videoArray[0]);
        seconds = parseInt(videoArray[1]);
    } else if (videoArray.length == 3) {
        hours = parseInt(videoArray[0]);
        minutes = parseInt(videoArray[1]);
        seconds = parseInt(videoArray[2]);
    }

    return hours * 3600 + minutes * 60 + seconds;
}

// Calling Function after 1 second to execute task
setTimeout(() => {
    gettingPlaylistLength();
}, 1000);
