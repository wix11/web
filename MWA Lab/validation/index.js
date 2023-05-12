function validate(){
    console.log("Hell")
    var name = document.getElementById("name").value;
    if(name.length()<5){
        alert("Name should be greater than 5");
        return false
    }
    alert("Thankyou, validate with no errors");
    return
}