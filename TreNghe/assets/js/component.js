const headerComponent = () => {
  const header = document.getElementById("header");
  if (header) {
    const box = document.createElement("div");
    box.innerHTML = `
    <nav class="nav container">
        <div class="nav__data">
          <a href="#" class="nav__logo">
            TRE NGHE
          </a>
          <div id="hotline-box">
            <i class="phone-icon ti-headphone-alt"></i>
            <div id="number">
              <span>HOTLINE</span>
              <span class="phone">123-456-789</span>
            </div>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-menu-line nav__burger"></i>
            <i class="ri-close-line nav__close"></i>
          </div>
        </div>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li><a href="../../index.html" class="nav__link">Trang chu</a></li>

            <li class="dropdown__item">
              <a href="../../aboutus.html" class="nav__link">
                Ve Tre Nghe <i class="ri-arrow-down-s-line dropdown__arrow"></i>
              </a>

              <ul class="dropdown__menu">
                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-pie-chart-line"></i> Overview
                  </a>
                </li>

                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-arrow-up-down-line"></i> Transactions
                  </a>
                </li>

                <!--=============== DROPDOWN SUBMENU ===============-->
                <li class="dropdown__subitem">
                  <div class="dropdown__link">
                    <i class="ri-bar-chart-line"></i> Reports <i class="ri-add-line dropdown__add"></i>
                  </div>

                  <ul class="dropdown__submenu">
                    <li>
                      <a href="#" class="dropdown__sublink">
                        <i class="ri-file-list-line"></i> Documents
                      </a>
                    </li>

                    <li>
                      <a href="#" class="dropdown__sublink">
                        <i class="ri-cash-line"></i> Payments
                      </a>
                    </li>

                    <li>
                      <a href="#" class="dropdown__sublink">
                        <i class="ri-refund-2-line"></i> Refunds
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <!--=============== DROPDOWN 2 ===============-->
            <li class="dropdown__item">
              <a href="../../project.html" class="nav__link">
                Du an <i class="ri-arrow-down-s-line dropdown__arrow"></i>
              </a>

              <ul class="dropdown__menu">
                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-user-line"></i> Profiles
                  </a>
                </li>

                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-lock-line"></i> Accounts
                  </a>
                </li>

                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-message-3-line"></i> Messages
                  </a>
                </li>
              </ul>
            </li>
            <li class="dropdown__item">
              <div class="nav__link">
                Dich vu <i class="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul class="dropdown__menu">
                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-user-line"></i> Profiles
                  </a>
                </li>

                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-lock-line"></i> Accounts
                  </a>
                </li>

                <li>
                  <a href="#" class="dropdown__link">
                    <i class="ri-message-3-line"></i> Messages
                  </a>
                </li>
              </ul>
            </li>
            <li><a href="../../blog.html" class="nav__link">Kinh nghiem</a></li>
            <li><a href="#" class="nav__link">Tuyen dung</a></li>
            <li class="dropdown__item" id="toggleButton">
              <div class="nav__link">
                <i class="search-icon ti-search"></i>
              </div>

            </li>

          </ul>
          <div id="boxds" class="hidden">
            <div id="boxas">
              <input type="text" id="find" placeholder="Nhap noi dung can tim">
              <button class="button">Tim kiem</button>
            </div>
          </div>
        </div>


        <div id="hotline-box-pc">
          <i class="phone-icon ti-headphone-alt"></i>
          <div id="number">
            <span>HOTLINE</span>
            <span class="phone">123-456-789</span>
          </div>
        </div>
      </nav>
  `;
    header.appendChild(box);
  }
};

const showFind = () => {
  var box = document.getElementById("boxds");
  var btn = document.getElementById("toggleButton");
  btn.addEventListener("click", () => {
    if (box.classList.contains("hidden")) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });
};
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

const footerComponent = () => {
  if (document.getElementById("footer2")) {
    const box = document.createElement("div");
    box.innerHTML = `<div id="footer"> <div class="body1">
          <span>TRE NGHE</span>
          <span>Công Ty TNHH Kiến Trúc Tre Nghệ</span>
          <span id="ssd">Kiến Trúc Tre Nghệ cung cấp dịch vụ thiết kế và thi công trọn gói nhà phố, biệt thự tại Bà Rịa -
            Vũng Tàu.
            Người Đại Diện: Đặng Văn Đạo</span>
          <span id="ssd">Giấy Phép Đăng Ký Kinh Doanh Số 3502428027
            Do Sở Kế Hoạch Và Đầu Tư Tỉnh Bà Rịa - Vũng Tàu CấpE</span>
        </div>
        <div class="body2">
          <span>Ve tre nghe</span>
          <ul>
            <li><a href="">Giới thiệu</a></li>
            <li><a href="">Dự án</a></li>
            <li><a href="">Tuyen dung</a></li>
            <li><a href="">Kinh nghiem xay dung</a></li>
            <li><a href="">Y kien khach hang</a></li>
          </ul>
        </div>
        <div class="body3">
          <span>Dich vu</span>
          <ul>
            <li><a href="">Thiết kế kiến trúc</a></li>
            <li><a href="">Thi công phần thô</a></li>
            <li><a href="">Biệt thự</a></li>
            <li><a href="">Nhà phố</a></li>
            <li><a href="">Nhà vườn</a></li>
          </ul>
        </div>
        <div class="body4">
          <span>Lien he</span>
          <ul>
            <li><a href=""><i class="ri-phone-line"></i> 123-456-789</a></li>
            <li><a href=""><i class="ri-mail-line"></i> hotro@gmdd.com</a></li>
            <li><a href=""><i class="ri-map-pin-line"></i> 9G2 Trung Tâm Thương Mại, Nguyễn Oanh, Phường 7, Thành phố Vũng
                Tầu, Bà Rịa - Vũng Tàu
                78000</a></li>
  
          </ul>
        </div>
        <div class="body5">
          <!-- <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkientructrenghe&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1156271465050804"
            width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
            allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe> -->
          <div id="box-contact">
            <a href=""> <i class="ri-youtube-line"></i></a>
            <a href=""> <i class="ri-tiktok-line"></i></a>
          </div>
        </div></div>`;
    document.getElementById("footer2").appendChild(box);
  }
};

const createProgressIndicator = () => {
  const box = document.createElement("div");
  box.innerHTML = `  
      <div id="progress">
        <span id="progress-value">&#x1F815;</span>
      </div>
    `;
  document.getElementById("btn-scroll").appendChild(box);

  const scrollProgress = document.getElementById("progress");

  // Add click event listener to scroll to top
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

const calcScrollValue = () => {
  const scrollProgress = document.getElementById("progress");
  if (!scrollProgress) return;

  const pos = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.display = pos > 100 ? "grid" : "none";
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

const contactComponent = () => {
  const contact = document.getElementById("contact");
  if (contact) {
    const box = document.createElement("div");
    box.innerHTML = ` <div id="form">
        <div id="title-form">Lien he voi tre nghe</div>
        <div class="form-content">
            <div id="form-body">
                <form action="">
                    <label for="fname">Ho va ten:</label><br>
                    <input type="text" id="fname" name="fname" placeholder="Nhap ho va ten"><br>
                    <label for="lname">So dien thoai:</label><br>
                    <input type="text" id="lname" name="lname" placeholder="Nhap so dien thoai"><br>
                    <label for="lname">Dia chi:</label><br>
                    <input type="text" id="lname" name="lname" placeholder="Nhap dia chi"><br>
                    <label for="lname">Noi dung:</label><br>
                    <input type="text" id="lname" name="lname" placeholder="Nhap noi dung"><br><br>
                    <input class="button" type="submit" value="Gui den tre nghe">
                </form>
            </div>
            <div class="form-img">
                <div class="mask2">
                    <img src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="Cinque Terre">
                </div>
            </div>
        </div>
    </div>`;
    contact.appendChild(box);
  }
};

const init = () => {
  footerComponent();
  headerComponent();
  contactComponent();
  createProgressIndicator();
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  showMenu("nav-toggle", "nav-menu");
  showFind();
};

// Run the init function to set everything up
init();
