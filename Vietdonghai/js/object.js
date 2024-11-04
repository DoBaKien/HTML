let products = [
  {
    id: 1,
    name: "Thang máy E-Coffee Hưng Phú",
    type: "Thang máy tải khách",
    home: "4 điểm dừng",
    weight: "450 kg",
  },
  {
    id: 2,
    name: "Nhà xưởng Fleming VN",
    type: "Thang máy tải hàng",
    home: "2 điểm dừng",
    weight: "2000 kg",
  },
  {
    id: 3,
    name: "Thang máy nhà phố Minh Châu",
    type: "Thang máy tải khách",
    home: "5 điểm dừng",
    weight: "450 kg",
  },
  {
    id: 4,
    name: "Showroom nội thất Gia Huy",
    type: "Thang máy tải khách",
    home: "6 điểm dừng",
    weight: "630 kg",
  },
  {
    id: 5,
    name: "Thang máy nhà nghỉ Hoàng An",
    type: "Thang máy tải khách",
    home: "5 điểm dừng",
    weight: "450 kg",
  },
  {
    id: 6,
    name: "Thang máy dược phẩm Gia Tân",
    type: "Thang máy tải khách",
    home: "6 điểm dừng",
    weight: "450kg",
  },
];

let comments = [
  {
    id: 1,
    content:
      "Là trung tâm anh ngữ với nhiều học viên sử dụng thang liên tục, tôi rất chú trọng về vấn đề an toàn và độ ổn định khi chọn thang máy. Sau thời gian sử dụng thang, tôi hoàn toàn hài lòng về chất lượng sản phẩm cũng như chế độ chăm sóc khách hàng của Việt Đông Hải",
  },
  {
    id: 2,
    content:
      "Lần đầu tiên xây nhà nên tôi đã rất kỹ trong việc lựa chọn thiết bị thang máy cho nhà mình. Khi liên hệ với Việt Đông Hải, các bạn tư vấn viên đã rất nhiệt tình hỗ trợ tôi và giám sát chặt chẽ trong suốt quá trình lắp đặt. Tôi hoàn toàn hài lòng khi chọn Việt Đông Hải",
  },
  {
    id: 3,
    content:
      "Các bạn kỹ thuật viên của Việt Đông Hải rất chuyên nghiệp và hỗ trợ tận tình. Do là công trình dịch vụ nên thang máy bên tôi cần sử dụng liên tục với tần suất cao, khi tôi liên hệ hỗ trợ, trung tâm bảo trì điều người đến xử lý rất nhanh. Tôi rất hài lòng với dịch vụ của Việt Đông Hải.",
  },
  {
    id: 4,
    content:
      " Sau thời gian sử dụng thang máy của Việt Đông Hải, tôi cảm thấy hài lòng về sản phẩm cũng như dịch vụ. Thang máy hoạt động ổn định, dịch vụ bảo hành bảo trì theo định kỳ thường xuyên, đều đặn.",
  },
  {
    id: 5,
    content:
      " Tôi cảm thấy rất hài lòng về dịch vụ của Việt Đông Hải, các bạn tư vấn nhiệt tình, đưa ra giải pháp rõ ràng. Sau khi bàn giao thang, đội ngũ kỹ thuật vẫn hỗ trợ rất tốt và nhanh chóng. Luôn có nhân viên chăm sóc khách hàng, chế độ hậu mãi tốt",
  },
  {
    id: 6,
    content:
      "Hợp tác với Việt Đông Hải tôi hoàn toàn hài lòng vì đây là một đơn vị uy tín, làm việc chuyên nghiệp và nhiệt tình. Nếu làm tiếp các công trình khác, tôi vẫn sẽ liên hệ làm việc với Việt Đông Hải",
  },
];

let users = [
  {
    id: 1,
    name: "Phạm Đức Thiện",
    image: "../assets/imgs/hinh-nen-may-tinh-dep-full-hd-11.jpg",
    position: "Chủ trung tâm anh ngữ STV",
  },
  {
    id: 2,
    name: "Phan Thanh Cát",
    image: "../assets/imgs/hinh-nen-may-tinh-dep-full-hd-13.jpg",
    position: "Chủ đầu tư",
  },
  {
    id: 3,
    name: "Nguyễn Thị Hồng Nhung",
    image: "../assets/imgs/hinh-nen-may-tinh-dep-full-hd-14.jpg",
    position: "Chủ đầu tư",
  },
  {
    id: 4,
    image: "../assets/imgs/hinh-nen-may-tinh-dep-full-hd-14.jpg",
    name: "Tống Giao Linh",
    position: "Chủ đầu tư",
  },
  {
    id: 5,

    name: "Ca sỹ Đăng Khôi",
    position: "Chủ đầu tư",
    image: "../assets/imgs/hinh-nen-may-tinh-dep-full-hd-13.jpg",
  },
  {
    id: 6,
    name: "Trang Tiến Đại",
    image: "../assets/imgs/hinh-nen-may-tinh-dep-full-hd-11.jpg",
    position: "Chủ quán cafe",
  },
];

let news = [
  {
    id: 1,
    name: "Có nên lắp đặt thang máy mini cho gia đình?",
    content:
      "Thị trường thang máy hiện nay tại Việt Nam xuất hiện ngày càng nhiều những dòng thang máy hiện đại và thông minh đến từ nhiều thương hiệu khác nhau. Nhìn chung, chúng đều giúp hỗ trợ quá trình di…",
    type: "Tổng hợp",
  },
  {
    id: 2,
    name: "Xu hướng lắp đặt cầu thang máy cho gia đình thấp tầng",
    content:
      "Nhắc tới thang máy người ta thường nghĩ đến những công trình cao tầng hoặc siêu cao tầng như chung cư, tòa nhà văn phòng hoặc nhà hàng, khách sạn. Do đây là những công trình cao tầng có mật…",
    type: "Tổng hợp",
  },
  {
    id: 3,
    name: "5 dấu hiệu cho thấy cần sửa thang máy ngay lập tức",
    content:
      "Một hệ thống thang máy thường có tuổi thọ trung bình từ 15 – 20 năm hoặc cao hơn nếu được sử dụng đúng cách và được bảo trì, bảo dưỡng định kỳ. Tuy nhiên, trong quá trình sử dụng…",
    type: "Tổng hợp",
  },
  {
    id: 4,
    name: "Top 3 kích thước thang máy văn phòng phổ biến nhất hiện nay",
    content:
      "Thang máy là một trong những thiết bị quan trọng không thể thiếu trong các công trình tòa nhà văn phòng. Chúng giúp đáp ứng nhu cầu di chuyển của nhân viên trong tòa nhà và hỗ trợ việc di…",
    type: "Tổng hợp",
  },
  {
    id: 5,
    name: "Tìm hiểu chi tiết thang máy gia đình 350kg",
    content:
      "Sự phát triển nhanh chóng của đô thị hóa tại Việt Nam đã dẫn đến xu hướng xây dựng những công trình nhà ở cao tầng. Cùng với đó là nhu cầu lắp đặt và sử dụng thang máy gia…",
    type: "Tổng hợp",
  },
  {
    id: 6,
    name: "6 mẫu thang máy đẹp đón đầu xu hướng thiết kế",
    content:
      "  Thang máy hiện nay không chỉ đơn giản là những hệ thống máy móc hỗ trợ vận chuyển mà chúng còn được xem như vật trang trí giúp tăng tính thẩm mỹ cho công trình. Vì vậy, ngày càng…",
    type: "Tổng hợp",
  },
];
