var password = document.getElementById("password");

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 16;
    var password = "";

    for (let i = 0; i <= passwordLength; i++) {
        var randoNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randoNum, randoNum + 1)
    };
    document.getElementById("password").value = password;
    console.log(password);

};

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}