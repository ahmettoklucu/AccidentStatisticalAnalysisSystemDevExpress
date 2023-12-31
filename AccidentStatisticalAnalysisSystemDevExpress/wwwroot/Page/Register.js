$(document).ready(function () {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $("#PhoneNumber").on("input",function () {
        var phoneNumber1 = document.getElementById('PhoneNumber');
        var numericPattern = /^[0-9]+$/;
       
        var phoneNumber = phoneNumber1.value.replace(/\D/g, '');
        if (phoneNumber.length > 0) {
            var formattedPhoneNumber = '(' + phoneNumber.substring(0, 3) + ') ' +
                phoneNumber.substring(3, 6) + '-' +
                phoneNumber.substring(6, 10);
            phoneNumber1.value = formattedPhoneNumber;
        }
        var phoneNumber2 = phoneNumber1.value.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
        if (!numericPattern.test(phoneNumber2)) {
            document.getElementById('phone-error-message').textContent = 'Telefon numarasý sadece rakamlardan oluþmalýdýr.';
            return;
        } else {
            document.getElementById('phone-error-message').textContent = '';
        }
    })
    $("#Password").on("input",function () {
        var passwordPattern = /^(?=.*?[A-ZÖÜÝÞÐÇ])(?=.*?[a-zöüýðþç])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9ÖöÜüÞþýÝÐðÇç]).{8,}$/;
        var password = document.getElementById("Password").value;
        if (!passwordPattern.test(password)) {
            document.getElementById('password-error-message').textContent = 'Þifre büyük harf,küçük harf,sayi ve özel karakter içermeli ve 8 karakter olmalýdýr.';
        } else {
            document.getElementById('password-error-message').textContent = '';
        }
    })
    $("#RepeatPassword").on("input", function () {
        var password = document.getElementById("Password").value;
        var repeatpassword = document.getElementById("RepeatPassword").value;
        if (repeatpassword !== password) {
            document.getElementById('password-error-message2').textContent = 'Þifreler uyuþmuyor.';
        } else {
            document.getElementById('password-error-message2').textContent = '';
        }
    })
    $("#EMail").on("input", function () {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var eMail = document.getElementById('EMail');
        var email = eMail.value.trim();
        var formattedEmail = email.toLowerCase();
       

        if (!emailPattern.test(formattedEmail)) {
            document.getElementById('email-error-message').textContent = 'Geçersiz e-posta adresi!';
        } else {
            document.getElementById('email-error-message').textContent = '';
        }
    })
    $("#RegisterButton").click(function () {
        var name = document.getElementById("Name").value;
        var sureName = document.getElementById("SureName").value;
        var username = document.getElementById("UserName").value;
        var password = document.getElementById("Password").value;
        var phoneNumber = document.getElementById("PhoneNumber").value;
        var phoneNumber2 = phoneNumber.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
        var numericPattern = /^[0-9]+$/;
        var passwordPattern = /^(?=.*?[A-ZÖÜÝÞÐÇ])(?=.*?[a-zöüýðþç])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9ÖöÜüÞþýÝÐðÇç]).{8,}$/;
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!numericPattern.test(phoneNumber2)) {
           alert = 'Telefon numarasý sadece rakamlardan oluþmalýdýr.';
        } 
        var eMail = document.getElementById("EMail").value;
        
        var numericPattern = /^[0-9]+$/;

        var passwordPattern = /^(?=.*?[A-ZÖÜÝÞÐÇ])(?=.*?[a-zöüýðþç])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9ÖöÜüÞþýÝÐðÇç]).{8,}$/;
        
        if (!passwordPattern.test(password)) {
            alert = 'Þifre büyük harf,küçük harf,sayi ve özel karakter içermeli ve en 8 karakter olmalýdýr.';
        }
        var email = eMail.trim();
        var formattedEmail = email.toLowerCase();
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(formattedEmail)) {
            emailInput.value = formattedEmail;
            alert = 'Geçersiz e-posta adresi!';
        } 
        var repeatpassword = document.getElementById("RepeatPassword").value;
        if (repeatpassword == !password) {
            emailInput.value = formattedEmail;
            alert = 'Þifreler uyuþmuyor.';
        } 
        var registerModel = {
            UserName: username,
            Password: password,
            Name: name,
            SureName: sureName,
            PhoneNumber: phoneNumber2,
            EMail: eMail
        };
        $.ajax({
            url: "/Admin/Register",
            type: "POST",
            data: JSON.stringify(registerModel),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (token) {
                window.location.href = "/Home";
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