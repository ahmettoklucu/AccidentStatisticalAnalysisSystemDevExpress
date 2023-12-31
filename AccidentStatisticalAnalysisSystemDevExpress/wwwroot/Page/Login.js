$(document).ready(function () {
    $("#loginButton").click(function () {
        var username = document.getElementById("UserName").value;
        
        var password = document.getElementById("Password").value;
        var login = {
            UserName: username,
            Password: password
        };
        $.ajax({
            url: "/Admin/Login",
            type: "POST",
            data: JSON.stringify(login),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (token) {
                window.location.href = "/Admin";
            },
            error: function (response) {
                console.log(response);
                if (response.status === 400) {
                    alert(response.responseText);
                }
                if (response.status === 500) {
                    alert("Sunucuya Baðlanamadý.");
                }
            }
        });
    });
});