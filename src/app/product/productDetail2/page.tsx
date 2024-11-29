import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bestProduct from "@/data/Product";

// const bestProduct = [
//   {
//     id: 1,
//     status: "Còn hàng",
//     origin: "Vietnam",
//     image: ST25,
//     name: "Gạo thơm Vua Gạo",
//     desc: "Gạo thơm Vua Gạo ST25 Lúa Tôm túi 5kg là loại gạo thơm ngon, có độ dẻo và mềm đặc biệt, hạt gạo thon dài, không bị khô sau khi nấu. Sản phẩm gạo Vua Gạo được đánh giá cao về chất lượng sản phẩm, hương vị thơm ngon, hấp dẫn, túi 5kg thích hợp cho gia đình sử dụng.",
//   },
//   {
//     id: 2,
//     status: "Còn ít hàng",
//     origin: "Thailand",
//     image: gaoDQ,
//     name: "Gạo Vinh Hiển Đỗ Quyên ",
//     desc: "Gạo Đỗ Quyên là một trong những dòng sản phẩm gạo đóng túi an toàn thương hiệu Gạo Vinh Hiển. Gạo Vinh Hiển Đỗ Quyên túi 5kg được trồng tại các cánh đồng tập trung và chăm bón cẩn thận, cho hạt dài, màu trắng trong. Gạo cho cơm dẻo vừa, mềm ngon và hương thơm nhẹ tự nhiên. ",
//   },
//   {
//     id: 3,
//     status: "Không khả dụng",
//     origin: "Chinese",
//     image: gaoVH,
//     name: "Gạo thơm Neptune",
//     desc: "Gạo Neptune chất thơm ngon, chất lượng được các bà nội trợ tin dùng. Gạo thơm Neptune ST25 Extra túi 5kg mang hương vị thơm ngon, độ mềm và dẻo vừa phải mang đến bữa ăn của bạn thêm tròn vị đậm đà và hấp dẫn. Gạo không tẩm các hoá chất độc hại an toàn cho người sử dụng.",
//   },
//   {
//     id: 4,
//     status: "Đơn hàng online",
//     origin: "Singapore",
//     image: gaoOC,
//     name: "Gạo lứt hỗn hợp",
//     desc: "Gạo Ông Cụ là thương hiệu gạo chất lượng đạt chuẩn được nhiều bà nội trợ lựa chọn sử dụng. Gạo lứt hỗn hợp 10 loại hạt Ông Cụ hộp 1kg được sản xuất theo quy trình sản xuất gạo hiện đại an toàn. Gạo lứt chứa nhiều khoáng chất và vitamin rất cần thiết cho cơ thể. ",
//   },
//   {
//     id: 5,
//     status: "Chỉ bán tại cửa hàng",
//     origin: "Korea",
//     image: BotGao,
//     name: "Bột gạo Tài Ký",
//     desc: "Bột gạo hay còn được gọi là gạo rắm, bột gạo tẻ là một loại bột đa dụng không thể thiếu khi làm bánh. Bột qua các công đoạn như ngâm, xay, khuấy, lắng, chia bột, phơi khô. Bột gạo Tài Ký gói 400g nguyên liệu như bánh bò, bánh giò, bánh cuốn, bánh bèo, bánh đúc, bánh khoái, bánh canh, bánh căn, bánh hỏi, bánh đập…",
//   },
//   {
//     id: 6,
//     status: "Còn hàng",
//     origin: "USA",
//     image: mamGao,
//     name: "Gạo thơm Mầm Gạo ST25",
//     desc: "Mầm Gạo là thương hiệu mới xuất hiện trên thị trường được nhiều người lựa chọn sử dụng cho bữa cơm gia đình. Gạo thơm Mầm Gạo ST25 Premium túi 5kg với gạo trắng đều, màu đồng nhất. Khi nấu toả hương tự nhiên cơm chín hạt mềm dẻo nhiều vị ngọt.",
//   },
// ];
const ProductDetail2 = () => {
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
          &gt; <span> Gạo Thơm</span>
        </p>
      </div>
      <h1 className="w-full text-center text-2xl font-bold text-green-700 mt-5 uppercase">
        sản phẩm gạo thơm, gạo sạch
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center items-center">
        {bestProduct
          .filter((item) => item.id >= 13 && item.id <= 18)
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
                    <div className="p-6 text-center">
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

export default ProductDetail2;
