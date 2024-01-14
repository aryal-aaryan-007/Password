const password = document.getElementById("word");

let show = () => {

    if (password.type == "password") {

        password.type = "text";
        document.getElementById("se").src = "noshow.png";
    }
    else if (password.type == "text") {
        password.type = "password";
        document.getElementById("se").src = "password.png";
    }
}
let sub = () => {
    document.getElementById("fin").style.visibility = "visible";

}
let cut = () => {
    document.getElementById("fin").style.visibility = "hidden";

}
