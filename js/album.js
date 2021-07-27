(function() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }


    function ampm(k) {
        if (k > 4 && k <= 5.0) {
            document.getElementById('body').style.background = 'linear-gradient(#697AD2, #54478C) no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
        } else if (k > 5 && k <= 11.59) {
            document.getElementById('body').style.background = 'linear-gradient(#F4EDD0, #A8E765) no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
        } else if (k > 11.59 && k <= 17.0) {

            document.getElementById('body').style.background = 'linear-gradient(#57C3EA , #FFFED8) no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
        } else if (k > 17.0 && k <= 20.0) {
            document.getElementById('body').style.background = 'linear-gradient(#E48C80 , #CE5C7E )o-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.color = "#FFFFFF";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
        } else if (k > 20.0 && k <= 23.59) {
            document.getElementById('body').style.background = 'linear-gradient(#697AD2 , #54478C )repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.color = "#FFFFFF";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
        } else if (k > 0.0 && k <= 4) {
            document.getElementById('body').style.background = 'linear-gradient(#54478C , #6A73BE ) no-repeat';
            document.getElementById('body').style.backgroundSize = 'cover';
            document.getElementById('body').style.backgroundPosition = 'center center';
            document.getElementById('body').style.backgroundAttachment = "fixed";
            document.getElementById('body').style.color = "#FFFFFF";
            document.getElementById('body').style.textShadow = "0px 4px 5px rgba(0, 0, 0, 0.25)";
        } else {}
    }

    function startTime() {
        let c_time = new Date();
        let hour = c_time.getHours();
        let min = c_time.getMinutes();
        let time = hour + "." + min
        ampm = ampm(time)
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
    let getGalCont = document.querySelector(".gallery-container");
    let getMenuBtn = document.querySelector(".menus-btn-container");
    let getNavigasi = document.querySelector(".navigasi");

    if (statusNavigasi === false && window.scrollY < 1710) {
        getGalCont.style.opacity = "0";
        getMenuBtn.style.opacity = "0";
        getNavigasi.style.visibility = "visible";
        statusNavigasi = true;
    } else if (statusNavigasi === true) {
        getGalCont.style.opacity = "1";
        getMenuBtn.style.opacity = "1";
        getNavigasi.style.visibility = "hidden";
        statusNavigasi = false;
    }
}