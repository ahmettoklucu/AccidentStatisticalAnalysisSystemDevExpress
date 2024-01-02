var targetDiv = $("#gridDiv")
var table;
var YazdirilacakEvrakNo;
function sendRequest(url, method, param) {
    var d = $.Deferred();
    method = method || "GET";
    $.ajax(url, {
        method: method || "GET",
        data: param,
        timeout: 15000000000,
        cache: false
    }).done(function (result) {
        d.resolve(method === "GET" ? result : result);
    }).fail(function (xhr) {
        d.reject(xhr.responseJSON ? xhr.responseJSON.Message : xhr.statusText);
    });
    return d.promise();
}
$(document).ready(function ()
{
    $("#m_portlet_tools_3").show();
    $("#m_portlet_uyeekle").hide();
    $("#m_portlet_uyeguncelle").hide();
    
    Listele2();
    $("#PhoneNumber").on("input", function () {
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
            document.getElementById('phone-error-message').textContent = 'Telefon numarası sadece rakamlardan oluşmalıdır.';
            return;
        } else {
            document.getElementById('phone-error-message').textContent = '';
        }
    })
    $("#Password").on("input", function () {
        var passwordPattern = /^(?=.*?[A-ZÖÜİŞĞÇ])(?=.*?[a-zöüığşç])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9ÖöÜüŞşıİĞğÇç]).{8,}$/;
        var password = document.getElementById("Password").value;
        if (!passwordPattern.test(password)) {
            document.getElementById('password-error-message').textContent = 'Şifre büyük harf,küçük harf,sayi ve özel karakter içermeli ve 8 karakter olmalıdır.';
        } else {
            document.getElementById('password-error-message').textContent = '';
        }
    })
    $("#RepeatPassword").on("input", function () {
        var password = document.getElementById("Password").value;
        var repeatpassword = document.getElementById("passwordrepeat").value;
        if (repeatpassword !== password) {
            document.getElementById('password-error-message2').textContent = 'Şifreler uyuşmuyor.';
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
});
function Kaydet()
{
    var name = document.getElementById("Name").value;
    var sureName = document.getElementById("SureName").value;
    var username = document.getElementById("UserName").value;
    var password = document.getElementById("Password").value;
    var phoneNumber = document.getElementById("PhoneNumber").value;
    var roleId = document.getElementById("roleId").value;
    var IsDeleted = document.getElementById("isDeleted").value;
    var phoneNumber2 = phoneNumber.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');

    var numericPattern = /^[0-9]+$/;
    var passwordPattern = /^(?=.*?[A-ZÖÜİŞĞÇ])(?=.*?[a-zöüığşç])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9ÖöÜüŞşıİĞğÇç]).{8,}$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!numericPattern.test(phoneNumber2)) {
        alert = 'Telefon numarası sadece rakamlardan oluşmalıdır.';
    }
    var eMail = document.getElementById("EMail").value;

    var numericPattern = /^[0-9]+$/;

    var passwordPattern = /^(?=.*?[A-ZÖÜİŞĞÇ])(?=.*?[a-zöüığşç])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9ÖöÜüŞşıİĞğÇç]).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert = 'Şifre büyük harf,küçük harf,sayi ve özel karakter içermeli ve en 8 karakter olmalıdır.';
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
        alert = 'Şifreler uyuşmuyor.';
    }
    var registerModel = {
        UserName: username,
        Password: password,
        Name: name,
        SureName: sureName,
        PhoneNumber: phoneNumber2,
        EMail: eMail,
        RoleId: roleId,
        IsDeleted: IsDeleted
    };
        $.ajax
        (
            {
                url: "/Admin/Register",
                type: "POST",
                data: JSON.stringify(registerModel),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (token)
                {
                window.location.href = "/Home";
                },
                error: function (response)
                {
                    console.log(response);
                    if (response.status === 400)
                    {
                        alert(response.responseText);
                    }
                    if (response.status === 500)
                    {
                        alert("Sunucuya Bağlanamadı.");
                    }
                }
            }
        );
};

function Listele2() {

    mApp.block('#gridBlock',
        {
            overlayColor: "#000000",
            type: "loader",
            state: "success",
            message: "Yükleniyor..."
        });
    sendRequest("/AdminUser/GetAll", "GET").then(
        (result) => {
            console.log(result);
            table.option('dataSource', result);
            table.refresh();
            mApp.unblock('#gridBlock')
        }
    );
}


$(function () {
    table = $("#gridDiv").dxDataGrid
    (
        {
            showLoadIndicator: true,
            renderAsync: true,
            rowAlternationEnabled: true,
            columnAutoWidth: true,
            scrolling:
            {
                useNative: false,
                scrollByContent: true,
                scrollByThumb: true
            },
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnResizingMode: "widget",
            pager:
            {
                allowedPageSizes: 3,
                showNavigationButtons: true,
                showPageSizeSelector: true,
                showInfo: true
            },
            filterRow:
            {
                "visible": true
            },
            showBorders: true,
            columnAutoWidth: true,
            columnFixing:
            {
                enabled: true
            },
            headerFilter:
            {
                visible: true
            },
            export:
            {
                enabled: false,
                fileName: "Üyeler",
                allowExportSelectedData: true,
            },
            showRowLines: true,
            searchPanel:
            {
                "visible": true
            },
            allowFixing: true,
            showBorders: true,
            onToolbarPreparing: function (e)
            {
                var dataGrid = e.component;
                e.toolbarOptions.items.unshift(
                    {
                        location: "after",
                        widget: "dxButton",
                        options: {
                            icon: "la la-plus",
                            type: "primary",
                            text: "Üye Ekle",
                            stylingMode: "outlined",
                            onClick: function ()
                            {
                                YeniUyeEkle()
                            }
                        }
                    },
                    {
                        location: "after",
                        widget: "dxButton",
                        options: {
                            icon: "la la-refresh",
                            type: "success",
                            text: "Yenile",
                            stylingMode: "outlined",
                            onClick: function () {
                                Listele2();
                            }
                        }
                    },
                    {
                        location: "after",
                        template: function () {
                            var btnGrup = $("<div/>")

                                .addClass("btn-group")
                                .html('<button type="button" onclick="table.exportToExcel(false);" class="btn btn-secondary  aria-haspopup="true" aria-expanded="false"><i class="fa fa-file-excel" style="color:green!important;font-size:x-large!important;"></i> Excel\'e Aktar</button >');
                            return btnGrup;
                        }
                    },
                    {
                        location: "after",
                        widget: "dxButton",
                        options: {
                            icon: "fa fa-broom",
                            onClick: function () {
                                dataGrid.clearFilter();
                            }
                        }
                    },
                );
            },
            columns:
                [
                    {
                        maxWidth: '50',
                        alignment: 'center',
                        dataField: 'Id',
                        allowEditing: false,
                        allowFiltering: false,
                        fixed: true,
                        cssClass: 'toolBtnGrid',
                        allowHeaderFiltering: false,
                        cellTemplate: function (container, options) {
                            $('<a href="javascript:;" class="btn btn-outline-success m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air" onclick="UyeUpdate(\'' + options.data.Id + '\')"><i class="la la-check"></i></a>').appendTo(container);
                            $('<a style="margin-left:5px;" href="javascript:;" class="btn btn-outline-danger m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air" onclick="OnayReddet(\'' + options.data.Id +'\')"><i class="la la-close"></i></a>').appendTo(container);
                            $('<a style="margin-left:5px;" href="javascript:;" class="btn btn-outline-warning m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air"  onclick = "PrintRow(\'' + options.data.Id + '\')"><i class="la la-file"></i></a>').appendTo(container);

                            return null;
                        },
                        headerCellTemplate: function (header, info)
                        {
                            header.html('<i class="la la-gear"><i/>');
                        }
                    },
                    {
                        dataField: 'Role',
                        caption: 'Yetki'
                    },
                    {
                        dataField: 'Name',
                        caption: 'İsim'
                    },
                    {
                        dataField: 'SureName',
                        caption: 'Soy İsim'
                    },
                    {
                        dataField: 'UserName',
                        caption: 'Kullanıcı Adı'
                    },
                    {
                        dataField: 'PhoneNumber',
                        caption: 'Telefon Numarası',
                    },
                    {
                        dataField: 'EMail',
                        caption: 'Email'
                    },
                    {
                        dataField: 'IsDelete',
                        caption: 'Aktif'
                    }
                ]
        }
    ).dxDataGrid("instance");
});
function YeniUyeEkle() {
    $("#m_portlet_uyeekle").show();
    $("#m_portlet_tools_3").hide();
    $("#m_portlet_uyeguncelle").hide();
}
function Geri() {
    $("#m_portlet_uyeguncelle").hide();
    $("#m_portlet_uyeekle").hide();
    $("#m_portlet_tools_3").show();
    $("#Name").val('');
    $("#SureName").val('');
    $("#Password").val('');
    $("#PasswordRepeat").val('');
    $("#PhoneNumber").val('');
    $("#roleId").val('');
    $("#isDeleted").val('');
}
function Temizle()
{
    $("#Name").val('');
    $("#SureName").val('');
    $("#UserName").val('');
    $("#Password").val('');
    $("#PasswordRepeat").val('');
    $("#PhoneNumber").val('');
    $("#roleId").val('');
    $("#isDeleted").val('');
}

function UyeUpdate(key)
{
    $("#m_portlet_uyeguncelle").show();
    $("#m_portlet_uyeekle").hide();
    $("#m_portlet_tools_3").hide();
    mApp.block('body', {});
    sendRequest('/AdminUser/Get', 'GET', { guid: key }).done(function (result)
    {
        console.log(result);
        $("#UId").val(result.Id);
        $("#UName").val(result.Name);
        $("#USureName").val(result.SureName);
        $("#UUserName").val(result.UserName);
        $("#UPhoneNumber").val(result.PhoneNumber);
        $("#URoleId").val(result.RoleId);
        $("#UEmail").val(result.EMail);
        if (result.IsDelete === false) {
            $("#UIsDeleted").val("false")
        }
        else {
            $("#UIsDeleted").val("true")
        }
        mApp.unblock('body');
        $("#URoleId").selectpicker('refresh');
        $("#UIsDeleted").selectpicker('refresh');
    })

}


