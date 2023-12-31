function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}
$(document).ready
    (
        function () {
            const roleIdValue = getCookie('RoleId');

            if (roleIdValue) {
                console.log('RoleId:', roleIdValue);
            } else {
                console.log('Çerez bulunamadý.');
            }

            if (roleIdValue) {
                var decodedData = decodeURIComponent(roleIdValue);
                var jsonData = JSON.parse(decodedData);
                if (roleIdValue === '1') {
                    document.getElementById("m_ver_menu").innerHTML =
                        ` <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                                <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/AdminIncident/Index" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">Kazalar</span></span></span>
                                    </a>
                                </li>
                                 <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/AdminIncident/Index2" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">Onay Bekleyen Kazalar</span></span></span>
                                    </a>
                                </li>
                                <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/AdminIncident/Index3" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">KMO Kazalar</span></span></span>
                                    </a>
                                </li>
                                <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/AdminCompany/Index2" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">KMO Kazalar</span></span></span>
                                    </a>
                                </li>
                                <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/AdminCompany/Index" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">Onay Bekleyen Kuruluþlar</span></span></span>
                                    </a>
                                </li>
                                 <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="AdminUser/Index" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">Üyeler</span></span></span>
                                    </a>
                                </li>
                        </ul>
            
                       `;
                } else
                {
                    document.getElementById("m_ver_menu").innerHTML =
                        ` <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                          <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/UserCompany/Index" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">Kuruluþlarým</span></span></span>
                                    </a>
                                </li>
                                 <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/UserIncident/Index" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">Kazalarým</span></span></span>
                                    </a>
                                </li>
                                <li data-menuid="1" class="m-menu__item  m-menu__item--submenu" aria-haspopup="false" m-menu-submenu-toggle="hover" m-menu-link-redirect="1">
                                    <a href="~/UserIncident/Index2" class="m-menu__link m-menu__toggle">
                                        <i class="m-menu__link-icon flaticon-home-1"></i>
                                        <span class="m-menu__link-text">Diðer Kazalar</span></span></span>
                                    </a>
                                </li>

                           
                               
                        </ul>`;
                }
            }

        });
