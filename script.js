// 解决冲突 http://bbs.csdn.net/topics/360098151


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

    var music = document.getElementById("music");
    music.play();
    music.pause();
}

function insert(arr, item, index) {
    var result = arr.slice(0,index-1);
    result.push(item);
    result.push(arr.slice(index+1,arr.length-1));
    return result;
}