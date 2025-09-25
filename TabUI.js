
document.addEventListener('DOMContentLoaded', function() {
    let ctab = "Home"
    function warn(msg, stay) {
        if(stay==0){ //copied code from animc
        document.getElementById("warn").hidden = false
        document.getElementById("warn").style.opacity = 0
        setTimeout(function() {
            document.getElementById("warn").style.opacity = 1
        }, 300)
        document.getElementById("warntxt").textContent = msg
        setTimeout(function() {
            document.getElementById("warn").style.opacity = 0;
            document.getElementById("warn").hidden = true
        }, 1200)}
        else{
            document.getElementById("warn").hidden = false
            document.getElementById("warn").style.opacity = 0
            setTimeout(function() {
            document.getElementById("warn").style.opacity = 1}, 300)
            document.getElementById("warntxt").textContent = msg
        }}
        
    /*Tab system*/
    function animc(obj, switchto, cltab) /*Crappy name for a function... but its pretty simple*/ {
        if (ctab == cltab) {
            obj.style.opacity = "1";
            warn("Already At: " + ctab)
            console.log("Already at " + ctab)
        } else {
            obj.style.opacity = "0";
            /*We wait for the animation to finish before switching the iframe*/
            ctab = cltab
            setTimeout(function() {
                obj.src = switchto
            }, 100);
            /*Then we set the opacity to 1*/
            setTimeout(function() {
                obj.style.opacity = "1"
            }, 300);
            document.title = "Sailclient: " + ctab // changes the title to page
        }
    }

    const iframe = document.getElementById("mainiframe") // thank god for constants
    const GetUrlParams = new URLSearchParams(iframe.src)
    // Also gotta make sure the height updates with the window (now that we're using electron, fullscreen use will be expected, but not needed)
    window.addEventListener('resize', function() {
        console.log("Resized [debug] winheight:" + window.innerHeight + "miframeheight:" + iframe.style.height)
        iframe.style.height = window.innerHeight - 45  +'px'
        iframe.style.width = 100 + '%'
        if (window.screenY === screen.availTop) {
            iframe.style.height = window.innerHeight - 70 + 'px'
            console.log("Maximized")
        }
        if (window.innerHeight < 300 || window.innerWidth < 500) {
            console.warn("Below recomended window size")
            warn("Window is below the recomended size", 1)
        } else {
            console.log("Hiding warn as window is above 300x500")
            document.getElementById("warn").hidden = "true"
            document.getElementById("warntxt").textContent = null
        }
    });
    this.getElementById("wcb").addEventListener("click", function(){
            document.getElementById("warn").hidden = "true"
            document.getElementById("warntxt").textContent = null
    })
    this.getElementById("Tab01").addEventListener('click', function() {
        console.log("tab01clicked"); // hard coded buttons 0-0
        animc(iframe, "home.html", "Home")
    });
    this.getElementById("Tab02").addEventListener("click", function() {
        console.log("tab02clicked");
        animc(iframe, "settings.html", "Settings");
    }); // Will add more event listeners if needed (such as adding new pages), good thing i put this into a function
    iframe.addEventListener("change", function(){
        if(iframe.src == "dpg.html"){
            document.title = "Sailclient: " + GetUrlParams("name")
        }
        else{
            document.title = "Sailclient: " + ctab
        }
    })
})