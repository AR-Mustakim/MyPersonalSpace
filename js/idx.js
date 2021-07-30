(function() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function checkAmPm(j) {
        if (j < 12) {
            j = " AM";
        } else {
            j = " PM"
        }
        return j;
    }

    function ampmMsg(k) {
        if (k > 4.0 && k <= 5.0) {
            document.getElementById('body').style.background = 'url("images/bg_images/dawn.jpg") no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
            k = " I wish you a Very Good Morning";

        } else if (k > 5.0 && k <= 11.59) {
            document.getElementById('body').style.background = 'url("images/bg_images/morning.jpg") no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
            k = " I wish you a Very Good Morning";

        } else if (k > 11.59 && k <= 17.0) {
            document.getElementById('body').style.background = 'url("images/bg_images/afternoon.jpg") no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
            k = " I wish you a Very Good Days";

        } else if (k > 17.0 && k <= 20.0) {
            document.getElementById('body').style.background = 'url("images/bg_images/evening.jpg") no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.color = "#FFFFFF";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
            k = " I wish you a Very Good Evening";

        } else if (k > 20.0 && k <= 23.59) {
            document.getElementById('body').style.background = 'url("images/bg_images/night.jpg") no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.color = "#00090f";
            document.getElementById('body').style.textShadow = "0px 3px 5px rgba(29, 61, 84, .35)";
            document.getElementById('menus-btn').style = "color:#00090f";
            document.getElementById('close-btn').style = "color:#ffffff";

            k = " I wish you a Very Good Night";

        } else if (k > 0.0 && k <= 4) {
            document.getElementById('body').style.background = 'url("images/bg_images/lateNight.jpg") no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.color = "#FFFFFF";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
            k = " I wish you a Very Good Night";

        } else {
            k = " I wish you a Very Good Days";
        }
        return k;
    }

    function startTime() {
        let c_time = new Date();
        let hour = c_time.getHours();
        let min = c_time.getMinutes();
        let time = hour + "." + min
            // add a zero in front of numbers<10
        m = checkTime(min);
        ampm = checkAmPm(hour);
        goodMsg = ampmMsg(time)
        document.getElementById('time-msg').innerHTML = "Oh, It's " + hour + ":" + m + ampm + " there.<br>" + goodMsg;
        t = setTimeout(function() {
            startTime()
        }, 500);
    }
    startTime();
})();


let statusNavigasi = false;
document.getElementById("menus-btn-container").addEventListener("click", toogleNav);
document.getElementById("close-menu-btn").addEventListener("click", toogleNav);

function toogleNav() {
    let getMsg = document.querySelector(".welcome-msg");
    let getMenuBtn = document.querySelector(".menus-btn-container");
    let getNavigasi = document.querySelector(".navigasi");
    let getLogo = document.getElementById('logo-container');
    let getLogo2 = document.getElementById('logoL-container2');

    if (statusNavigasi === false) {
        getMsg.style.opacity = "0";
        getMenuBtn.style.opacity = "0";
        getLogo.style.opacity = '0';
        getLogo2.style.visibility = 'visible';
        getNavigasi.style.visibility = "visible";
        statusNavigasi = true;
    } else if (statusNavigasi === true) {
        getMsg.style.opacity = "1";
        getMenuBtn.style.opacity = "1";
        getLogo.style.opacity = '1';
        getLogo2.style.visibility = 'hidden';
        getNavigasi.style.visibility = "hidden";
        statusNavigasi = false;
    }
}