
document.addEventListener("DOMContentLoaded", function () {
    var dom = {
        submitButton: document.getElementById("submit"),
        prefix: document.getElementById("prefix"),
        password: document.getElementById("password"),
    };

    dom.submitButton.addEventListener("click", function (event) {
        var randomPassword = function (length) {
            var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
            var pass = "";
            for (var x = 0; x < length; x++) {
                var i = Math.floor(Math.random() * chars.length);
                pass += chars.charAt(i);
            }
            return pass;
        };

        event.preventDefault();
        var prefix = dom.prefix.value;
        var randomPassword = randomPassword(5);
        dom.password.focus();
        dom.password.value = prefix + randomPassword;
    }, false);
});
