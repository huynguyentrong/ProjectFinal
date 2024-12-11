"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const History = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="bg-green-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
            Tổng Quan
          </h1>
          <p className="text-gray-700 text-center leading-relaxed">
            CTY MTV Huy nguyễn chúng tôi tự hào là đơn vị tiên phong trong việc
            sản xuất và cung ứng nông sản, lúa gạo và các thực phẩm chế biến đạt
            tiêu chuẩn quốc tế. Với sứ mệnh nâng cao giá trị nông nghiệp Việt
            Nam, chúng tôi cam kết:
          </p>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>
              Cung cấp sản phẩm lúa gạo chất lượng cao, xuất khẩu đến nhiều quốc
              gia.
            </li>
            <li>
              Phát triển chuỗi thực phẩm chế biến an toàn và thân thiện với sức
              khỏe người tiêu dùng.
            </li>
            <li>
              Đẩy mạnh việc áp dụng công nghệ hiện đại vào nông nghiệp bền vững.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative border-l-4 border-green-600">
            <div className="mb-10 ml-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="absolute w-8 h-8 bg-green-600 rounded-full -left-4"></div>
              <div className="md:w-1/2 order-2 md:order-1">
                <h3 className="text-lg font-semibold text-green-600">
                  Năm 2000
                </h3>
                <p className="text-gray-700">
                  Thành lập công ty với mục tiêu nâng cao chất lượng lúa gạo
                  Việt Nam. Khởi đầu từ những cánh đồng nhỏ tại đồng bằng sông
                  Cửu Long, chúng tôi đã xây dựng được nền tảng vững chắc trong
                  sản xuất nông nghiệp.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 order-1 md:order-2">
                <img
                  src="/assets/images/Nhung-nghe-hai-ra-tien-o-Dong-bang-song-Cuu.jpg"
                  alt="Hình ảnh cánh đồng lúa"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mb-10 ml-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="absolute w-8 h-8 bg-green-600 rounded-full -left-4"></div>
              <div className="md:w-1/2 item_scroll">
                <img
                  src="/assets/images/cac-thiet-bi-chinh-cua-day-chuyen-san-xuat-gao.png"
                  alt="Hình ảnh dây chuyền chế biến"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:px-5 item_scroll">
                <h3 className="text-lg font-semibold text-green-600">
                  Năm 2010
                </h3>
                <p className="text-gray-700">
                  Đưa vào hoạt động dây chuyền sản xuất thực phẩm chế biến hiện
                  đại, đáp ứng các tiêu chuẩn quốc tế. Các sản phẩm từ lúa gạo
                  như bún, phở, và bánh tráng đã được xuất khẩu đến hơn 20 quốc
                  gia.
                </p>
              </div>
            </div>
            <div className="mb-10 ml-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="absolute w-8 h-8 bg-green-600 rounded-full -left-4"></div>
              <div className="md:w-1/2 order-2 md:order-1 mt-4 item_scroll">
                <h3 className="text-lg font-semibold text-green-600">
                  Năm 2020
                </h3>
                <p className="text-gray-700 item_scroll">
                  Áp dụng công nghệ blockchain trong chuỗi cung ứng lúa gạo, đảm
                  bảo truy xuất nguồn gốc và minh bạch thông tin sản phẩm. Đây
                  là bước tiến lớn trong việc xây dựng niềm tin với khách hàng
                  toàn cầu.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 order-1 md:order-2 md:mx-4 item_scroll">
                <img
                  src="/assets/images/image-1024x733.jpeg"
                  alt="Công nghệ blockchain"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mb-10 ml-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="absolute w-8 h-8 bg-green-600 rounded-full -left-4"></div>
              <div className="md:w-1/2 item_scroll">
                <img
                  src="/assets/images/images.jpg"
                  alt="Dây chuyền sản xuất thực phẩm"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:px-5 item_scroll">
                <h3 className="text-lg font-semibold text-green-600">
                  Năm 2022
                </h3>
                <p className="text-gray-700">
                  Hoàn thiện dây chuyền chế biến lúa gạo thế hệ mới với năng
                  suất cao hơn 30%. Đồng thời mở rộng mạng lưới đối tác xuất
                  khẩu tại các thị trường như Châu Âu và Mỹ.
                </p>
              </div>
            </div>

            <div className="mb-10 ml-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="absolute w-8 h-8 bg-green-600 rounded-full -left-4"></div>
              <div className="md:w-1/2 order-2 md:order-1 item_scroll">
                <h3 className="text-lg font-semibold text-green-600">
                  Năm 2024
                </h3>
                <p className="text-gray-700 item_scroll">
                  Triển khai mô hình Nông nghiệp thông minh, sử dụng AI và IoT
                  để tối ưu hóa quy trình trồng trọt, giảm thiểu lãng phí và
                  tăng năng suất. Đồng thời, phát triển thương hiệu thực phẩm
                  chế biến với chứng nhận quốc tế.
                </p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 order-1 md:order-2 item_scroll">
                <img
                  src="/assets/images/nong-nghiep-thong-minh-5221-02.jpg"
                  alt="Nông nghiệp thông minh"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mb-10 ml-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="absolute w-8 h-8 bg-green-600 rounded-full -left-4"></div>
              <div className="md:w-1/2 item_scroll">
                <img
                  src="/assets/images/imagesGlobal.jpg"
                  alt="Tương lai ngành nông nghiệp"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:px-5 item_scroll">
                <h3 className="text-lg font-semibold text-green-600">
                  Tầm Nhìn Tương Lai
                </h3>
                <p className="text-gray-700">
                  Đến năm 2030, trở thành tập đoàn dẫn đầu trong lĩnh vực nông
                  nghiệp bền vững tại khu vực Đông Nam Á. Phát triển thêm các
                  sản phẩm hữu cơ, thân thiện với môi trường và tiếp cận nhiều
                  hơn với cộng đồng quốc tế.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-8 w-12 h-12 text-2xl bg-white hover:bg-white rounded-full shadow-lg transition-all duration-300 ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </Button>
    </>
  );
};

export default History;
