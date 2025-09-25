const GetUrlParams = new URLSearchParams(location.search)
const title = document.getElementById("app-name")
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("back").addEventListener("click", function(){
        location.href = "home.html"
    })
    title.textContent = GetUrlParams.get("name")
    console.log(GetUrlParams.get("name"))
    document.title = "Sailclient: " + GetUrlParams.get("name")

})