import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import bestProduct from "@/data/Product";
// const bestProduct = [
//   {
//     id: 1,
//     status: "Còn hàng",
//     origin: "Vietnam",
//     image: juss,
//     name: "Dầu đậu nành nguyên chất Simply",
//     desc: "Dầu ăn Simply là loại dầu ăn sử dụng nguyên liệu chọn lọc, không chất bảo quản, tạo màu, rất an toàn cho sức khỏe. Dầu đậu nành Simply can 2 lít bổ sung Omega 3, 6, 9 có lợi cho sức khỏe và sự phát triển của não bộ, đẩy lùi nguy cơ mắc bệnh tim mạch.",
//   },
//   {
//     id: 2,
//     status: "Còn ít hàng",
//     origin: "Thailand",
//     image: vfresh,
//     name: "Nước mắm chay Maggi cốt táo",
//     desc: "Nước mắm Maggi chất lượng là sự lựa chọn tuyệt vời dành cho gia đình bạn. Nước mắm chay Maggi cốt táo chai 450ml thơm ngon đến giọt cuối cùng, chiết xuất từ nước cốt táo độc đáo, mới lạ mang lại cho bữa ăn thêm tròn vị và hấp dẫn. Nước mắm được làm từ những thành phần an toàn cho người sử dụng. ",
//   },
//   {
//     id: 3,
//     status: "Không khả dụng",
//     origin: "Chinese",
//     image: twister,
//     name: "Tương ớt Chinsu",
//     desc: "Tương ớt chế biến từ những trái ớt đỏ chín cây với hương thơm nồng của tỏi cùng sự biến tấu tinh tế của các loại gia vị để chiết rót nên từng dòng tương ớt của thương hiệu tương ớt Chinsu. Tương ớt Chinsu chai 1kg chai lớn tiện lợi thích hợp cho gia đình đông người, giúp tiết kiệm hơn.",
//   },
//   {
//     id: 4,
//     status: "Đơn hàng online",
//     origin: "Singapore",
//     image: poroto,
//     name: "Sa tế tôm Chinsu ớt sả tươi",
//     desc: "Sa tế tôm Chinsu ớt sả tươi hũ 90g làm từ nguyên liệu tôm, ớt , sả tươi sạch với vị cay thơm nồng mang lại hương vị hấp dẫn, màu sắc bắt mắt cho món ăn. Sa tế Chinsu là thương hiệu sa tế chất lượng, đảm bảo vệ sinh an toàn thực phẩm của tập đoàn Massan.",
//   },
//   {
//     id: 5,
//     status: "Chỉ bán tại cửa hàng",
//     origin: "Korea",
//     image: grapefruit,
//     name: "Sốt ướp Teriyaki O'food",
//     desc: "Gia vị nêm sẵn O'food là trợ thủ đắc lực cho người nội trợ, không cần phải nêm nếm thêm gia vị, tiết kiệm thời gian. Sốt Teriyaki O'food chai 250g là loại sốt gia vị nêm sẵn mang đậm hương vị Nhật Bản, kết hợp hoàn hảo giữa các loại gia vị, cho món Teriyaki ngon chuẩn vị nhà hàng.",
//   },
//   {
//     id: 6,
//     status: "Còn hàng",
//     origin: "USA",
//     image: fancy,
//     name: "Hạt nêm Knorr thịt thăn, xương ống, tủy ",
//     desc: "Hạt nêm thịt thăn, xương ống, tủy Knorr gói 900g công thức cải tiến với chiết xuất thịt thăn, xương ống và tủy heo sạch được hầm trong nhiều giờ liền mang đến bữa ăn ngọt thanh, tròn vị. Hạt nêm Knorr là thương hiệu hạt nêm số 1 Việt Nam giúp mọi món ăn thơm ngon khó cưỡng chỉ với 1 bước nêm.",
//   },
// ];
const ProductDetail = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 bg-[#eee] min-h-[100vh]">
      <div className="w-full text-sm text-gray-600">
        <p className="text-xl">
          <span>
            <Link href={"/"}>Trang chu</Link>
          </span>{" "}
          &gt;{" "}
          <span>
            <Link href="/product">Sản Phẩm</Link>
          </span>{" "}
          &gt; <span>Thực phẩm khô</span>
        </p>
      </div>
      <h1 className="w-full text-center text-2xl font-bold text-green-700 mt-5 uppercase">
        sản phẩm Thực phẩm chế biến
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center items-center">
        {bestProduct
          .filter((item) => item.id >= 19 && item.id <= 24)
          .map((item, index) => (
            <div
              key={index}
              className="card h-full flex flex-col justify-center items-center"
            >
              <div className="p-5 text-left text-base">
                <div className="space-y-1 mb-2">
                  <div>
                    <span className="font-medium">Tình trạng:</span>
                    {item.status}
                  </div>
                  <div>
                    <span className="font-medium">Xuất xứ:</span> {item.origin}
                  </div>
                </div>
                <p className="text-sm">
                  <span className="font-medium">Mô tả:</span> {item.desc}
                </p>
                <Button className="mt-5">
                  <Link href={`/product/${item.id}`}>Read More</Link>
                </Button>
              </div>
              <div className="cover">
                <div className="coverFront">
                  <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-r-lg font-bold transform -rotate-12">
                        NEW
                      </div>
                      <div className="p-6">
                        <Image
                          src={item.image}
                          alt="ST25 Premium Rice"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {item.name}
                      </h2>
                      <div className="mt-4 space-y-2">
                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          Premium Quality
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="coverBack"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;
