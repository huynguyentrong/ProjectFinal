import Image from "next/image";
import Link from "next/link";
import React from "react";

import BannerAbout from "@/assets/images/nong_san_trung_quoc_gan_mac_Viet14_44_13_000000.jpg";
const Banner = () => {
  return (
    // <div className="bg-green-50">
    //   <Carousel className="w-full">
    //     <CarouselContent>
    //       <CarouselItem>
    //         <div className="container mx-auto py-6 md:py-12 px-4 md:px-8">
    //           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    //             {/* Left Content */}
    //             <div className="space-y-4 md:space-y-6 text-center md:text-left">
    //               <div className="inline-block px-3 md:px-4 py-1 bg-yellow-400 rounded-full text-xs md:text-sm font-semibold">
    //                 Open Sale Discount 50%
    //               </div>
    //               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
    //                 Supermarket For Fresh Grocery
    //               </h1>
    //               <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
    //                 Introduce a new model for online grocery shopping and
    //                 convenient global delivery
    //               </p>
    //               <Button className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto md:mx-0">
    //                 Shop now
    //                 <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
    //               </Button>
    //             </div>

    //             {/* Right Content */}
    //             <div className="relative mt-8 md:mt-0">
    //               {/* Main circular image container */}
    //               <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
    //                 {/* You can replace the next/image with a placeholder for now */}
    //                 <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-green-600 rounded-full" />
    //                 <div className="relative w-[280px] h-[330px] md:w-[400px] md:h-[470px] lg:w-[510px] lg:h-[590px]">
    //                   <Image
    //                     src={Shopping}
    //                     alt="Shopping"
    //                     fill
    //                     className="object-cover"
    //                   />
    //                 </div>
    //                 <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm -z-10" />
    //               </div>

    //               {/* Floating elements - Hidden on mobile */}
    //               <div className="hidden md:block absolute top-4 xl:right-[77%] bg-white p-3 rounded-lg shadow-md">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={BannerImage}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div>
    //                     <div className="font-semibold">Kiwi - 4 pcs</div>
    //                     <div className="flex text-yellow-400">★★★★★</div>
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* Avocado rating card */}
    //               <div className="hidden xl:block absolute bottom-20 xl:right-[77%] bg-white p-2 rounded-lg shadow-sm h-[10%]">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={juice}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div className="flex items-center gap-1">
    //                     <div className="flex text-yellow-400 text-xs">
    //                       ★★★★★
    //                     </div>
    //                     <span className="text-xs font-medium">9.5</span>
    //                     <span className="bg-green-500 text-white text-xs px-1 rounded">
    //                       +1
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="hidden md:block absolute bottom-12 right-0 bg-white p-2 rounded-lg shadow-md">
    //                 <div className="flex items-center gap-2">
    //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
    //                     ✓
    //                   </div>
    //                   <span>Delivery Done!</span>
    //                 </div>
    //               </div>

    //               {/* Decorative elements on mobile */}
    //               <div className="absolute -top-4 left-0 md:hidden bg-white p-1">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={juice}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div className="flex items-center gap-1">
    //                     <div className="flex text-yellow-400 text-xs">
    //                       ★★★★★
    //                     </div>
    //                     <span className="text-xs font-medium">9.5</span>
    //                     <span className="bg-green-500 text-white text-xs px-1 rounded">
    //                       +1
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="absolute -bottom-4 right-10 md:hidden bg-white p-1">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={BannerImage}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div>
    //                     <div className="font-semibold">Kiwi - 4 pcs</div>
    //                     <div className="flex text-yellow-400">★★★★★</div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </CarouselItem>
    //       <CarouselItem>
    //         <div className="container mx-auto py-6 md:py-12 px-4 md:px-8">
    //           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    //             {/* Left Content */}
    //             <div className="space-y-4 md:space-y-6 text-center md:text-left">
    //               <div className="inline-block px-3 md:px-4 py-1 bg-yellow-400 rounded-full text-xs md:text-sm font-semibold">
    //                 Open Sale Discount 50%
    //               </div>
    //               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
    //                 Supermarket For Fresh Grocery
    //               </h1>
    //               <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
    //                 Introduce a new model for online grocery shopping and
    //                 convenient global delivery
    //               </p>
    //               <Button className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto md:mx-0">
    //                 Shop now
    //                 <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
    //               </Button>
    //             </div>

    //             {/* Right Content */}
    //             <div className="relative mt-8 md:mt-0">
    //               {/* Main circular image container */}
    //               <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
    //                 {/* You can replace the next/image with a placeholder for now */}
    //                 <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-green-600 rounded-full" />
    //                 <div className="relative w-[280px] h-[330px] md:w-[400px] md:h-[470px] lg:w-[510px] lg:h-[590px]">
    //                   <Image
    //                     src={sale}
    //                     alt="Shopping"
    //                     fill
    //                     className="object-cover"
    //                   />
    //                 </div>
    //                 <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm -z-10" />
    //               </div>

    //               {/* Floating elements - Hidden on mobile */}
    //               <div className="hidden md:block absolute top-4 xl:right-[77%] bg-white p-3 rounded-lg shadow-md">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={BannerImage}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div>
    //                     <div className="font-semibold">Kiwi - 4 pcs</div>
    //                     <div className="flex text-yellow-400">★★★★★</div>
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* Avocado rating card */}
    //               <div className="hidden xl:block absolute bottom-20 xl:right-[77%] bg-white p-2 rounded-lg shadow-sm h-[10%]">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={juice}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div className="flex items-center gap-1">
    //                     <div className="flex text-yellow-400 text-xs">
    //                       ★★★★★
    //                     </div>
    //                     <span className="text-xs font-medium">9.5</span>
    //                     <span className="bg-green-500 text-white text-xs px-1 rounded">
    //                       +1
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="hidden md:block absolute bottom-12 right-0 bg-white p-2 rounded-lg shadow-md">
    //                 <div className="flex items-center gap-2">
    //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
    //                     ✓
    //                   </div>
    //                   <span>Delivery Done!</span>
    //                 </div>
    //               </div>

    //               {/* Decorative elements on mobile */}
    //               <div className="absolute -top-4 left-0 md:hidden bg-white p-1">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={juice}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div className="flex items-center gap-1">
    //                     <div className="flex text-yellow-400 text-xs">
    //                       ★★★★★
    //                     </div>
    //                     <span className="text-xs font-medium">9.5</span>
    //                     <span className="bg-green-500 text-white text-xs px-1 rounded">
    //                       +1
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="absolute -bottom-4 left-[55%] md:hidden bg-white rounded-md">
    //                 <div className="flex items-center gap-2">
    //                   <Image
    //                     src={BannerImage}
    //                     width={200}
    //                     height={200}
    //                     alt="avocado"
    //                     className="w-8 h-8 rounded-md"
    //                   />
    //                   <div>
    //                     <div className="font-semibold">Kiwi - 4 pcs</div>
    //                     <div className="flex text-yellow-400">★★★★★</div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </CarouselItem>
    //     </CarouselContent>
    //     {/* Hide carousel controls on mobile */}
    //     <div className="hidden md:block">
    //       <CarouselPrevious className="left-4" />
    //       <CarouselNext className="right-4" />
    //     </div>
    //   </Carousel>
    // </div>
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="banner h-[700px] relative">
        <div className="w-full h-full relative bg-[url('/assets/images/bn22-637311027205741214.jpg')] bg-cover">
          <div className="absolute top-[15%] left-[15%] text-white z-10">
            <div className="flex items-center gap-2 text-lg mb-2">
              <Link href="/">Trang chủ</Link>
              <span>/</span>
              <span>Tìm hiểu các dòng sản phẩm</span>
            </div>
            <h1 className="text-2xl font-bold">
              NÂNG TẦM THƯƠNG HIỆU LÚA GẠO VIỆT
            </h1>
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

export default Banner;
