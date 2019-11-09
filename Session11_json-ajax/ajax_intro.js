
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            console.log(this.responseText);

            let data = JSON.parse(this.responseText);
            console.log(data);
            
            let json = JSON.stringify(data);
            console.log(json);
            
        }
    };
    xhttp.open("GET", "https://weather-data-demo.herokuapp.com/get-weather-today", true);
    xhttp.send();
}
loadDoc();