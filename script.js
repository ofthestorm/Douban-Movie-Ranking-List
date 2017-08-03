function over() {
    console.log(document.getElementById("musicWord").innerHTML);
    if(document.getElementById("musicWord").innerHTML != "播放背景音乐") {
        document.getElementById("musicImg").src = "images/No.png";
        document.getElementById("musicWord").innerHTML = "关闭背景音乐";
    }

}

function out() {
    console.log(document.getElementById("musicWord").innerHTML);
    if(document.getElementById("musicWord").innerHTML != "播放背景音乐")
    document.getElementById("musicImg").src = "images/Unknown.gif";
    document.getElementById("musicWord").innerHTML = "City of stars";
}

function clicked() {
    console.log(document.getElementById("musicWord").innerHTML);
    if(document.getElementById("musicWord").innerHTML === "关闭背景音乐") {
        document.getElementById("musicImg").src = "images/stop.png";
        document.getElementById("musicWord").innerHTML = "播放背景音乐";
    } else {
        document.getElementById("musicImg").src = "images/Unknown.gif";
        document.getElementById("musicWord").innerHTML = "City of stars";
    }
}