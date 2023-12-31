$(document).ajaxError(function (event, jqxhr, settings, thrownError) {
    if (jqxhr.status == 401) {
        location.reload();
    }
});
$(function () {
    var keyDownArray = {};
    var triggerTime = 5000;
    var keyDownEvent = function (e) {
        if (!(e.keyCode in keyDownArray)) {
            keyDownArray[e.keyCode] = setTimeout(function () {

                var adminmi = Admin();
                if (adminmi && e.keyCode === 18) {
                    showLabel();
                }

            }, triggerTime);
        }
    }

    

    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    function Admin() {
        return GetTableSource("/Users/IsAdmin", "get", { id: "11111" });
    }
    var keyUpEvent = function (e) {
        clearTimeout(keyDownArray[e.keyCode]);
        delete keyDownArray[e.keyCode];
    };
    $(document).on('keydown', keyDownEvent)
        .on('keyup', keyUpEvent);
});
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}
function SwalHata(data) {
    if (data.ErrorMessage) {
        swal(
            'Beklenmeyen Sorun!',
            data.ErrorMessage,
            'error'
        )
    }
    else {
        swal(
            'Uyarı',
            data.Message,
            'warning'
        )
    }
}
String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
Date.prototype.toISOString = function () {
    return moment(this).format("YYYY-MM-DDTHH:mm:ss");
};
function SwalBasari() {
    swal(
        'Başarılı',
        'İşlem Başarılı Bir Şekilde Gerçekleşti.',
        'success'
    )
}
function OpenSide(side) {
    $('#' + side).toggleClass('m-quick-sidebar--on')
}
const formatDigit = new Intl.NumberFormat('tr-TR',
    {
        minimumFractionDigits: 2
    });
function openModalFromUrl(url, modalName, methodType, dataObj = null) {
    var result;
    $.ajax({
        cache: false,
        url: url,
        data: dataObj,
        async: false,
        type: methodType,
        success: function (data) {
            $('#pagemodal').empty();
            $('#pagemodal').html(data);
            $('#' + modalName).modal('show');
        },
        error: function () {
            swal("Hata", "Veriler getirilirken bir hata oluştu", "error");
        }
    });
    return result;
}
function showLabel() {
    $("label").each(function (i) {
        if (this.control) {
            this.innerText = '[' + this.control.id + ']';
        }
    });
}
$(".readonly").keydown(function (e) {
    e.preventDefault();
});

function closeBtn(btn) {
    btn.addClass('disabled');
    mApp.progress(btn);
}
function openBtn(btn) {
    btn.removeClass('disabled');
    mApp.unprogress(btn);
}
Number.prototype.Round = function () {

    return Math.round((this.valueOf() + Number.EPSILON) * 100) / 100;
};

Number.prototype.Format = function (symbol) {
    symbol = symbol === null || symbol === undefined ? "" : " " + symbol;
    if (this.valueOf() === 0) {
        return "0,00" + symbol;
    }
    else {
        return new Intl.NumberFormat
            ('tr-TR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
            .format(this.valueOf()) + symbol;
    }
};
Number.prototype.Format5 = function (symbol) {
    symbol = symbol === null || symbol === undefined ? "" : " " + symbol;
    if (this.valueOf() === 0) {
        return "0,00" + symbol;
    }
    else {
        return new Intl.NumberFormat
            ('tr-TR', { maximumFractionDigits: 5, minimumFractionDigits: 5 })
            .format(this.valueOf()) + symbol;
    }
};
function bToolBar(args) {
    var toolbar = $('<div>')
        .addClass("btn-toolbar justify-content-between");
    for (var i = 0; i < args.toolBar.length; i++) {

       

        var subDviv = $('<div/>')
            .addClass('btn-group')
            .attr('role', 'group');
        if (i === 0)
            subDviv.attr('aria-label', 'First group');
        for (var j = 0; j < args.toolBar[i].items.length; j++) {
            var btn = $('<button/>');
            if (args.toolBar[i].items[j].color === "primary")
                btn.addClass('m-btn btn btn-primary');
            else if (args.toolBar[i].items[j].color === "success")
                btn.addClass('m-btn btn btn-success');
            else if (args.toolBar[i].items[j].color === "warning")
                btn.addClass('m-btn btn btn-warning');
            else if (args.toolBar[i].items[j].color === "danger")
                btn.addClass('m-btn btn btn-danger');
            else if (args.toolBar[i].items[j].color === "info")
                btn.addClass('m-btn btn btn-info');
            else if (args.toolBar[i].items[j].color === "secondary")
                btn.addClass('m-btn btn btn-secondary');
            else
                btn.addClass('m-btn btn');

           

            if (args.toolBar[i].items[j].iconCss)
                btn.append('<i class="' + args.toolBar[i].items[j].iconCss + '"></i>');

            if (args.toolBar[i].items[j].text) {
                if (args.toolBar[i].items[j].iconCss) {
                    btn.append(' ' + args.toolBar[i].items[j].text);
                }
                else {
                    btn.append(args.toolBar[i].items[j].text);
                }
            }
            if (args.toolBar[i].items[j].toolTip) {
                btn.attr('title', args.toolBar[i].items[j].toolTip);
            }
            if (args.toolBar[i].items[j].id) {
                btn.attr('id', args.toolBar[i].items[j].id);
            }
         
            if (args.toolBar[i].items[j].disabled) {
                btn.attr('disabled', args.toolBar[i].items[j].disabled);
            }
            if (args.toolBar[i].items[j].css) {
                btn.addClass(args.toolBar[i].items[j].css);
            }
            if (args.toolBar[i].items[j].onClick) {
                btn.on('click', args.toolBar[i].items[j].onClick);
            }
            btn.appendTo(subDviv);
        }
        subDviv.appendTo(toolbar);
    }
    return toolbar;
}
function Guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}
function GetTableSource(url, methodType, dataObj = null) {
    var result;
    $.ajax({
        cache: false,
        url: url,
        data: dataObj,
        async: false,
        type: methodType,
        timeout: 180000,
        success: function (data) {
            result = data;
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status === 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status === 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            swal("Hata", msg, "error");
        }
    });
    return result;
}

function SetTableColumns(tableName, tblObj) {
    function IsMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            return true;
        }
        else {
            return false;
        }
    }
    $.ajax({
        cache: false,
        url: '/Helper/TableColumnsSet',
        data: { id: tableName },
        async: false,
        type: 'post',
        success: function (result) {
            if (result === null)
                return;

            for (var i = 0; i < result.length; i++) {
                if (result[i].DataField === null) {
                    continue;
                }
                else {
                    if (result[i].Caption !== null) {
                        tblObj.component.columnOption(result[i].DataField, 'caption', result[i].Caption);
                    }
                    if (result[i].Visible !== null) {
                        tblObj.component.columnOption(result[i].DataField, 'visible', result[i].Visible);
                    }
                    if (result[i].DataType !== null) {
                        tblObj.component.columnOption(result[i].DataField, 'dataType', result[i].DataType);
                    }
                    if (result[i].Alignment !== null) {
                        tblObj.component.columnOption(result[i].DataField, 'alignment', result[i].Alignment);
                    }
                    if (result[i].Exporting !== null) {
                        tblObj.component.columnOption(result[i].DataField, 'allowExporting', result[i].Exporting);
                    }
                }
            }
        },
        error: function () {
            swal("Hata", "Veriler getirilirken bir hata oluştu", "error");
        }
    });
}
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
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function normalizeText(str) {
    var text = replaceAll(str, 'ı', 'i');
    text = replaceAll(text, 'İ', 'I');
    text = replaceAll(text, 'ü', 'u');
    text = replaceAll(text, 'Ü', 'U');
    text = replaceAll(text, 'ç', 'c');
    text = replaceAll(text, 'Ç', 'C');
    text = replaceAll(text, 'ş', 's');
    text = replaceAll(text, 'Ş', 'S');
    text = replaceAll(text, 'ğ', 'g');
    text = replaceAll(text, 'Ğ', 'G');
    text = replaceAll(text, 'ö', 'o');
    text = replaceAll(text, 'Ö', 'O');
    return text;
}
function UnFormatAndDecimal(data) {
    return parseFloat(replaceAll(data, '.', '').replace(',', '.'));
}
function eventFire(el, etype) {
    obj = document.getElementById(el);
    if (obj.fireEvent) {
        obj.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        obj.dispatchEvent(evObj);
    }
}
$(document).ajaxComplete(function () {
    initControls();

});
$.extend(true, $.fn.dataTable.defaults, {
    language: { "url": "/scripts/datatable-turkce.json" }
});
DevExpress.localization.locale("tr");
var rUser;
var lUser;
function clickMesaj(remoteUser) {
    var content = $('#messageContent');
    content.empty();
    lUser = content.data("id");
    rUser = remoteUser;
    eventFire('mesajTab', 'click');
}
DevExpress.localization.locale("tr");
$.fn.selectpicker.Constructor.DEFAULTS.noneSelectedText = 'Seçiniz';
$.fn.selectpicker.Constructor.DEFAULTS.noneResultsText = 'Sonuç bulunamadı';
$.fn.selectpicker.Constructor.DEFAULTS.selectAllText = 'Hepsini seç';

function initControls() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.selectpicker').selectpicker('mobile');
    }
    $('.selectpicker').selectpicker('refresh');
    $('.datepicker').datepicker({ rtl: mUtil.isRTL(), autoclose: true, todayBtn: "linked", format: 'd.mm.yyyy', language: 'tr', todayHighlight: true });
    $(".telefon").inputmask("mask", { "mask": "(999) 999 99 99" });
    $(".ulketelefon").inputmask("mask", { "mask": "9{1,15}" });
    $('.plaka').inputmask("mask", { mask: "9{2} a{1,4} 9{1,4}", casing: "upper" });
    $('.summernote').summernote({ lang: 'tr-TR', height: 150 });
    $('.tarihsaat').datetimepicker({ todayHighlight: true, autoclose: true, format: 'dd.mm.yyyy hh:ii', todayBtn: "linked", language: 'tr' });
    $('.hasmaxlength').maxlength({ warningClass: "m-badge m-badge--warning m-badge--rounded m-badge--wide", limitReachedClass: "m-badge m-badge--success m-badge--rounded m-badge--wide", appendToParent: true });
    $(".numeric").inputmask('integer', {
        rightAlignNumerics: true
    });
    $(".TamSayiSifirileBasler").inputmask({
        rightAlignNumerics: false,
        regex: "\\d*"
    });
    $('input.birikimtext').on('keyup', function (e) {
        //debugger;
        //var inp = this;
        //if (e.key === 'a') {
        //    inp.value = inp.value.up

        //}
        var inp = this;
        setTimeout(function () {
            if (e.key === 'a') inp.value = inp.value.replace(/a/g, 'A');
            else if (e.key === 'b') inp.value = inp.value.replace(/b/g, 'B');
            else if (e.key === 'c') inp.value = inp.value.replace(/c/g, 'C');
            else if (e.key === 'ç') inp.value = inp.value.replace(/ç/g, 'Ç');
            else if (e.key === 'd') inp.value = inp.value.replace(/d/g, 'D');
            else if (e.key === 'e') inp.value = inp.value.replace(/e/g, 'E');
            else if (e.key === 'f') inp.value = inp.value.replace(/f/g, 'F');
            else if (e.key === 'g') inp.value = inp.value.replace(/g/g, 'G');
            else if (e.key === 'ğ') inp.value = inp.value.replace(/ğ/g, 'Ğ');
            else if (e.key === 'h') inp.value = inp.value.replace(/h/g, 'H');
            else if (e.key === 'ı') inp.value = inp.value.replace(/ı/g, 'I');
            else if (e.key === 'i') inp.value = inp.value.replace(/i/g, 'İ');
            else if (e.key === 'j') inp.value = inp.value.replace(/j/g, 'J');
            else if (e.key === 'k') inp.value = inp.value.replace(/k/g, 'K');
            else if (e.key === 'l') inp.value = inp.value.replace(/l/g, 'L');
            else if (e.key === 'm') inp.value = inp.value.replace(/m/g, 'M');
            else if (e.key === 'n') inp.value = inp.value.replace(/n/g, 'N');
            else if (e.key === 'o') inp.value = inp.value.replace(/o/g, 'O');
            else if (e.key === 'ö') inp.value = inp.value.replace(/ö/g, 'Ö');
            else if (e.key === 'p') inp.value = inp.value.replace(/p/g, 'P');
            else if (e.key === 'r') inp.value = inp.value.replace(/r/g, 'R');
            else if (e.key === 's') inp.value = inp.value.replace(/s/g, 'S');
            else if (e.key === 'ş') inp.value = inp.value.replace(/ş/g, 'Ş');
            else if (e.key === 't') inp.value = inp.value.replace(/t/g, 'T');
            else if (e.key === 'u') inp.value = inp.value.replace(/u/g, 'U');
            else if (e.key === 'ü') inp.value = inp.value.replace(/ü/g, 'Ü');
            else if (e.key === 'v') inp.value = inp.value.replace(/v/g, 'V');
            else if (e.key === 'y') inp.value = inp.value.replace(/y/g, 'Y');
            else if (e.key === 'z') inp.value = inp.value.replace(/z/g, 'Z');


        }, 0);


    });
    $(".ondalik").inputmask({
        'alias': 'decimal',
        rightAlign: true,
        'groupSeparator': '.',
        'radixPoint': ',',
        'autoGroup': true
    });

    $(".ondalikAyracliTamsayi").inputmask('integer', {
        rightAlignNumerics: true,
        groupSeparator: '.',
        autoGroup: true
    });

}

$(document).ready(function () {
    initControls();
    //badgeCall();
});
function badgeCall() {
    $.get("/Home/GetMenuBadge", function (data) {

        var badge = $('[data-id="30"]');
        if (badge !== undefined) {
            badge.css("display", "");
            badge.html(data.OnaydaBekleyenKrediler);
        }

        if (badge !== undefined) {
            badge = $('[data-id="28"]');
            badge.css("display", "");
            badge.html(data.TeklifAdet);
        }


    });
}
//Cobolarda ekleme düzenleme için kullanılan modal açar
//control combo bilgisi eklendikten sonra datası yenilenecek combonun adı
//örnek <select id="TeslimatSekli">   için ComboDuzenle('TeslimatSekli',20)
//buton onclick'e e eklenecek
function ComboDuzenle(control, comboId) {
    //mainModal
    mApp.block('body', { message: 'Veriler getiriliyor' });
    var urlPath = '/Home/GetComboEdit';
    if (comboId === 43) {
        urlPath = '/Helper/MhkView';
    }


    $.ajax({
        url: urlPath,
        type: 'post',
        data: {
            id: comboId
        },
        success: function (result) {

            $('#mainModal').html(result);
            if (comboId !== 43) {
                ComboTable = $("#dt").DataTable({

                    language: { "url": "http://cdn.datatables.net/plug-ins/1.10.13/i18n/Turkish.json" },
                    ajax: {
                        url: "/Home/ComboItemListData/",
                        timeout: 60000,
                        type: "POST",
                        data: {
                            id: comboId
                        },
                        "dataSrc": ""
                    },
                    columns: [

                        { data: "RowId", visible: false },
                        { data: "Kod", visible: true, title: 'Kod' },
                        { data: "Tip", visible: false },
                        { data: "Aciklama", title: 'Açıklama', width: '80%' }
                    ]

                });
                $('#dt tbody').on('click', 'tr', function () {
                    if ($(this).hasClass('selected')) {
                        $(this).removeClass('selected');
                    }
                    else {
                        ComboTable.$('tr.selected').removeClass('selected');
                        $(this).addClass('selected');
                    }
                });

                $('#dt tbody').css("cursor", "pointer");

                $('#dt tbody').on('click', 'tr', function () {
                    var data = ComboTable.row(this).data();
                    $('#RowId').val(data.RowId);
                    $('#Kod').val(data.Kod);
                    $('#Tipx').val(data.Tip);

                    if (data.Tip === 31) {
                        $("#Kod").attr('type', 'number');
                    }
                    else {
                        $("#Kod").attr('type', 'text');
                    }

                    $('#Kod').attr('readonly', true);
                    $('#Aciklama').val(data.Aciklama);
                    $('#bilgi').html('Düzenleme');
                });
                $('#Tipx').val(comboId);
                if (comboId === 31) {
                    $("#Kod").attr('type', 'number');
                }
                else {
                    $("#Kod").attr('type', 'text');
                }

                $('#modalYeni').on('click', function () {
                    $('#RowId').val('0');
                    $('#Kod').val('');
                    $('#Tipx').val(comboId);
                    $('#Aciklama').val('');
                    $('#bilgi').html('Yeni veri');
                    $('#Kod').attr('readonly', false);
                });
                UpdateObject = control;
            }
            else {
                $('#controlAdi').val(control);

            }


            $('#combomodal').modal('show');
            mApp.unblock('body');
        }
    });

    function changetype(param) {

    }

}
function ComboDuzenleNoPicker(comboId,paramTable) {
    //mainModal
    mApp.block('body', { message: 'Veriler getiriliyor' });
    var urlPath = '/Home/ComboEditNoPicker';
    if (comboId === 43) {
        urlPath = '/Helper/MhkView';
    }


    $.ajax({
        url: urlPath,
        type: 'post',
        data: {
            id: comboId
        },
        success: function (result) {

            $('#mainModal').html(result);
            ComboTable = $("#dt").DataTable({

                language: { "url": "http://cdn.datatables.net/plug-ins/1.10.13/i18n/Turkish.json" },
                ajax: {
                    url: "/Home/ComboItemListData/",
                    timeout: 60000,
                    type: "POST",
                    data: {
                        id: comboId
                    },
                    "dataSrc": ""
                },
                columns: [

                    { data: "RowId", visible: false },
                    { data: "Kod", visible: true, title: 'Kod' },
                    { data: "Tip", visible: false },
                    { data: "Aciklama", title: 'Açıklama', width: '80%' }
                ]

            });
            $('#dt tbody').on('click', 'tr', function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    ComboTable.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            $('#dt tbody').css("cursor", "pointer");

            $('#dt tbody').on('click', 'tr', function () {
                var data = ComboTable.row(this).data();
                $('#RowId').val(data.RowId);
                $('#Kod').val(data.Kod);
                $('#Tipx').val(data.Tip);

                if (data.Tip === 31) {
                    $("#Kod").attr('type', 'number');
                }
                else {
                    $("#Kod").attr('type', 'text');
                }


                $('#Aciklama').val(data.Aciklama);
                $('#bilgi').html('Düzenleme');
            });
            $('#Tipx').val(comboId);
            if (comboId === 31) {
                $("#Kod").attr('type', 'number');
            }
            else {
                $("#Kod").attr('type', 'text');
            }

            $('#modalYeni').on('click', function () {
                $('#RowId').val('0');
                $('#Kod').val('');
                $('#Tipx').val(comboId);
                $('#Aciklama').val('');
                $('#bilgi').html('Yeni veri');
            });



            $('#combomodal').modal('show');
            mApp.unblock('body');
            devTable = paramTable;
            tempComboId = comboId;
        }
    });

    function changetype(param) {

    }

}
