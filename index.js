const element = document.getElementById('btnjs')

element.addEventListener("click", myfunction);

function myfunction(){
    document.getElementById("formjs").reset();
    alert("Data submitted")
}