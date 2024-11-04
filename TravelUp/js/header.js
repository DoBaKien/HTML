const HeaderComponent = () => {
  if (document.getElementById("header-container")) {
    const box = document.createElement("div");
    box.innerHTML = `  <div id="header-container">
        <header class="header" id="pc">
            <div class="img1">
            <img src="../assets/img/logo.png" alt="" />
            </div>
            <div id="header_box">
                <div id="header_box_1">
                    <div class="phone"><i class="ri-phone-line"></i>0944260360</div>

                    <ul class="nav">
                        <li><a href=""><i class="ri-search-line"></i></a></li>
                        <li style="margin-left: 1px solid black;">
                            <a href="">
                                Tieng viet <img src="../assets/img/vi.png" alt=""class="flag" /></a>
                            <ul class="subnav">
                                <li>
                                    <a href="" style="color: black;">
                                        <span style=" white-space: nowrap;">
                                            Tieng anh
                                            <img src="../assets/img/vi.png" alt="" class="flag" />
                                        </span>
                                    </a>
                                </li>
                                <li><a href="" style="color: black;">
                                        <span style=" white-space: nowrap;">
                                            Tieng viet
                                            <img src="../assets/img/vi.png" alt="" class="flag" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="">Dang nhap</a></li>
                        <li><a href=""><i class="ri-shopping-cart-2-fill"></i></a></li>
                        <li>
                            <a href="" class="btn">Dat tour rieng</a>
                        </li>
                    </ul>

                </div>
                <div id="header_box_2">
                    <ul class="nav">
                        <li>
                            <a href="./trangchu.html">Trang chu</a>
                            
                        </li>
                        <li><a href="./doingu.html">Doi ngu travel up</a>
                            
                        </li>
                        <li><a href="./hoiuc.html">Hoi uc tren cao</a>
                            
                        </li>
                        <li><a href="./uptour.html">Up! tour</a>
                            
                            <ul class="subnav">
                                <li>
                                    <a href="">
                                        Camping Tours
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span style=" white-space: nowrap;">Trekking/Hiking Tours</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Trekking Nepal
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="./tintuc.html">Tin tuc</a>
                            
                        </li>
                        <li><a href="">Up! shop</a>
                            
                        </li>
                        <li><a href="">Lien he</a>
                            
                        </li>
                        <li><a href="">Hoi dap</a>
                            
                            <ul class="subnav">
                                <li>
                                    <a href="">
                                        <span style=" white-space: nowrap;"> Hoan huy tour</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span style=" white-space: nowrap;"> Dich vu tour</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                </div>

            </div>
        </header>
        <header class="header" id="mobi">
            <div class="navbar">
                <div class="container nav-container">
                    <input class="checkbox" type="checkbox" name="" id="menu-toggle" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>

                    <div class="menu-items">

                        <li><input type="text" class="icon-rtl" value placeholder="Search"></li>
                        <li><a href="./trangchu.html">Trang chu</a></li>
                        <li><a href="./doingu.html">Doi ngu travel up</a></li>
                        <li><a href="./hoiuc.html">Hoi uc tren cao</a></li>
                        <li id="tour-toggle">
                            <a href="#">UP! Tour</a>
                            <i class="ri-arrow-right-s-line"></i>
                        </li>
                        <li><a href="./tintuc.html">Tin tuc</a></li>
                        <li><a href="#">Up! Shop</a></li>
                        <li><a href="#">Lien he</a></li>
                        <li id="qa-toggle">
                            <a href="#">Hoi dap</a>
                            <i class="ri-arrow-right-s-line"></i>
                        </li>
                        <li id="cart-toggle">
                            <a href="#">Gio hang</a>
                            <i class="ri-arrow-right-s-line"></i>
                        </li>
                        <li id="lang-toggle">
                            <a href="#">Tieng viet</a>
                            <i class="ri-arrow-right-s-line"></i>
                        </li>
                        <li><a href="#">Dat tour rieng </a></li>
                    </div>

                    <!-- Menu phụ -->

                    <div class="submenu-items" id="tour-submenu">
                        <li>
                            <i class="ri-arrow-left-s-line"></i>
                            <a href="#" id="back-tour">Up! Tour</a>
                        </li>
                        <li><a href="#">Trekking/Hiking Tours</a></li>
                        <li><a href="#">Camping Tours</a></li>
                        <li><a href="#">Trekking Nepal</a></li>
                    </div>
                    <div class="submenu-items" id="qa-submenu">
                        <li>
                            <i class="ri-arrow-left-s-line"></i>
                            <a href="#" id="back-qa">Hoi dap</a>
                        </li>
                        <li><a href="#">Hoan Huy Tour</a></li>
                        <li><a href="#">Dich vu Tour</a></li>
                    </div>
                    <div class="submenu-items" id="cart-submenu">
                        <li>
                            <i class="ri-arrow-left-s-line"></i>
                            <a href="#" id="back-cart">Main menu</a>
                        </li>
                        <li><a href="#">Gio hang <br>Khong co gi trong gio hang</a></li>
                    </div>
                    <div class="submenu-items" id="lang-submenu">
                        <li>
                            <i class="ri-arrow-left-s-line"></i>
                            <a href="#" id="back-lang">Main menu</a>
                        </li>
                        <li><a href="#">Tieng viet</a></li>
                        <li><a href="#">English</a></li>
                    </div>
                </div>
            </div>
            <div id="mobi-img">
                <img src="../assets/img/logo.png" alt="" id="mobi-img" />
            </div>
            <div id="mobi-right">
                <i class="ri-search-line"></i>
                <i class="ri-user-line"></i>
            </div>
        </header>
    </div>
`;
    document.getElementById("header-container").appendChild(box);
  }
};

const FooterComponent = () => {
  if (document.getElementById("footer-container")) {
    const box = document.createElement("div");
    box.innerHTML = `  
     <div id="footer-container">
        <div id="footer1">
            <div id="footer-logo">
                <img src="../assets/img/logo.png" />
            </div>
            <div>TOUR TRẢI NGHIỆM HÀNG ĐẦU MIỀN BẮC</div>
            <span style="margin-top: 40px;"><i class="ri-phone-line"></i> 0944260360</span>
            <span><i class="ri-mail-line"></i> info@travelup.vn</span>
            <span><i class="ri-map-pin-line"></i> 234 Hoàng Quốc Việt - Bắc Từ Liêm - Hà Nội</span>
            <div id="footer-contact">
                <i class="ri-instagram-line"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-facebook-circle-line"></i>
                <i class="ri-google-fill"></i>
                <i class="ri-linkedin-fill"></i>
            </div>
        </div>
        <div id="footer2">
            <div class="footer-title">Đặt tour cho riêng bạn</div>
            <div class="footer-subtext">Để lại thông tin cá nhân và lịch trình đề xuất.
                Chúng tôi sẽ liên lạc lại với bạn!
            </div>
            <input type="text" class="footer-input" placeholder="Ho va ten">
            <input type="text" class="footer-input" placeholder="So dien thoai">
            <input type="text" class="footer-input" placeholder="Email">
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="noi dung"></textarea>
            <button class="button" style="margin-top: 10px;">Dat tour</button>
        </div>
        <div id="footer3">
            <div class="footer-title">Huu ich</div>
            <div class="footer-subtext">Huong dan dat tour</div>
            <div class="footer-subtext">Huong dan chuan bi do va the luc khi trekking</div>
            <div class="footer-subtext">Chính sách thanh toán và hoàn/hủy</div>
            <div class="footer-subtext">Điều khoản bảo mật và sử dụng dịch vụ</div>
        </div>
    </div>
`;
    document.getElementById("footer-container").appendChild(box);
  }
};

window.addEventListener("scroll", function () {
  var menusScroll = document.getElementsByClassName("header");
  for (var i = 0; i < menusScroll.length; i++) {
    if (window.scrollY > 0) {
      menusScroll[i].classList.add("scrolled");
    } else {
      menusScroll[i].classList.remove("scrolled");
    }
  }
});

function SubM(a, b, c) {
  document.getElementById(a).addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById(b).style.transform = "translateX(0)";
  });
  document.getElementById(c).addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById(b).style.transform = "translate(-150%)";
  });
}
HeaderComponent();
FooterComponent();
SubM("tour-toggle", "tour-submenu", "back-tour");
SubM("qa-toggle", "qa-submenu", "back-qa");
SubM("cart-toggle", "cart-submenu", "back-cart");
SubM("lang-toggle", "lang-submenu", "back-lang");
