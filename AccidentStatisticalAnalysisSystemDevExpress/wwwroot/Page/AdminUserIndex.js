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
$(document).ready(function () {
    Listele2();
});

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
                            $('<a href="javascript:;" class="btn btn-outline-success m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air" onclick="OnayReddet(\'' + options.data.Id + '\')"><i class="la la-check"></i></a>').appendTo(container);
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


