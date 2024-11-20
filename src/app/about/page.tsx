import Image from "next/image";
import React from "react";
import BannerAbout from "@/assets/images/nong_san_trung_quoc_gan_mac_Viet14_44_13_000000.jpg";
import Link from "next/link";
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="banner h-[700px] relative">
        <div className="w-full h-full relative bg-[url('/assets/images/bn22-637311027205741214.jpg')] bg-cover">
          <div className="absolute top-[15%] left-[15%] text-white z-10">
            <div className="flex items-center gap-2 text-lg mb-2">
              <Link href="/">Trang chủ</Link>
              <span>/</span>
              <span>Giới thiệu</span>
            </div>
            <h1 className="text-6xl font-bold">Giới thiệu</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-[300px] flex-shrink-0">
            <div className="bg-white rounded-lg overflow-hidden border">
              <div className="p-4 bg-[#0B7132] text-white">
                <h2 className="text-xl font-bold">GIỚI THIỆU</h2>
              </div>
              <div className="py-2">
                <div className="hover:bg-gray-100 px-4 py-2">
                  <Link href="#" className="block text-gray-700">
                    Lịch sử phát triển
                  </Link>
                </div>
                <div className="hover:bg-gray-100 px-4 py-2 bg-gray-50">
                  <Link href="#" className="block text-gray-700">
                    Giới thiệu chung
                  </Link>
                </div>
                <div className="hover:bg-gray-100 px-4 py-2">
                  <Link href="#" className="block text-gray-700">
                    Chiến lược phát triển
                  </Link>
                </div>
                <div className="hover:bg-gray-100 px-4 py-2">
                  <Link href="#" className="block text-gray-700">
                    Cơ sở vật chất
                  </Link>
                </div>
                <div className="hover:bg-gray-100 px-4 py-2">
                  <Link href="#" className="block text-gray-700">
                    Cơ cấu tổ chức
                  </Link>
                </div>
                <div className="px-4 py-2">
                  <button className="text-[#0B7132] hover:underline">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#0B7132] mb-6">
                Lễ khánh thành Trung tâm công nghiệp chế biến hạt giống và nông
                sản hiện đại bậc nhất
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Trung tâm được đầu tư trên diện tích 5ha, với dây chuyền chế
                  biến hiện đại của Nhật Bản. Công suất chế biến hạt giống 30
                  tấn/giờ, chế biến gạo đóng gói tự động 30 tấn/giờ, tổng vốn
                  đầu tư giai đoạn 1 là 350 tỷ đồng.
                </p>

                {/* Thêm hình ảnh sự kiện */}
                <div className="mt-6">
                  <Image
                    src="/assets/images/khanhthanhdongthap-2-637309543953945690.jpg"
                    alt="Lễ khánh thành trung tâm"
                    width={800}
                    height={400}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-h-screen">
            <h2 className="text-2xl font-bold text-[#0B7132] mb-6">
              GIỚI THIỆU CHUNG
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Công ty TNHH MTV Huy Nguyễn – Tập đoàn giống cây trồng hình
                thành sớm nhất và đồng hành cùng sự phát triển của ngành nông
                nghiệp Việt Nam. Huy Nguyễn tập trung vào mảng sản xuất và kinh
                doanh lúa gạo được thừa hưởng từ uy tín, thế mạnh nền tảng về
                giống cây trồng và nông sản của Tập đoàn mẹ.
              </p>
              <p>
                Sinh ra giữa vùng đất lúa sen Đồng Tháp, nơi ai đã từng đặt chân
                đến đều nhớ thương về đẹp bình yên nam bộ, những cánh đồng lúa
                phi nhiêu, hương sen thơm ngát, sắc màu. Với tổng vốn đầu tư
                trên 350 tỷ đồng, nhà máy Vinarice có quy mô và hiện đại bậc
                nhất Việt Nam và khu vực Đông Nam Á. Trở thành trung tâm công
                nghiệp chế biến hạt giống và chế biến nông sản của cả vùng
                ĐBSCL, xây dựng chuỗi giá trị lúa gạo khép kín, quản trị thông
                minh trên nền tảng công nghệ 4.0.
              </p>
              <p>
                Nhà máy Vinarice có công suất sấy và chế biến 50.000 tấn hạt
                giống và 100.000 tấn gạo/năm. Hệ thống dây chuyền công nghệ sấy
                và chế biến hiện đại, đồng bộ, hoàn toàn tự động của Nhật Bản
                đầu tiên tại Việt Nam, giữ nguyên hương vị tự nhiên của từng sản
                phẩm, đáp ứng các quy trình kiểm định khắt khe theo tiêu chuẩn
                quốc tế, an toàn với con người và bảo vệ môi trường, góp phần
                thực hiện sứ mệnh nâng tầm thương hiệu lúa gạo Việt và đời sống
                của người nông dân làm lúa ngày càng được nâng cao.
              </p>
              <p>
                Nhà máy Vinarice tại Đồng Tháp đã viết lên câu chuyện đẹp về
                hành trình kết nối tinh hoa văn minh lúa nước ba miền Bắc –
                Trung – Nam. Hiện thực hóa ước mơ hình thành trung tâm công
                nghiệp chế biến hạt giống và nông sản quy mô lớn, hiện đại giữa
                vùng đất phương nam trù phú, giàu tiềm năng, góp phần nâng tầm
                thương hiệu lúa gạo Việt Nam trên trường Quốc tế.
              </p>

              {/* Industrial Center Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#0B7132] mb-8 text-center lg:text-left">
                  Lĩnh vực hoạt động chính:
                </h2>
                <div className="flex relative h-[430px] mb-24">
                  <div className="flex-1 bg-white text-left relative">
                    <div className="inline-block text-[#f2f2f2] text-8xl font-bold">
                      01
                    </div>
                    <div className="absolute top-[21%] -right-[3%] left-0 z-2">
                      <div className="relative shadow-2xl text-left rounded-lg bg-white py-[10%] px-[11%]">
                        {/* Đường gạch ngang màu nâu */}
                        <div className="w-24 h-1 bg-[#8B4513] mb-4"></div>

                        {/* Tiêu đề */}
                        <h3 className="text-[#0B7132] font-bold text-xl mb-4">
                          NGHIÊN CỨU, CHỌN TẠO, SẢN XUẤT KINH DOANH GIỐNG CÂY
                          TRỒNG
                        </h3>

                        {/* Nội dung */}
                        <p className="text-gray-700 mb-4">
                          Vinarice tập trung nghiên cứu, phát triển các dòng sản
                          phẩm năng suất, chất lượng vượt trội, thích ứng với
                          biến đổi khí hậu toàn cầu, tiệp cận xu thế của thế
                          giới
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-2 w-[40%] z-1">
                    <Image
                      src={BannerAbout}
                      alt="Banner About"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-sm"
                    />
                  </div>
                </div>
                <div className="flex relative h-[430px] mb-24">
                  <div className="order-1 w-[40%] z-1">
                    <Image
                      src={BannerAbout}
                      alt="Banner About"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-sm"
                    />
                  </div>
                  <div className="flex-1 bg-white text-right relative order-2">
                    <div className="inline-block text-[#f2f2f2] text-8xl font-bold">
                      02
                    </div>
                    <div className="absolute top-[21%] right-0 -left-[3%] z-2">
                      <div className="relative shadow-2xl text-left rounded-lg bg-white py-[10%] px-[11%]">
                        {/* Đường gạch ngang màu nâu */}
                        <div className="w-24 h-1 bg-[#8B4513] mb-4"></div>

                        {/* Tiêu đề */}
                        <h3 className="text-[#0B7132] font-bold text-xl mb-4">
                          NGHIÊN CỨU, CHỌN TẠO, SẢN XUẤT KINH DOANH GIỐNG CÂY
                          TRỒNG
                        </h3>

                        {/* Nội dung */}
                        <p className="text-gray-700 mb-4">
                          Vinarice tập trung nghiên cứu, phát triển các dòng sản
                          phẩm năng suất, chất lượng vượt trội, thích ứng với
                          biến đổi khí hậu toàn cầu, tiệp cận xu thế của thế
                          giới
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
