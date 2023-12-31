var terminalKullaniciList = null;
var gosterilecekDepolar = [];
var gosDepolar = [];
var transferDepolar = [];
var transferGirisDepolari = [];
var kullanici;
var termKullaniciDuzenle;
var termKullaniciEkle;
var isDisabled = true;
$(function () {
    kullanici = $("#Kullanici").val();
    termKullaniciDuzenle = $("#TermKullaniciDuzenle").val();
    termKullaniciEkle = $("#TermKullaniciEkleme").val();
    isDisabled = termKullaniciEkle == "'True'" ? false : true;

    table = $("#depoEkleGrid").dxDataGrid({
        showLoadIndicator: true,
        renderAsync: true,
        dataSource: null,
        columnAutoWidth: true,
        selection: 'single',
        scrolling: {
            useNative: false,
            scrollByContent: true,
            scrollByThumb: true,
            showScrollbar: "onHover"
        },
        allowColumnReordering: true,
        allowColumnResizing: true,
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10,
        },
        stateStoring: {
            enabled: true,
            type: "localStorage",
            storageKey: "B751D775-0D33-4B27-A0AA-8C8D4B2C9134"
        },
        filterRow: {
            "visible": true
        },
        showBorders: true,
        columnAutoWidth: true,
        headerFilter: {
            visible: true
        },
        groupPanel: {
            visible: true
        },
        pager: {
            allowedPageSizes: 3,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            showInfo: true
        },

        showRowLines: true,
        searchPanel: {
            "visible": true
        },
        allowFixing: true,
        showBorders: true,
        columns: [
            {
                dataField: "Depo",
                caption: "Depo"
            },
            {
                dataField: "DepoAdi",
                caption: "Depo Adı"
            }
        ]
    }).dxDataGrid("instance");

    $.ajax({
        url: "/Users/GetDeps",
        type: "GET",
        success: function (data) {
            table.option("dataSource", data);
            table.refresh();

        }
    })
    kullaniciList = $("#gridDiv").dxDataGrid({
        showLoadIndicator: true,
        renderAsync: true,
        dataSource: DevExpress.data.AspNet.createStore({
            key: "Kod",
            loadUrl: "/Users/GetTerminalKullanicilariList",
            loadMethod: 'GET',
            onBeforeSend: function (operation, ajaxSettings) {

            }
        }),
        columnAutoWidth: true,
        selection: 'single',
        scrolling: {
            useNative: false,
            scrollByContent: true,
            scrollByThumb: true,
            showScrollbar: "onHover"
        },
        allowColumnReordering: true,
        allowColumnResizing: true,
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10,
        },
        stateStoring: {
            enabled: true,
            type: "localStorage",
            storageKey: "B686D775-0D32-4B27-A0AA-8C8D4B2C9419"
        },
        filterRow: {
            "visible": true
        },
        showBorders: true,
        headerFilter: {
            visible: true
        },
        export: {
            enabled: true,
            fileName: "LOKASYON BAZLI STOK RAPORU",
            allowExportSelectedData: false
        },
        groupPanel: {
            visible: true
        },
        pager: {
            allowedPageSizes: 3,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            showInfo: true
        },


        showRowLines: true,
        searchPanel: {
            "visible": true
        },
        allowFixing: true,
        showBorders: true,
        onToolbarPreparing: function (e) {
            var dataGrid = e.component;
            e.toolbarOptions.items.unshift(

                {
                    location: "before",
                    widget: "dxButton",
                    options: {
                        icon: "la la-plus",
                        type: "success",
                        disabled: isDisabled,
                        text: "Kullanıcı Ekle",
                        stylingMode: "outlined",
                        onClick: function () {
                            $("#kullaniciDetay").css("display", "");
                            $("#kullanicilarPortlet").css("display", "none");
                            $("#eskiKod").val(null);
                            $("#aktif").prop("checked", true);
                            $("#Ad").val("");
                            $("#Soyad").val("");
                            $("#Email").val("");
                            $("#Sifre").val("");
                            $("#Kod").val("");
                            $(".brkdRezervSeri").css("display", "none");
                            $(".BrkdRezervSeri").css("display", "none");
                            $(".smsnMgz").css("display", "none");
                            $(".SmsnMagazaSeri").css("display", "none");
                            $(".smsnDepoSeri").css("display", "none");
                            $(".SmsnDepoSeri").css("display", "none");
                            $(".ihrDepoSeri").css("display", "none");
                            $(".IhracatDepoSeri").css("display", "none");
                            $(".malambIade").css("display", "none");
                            $(".MalAmbarIadeSeri").css("display", "none");
                            $(".depolarArasiTransferFisiKullanilacakSeri").css("display", "none");
                            $(".DepolarArasiTransferFisiKullanilacakSeri").css("display", "none");
                            $(".malambCikisFisiSeri").css("display", "none");
                            $(".MalAmbarCikisFisiSeri").css("display", "none");
                            $(".kullanilacakSeri").css("display", "none");
                            $(".KullanilacakSeri").css("display", "none");
                            $(".malAlimSeri").css("display", "none");
                            $(".MalAlimSeri").css("display", "none");
                            gosDepolar = [];
                            transferDepolar = [];
                            gosterilecekDepoTable.option("dataSource", gosDepolar);
                            transferDepoTable.option("dataSource", transferDepolar);
                        }
                    }
                },
                {

                    location: "after",
                    widget: "dxButton",
                    options: {
                        icon: "la la-refresh",
                        type: "success",
                        id: "btnListele",
                        text: "Listele",
                        stylingMode: "outlined",
                        onClick: function () {
                            var data = new DevExpress.data.CustomStore({
                                load: function () {
                                    return sendRequest("/Users/GetTerminalKullanicilariList");
                                }
                            })
                            kullaniciList.option("dataSource", data);
                            kullaniciList.refresh();
                        }
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
                }


            );
        },
        columns: [

            {

                width: 'auto',
                alignment: 'center',
                dataField: 'GridKey',
                allowEditing: false,
                allowFiltering: false,
                allowHeaderFiltering: false,
                allowExporting: false,
                cellTemplate: function (container, options) {
                    var comp = options.component;
                    var kullaniciKod = options.data.Kod;
                    debugger;
                    var iptalDuzenle = kullanici != options.data.Kaydeden && termKullaniciDuzenle != "'True'" ? 'disabled' : '';
                    $('<a href="javascript:;" onclick="DeleteRow(\'' + kullaniciKod + '\')" class="btn btn-outline-danger m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air ' + iptalDuzenle + '"><i class="la la-trash"></i></a>&nbsp;<a href="javascript:; "onclick="GetRow(\'' + kullaniciKod + '\')" class="btn btn-outline-primary m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air ' + iptalDuzenle + '"><i class="la la-pencil"></i></a>').appendTo(container);
                    return null;
                },
                headerCellTemplate: function (header, info) {
                    header.html('<i class="la la-gear"><i/>');
                }
            },
            {
                dataField: "Kod",
                caption: "Kod"
            },
            {
                dataField: "Ad",
                caption: "Ad"
            },
            {
                dataField: "Soyad",
                caption: "Soyad"
            },
            {
                dataField: "Email",
                caption: "Email"
            },
            {
                dataField: 'Aktif',
                caption: 'Aktif'
            },
            {
                dataField: 'Kaydeden',
                caption: 'Kaydeden',
                visible: false
            },
        ]

    }).dxDataGrid("instance");
    

    gosterilecekDepoTable = $("#gosterilecekDepoGrid").dxDataGrid({
        showLoadIndicator: true,
        renderAsync: true,
        dataSource: gosDepolar,
        columnAutoWidth: true,
        selection: 'single',
        scrolling: {
            useNative: false,
            scrollByContent: true,
            scrollByThumb: true,
            showScrollbar: "onHover"
        },
        allowColumnReordering: true,
        allowColumnResizing: true,
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10,
        },
        stateStoring: {
            enabled: true,
            type: "localStorage",
            storageKey: "B751D775-0D33-4B27-A0AA-8C8D4B2C9411"
        },
        filterRow: {
            "visible": true
        },
        showBorders: true,
        columnAutoWidth: true,
        headerFilter: {
            visible: true
        },
        editing: {
            allowDeleting: true,
            useIcons: true,
            mode: 'cell'
        },
        groupPanel: {
            visible: true
        },
        pager: {
            allowedPageSizes: 3,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            showInfo: true
        },
        onToolbarPreparing: function (e) {
            var dataGrid = e.component;
            e.toolbarOptions.items.unshift(
                {
                    location: "before",
                    widget: "dxButton",
                    options: {
                        icon: "la la-refresh",
                        text: "Transfer Giriş Depolarına Geç",
                        type: "success",
                        onClick: function () {
                            $("#transferGirisDepoGrid").css("display", "");
                            $("#gosterilecekDepoGrid").css("display", "none");
                        }
                    }
                },
                {
                    location: "before",
                    widget: "dxButton",
                    options: {
                        icon: "la la-plus",
                        text: "Ekle",
                        type: "success",
                        onClick: function () {
                        
                            $("#depo_list_modal").modal("show");
                        }
                    }
                }
            );
        },

        showRowLines: true,
        searchPanel: {
            "visible": true
        },
        allowFixing: true,
        showBorders: true,
        columns: [
            {
                caption: "Gösterilecek Depo Listesi",
                columns: [
                    {
                        dataField: "Depo",
                        caption: "Depo"
                    },
                    {
                        dataField: "DepoAdi",
                        caption: "Depo Adı"
                    }
                ]
            }
        ]
    }).dxDataGrid("instance");

    transferDepoTable = $("#transferGirisDepoGrid").dxDataGrid({
        showLoadIndicator: true,
        renderAsync: true,
        dataSource: transferDepolar,
        columnAutoWidth: true,
        selection: 'single',
        scrolling: {
            useNative: false,
            scrollByContent: true,
            scrollByThumb: true,
            showScrollbar: "onHover"
        },
        allowColumnReordering: true,
        allowColumnResizing: true,
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10,
        },
        editing: {
            allowDeleting: true,
            useIcons: true,
            mode: 'cell'
        },
        stateStoring: {
            enabled: true,
            type: "localStorage",
            storageKey: "B751D775-0D33-4B27-A0AA-8C8D4B2C8415"
        },
        filterRow: {
            "visible": true
        },
        showBorders: true,
        columnAutoWidth: true,
        headerFilter: {
            visible: true
        },
        groupPanel: {
            visible: true
        },
        pager: {
            allowedPageSizes: 3,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            showInfo: true
        },
        onToolbarPreparing: function (e) {
            var dataGrid = e.component;
            e.toolbarOptions.items.unshift(
                {
                    location: "before",
                    widget: "dxButton",
                    options: {
                        icon: "la la-refresh",
                        text: "Gösterilecek Depolara Geç",
                        type: "success",
                        onClick: function () {
                            $("#gosterilecekDepoGrid").css("display", "");
                            $("#transferGirisDepoGrid").css("display", "none");
                        }
                    }
                },
                {
                    location: "before",
                    widget: "dxButton",
                    options: {
                        icon: "la la-plus",
                        text: "Ekle",
                        type: "success",
                        onClick: function () {
                         $("#depo_list_modal").modal("show");
                        }
                    }
                }
            );
        },

        showRowLines: true,
        searchPanel: {
            "visible": true
        },
        allowFixing: true,
        showBorders: true,
        columns: [
            {
                caption: "Transfer Giriş Depo Listesi",
                columns: [
                    {
                        dataField: "Depo",
                        caption: "Depo"
                    },
                    {
                        dataField: "DepoAdi",
                        caption: "Depo Adı"
                    }
                ]
            }
        ]       
    }).dxDataGrid("instance");
    debugger;
    if (termKullaniciEkle != "'True'") {
        $("#btnKullaniciEkle").css("display", "none");
    }
})
function GetRow(kullaniciKodu) {
    $("#eskiKod").val(kullaniciKodu);
    $.ajax({
        url: "/Users/GetTerminalKullaniciDetay/",
        type: "POST",
        data: { kullaniciKodu: kullaniciKodu },
        success: function (data) {
            console.log(data);
            $("#Ad").val(data[0].Ad);
            $("#Soyad").val(data[0].Soyad);
            $("#Email").val(data[0].Email);
            $("#Sifre").val(data[0].Sifre);
            $("#Kod").val(data[0].Kod);
            if (data[0].Aktif == true) {
                $("#aktif").prop("checked", true);
            }
            for (var i = 0; i < data.length; i++) {
                if (data[i].tip == 4) {
                    debugger;
                    $("#KullanilacakSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 5) {
                    $("#DepolarArasiTransferFisiKullanilacakSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 8) {
                    $("#BrkdRezervSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 10) {
                    $("#SmsnMagazaSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 13) {
                    $("#SmsnDepoSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 15) {
                    $("#IhracatDepoSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 26) {
                    $("#MalAmbarIadeSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 25) {
                    $("#MalAlimSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 29) {
                    debugger;
                    $("#MalAmbarCikisFisiSeri").val(data[i].Deger2);
                }
                if (data[i].tip == 3) {
                    if (data[i].Deger4 == true) {
                        $("#miktariGecebilsinMi").prop("checked", true);
                    }
                }
                if (data[i].tip == 6) {
                    if (data[i].Deger4 == true) {
                        $("#BarkodOkutmadanIslemYapabilsin").prop("checked", true);
                    }
                }
                if (data[i].tip == 11) {
                    if (data[i].Deger4 == true) {
                        $("#PartiBazliMaliyet").prop("checked", true);
                    }
                }
                if (data[i].tip == 20) {
                    if (data[i].Deger4 == true) {
                        $("#MalAlim").prop("checked", true);
                        $(".malAlimSeri").css("display", "");
                        $(".MalAlimSeri").css("display", "");
                        $(".malAlimBosluk").css("display", "none");
                    }
                    else {
                        $(".malAlimSeri").css("display", "none");
                        $(".MalAlimSeri").css("display", "none");
                        $(".malAlimBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 7) {
                    if (data[i].Deger4 == true) {
                        $("#BrkdRezerv").prop("checked", true);
                        $(".brkdRezervSeri").css("display", "");
                        $(".BrkdRezervSeri").css("display", "");
                        $(".brkdRezervBosluk").css("display", "none");
                    }
                    else {
                        $(".brkdRezervSeri").css("display", "none");
                        $(".BrkdRezervSeri").css("display", "none");
                        $(".brkdRezervBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 9) {
                    if (data[i].Deger4 == true) {
                        $("#SmsnMagaza").prop("checked", true);
                        $(".smsnMgz").css("display", "");
                        $(".SmsnMagazaSeri").css("display", "");
                        $(".smsnMagazaBosluk").css("display", "none");
                    }
                    else {
                        $(".smsnMgz").css("display", "none");
                        $(".SmsnMagazaSeri").css("display", "none");
                        $(".smsnMagazaBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 12) {
                    if (data[i].Deger4 == true) {
                        $("#SmsnDepo").prop("checked", true);
                        $(".smsnDepoSeri").css("display", "");
                        $(".SmsnDepoSeri").css("display", "");
                        $(".smsnDepoBosluk").css("display", "none");
                    }
                    else {
                        $(".smsnDepoSeri").css("display", "none");
                        $(".SmsnDepoSeri").css("display", "none");
                        $(".smsnDepoBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 14) {
                    if (data[i].Deger4 == true) {
                        $("#IhracatDepo").prop("checked", true);
                        $(".ihrDepoSeri").css("display", "");
                        $(".IhracatDepoSeri").css("display", "");
                        $(".ihracatDepoBosluk").css("display", "none");
                    }
                    else {
                        $(".ihrDepoSeri").css("display", "none");
                        $(".IhracatDepoSeri").css("display", "none");
                        $(".ihracatDepoBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 17) {
                    if (data[i].Deger4 == true) {
                        $("#Sevkiyat").prop("checked", true);
                        $(".kullanilacakSeri").css("display", "");
                        $(".KullanilacakSeri").css("display", "");
                        $(".sevkiyatBosluk").css("display", "none");
                    }
                    else {
                        $(".kullanilacakSeri").css("display", "none");
                        $(".KullanilacakSeri").css("display", "none");
                        $(".sevkiyatBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 24) {
                    if (data[i].Deger4 == true) {
                        $("#SamsunMagaza").prop("checked", true);
                    }
                }
                if (data[i].tip == 21) {
                    if (data[i].Deger4 == true) {
                        $("#MalAmbCikisFisi").prop("checked", true);
                        $(".malambCikisFisiSeri").css("display", "");
                        $(".MalAmbarCikisFisiSeri").css("display", "");
                        $(".malAmbCikisFisiBosluk").css("display", "none");
                    }
                    else {
                        $(".malambCikisFisiSeri").css("display", "none");
                        $(".MalAmbarCikisFisiSeri").css("display", "none");
                        $(".malAmbCikisFisiBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 23) {
                    if (data[i].Deger4 == true) {
                        $("#MalAmbarIade").prop("checked", true);
                        $(".malambIade").css("display", "");
                        $(".MalAmbarIadeSeri").css("display", "");
                        $(".malAmbarIadeBosluk").css("display", "none");
                    }
                    else {
                        $(".malambIade").css("display", "none");
                        $(".MalAmbarIadeSeri").css("display", "none");
                        $(".malAmbarIadeBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 22) {
                    if (data[i].Deger4 == true) {
                        $("#NizamiyeCikis").prop("checked", true);
                    }
                }
                if (data[i].tip == 19) {
                    if (data[i].Deger4 == true) {
                        $("#DepoTransferi").prop("checked", true);
                        $(".depolarArasiTransferFisiKullanilacakSeri").css("display", "");
                        $(".DepolarArasiTransferFisiKullanilacakSeri").css("display", "");
                        $(".depoTransferiBosluk").css("display", "none");
                    }
                    else {
                        $(".depolarArasiTransferFisiKullanilacakSeri").css("display", "none");
                        $(".DepolarArasiTransferFisiKullanilacakSeri").css("display", "none");
                        $(".depoTransferiBosluk").css("display", "");
                    }
                }
                if (data[i].tip == 2 && data[i].Deger1 != null) {
                    var gosterilenDepo = {
                        Depo: data[i].Deger1,
                        DepoAdi: data[i].DepoAdi
                    };
                    gosterilecekDepolar.push(gosterilenDepo);
                }
                if (data[i].tip == 16 && data[i].Deger1 != null) {
                    var transferDepo = {
                        Depo: data[i].Deger1,
                        DepoAdi: data[i].DepoAdi
                    };
                    transferGirisDepolari.push(transferDepo);
                }
            }
            console.log(gosterilecekDepolar);
            gosDepolar = gosterilecekDepolar;
            transferDepolar = transferGirisDepolari;
            gosterilecekDepoTable.option("dataSource", gosDepolar);
            gosterilecekDepoTable.refresh();
            transferDepoTable.option("dataSource", transferDepolar);
            transferDepoTable.refresh();
            
            $("#kullaniciDetay").css("display", "");
            $("#kullanicilarPortlet").css("display", "none");
        },
        error: function () {
            swal("Hata", "Bir hata oluştu.", "error");
        }
    })


    gosterilecekDepolar = [];
    transferGirisDepolari = [];
}
function Goster() {
    var x = document.getElementById("Sifre");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function kullanicilaraGit() {
    Temizle();
    $("#kullaniciDetay").css("display", "none");
    $("#kullanicilarPortlet").css("display", "");
}
function Temizle() {
    $("#KullanilacakSeri").val("");
    $("#DepolarArasiTransferFisiKullanilacakSeri").val("");
    $("#BrkdRezervSeri").val("");
    $("#SmsnMagazaSeri").val("");
    $("#SmsnDepoSeri").val("");
    $("#IhracatDepoSeri").val("");
    $("#MalAmbarIadeSeri").val("");
    $("#MalAlimSeri").val("");
    $("#MalAmbarCikisFisiSeri").val("");
    $("#aktif").prop("checked", false);
    $("#miktariGecebilsinMi").prop("checked", false);
    $("#BarkodOkutmadanIslemYapabilsin").prop("checked", false);
    $("#PartiBazliMaliyet").prop("checked", false);
    $("#BrkdRezerv").prop("checked", false);
    $("#SmsnMagaza").prop("checked", false);
    $("#SmsnDepo").prop("checked", false);
    $("#IhracatDepo").prop("checked", false);
    $("#SamsunMagaza").prop("checked", false);
    $("#Sevkiyat").prop("checked", false);
    $("#MalAmbCikisFisi").prop("checked", false);
    $("#MalAmbarIade").prop("checked", false);
    $("#NizamiyeCikis").prop("checked", false);
    $("#DepoTransferi").prop("checked", false);
    $("#MalAlim").prop("checked", false);
    $(".malAlimBosluk").css("display", "");
    $(".sevkiyatBosluk").css("display", "");
    $(".brkdRezervBosluk").css("display", "");
    $(".smsnMagazaBosluk").css("display", "");
    $(".smsnDepoBosluk").css("display", "");
    $(".ihracatDepoBosluk").css("display", "");
    $(".malAmbarIadeBosluk").css("display", "");
    $(".malAmbCikisFisiBosluk").css("display", "");
    $(".depoTransferiBosluk").css("display", "");
}
function Kaydet() {
    debugger;
    if ($("#Ad").val() == "") {
        swal("UYARI!", "Lütfen Adınızı giriniz.", "warning");
        return;
    }
    if ($("#Soyad").val() == "") {
        swal("UYARI!", "Lütfen Soyadınızı giriniz.", "warning");
        return;
    }
    if ($("#Email").val() == "") {
        swal("UYARI!", "Email alanı boş geçilemez", "warning");
        return;
    }
    if ($("#Kod").val() == "") {
        swal("UYARI!", "Kod alanı boş geçilemez", "warning");
        return;
    }
    if ($("#Sifre").val() == "") {
        swal("UYARI!", "Sifre alanı boş geçilemez", "warning");
        return;
    }
    if ($("#BrkdRezerv").prop("checked") && $("#BrkdRezervSeri").val() == "") {
        swal("UYARI!", "Barkod rezerv seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#SmsnMagaza").prop("checked") && $("#SmsnMagazaSeri").val() == "") {
        swal("UYARI!", "Samsun mağaza seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#SmsnDepo").prop("checked") && $("#SmsnDepoSeri").val() == "") {
        swal("UYARI!", "Samsun depo seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#IhracatDepo").prop("checked") && $("#IhracatDepoSeri").val() == "") {
        swal("UYARI!", "İhracat depo seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#MalAmbarIade").prop("checked") && $("#MalAmbarIadeSeri").val() == "") {
        swal("UYARI!", "Mal ambar iade seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#Sevkiyat").prop("checked") && $("#KullanilacakSeri").val() == "") {
        swal("UYARI!", "Kullanılacak seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#MalAmbCikisFisi").prop("checked") && $("#MalAmbarCikisFisiSeri").val() == "") {
        swal("UYARI!", "Mal Ambar Çıkış Fişi Seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#DepoTransferi").prop("checked") && $("#DepolarArasiTransferFisiKullanilacakSeri").val() == "") {
        swal("UYARI!", "Depolar Arası Transfer Fişi Kullanılacak Seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if ($("#MalAlim").prop("checked") && $("#MalAlimSeri").val() == "") {
        swal("UYARI!", "Mal Alım Seri alanını lütfen doldurunuz.", "warning");
        return;
    }
    if (!$("#MalAlim").prop("checked")) {
        $("#MalAlimSeri").val("");
    }
    if (!$("#BrkdRezerv").prop("checked")) {
        $("#BrkdRezervSeri").val("");
    }
    if (!$("#SmsnMagaza").prop("checked")) {
        $("#SmsnMagazaSeri").val("");
    }
    if (!$("#SmsnDepo").prop("checked")) {
        $("#SmsnDepoSeri").val("");
    }
    if (!$("#IhracatDepo").prop("checked")) {
        $("#IhracatDepoSeri").val("");
    }
    if (!$("#MalAmbarIade").prop("checked")) {
        $("#MalAmbarIadeSeri").val("");
    }
    if (!$("#Sevkiyat").prop("checked")) {
        $("#KullanilacakSeri").val("");
    }
    if (!$("#MalAmbCikisFisi").prop("checked")) {
        $("#MalAmbarCikisFisiSeri").val("");
    }
    if (!$("#DepoTransferi").prop("checked")) {
        $("#DepolarArasiTransferFisiKullanilacakSeri").val("");
    }
    var model = {
        Ad: $("#Ad").val(),
        Soyad: $("#Soyad").val(),
        Email: $("#Email").val(),
        Sifre: $("#Sifre").val(),
        Kod: $("#Kod").val(),
        KullanilacakSeri: $("#KullanilacakSeri").val(),
        DepolarArasiTransferFisiSeri: $("#DepolarArasiTransferFisiKullanilacakSeri").val(),
        BrkdRezervSeri: $("#BrkdRezervSeri").val(),
        SamsunMagazaSeri: $("#SmsnMagazaSeri").val(),
        SamsunDepoSeri: $("#SmsnDepoSeri").val(),
        IhracatDepoSeri: $("#IhracatDepoSeri").val(),
        MalAmbarIadeSeri: $("#MalAmbarIadeSeri").val(),
        MalAlimSeri: $("#MalAlimSeri").val(),
        MalAmbCikisFisiSeri: $("#MalAmbarCikisFisiSeri").val(),
        Aktif: $("#aktif").prop("checked"),
        MiktariGecebilsinMi: $("#miktariGecebilsinMi").prop("checked"),
        BarkodOkutmadanIslemYapabilsin: $("#BarkodOkutmadanIslemYapabilsin").prop("checked"),
        PartiBazliMaliyet: $("#PartiBazliMaliyet").prop("checked"),
        BrkodRezerv: $("#BrkdRezerv").prop("checked"),
        SamsunMagaza: $("#SmsnMagaza").prop("checked"),
        SamsunDepo: $("#SmsnDepo").prop("checked"),
        IhracatDepo: $("#IhracatDepo").prop("checked"),
        Sevkiyat: $("#Sevkiyat").prop("checked"),
        MalAmbCikisFisi: $("#MalAmbCikisFisi").prop("checked"),
        MalAmbarIade: $("#MalAmbarIade").prop("checked"),
        NizamiyeCikis: $("#NizamiyeCikis").prop("checked"),
        DepoTransferi: $("#DepoTransferi").prop("checked"),
        MalAlim: $("#MalAlim").prop("checked"),
        GosterilecekDepo: gosDepolar,
        TransferGirisDepolari: transferDepolar
    };
    Swal.fire({
        title: 'Kaydetmek istiyor musunuz?',
        text: "Kullanıcı kaydedilecektir.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Kaydet!',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        mApp.block("body", {})
        if (result.value) {

            $.ajax({
                url: "/Users/EditTerminalKullanici",
                data: {
                    model: model,
                    kullaniciKodu: $("#eskiKod").val()
                },
                method: "post",
                success: function (e) {

                    Swal.fire(
                        'Eklendi!',
                        'Kullanıcı başarıyla eklendi.',
                        'success'
                    )

                    mApp.unblock('body');
                    window.location.href = "/Users/TerminalKullanicilariListesi";
                }
            })

        }
        else {
            mApp.unblock('body');   
        }
    })

}
function DepoEkle() {
    debugger;
    var data = table.getSelectedRowsData()[0];
    if ($("#transferGirisDepoGrid").css("display") == "none" && !gosDepolar.includes(data)) {
        gosDepolar.push(data);
        gosterilecekDepoTable.option("dataSource", gosDepolar);
        gosterilecekDepoTable.refresh();
    }
    var data = table.getSelectedRowsData()[0];
    if ($("#transferGirisDepoGrid").css("display") != "none" && !transferDepolar.includes(data)) {
        transferDepolar.push(data);
        transferDepoTable.option("dataSource", transferDepolar);
        transferDepoTable.refresh();
    }
}
function DeleteRow(kod) {
    Swal.fire({
        title: 'Kullanıcıyı silmek istiyor musunuz?',
        text: "Kullanıcı silinecektir.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sil!',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        mApp.block("body", {});
        if (result.value) {
            $.ajax({
                url: "/Users/DeleteTerminalKullanici",
                data: {
                    kod: kod
                },
                method: "post",
                success: function (e) {

                    Swal.fire(
                        'Silindi!',
                        'Kullanıcı başarıyla silindi.',
                        'success'
                    )

                    mApp.unblock('body');
                    kullaniciList.refresh();
                }
            })

        }
        else {
            mApp.unblock('body');
        }
    })
}
$("#BrkdRezerv").on("click", function () {
    if ($(this).prop("checked")) {
        $(".brkdRezervSeri").css("display", "");
        $(".BrkdRezervSeri").css("display", "");
        $(".brkdRezervBosluk").css("display", "none");
    }
    else {
        $(".brkdRezervSeri").css("display", "none");
        $(".BrkdRezervSeri").css("display", "none");
        $(".brkdRezervBosluk").css("display", "");
    }
})

$("#SmsnMagaza").on("click", function () {
    if ($(this).prop("checked")) {
        $(".smsnMgz").css("display", "");
        $(".SmsnMagazaSeri").css("display", "");
        $(".smsnMagazaBosluk").css("display", "none");
    }
    else {
        $(".smsnMgz").css("display", "none");
        $(".SmsnMagazaSeri").css("display", "none");
        $(".smsnMagazaBosluk").css("display", "");
    }
})

$("#SmsnDepo").on("click", function () {
    if ($(this).prop("checked")) {
        $(".smsnDepoSeri").css("display", "");
        $(".SmsnDepoSeri").css("display", "");
        $(".smsnDepoBosluk").css("display", "none");
    }
    else {
        $(".smsnDepoSeri").css("display", "none");
        $(".SmsnDepoSeri").css("display", "none");
        $(".smsnDepoBosluk").css("display", "");
    }
})

$("#IhracatDepo").on("click", function () {
    if ($(this).prop("checked")) {
        $(".ihrDepoSeri").css("display", "");
        $(".IhracatDepoSeri").css("display", "");
        $(".ihracatDepoBosluk").css("display", "none");
    }
    else {
        $(".ihrDepoSeri").css("display", "none");
        $(".IhracatDepoSeri").css("display", "none");
        $(".ihracatDepoBosluk").css("display", "");
    }
})

$("#MalAmbarIade").on("click", function () {
    if ($(this).prop("checked")) {
        $(".malambIade").css("display", "");
        $(".MalAmbarIadeSeri").css("display", "");
        $(".malAmbarIadeBosluk").css("display", "none");
    }
    else {
        $(".malambIade").css("display", "none");
        $(".MalAmbarIadeSeri").css("display", "none");
        $(".malAmbarIadeBosluk").css("display", "");
    }
})
$("#MalAmbCikisFisi").on("click", function () {
    if ($(this).prop("checked")) {
        $(".malambCikisFisiSeri").css("display", "");
        $(".MalAmbarCikisFisiSeri").css("display", "");
        $(".malAmbCikisFisiBosluk").css("display", "none");
    }
    else {
        $(".malambCikisFisiSeri").css("display", "none");
        $(".MalAmbarCikisFisiSeri").css("display", "none");
        $(".malAmbCikisFisiBosluk").css("display", "");
    }
})
$("#Sevkiyat").on("click", function () {
    if ($(this).prop("checked")) {
        $(".kullanilacakSeri").css("display", "");
        $(".KullanilacakSeri").css("display", "");
        $(".sevkiyatBosluk").css("display", "none");
    }
    else {
        $(".kullanilacakSeri").css("display", "none");
        $(".KullanilacakSeri").css("display", "none");
        $(".sevkiyatBosluk").css("display", "");
    }
})
$("#DepoTransferi").on("click", function () {
    if ($(this).prop("checked")) {
        $(".depolarArasiTransferFisiKullanilacakSeri").css("display", "");
        $(".DepolarArasiTransferFisiKullanilacakSeri").css("display", "");
        $(".depoTransferiBosluk").css("display", "none");
    }
    else {
        $(".depolarArasiTransferFisiKullanilacakSeri").css("display", "none");
        $(".DepolarArasiTransferFisiKullanilacakSeri").css("display", "none");
        $(".depoTransferiBosluk").css("display", "");
    }
})
$("#MalAlim").on("click", function () {
    if ($(this).prop("checked")) {
        $(".malAlimSeri").css("display", "");
        $(".MalAlimSeri").css("display", "");
        $(".malAlimBosluk").css("display", "none");
    }
    else {
        $(".malAlimSeri").css("display", "none");
        $(".MalAlimSeri").css("display", "none");
        $(".malAlimBosluk").css("display", "");
    }
})

