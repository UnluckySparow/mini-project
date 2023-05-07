// key code button 
// e 69   / R 82    /  I 73 / K 75 / F 70  / G 67  / H 71  / J 74

window.addEventListener("keydown", function (e){
    var clicke = document.getElementById('click-e');
    var clickr = document.getElementById('click-r');
    var clicki = document.getElementById('click-i');
    var clickk = document.getElementById('click-k');
    var clickf = document.getElementById('click-f');
    var clickg = document.getElementById('click-g');
    var clickh = document.getElementById('click-h');
    var clickj = document.getElementById('click-j');
    // check clicks client 
    if (e.keyCode === 69){
        clicke.pause();
        clicke.currentTime = '0';
        clicke.play()
    }
    if (e.keyCode === 82){
        clickr.pause();
        clickr.currentTime = '0';
        clickr.play()
    }
    if (e.keyCode === 73){
        clicki.pause();
        clicki.currentTime = '0';
        clicki.play()
    }
    if (e.keyCode === 75){
        clickk.pause();
        clickk.currentTime = '0';
        clickk.play()
    }
    if (e.keyCode === 70){
        clickf.pause();
        clickf.currentTime = '0';
        clickf.play()
    }
    if (e.keyCode === 67){
        clickg.pause();
        clickg.currentTime = '0';
        clickg.play()
    }
    if (e.keyCode === 71){
        clickh.pause();
        clickh.currentTime = '0';
        clickh.play()
    }
    if (e.keyCode === 74){
        clickj.pause();
        clickj.currentTime = '0';
        clickj.play()
    }

})