import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const corpotate = () => {
  return (
    <div className="container min-h-screen py-14 mx-auto">
      <div className="py-4 flex items-center mt-2">
        <Link href={"/"} className="text-green-400 text-base">
          <Home />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Trang chủ</p>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Đảng bộ tập đoàn</p>
      </div>
      <div className="px-4 py-8">
        <h1 className="text-center text-2xl md:text-2xl font-bold text-blue-600 mb-8">
          ĐẢNG BỘ TẬP ĐOÀN GẠO QUỐC GIA VIỆT NAM
        </h1>

        <div className="flex justify-center items-center mb-12">
          <div className="h-1 w-24 bg-yellow-400 rounded"></div>
        </div>
        <p>
          Định hướng phát triển ngành lúa gạo quốc gia tiếp tục khẳng định vai
          trò then chốt của lúa gạo trong an ninh lương thực quốc gia, đồng thời
          nâng cao giá trị xuất khẩu và cạnh tranh trên thị trường thế giới.Chú
          trọng đầu tư nghiên cứu và phát triển các giống lúa mới năng suất cao,
          chống chịu tốt với biến đổi khí hậu và điều kiện môi trường khắcs
          nghiệt.
          <br />
          <br /> Chiến lược hiện đại hóa sản xuất đẩy mạnh ứng dụng công nghệ
          số, nông nghiệp thông minh trong quá trình trồng trọt và chế
          biến,khuyến khích các mô hình liên kết sản xuất theo chuỗi giá trị, từ
          nông trại đến người tiêu dùng hỗ trợ các doanh nghiệp đầu tư vào công
          nghệ chế biến hiện đại, nâng cao giá trị gia tăng của sản phẩm gạo.
          <br />
          <br />
          Chính sách phát triển bền vững. Xây dựng các chương trình hỗ trợ nông
          dân áp dụng các phương pháp canh tác bền vững ,bảo vệ môi trường, giảm
          thiểu sử dụng hóa chất và nước trong sản xuất lúa,phát triển các vùng
          trồng lúa chất lượng cao theo tiêu chuẩn quốc tế. <br />
          <br />
          Chiến lược xuất khẩu và mở rộng thị trường,đa dạng hóa thị trường xuất
          khẩu, không chỉ dựa vào một số thị trường truyền thống,xây dựng thương
          hiệu gạo Việt Nam với uy tín về chất lượng và độ an toàn,nghiên cứu và
          phát triển các sản phẩm gạo chế biến để gia tăng giá trị xuất khẩu.{" "}
          <br />
          <br />
          Đào tạo và phát triển nguồn nhân lực,đầu tư vào các chương trình đào
          tạo chuyên sâu về công nghệ và kỹ thuật trồng trọt, xây dựng các trung
          tâm nghiên cứu và chuyển giao công nghệ về lúa gạo, khuyến khích các
          nhà khoa học trẻ nghiên cứu và đổi mới trong lĩnh vực này. <br />
          <br />
          Ứng phó với biến đổi khí hậu,phát triển các giống lúa chịu hạn, chịu
          mặn, kháng sâu bệnh, xây dựng các hệ thống thủy lợi thông minh và hiệu
          quả, nghiên cứu các giải pháp thích ứng với những thay đổi của môi
          trường.
        </p>
      </div>
    </div>
  );
};

export default corpotate;
