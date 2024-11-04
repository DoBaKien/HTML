const headerFun = () => {
  const container = document.getElementById("header-container");
  const box = document.createElement("div");
  box.innerHTML = ` <div class="header">
        <div id="sidebar" class="sidebar">
            <div class="menu-header">
               <a href="./trangchu.html"> <img src="../assets/img/logo-color.png" alt=""></a>
                <div class="box-icon">
                    <div class="lang">
                        <p>EN</p> | <p>VN</p>
                    </div>
                    <i class="icon-f ri-search-line"></i>
                    <button class="closebtn" onclick="closeNav()">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
            </div>
            <div class="list-menu">
                <div class="menu-item">
                    <a href="./about.html">Về chúng tôi</a>
                    <div class="sub-menu">
                        <a href="#">Service 1</a>
                        <a href="#">Service 2</a>
                        <a href="#">Service 3</a>
                    </div>
                </div>
                <div class="menu-item">
                    <a href="#">Câu truyện của tre</a>
                    <div class="sub-menu">
                        <a href="./story.html">Client 1</a>
                        <a href="./story.html">Client 2</a>
                        <a href="./story.html">Client 3</a>
                    </div>
                </div>
                <div class="menu-item">
                    <a href="#">Sản phẩm & dịch vụ</a>
                    <div class="sub-menu">
                        <a href="./product.html">Email</a>
                        <a href="./product.html">Phone</a>
                        <a href="./product.html">Address</a>
                    </div>
                </div>
                <div class="menu-item">
                    <a href="#">Dự án</a>
                    <div class="sub-menu">
                        <a href="./project.html">Email</a>
                        <a href="./project.html">Phone</a>
                        <a href="./project.html">Address</a>
                    </div>
                </div>
                <div class="menu-item">
                    <a href="#">Liên hệ</a>
                    <div class="sub-menu">
                        <a href="./contact.html">Email</a>
                        <a href="./contact.html">Phone</a>
                        <a href="./contact.html">Address</a>
                    </div>
                </div>
            </div>

        </div>
        <div id="main">
            <a href="./trangchu.html"><img src="../assets/img/logo.png" alt="" width="40px" height="40px"></a>
            <button class="openbtn" onclick="openNav()"><i class="ri-menu-line"></i></button>
        </div>
    </div>`;
  container.appendChild(box);
};
headerFun();
const footerFun = () => {
  const container = document.getElementById("footer-container");
  const box = document.createElement("div");
  box.innerHTML = ` <div id="footer">
        <div class="row1">
            <div class="item1">
                <img src="../assets/img/logo-color.png" alt="" width="130px">
                <div class="box-title">
                    <div class="title">BAMBOO</div>
                    <div class="subtitle">N U R S E R Y</div>
                </div>
            </div>
            <div class="item2">
                <div class="title">Dang ky cap nhat</div>
                <input placeholder="nhap email cua bn" />
            </div>
        </div>
        <div class="row2">
            <div class="col">
                <div class="title">Liên hệ</div>
                <p>
                    <i class="ri-map-pin-2-line"></i>
                    2C15, Đường Trường Sa, Phường 19, Quận Bình Thạnh, TP.HCM, Việt Nam
                </p>
                <p> <i class="ri-map-pin-2-line"></i> 1234556789</p>
                <p> <i class="ri-map-pin-2-line"></i> contact@bamboonursery.vn</p>
            </div>
            <div class="col">
                <div class="title">Liên hệ</div>
                <p>Giá trị cốt lõi</p>
                <p>Tầm nhìn chiến lược</p>
                <p>Trách nhiệm cộng đồng</p>
                <p>Đối tác đồng hành </p>
            </div>
            <div class="col">
                <div class="title">Câu chuyện của Tre</div>
                <p>Tại sao là Tre</p>
                <p>Chăm sóc Tre</p>
                <p>Kiểm soát Tre</p>
            </div>
            <div class="col">
                <div class="title">Sản phẩm & Dịch vụ</div>
                <p>Cây tre giống</p>
                <p>Sản phẩm khác</p>
                <p>Giải pháp toàn diện</p>
            </div>
            <div class="col">
                <div class="title">Chính sách & quyền lợi khách hàng</div>
                <p>Dự án của chúng tôi</p>
                <p>Bamboo Nursery’s map</p>
            </div>
        </div>
        <div class="row3">
            <div class="text">Ban quyen thuoc BambooNursery</div>
            <div class="box">
                <i class="icon-fb ri-facebook-fill"></i>
                <i class="icon-fb ri-facebook-fill"></i>
                <i class="icon-fb ri-facebook-fill"></i>
                <i class="icon-fb ri-facebook-fill"></i>
            </div>
        </div>
    </div>  `;
  container.appendChild(box);
};
footerFun();
function openNav() {
  document.body.style.overflow = "hidden";
  document.getElementById("sidebar").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.body.style.overflow = "auto";
}
