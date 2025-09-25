class clickedappdata{
    appname
    appdesc
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("hb1").addEventListener("click", function(){
        clickedappdata.appname = "template1";
        console.log(clickedappdata.appname)
        location.href = 'dpg.html?name=' + clickedappdata.appname
    })
    document.getElementById("hb2").addEventListener("click", function(){
        clickedappdata.appname = "template2"
        console.log(clickedappdata.appname)
        location.href = "dpg.html?name=" + clickedappdata.appname
    })
})