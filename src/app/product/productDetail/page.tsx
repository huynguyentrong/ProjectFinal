import React from "react";
import Image from "next/image";
import juss from "@/assets/images/juss.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import vfresh from "@/assets/images/nuoc-ep-dao-vfresh-1-lit-202203261038061691.jpg";
import fancy from "@/assets/images/nuoc-ep-nho-trang-daiya-fancy-huong-dao-150ml-clone-202407101502431161.jpg";
import twister from "@/assets/images/6-lon-nuoc-cam-ep-twister-tropicana-320ml-202312261650000261.jpg";
import poroto from "@/assets/images/x-11_202411201350307198.jpg";
import grapefruit from "@/assets/images/img1532.jpg";
const bestProduct = [
  {
    id: 1,
    status: "Còn hàng",
    origin: "Vietnam",
    image: juss,
    name: "Nước ép lựu Juss",
    desc: "Nước ép trái cây chất lượng của thương hiệu nước ép Juss từ Thổ Nhĩ Kỳ. Nước ép lựu Juss lựu đỏ 1 lít từ quả lựu tươi ngon chứa nhiều vitamin và dinh dưỡng giúp giải khát nhanh chóng, cung cấp năng lượng cho cơ thể khỏe mạnh, mang lại hiệu quả làm đẹp da rất tốt, đặc biệt tốt cho mẹ bầu và thai nhi",
  },
  {
    id: 2,
    status: "Còn ít hàng",
    origin: "Thailand",
    image: vfresh,
    name: "Nước ép đào Vfresh ",
    desc: "Sản phẩm nước ép trái cây chất lượng thơm ngon từ thương hiệu Vfresh được làm từ nguyên liệu tự nhiên tươi ngon và đào tươi nguyên chất giữ nguyên được hương vị tự nhiên, thơm ngon vốn có. Sản phẩm giúp giải khát nhanh chóng, cung cấp chất dinh dưỡng, tốt cho sức khỏe.",
  },
  {
    id: 3,
    status: "Không khả dụng",
    origin: "Chinese",
    image: twister,
    name: "Nước cam ép twister",
    desc: "Được chiết xuất từ những tép cam tươi nguyên chất tươi ngon và bổ dưỡng. Nước cam ép Twister với nguồn nguyên liệu tự nhiên được lựa chọn cẩn thận kết hợp công nghệ sản xuất hiện đại, mang lại thức uống có hương vị thơm ngon, tốt cho sức khỏe. Cam kết chính hãng và an toàn",
  },
  {
    id: 4,
    status: "Đơn hàng online",
    origin: "Singapore",
    image: poroto,
    name: "Nước ép Chai ổi",
    desc: "Nước ép chai Thủy tinh nguyên chất dung tích 310ml được dung hòa 1-2% đường phèn tùy loại dùng nguyên chất vẫn giữ nguyên thể tích và giá có 2-3 viên đá giữ lạnh. Nước ép được ép tưoi hoàn toàn khi khách đặt không ép trước.",
  },
  {
    id: 5,
    status: "Chỉ bán tại cửa hàng",
    origin: "Korea",
    image: grapefruit,
    name: "Nước ép chai bưởi",
    desc: "Nước ép chai Thủy tinh nguyên chất dung tích 310ml được dung hòa 1-2% đường phèn tùy loại dùng nguyên chất vẫn giữ nguyên thể tích và giá có 2-3 viên đá giữ lạnh. Nước ép được ép tưoi hoàn toàn khi khách đặt không ép trước.",
  },
  {
    id: 6,
    status: "Còn hàng",
    origin: "USA",
    image: fancy,
    name: "Trà thảo mộc Cap Panda Liang Teh lon ",
    desc: "Nước ngọt, trà giải khát Cap Panda xuất xứ Indonesia, với các loại thảo mộc tự nhiên như lá cây sương sáo, la hán quả, kim ngân hoa, rễ cam thảo,... cùng quy trình sản xuất hiện đại cho ra hương vị trà giải khát thảo mộc Cap Panda Liang Teh 310ml giúp giải khát, cung cấp nước và vitamin cho cho thể sảng khoái.",
  },
];
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
          &gt; <span>Nước ép</span>
        </p>
      </div>
      <h1 className="w-full text-center text-2xl font-bold text-green-700 mt-5 uppercase">
        sản phẩm nước ép
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center items-center">
        {bestProduct.map((item, index) => (
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
                <Link href="/product/1">Read More</Link>
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

export default ProductDetail;
