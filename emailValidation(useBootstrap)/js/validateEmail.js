function emailValidation() {
    const email = document.getElementById("email").value;
    const allowedPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(allowedPattern)){
        alert("Selamat email kamu sudah benar!")
        return true
    }else if (email == "") {
        alert ("kamu belum input email")
    }
    else {
        alert ("Periksa lagi emailnya deh")
        return false
    }
}