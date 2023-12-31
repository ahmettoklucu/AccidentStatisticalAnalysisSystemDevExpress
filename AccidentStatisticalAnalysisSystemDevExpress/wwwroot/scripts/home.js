function temizle() {
    $("#crmBand").empty();
    $("#crmOnayBekleyenler").empty();
    $("#crmAjanda").empty();
    $("#crmHatirlatma").empty();
    $("#crmGorusmeNotlari").empty();
    $("#gorevProjesiCalisamAnalizi").empty();
    $("#gorevProjesiMusteriAnalizi").empty();
    $("#gorevProjesiProjeAnalizi").empty();
    $("#gorevProjesiGitCalismaRaporu").empty();
    $("#gorevProjesiCalismaList").empty();
    $("#kpiIcPiyasa").empty();
    $("#kpiDisPiyasa").empty();
    $("#kpiBolgeMuduru").empty();
    $("#kpiPazarlamaParke").empty();
    $("#kpiPazarlamaPlaka").empty();
    $("#kpiPazarlamaKapi").empty();
    $("#kpiPazarlamaToplam").empty();
    $("#kpiSatisDestekYoneticisi").empty();
    $("#kpiGMY").empty();
    $("#wmsHazirDegerler").empty();
    $("#wmsHazirDegerlerDovizli").empty();
    $("#wmsHazirDegerlerBankaMevcuduBlokeliVadeli").empty();
    $("#wmsHazirDegerlerCekMevcudu").empty();
    $("#wmsYatirimHesaplari").empty();
    $("#wmsMusteriTedarikciBakiyeleri").empty();
    $("#wmsAylikAlimSatis").empty();
    $("#wmsBankaKredileri").empty();
    $("#WMSGunlukSatisAnaliziGI").empty();
    $("#WMSSatisAnaliziYearToDay").empty();
    $("#WMSAylikSatisAnalizi").empty();
    $("#WMSUrunGrubuSatisAnalizi").empty();
    $("#WMSBakiyeRiskAnalizi").empty();
    $("#WMSSatisTemsilcisiAylikSatisAnalizi").empty();
    $("#WMSBolgeBazliAylikSatisAnalizi").empty();
    $("#WMSGunlukSatisZamanCizelgesi").empty();
    $("#IKTurnOver").empty();
    $("#IKIstenAyrilmaTuru").empty();
    $("#IKIstenAyrilmaNedeni").empty();
    $("#IKDirektEndirekt").empty();
    $("#IKIdariKadroUretim").empty();
    $("#IKEmekliCalisanOrani").empty();
    $("#IKKadinErkekCalisanOrani").empty();
    $("#IKBolumlereGoreCinsiyetDagilimi").empty();
    $("#IKKapsamIcDisOrani").empty();
    $("#IKYasOrtalamasi").empty();
    $("#IKYasDagilimi").empty();
    $("#IKEgitimDurumu").empty();
    $("#IKBolumlereGoreCalisanSayisi").empty();
    $("#IKUnvanDagilimi").empty();
    $("#IKMaliyet").empty();
    $("#IKEngelliCalisanOrani").empty();
    $("#DohlerWMSDepoUrun").empty();
    $("#DohlerWMSDepoDoluluk").empty();
    $("#PBICharts #aylikbazli").empty();
    $("#PBICharts #kisibazli").empty();
    $("#PBICharts #ilbazli").empty();
    $("#PBICharts #toplistbazli").empty();
    $("#PBICharts #bolgebazli").empty();
    $("#PBICharts #yillik").empty();
    $("#PBICharts #yillikaybazli").empty();
    $("#PBICharts #gunluksatis").empty();
    $("#PBICharts #yillikmusteribazli").empty();
    $("#SatisKPICharts #SatisAnalizi1").empty();
    $("#SatisKPICharts #SatisAnalizi2").empty();
    $("#SatisKPICharts #BankaMevcutlari").empty();
    $("#SatisKPICharts #GunlukGelenParalar").empty();
    $("#SatisKPICharts #GunlukGidenParalar").empty();
    $("#SatisKPICharts #AlacakCekleri").empty();
    $("#SatisKPICharts #KrediOdemePlani").empty();
    $("#SatisKPICharts #RiskOlusturanFaturalar").empty();
    $("#DashBoardWMSAylikYukleme").empty();
    $("#DashBoardWMSAylikYuklemeUrunGrubu").empty();
}

function InitDateSelector() {
    if ($('#m_dashboard_daterangepicker').length == 0) {
        return;
    }

    picker = $('#m_dashboard_daterangepicker');
    var start = moment();
    var end = moment();

    function cb(start, end, label) {
        var title = '';
        var range = '';

        if ((end - start) < 100 || label == 'Bugün') {
            title = 'Bugün:';
            range = start.locale('tr').format('MMM D');
        } else if (label == 'Dün') {
            title = 'Dün:';
            range = start.locale('tr').format('MMM D');
        } else {
            range = start.locale('tr').format('MMM D') + ' - ' + end.format('MMM D');
        }

        picker.find('.m-subheader__daterange-date').html(range);
        picker.find('.m-subheader__daterange-title').html(title);
    }

    pickerobj = picker.daterangepicker({
        direction: mUtil.isRTL(),
        "locale": {
            "format": "D.MM.YYYY",
            "separator": " - ",
            "applyLabel": "Uygula",
            "cancelLabel": "İptal",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Özel",
            "weekLabel": "H",
            "daysOfWeek": [
                "Pz",
                "Pzt",
                "Salı",
                "Çarşamba",
                "Perşembe",
                "Cuma",
                "Cumartesi"
            ],
            "monthNames": [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
            "firstDay": 1
        },
        startDate: start,
        endDate: end,
        opens: 'left',
        ranges: {
            'Bugün': [moment(), moment()],
            'Dün': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Son 7 Gün': [moment().subtract(6, 'days'), moment()],
            'Gelecek 7 Gün': [moment(), moment().add(6, 'days')],
            'Son 30 Gün': [moment().subtract(29, 'days'), moment()],
            'Gelecek 30 Gün': [moment(), moment().add(29, 'days')],
            'Bu Ay': [moment().startOf('month'), moment().endOf('month')],
            'Geçen Ay': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Bu Yıl': [moment().startOf('year'), moment().endOf('year')]
        }
    }, cb).on('apply.daterangepicker', function (ev, picker) {
        takipAdet = 0;
        InitWidget(moment(picker.startDate._d).format('D.MM.YYYY HH:mm'), moment(picker.endDate._d).format('D.MM.YYYY HH:mm'))
    });


    cb(start, end, '');
}

//PBI CHART TEST
function PBIChart() {
    temizle();
    dashboardAdet = PBIDashboardAdet + 0;
    takipAdet = 0;
    document.getElementById("ChartAdi").textContent = "PBI";
    if (gorunenWidgedlar.includes(54)) {
        $.ajax({
            url: "/DashBoard/GetPBIGunlukSatisBaglantiRapor",
            success: function (e) {
                $("#gunluksatis").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(55)) {
        $.ajax({
            url: "/DashBoard/GetPBIAylikRapor",
            success: function (e) {
                $("#aylikbazli").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(56)) {
        $.ajax({
            url: "/DashBoard/GetPBIKisiBazliRapor",
            success: function (e) {
                $("#kisibazli").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(57)) {
        $.ajax({
            url: "/DashBoard/GetPBIIlBazliRapor",
            success: function (e) {
                $("#ilbazli").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(58)) {
        $.ajax({
            url: "/DashBoard/GetPBITopListRapor",
            success: function (e) {
                $("#toplistbazli").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(59)) {
        $.ajax({
            url: "/DashBoard/GetPBIBolgeBazliRapor",
            success: function (e) {
                $("#bolgebazli").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(60)) {
        $.ajax({
            url: "/DashBoard/GetPBIYillikRapor",
            success: function (e) {
                $("#yillik").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(61)) {
        $.ajax({
            url: "/DashBoard/GetPBIYillikAyBazliKarsilastirmaRapor",
            success: function (e) {
                $("#yillikaybazli").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(62)) {
        $.ajax({
            url: "/DashBoard/GetPBIYillikMusteriBazliKarsilastirmaRapor",
            success: function (e) {
                $("#yillikmusteribazli").append(e);
            }
        })
    }

}

//PBI CHART TEST


//SATIŞ KPI CHART TEST
function SatisKPIChart() {
    temizle();
    dashboardAdet = SatisKPIDashboardAdet + 0;
    takipAdet = 0;
    document.getElementById("ChartAdi").textContent = "Satış KPI";
    if (gorunenWidgedlar.includes(63)) {
        $.ajax({
            url: "/DashBoard/GetSatisKPISatisAnalizi1Rapor",
            success: function (e) {
                $("#SatisAnalizi1").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(64)) {
        $.ajax({
            url: "/DashBoard/GetSatisKPISatisAnalizi2Rapor",
            success: function (e) {
                $("#SatisAnalizi2").append(e);
            }
        })
    }

    if (gorunenWidgedlar.includes(70)) {
        $.ajax({
            url: "/DashBoard/GetKrediOdemePlaniAnaliziRapor",
            success: function (e) {
                $("#KrediOdemePlani").append(e);
            }
        })
    }

    if (gorunenWidgedlar.includes(65)) {
        $.ajax({
            url: "/DashBoard/GetSatisKPIBankaMevcutlari",
            success: function (e) {
                $("#BankaMevcutlari").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(66)) {
        $.ajax({
            url: "/DashBoard/GetSatisKPIGunlukGelenParalar",
            success: function (e) {
                $("#GunlukGelenParalar").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(67)) {
        $.ajax({
            url: "/DashBoard/GetSatisKPIGunlukGidenParalar",
            success: function (e) {
                $("#GunlukGidenParalar").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(68)) {
        $.ajax({
            url: "/DashBoard/GetSatisKPIAlacakCekleri",
            success: function (e) {
                $("#AlacakCekleri").append(e);
            }
        })
    }
    if (gorunenWidgedlar.includes(69)) {
        $.ajax({
            url: "/DashBoard/GetSatisKPIRiskOlusturanFaturalar",
            success: function (e) {
                $("#RiskOlusturanFaturalar").append(e);
            }
        })
    }
}

//SATIŞ KPI CHART TEST

function CrmChart(startDate, endDate) {
    //debugger;
    temizle();
    dashboardAdet = CRMDashboardAdet + 0;
    takipAdet = 0;
    document.getElementById("ChartAdi").textContent = "BI";

    mApp.block('#contentPage', {
        overlayColor: '#000000',
        type: 'loader',
        state: 'primary',
        message: 'İşleniyor...'
    });
    document.getElementById("ChartAdi").textContent = "CRM";
    if (gorunenWidgedlar.includes(1)) {
        $.ajax({
            url: '/Dashboard/GetCrmBand',
            type: 'get',
            success: function (result) {
                $('#crmBand').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (gorunenWidgedlar.includes(2)) {
        $.ajax({
            url: '/Dashboard/GetCrmOnayBekleyenler',
            type: 'get',
            success: function (result) {
                $('#crmOnayBekleyenler').html(result);
                takipAdet++
                myTimer();
            }

        })
    }


    if (!gorunenWidgedlar.includes(3) && !gorunenWidgedlar.includes(4)) {
        $('#crmHatirlatma').parent().remove();
    }

    if (gorunenWidgedlar.includes(3)) {
        $.ajax({
            url: '/Dashboard/GetCrmHatirlatma',
            type: 'post',
            data: {
                basTar: startDate,
                bitTar: endDate,
            },
            success: function (result) {
                $('#crmHatirlatma').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(4)) {
        $.ajax({
            url: '/Dashboard/GetCRMGorusmeNotlari',
            type: 'post',
            data: {
                basTar: startDate,
                bitTar: endDate,
            },
            success: function (result) {
                $('#crmGorusmeNotlari').html(result);
                takipAdet++
                myTimer();

                //var portlet = new mPortlet('m_dash_portlet1');

                //var scrollable = $(portlet.getBody()).find('> .m-scrollable');

                ////debugger;
                //scrollable.css('height', scrollable.data('original-height'));
                //scrollable.data('max-height', scrollable.data('original-height'));


            }

        })
    }
    if (gorunenWidgedlar.includes(10)) {

        $.ajax({
            url: '/Dashboard/DashBoardAjanda',
            type: 'post',
            success: function (result) {
                $('#crmAjanda').html(result);
                takipAdet++
                myTimer();

            }

        })
    }

}

function GorevProjesi(startDate, endDate) {
    temizle();
    dashboardAdet = GorevProjesiDashboardAdet + 0;
    document.getElementById("ChartAdi").textContent = "Proje Yönetimi";
    if (gorunenWidgedlar.includes(5)) {
        var date = bugun;
        $.ajax({
            url: '/Dashboard/GetDashBoardGorevProjesiCalismaAnalizi',
            type: 'post',
            data: {
                tarih1: date,
                tarih2: date,
                user: "",
            },
            success: function (result) {

                $('#gorevProjesiCalisamAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }


    if (gorunenWidgedlar.includes(6)) {
        var date = bugun;
        $.ajax({
            url: '/Dashboard/GetDashBoardGorevProjesiMusteriAnalizi',
            type: 'post',
            data: {
                tarih1: date,
                tarih2: date,
                musteri: "",
                proje: "",
            },
            success: function (result) {
                $('#gorevProjesiMusteriAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(7)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardGorevProjesiProjeAnalizi',
            type: 'post',
            data: {
                musteri: "",
                proje: "",
            },
            success: function (result) {
                $('#gorevProjesiProjeAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }


    if (gorunenWidgedlar.includes(8)) {
        var date = bugunint;
        var tarih = Date.parse(date);

        $.ajax({
            url: '/Dashboard/GetDashBoardGorevProjesiGitCalismaRaporu',
            type: 'post',
            data: {
                tarih: date,
            },
            success: function (result) {
                $('#gorevProjesiGitCalismaRaporu').html(result);
                takipAdet++
                myTimer();
            }

        })
    }


    if (gorunenWidgedlar.includes(9)) {
        var date = bugun;
        $.ajax({
            url: '/Dashboard/GetDashBoardGorevProjesiCalismaList',
            type: 'post',
            data: {
                tarih1: date,
                tarih2: date,
            },
            success: function (result) {
                $('#gorevProjesiCalismaList').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
}

function KPI(startDate, endDate) {
    temizle();
    takipAdet = 0;
    dashboardAdet = KPIDashboardAdet + 0;
    mApp.block('#contentPage', {
        overlayColor: '#000000',
        type: 'loader',
        state: 'primary',
        message: 'İşleniyor...'
    });


    document.getElementById("ChartAdi").textContent = "KPI";
    if (!gorunenWidgedlar.includes(11)) {
        $('#kpiIcPiyasa').remove();
    }
    if (gorunenWidgedlar.includes(11)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiIcPiyasa',
            type: 'get',
            success: function (result) {
                $('#kpiIcPiyasa').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(12)) {
        $('#kpiDisPiyasa').remove();
    }
    if (gorunenWidgedlar.includes(12)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiDisPiyasa',
            type: 'get',
            success: function (result) {
                $('#kpiDisPiyasa').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(13)) {
        $('#kpiPazarlamaParke').remove();
    }
    if (gorunenWidgedlar.includes(13)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiPazarlamaParke',
            type: 'get',
            success: function (result) {
                $('#kpiPazarlamaParke').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(14)) {
        $('#kpiPazarlamaPlaka').remove();
    }
    if (gorunenWidgedlar.includes(14)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiPazarlamaPlaka',
            type: 'get',
            success: function (result) {
                $('#kpiPazarlamaPlaka').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(15)) {
        $('#kpiPazarlamaKapi').remove();
    }
    if (gorunenWidgedlar.includes(15)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiPazarlamaKapi',
            type: 'get',
            success: function (result) {
                $('#kpiPazarlamaKapi').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(16)) {
        $('#kpiPazarlamaToplam').remove();
    }
    if (gorunenWidgedlar.includes(16)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiPazarlamaToplam',
            type: 'get',
            success: function (result) {
                $('#kpiPazarlamaToplam').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(17)) {
        $('#kpiBolgeMuduru').remove();
    }
    if (gorunenWidgedlar.includes(17)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiBolgeMuduru',
            type: 'get',
            success: function (result) {
                $('#kpiBolgeMuduru').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(18)) {
        $('#kpiSatisDestekYoneticisi').remove();
    }
    if (gorunenWidgedlar.includes(18)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiSatisDestekYoneticisi',
            type: 'get',
            success: function (result) {
                $('#kpiSatisDestekYoneticisi').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
    if (!gorunenWidgedlar.includes(19)) {
        $('#kpiGMY').remove();
    }
    if (gorunenWidgedlar.includes(19)) {
        $.ajax({
            url: '/Dashboard/GetDashBoardKpiGMY',
            type: 'get',
            success: function (result) {
                $('#kpiGMY').html(result);
                takipAdet++;
                myTimer();
            }

        })
    }
}

function IK(startDate, endDate) {

    debugger;

    temizle();
    takipAdet = 0;
    dashboardAdet = IKDashboardAdet + 0;
    document.getElementById("ChartAdi").textContent = "HR";


    mApp.block('#contentPage', {
        overlayColor: '#000000',
        type: 'loader',
        state: 'primary',
        message: 'İşleniyor...'
    });


    //if (!gorunenWidgedlar.includes(32)) {
    //    $('#IKTurnOver').remove();
    //}
    //if (gorunenWidgedlar.includes(32)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKTurnOver',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKTurnOver').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(33)) {
    //    $('#IKIstenAyrilmaTuru').remove();
    //}
    //if (gorunenWidgedlar.includes(33)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKIstenAyrilmaTuru',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKIstenAyrilmaTuru').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(34)) {
    //    $('#IKIstenAyrilmaNedeni').remove();
    //}
    //if (gorunenWidgedlar.includes(34)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKIstenAyrilmaNedeni',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKIstenAyrilmaNedeni').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(35)) {
    //    $('#IKDirektEndirekt').remove();
    //}
    //if (gorunenWidgedlar.includes(35)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKDirektEndirekt',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKDirektEndirekt').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(36)) {
    //    $('#IKIdariKadroUretim').remove();
    //}
    //if (gorunenWidgedlar.includes(36)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKIdariKadroUretim',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKIdariKadroUretim').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(37)) {
    //    $('#IKEmekliCalisanOrani').remove();
    //}
    //if (gorunenWidgedlar.includes(37)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKemekliCalisanOrani',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKEmekliCalisanOrani').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(38)) {
    //    $('#IKEngelliCalisanOrani').remove();
    //}
    //if (gorunenWidgedlar.includes(38)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKEngelliCalisanOrani',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKEngelliCalisanOrani').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(39)) {
    //    $('#IKKadinErkekCalisanOrani').remove();
    //}
    //if (gorunenWidgedlar.includes(39)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKKadinErkekCalisanOrani',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKKadinErkekCalisanOrani').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(40)) {
    //    $('#IKKapsamIcDisOrani').remove();
    //}
    //if (gorunenWidgedlar.includes(40)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKKapsamIcDisOrani',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKKapsamIcDisOrani').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(41)) {
    //    $('#IKYasOrtalamasi').remove();
    //}
    //if (gorunenWidgedlar.includes(41)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKYasOrtalamasi',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKYasOrtalamasi').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(42)) {
    //    $('#IKEgitimDurumu').remove();
    //}
    //if (gorunenWidgedlar.includes(42)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKEgitimDurumu',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKEgitimDurumu').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(43)) {
    //    $('#IKBolumlereGoreCalisanSayisi').remove();
    //}
    //if (gorunenWidgedlar.includes(43)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKBolumlereGoreCalisanSayisi',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKBolumlereGoreCalisanSayisi').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(44)) {
    //    $('#IKUnvanDagilimi').remove();
    //}
    //if (gorunenWidgedlar.includes(44)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKUnvanDagilimi',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKUnvanDagilimi').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(45)) {
    //    $('#IKMaliyet').remove();
    //}
    //if (gorunenWidgedlar.includes(45)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKMaliyet',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKMaliyet').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(46)) {
    //    $('#IKYasDagilimi').remove();
    //}
    //if (gorunenWidgedlar.includes(46)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKYasDagilimi',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKYasDagilimi').html(result);
    //            takipAdet++
    //            myTimer();
    //        }

    //    })
    //}

    //if (!gorunenWidgedlar.includes(47)) {
    //    $('#IKBolumlereGoreCinsiyetDagilimi').remove();
    //}
    //if (gorunenWidgedlar.includes(47)) {
    //    $.ajax({
    //        url: '/Dashboard/GetIKBolumlereGoreCinsiyetDagilimi',
    //        type: 'get',
    //        success: function (result) {
    //            $('#IKBolumlereGoreCinsiyetDagilimi').html(result);
    //            takipAdet++
    //            myTimer();
    //        }
    //    })
    //}

    if (!gorunenWidgedlar.includes(71)) {
        $('#IKUretimRaporu').remove();
    }
    if (gorunenWidgedlar.includes(71)) {
        $.ajax({
            url: '/Dashboard/GetIKUretimRaporu',
            type: 'get',
            success: function (result) {
                $('#IKUretimRaporu').html(result);
                takipAdet++
                myTimer();
            }
        })
    }

    if (!gorunenWidgedlar.includes(72)) {
        $('#IKBolumBazliMesaiRaporu').remove();
    }
    if (gorunenWidgedlar.includes(72)) {
        $.ajax({
            url: '/Dashboard/GetIKBolumBazliMesaiRaporu',
            type: 'get',
            success: function (result) {
                $('#IKBolumBazliMesaiRaporu').html(result);
                takipAdet++
                myTimer();
            }
        })
    }

    if (!gorunenWidgedlar.includes(73)) {
        $('#IKUretimBolumleriKarsilastirmaRaporu').remove();
    }
    if (gorunenWidgedlar.includes(73)) {
        $.ajax({
            url: '/Dashboard/GetIKUretimBolumleriKarsilastirmaRaporu',
            type: 'get',
            success: function (result) {
                $('#IKUretimBolumleriKarsilastirmaRaporu').html(result);
                takipAdet++
                myTimer();
            }
        })
    }
}

function DohlerWMS(startDate, endDate) {
    temizle();
    dashboardAdet = DohlerWmsDashboardAdet + 0;
    document.getElementById("ChartAdi").textContent = "Döhler WMS";
    if (!gorunenWidgedlar.includes(48)) {
        $('#DohlerWMSDepoDoluluk').remove();
    }
    if (gorunenWidgedlar.includes(48)) {
        $.ajax({
            url: '/Dashboard/GetDohlerWMSDepoDoluluk',
            type: 'get',
            success: function (result) {
                $('#DohlerWMSDepoDoluluk').html(result);
                takipAdet++
                myTimer();
            }

        })
    }


    if (!gorunenWidgedlar.includes(49)) {
        $('#DohlerWMSDepoUrun').remove();
    }
    if (gorunenWidgedlar.includes(49)) {
        $.ajax({
            url: '/Dashboard/GetDohlerWMSDepoUrun',
            type: 'get',
            success: function (result) {
                $('#DohlerWMSDepoUrun').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
}

function WMS(startDate, endDate) {
    //debugger;
    temizle();
    takipAdet = 0;
    dashboardAdet = BIDashboardAdet + 0;
    document.getElementById("ChartAdi").textContent = "BI";

    mApp.block('#contentPage', {
        overlayColor: '#000000',
        type: 'loader',
        state: 'primary',
        message: 'İşleniyor...'
    });

    if (gorunenWidgedlar.includes(20)) {
        var date = bugun;
        var islemTipi = 0;
        var grubu = "";
        var url = '/Dashboard/GetWMSGunlukSatisAnaliziGI';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSGunlukSatisAnaliziGTGI'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: {
                Tar: date,
                islemTip: islemTipi,
                grup: grubu
            },
            success: function (result) {
                $('#WMSGunlukSatisAnaliziGI').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(21)) {
        var url = '/Dashboard/GetWMSSatisAnaliziYearToDay';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSSatisAnaliziYearToDayGT'
        }
        $.ajax({
            url: url,
            type: 'get',
            success: function (result) {
                $('#WMSSatisAnaliziYearToDay').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(22)) {

        var AislemTipi = 0;
        var AlisteTipi = "";
        var Agrubu = "";
        var AhesapKodu = "";
        var url = '/Dashboard/GetWMSAylikSatisAnalizi';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSAylikSatisAnaliziGT'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: {
                islemTip: AislemTipi,
                listeTip: AlisteTipi,
                grup: Agrubu,
                hesapKodu: AhesapKodu
            },
            success: function (result) {
                $('#WMSAylikSatisAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(23)) {

        var Say = 0;
        var SlisteTipi = "";
        var url = '/Dashboard/GetWMSUrunGrubuSatisAnalizi';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSUrunGrubuSatisAnaliziGT'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: {
                ay: Say,
                listeTip: SlisteTipi
            },
            success: function (result) {
                $('#WMSUrunGrubuSatisAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(24)) {
        $.ajax({
            url: '/Dashboard/GetWMSBakiyeRiskAnalizi',
            type: 'get',
            success: function (result) {
                $('#WMSBakiyeRiskAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(25)) {

        var STay = 0;
        var STgrubu = "";
        var url = '/Dashboard/GetWMSSatisTemsilcisiAylikSatisAnalizi';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSSatisTemsilcisiAylikSatisAnaliziGT'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: {
                ay: STay,
                grup: STgrubu
            },
            success: function (result) {
                $('#WMSSatisTemsilcisiAylikSatisAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(26)) {

        var Bay = 0;
        var Bgrubu = "";
        var url = '/Dashboard/GetWMSBolgeBazliAylikSatisAnalizi';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSBolgeBazliAylikSatisAnaliziGT'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: {
                ay: Bay,
                grup: Bgrubu
            },
            success: function (result) {
                $('#WMSBolgeBazliAylikSatisAnalizi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(27)) {
        var Zgrubu = "";
        var url = '/Dashboard/GetWMSGunlukSatisZamanCizelgesi';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSGunlukSatisZamanCizelgesiGT'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: {
                grup: Zgrubu
            },
            success: function (result) {
                $('#WMSGunlukSatisZamanCizelgesi').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    //Hazır Değerler
    if (gorunenWidgedlar.includes(28)) {
        var url = '/Dashboard/GetWMSHazirDegerler';
        if (kullanici.SirketKodu == "19") {
            url ='/Dashboard/GetWMSHazirDegerlerGT'
        }
        $.ajax({
            url: url,
            type: 'get',
            success: function (result) {
                $('#wmsHazirDegerler').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
    //Hazır Değerler

    //Müşteri Tedarikçi Bakiyeleri
    if (gorunenWidgedlar.includes(29)) {
        var url = '/Dashboard/GetWMSMusteriTedarikciBakiyeleri';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSMusteriTedarikciBakiyeleriGT';
        }
        $.ajax({
            url: url,
            type: 'get',
            success: function (result) {
                $('#wmsMusteriTedarikciBakiyeleri').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
    //Müşteri Tedarikçi Bakiyeleri

    //Aylık Alım Satış
    if (gorunenWidgedlar.includes(30)) {
        var url = '/Dashboard/GetWMSAylikAlimSatis';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSAylikAlimSatisGT';
        }
        $.ajax({
            url: url,
            type: 'get',
            success: function (result) {
                $('#wmsAylikAlimSatis').html(result);
                takipAdet++
                myTimer();
            }

        })
    } wmsBankaKredileri
    //Aylık Alım Satış

    //Banka Kredileri
    if (gorunenWidgedlar.includes(31)) {
        var url = '/Dashboard/GetWMSBankaKredileri';
        if (kullanici.SirketKodu == "19") {
            url = '/Dashboard/GetWMSBankaKredileriGT';
        }
        $.ajax({
            url: url,
            type: 'get',
            success: function (result) {
                $('#wmsBankaKredileri').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
    //Banka Kredileri

    //Hazır Değerler Dövizli
    if (gorunenWidgedlar.includes(50)) {
        $.ajax({
            url: '/Dashboard/GetWMSHazirDegerlerDovizli',
            type: 'get',
            success: function (result) {
                $('#wmsHazirDegerlerDovizli').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
    //Hazır Değerler Dövizli

    //Hazır Değerler Banka Mevcudu Blokeli/Vadeli
    if (gorunenWidgedlar.includes(51)) {
        $.ajax({
            url: '/Dashboard/GetWMSHazirDegerlerBankaMevcuduBlokeliVadeli',
            type: 'get',
            success: function (result) {
                $('#wmsHazirDegerlerBankaMevcuduBlokeliVadeli').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
    //Hazır Değerler Cek Mevcudu Blokeli/Vadeli

    //Hazır Değerler Cek Mevcudu
    if (gorunenWidgedlar.includes(52)) {
        $.ajax({
            url: '/Dashboard/GetWMSHazirDegerlerCekMevcudu',
            type: 'get',
            success: function (result) {
                $('#wmsHazirDegerlerCekMevcudu').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
    //Hazır Değerler Cek Mevcudu

    //Hazır Değerler Cek Mevcudu
    if (gorunenWidgedlar.includes(53)) {
        $.ajax({
            url: '/Dashboard/GetWMSYatirim',
            type: 'get',
            success: function (result) {
                $('#wmsYatirimHesaplari').html(result);
                takipAdet++
                myTimer();
            }

        })
    }

    if (gorunenWidgedlar.includes(74)) {
        $.ajax({
            url: '/Dashboard/GetAylikYuklemeEndPoint',
            type: 'get',
            success: function (result) {
                $('#DashBoardWMSAylikYukleme').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
   
    if (gorunenWidgedlar.includes(75)) {
        $.ajax({
            url: '/Dashboard/GetAylikYuklemeUrunGrubuEndPoint',
            type: 'get',
            success: function (result) {
                $('#DashBoardWMSAylikYuklemeUrunGrubu').html(result);
                takipAdet++
                myTimer();
            }

        })
    }
}


var kullanici;
var gorunenWidgedlar = []
var BIDashboardAdet = 0;
var dashboardAdet = 0;
var CRMDashboardAdet = 0;
var GorevProjesiDashboardAdet = 0;
var IKDashboardAdet = 0;
var KPIDashboardAdet = 0;
var DohlerWmsDashboardAdet = 0;
var takipAdet = 0
var looderTimer;
var PBIDashboardAdet = 0;
var SatisKPIDashboardAdet = 0;
async function InitWidget(startDate, endDate) {

    //debugger;
    gorunenWidgedlar = GetTableSource('/Dashboard/GetUserDashBoard', 'get')
    kullanici = GetTableSource('/Dashboard/GetUser', 'get')
    //dashboardAdet = gorunenWidgedlar.length
    //looderTimer = setInterval(myTimer, 1000);
    debugger;
    for (var i = 0; i < gorunenWidgedlar.length; i++) {
        if ((gorunenWidgedlar[i] >= 1 && gorunenWidgedlar[i] <= 4) || gorunenWidgedlar[i] == 10) {
            document.getElementById("CRMMenu").style.visibility = "visible";
            CRMDashboardAdet = CRMDashboardAdet + 1;
        }
        else if (gorunenWidgedlar[i] >= 5 && gorunenWidgedlar[i] <= 9) {
            document.getElementById("GorevProjesiMenu").style.visibility = "visible";
            GorevProjesiDashboardAdet = GorevProjesiDashboardAdet + 1;
        }
        else if ((gorunenWidgedlar[i] >= 20 && gorunenWidgedlar[i] <= 31) || (gorunenWidgedlar[i] >= 50 && gorunenWidgedlar[i] <= 53) || (gorunenWidgedlar[i] == 74)     || (gorunenWidgedlar[i] == 74)) {
            document.getElementById("WMSMenu").style.visibility = "visible";
            BIDashboardAdet = BIDashboardAdet + 1;
        }
        else if (gorunenWidgedlar[i] >= 11 && gorunenWidgedlar[i] <= 19) {
            document.getElementById("KPIMenu").style.visibility = "visible";
            KPIDashboardAdet = KPIDashboardAdet + 1;
        }
        else if (/*(gorunenWidgedlar[i] >= 32 && gorunenWidgedlar[i] <= 47) || */(gorunenWidgedlar[i] >= 71 && gorunenWidgedlar[i] <= 73)) {
            document.getElementById("IKMenu").style.visibility = "visible";
            IKDashboardAdet = IKDashboardAdet + 1;
        }
        else if (gorunenWidgedlar[i] == 48 || gorunenWidgedlar[i] == 49) {
            document.getElementById("DohlerWMSMenu").style.visibility = "visible";
            DohlerWmsDashboardAdet = DohlerWmsDashboardAdet + 1;
        }
        else if ((gorunenWidgedlar[i] >= 54 && gorunenWidgedlar[i] <= 62)) {
            document.getElementById("PBIMenu").style.visibility = "visible";
            PBIDashboardAdet = PBIDashboardAdet + 1;
        }
        else if ((gorunenWidgedlar[i] >= 63 && gorunenWidgedlar[i] <= 70)) {
            document.getElementById("SatisKPIMenu").style.visibility = "visible";
            SatisKPIDashboardAdet = SatisKPIDashboardAdet + 1;
        }
       
    }
    
    if (CRMDashboardAdet != 0) {
        CrmChart(startDate, endDate);
    }
    else if (BIDashboardAdet != 0) {
        WMS(startDate, endDate)
    }
    else if (KPIDashboardAdet != 0) {
        KPI(startDate, endDate);
    }
    else if (IKDashboardAdet != 0) {
        IK(startDate, endDate)
    }
    else if (DohlerWmsDashboardAdet != 0) {
        DohlerWMS(startDate, endDate);
    }
    else if (GorevProjesiDashboardAdet != 0) {
        GorevProjesi(startDate, endDate);
    }
    else if (PBIDashboardAdet != 0) {
        PBIChart();
    }
    else if (SatisKPIDashboardAdet != 0) {
        SatisKPIChart();
    }
}


function myTimer() {
    //debugger;
    if (dashboardAdet == takipAdet) {
        window.clearInterval(looderTimer)
        mApp.unblock('#contentPage');
    }
}