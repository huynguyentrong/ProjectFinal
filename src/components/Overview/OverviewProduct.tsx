import {
  ArrowRight,
  Framer,
  GrabIcon,
  Leaf,
  Package,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    title: "Canh Tác Hữu Cơ",
    description:
      "Áp dụng phương pháp canh tác hữu cơ, không sử dụng hóa chất độc hại, đảm bảo sức khỏe người tiêu dùng.",
  },
  {
    icon: <GrabIcon className="w-6 h-6 text-green-600" />,
    title: "Gạo Chất Lượng Cao",
    description:
      "Các giống lúa được chọn lọc kỹ càng, cho ra những hạt gạo thơm ngon, đảm bảo dinh dưỡng.",
  },
  {
    icon: <Package className="w-6 h-6 text-green-600" />,
    title: "Chế Biến Hiện Đại",
    description:
      "Nhà máy chế biến đạt chuẩn quốc tế, bảo toàn được hương vị và chất lượng sản phẩm.",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: "An Toàn Thực Phẩm",
    description:
      "Đạt các chứng nhận an toàn thực phẩm quốc tế, đảm bảo sức khỏe người tiêu dùng.",
  },
  {
    icon: <Framer className="w-6 h-6 text-green-600" />,
    title: "Vùng Trồng An Toàn",
    description:
      "Các vùng nguyên liệu được quy hoạch và kiểm soát chặt chẽ về môi trường và chất lượng.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Hợp Tác Bền Vững",
    description:
      "Liên kết chặt chẽ với nông dân, đảm bảo sinh kế và phát triển bền vững.",
  },
];

const stats = [
  { value: "1000+", label: "Hộ Nông Dân Liên Kết" },
  { value: "5000", label: "Hecta Vùng Nguyên Liệu" },
  { value: "100+", label: "Đối Tác Phân Phối" },
  { value: "30+", label: "Quốc Gia Xuất Khẩu" },
];
const OverviewProduct = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#fff8f0] item_scroll">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Chứng nhận VietGAP
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Nông Sản Sạch Từ Đồng Ruộng Việt Nam
                </h1>
                <p className="text-lg text-gray-600">
                  Chúng tôi tự hào mang đến những sản phẩm nông nghiệp chất
                  lượng cao, từ lúa gạo đến các sản phẩm chế biến, đảm bảo an
                  toàn thực phẩm và phát triển bền vững.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/contact"}>
                  <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors">
                    Liên hệ ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/product">
                  <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    Tìm Hiểu Thêm
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Chứng nhận An toàn Thực phẩm
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Được tin dùng bởi hơn 1000+ đối tác trong và ngoài nước
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/assets/images/Agriculture.jpg"
                alt="Cánh đồng lúa xanh"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 item_scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cam Kết Chất Lượng
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Từ nguồn nguyên liệu đến sản phẩm cuối cùng, chúng tôi luôn đặt chất
            lượng và sự an toàn lên hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 item_scroll">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewProduct;
