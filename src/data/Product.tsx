import chili from "@/assets/images/chillies.jpg";
import ricest25 from "@/assets/images/gao-ST25-hut-chan-khong-5kg.jpg";
import Tomato from "@/assets/images/Tomato.png";
import Lemon from "@/assets/images/Lemon.png";
import juss from "@/assets/images/juss.jpg";
import vfresh from "@/assets/images/nuoc-ep-dao-vfresh-1-lit-202203261038061691.jpg";
import twister from "@/assets/images/6-lon-nuoc-cam-ep-twister-tropicana-320ml-202312261650000261.jpg";
import poroto from "@/assets/images/x-11_202411201350307198.jpg";
import grapefruit from "@/assets/images/img1532.jpg";
import fancy from "@/assets/images/nuoc-ep-nho-trang-daiya-fancy-huong-dao-150ml-clone-202407101502431161.jpg";
import ST25 from "@/assets/images/gao-ST25-hut-chan-khong-5kg.jpg";
import gaoDQ from "@/assets/images/sellingpoint.jpg";
import gaoVH from "@/assets/images/gao-vinh-hien-dac-san-st24-tui-2kg-202202111335163238.jpg";
import gaoOC from "@/assets/images/thiet-ke-chua-co-ten-2024-09-11t143052168_202409111431553581.jpg";
import BotGao from "@/assets/images/bot-gao-tai-ky-goi-400g-202202121121158226.jpg";
import mamGao from "@/assets/images/Mamgao.jpg";
import water from "@/assets/images/nuoc-mam-chay-maggi-cot-tao-chai-450ml-202406171053177365.jpg";
import hatnem from "@/assets/images/hat-nem-thit-than-xuong-ong-tuy-knorr-goi-900g-202303061326393622.jpg";
import chinsu from "@/assets/images/sa-te-tom-chinsu-ot-sa-tuoi-hu-90g-202403131032460877.jpg";
import teriyaki from "@/assets/images/sot-teriyaki-ofood-chai-250g-202212291134305124.jpg";
import dauan from "@/assets/images/dau-dau-nanh-nguyen-chat-simply-can-2-lit-202308081103485317.jpg";
import { Facebook, Instagram, Twitter } from "lucide-react";
const bestProduct = [
  // Dữ liệu sản phẩm đầu tiên
  {
    id: 1,
    status: "Còn hàng",
    origin: "Vietnam",
    image: vfresh,
    name: "Nước ép đào Vfresh",
  },
  {
    id: 2,
    status: "Còn ít hàng",
    origin: "Thailand",
    image: chili,
    name: "Tương ớt chin su 500g",
  },
  {
    id: 3,
    status: "Không khả dụng",
    origin: "Chinese",
    image: ricest25,
    name: "GẠO ST25 Thơm Ngon",
  },
  {
    id: 4,
    status: "Đơn hàng online",
    origin: "Singapore",
    image: water,
    name: "Nước mắm chay Magie",
  },
  {
    id: 5,
    status: "Chỉ bán tại cửa hàng",
    origin: "Korea",
    image: Tomato,
    name: "Cà chua 1kg",
  },
  {
    id: 6,
    status: "Còn hàng",
    origin: "USA",
    image: Lemon,
    name: "Chanh vàng",
  },
  // Dữ liệu sản phẩm nước ép
  {
    id: 7,
    price: 45,
    oldPrice: 55,
    rating: 5,
    quantity: 1,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "VN",
    category: "Juice",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    label: "Juss",
    content:
      "Đối với mùa hè, không gì ngon hơn là thưởng thức những ly nước ép trái cây mát lạnh. Để tạo thêm không khí hứng khởi cho mùa hè này, hãy không quên thêm nước ép trái cây nhiệt đới Juss vào danh sách nước giải khát của bạn nhé. Trong những ngày nắng nóng của mùa hè, cơ thể thường cảm thấy khát nước. Đừng bỏ lỡ cơ hội thưởng thức nước trái cây mát lạnh với thương hiệu nước ép trái cây nhiệt đới Juss - lựa chọn hoàn hảo để giải nhiệt! ",
    contentId: { id: 7 },
    images: [
      juss,
      "/assets/images/nuoc-ep-luu-juss-1-lit-202102222143532609.jpg",
      "/assets/images/nuoc-ep-luu-juss-1-lit-202102222143535351.jpg",
      "/assets/images/nuoc-ep-luu-juss-1-lit-202102222143538512.jpg",
    ],
    status: "Còn hàng",
    origin: "Vietnam",
    image: juss,
    name: "Nước ép lựu Juss",
    desc: ".Nước ép trái cây chất lượng của thương hiệu nước ép Juss từ Thổ Nhĩ Kỳ. Nước ép lựu Juss lựu đỏ 1 lít từ quả lựu tươi ngon chứa nhiều vitamin và dinh dưỡng giúp giải khát nhanh chóng, cung cấp năng lượng cho cơ thể khỏe mạnh, mang lại hiệu quả làm đẹp da rất tốt, đặc biệt tốt cho mẹ bầu và thai nhi",
  },
  {
    id: 8,
    price: 35,
    oldPrice: 55,
    rating: 4,
    quantity: 2,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    content:
      "Vfresh hiện đang là nhãn hiệu nước trái cây đóng hộp dẫn đầu tại thị trường trong nước. Tất cả các sản phẩm dòng Vfresh 100% như nước cam ép, nước táo, nước nho, nước rau quả đều là nước ép 100% nguyên chất, không chất bảo quản, không biến đổi gen, không bổ sung đường. Nước trái cây 100% Vfresh đều được ép từ nguồn trái cây tươi ngon trên thế giới như cam Valencia, nho Tây Ban Nha. Với chất lượng cao như vậy, Vfresh cũng được phục vụ trên hãng hàng không 4 sao –  Vietnam Airlines hạng thương gia nội địa và tất cả các hạng vé đối với đường bay quốc tế.",
    contentId: { id: 8 },
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      vfresh,
      "/assets/images/nuoc-dao-vfresh-hop-1-lit-09112018164634.jpg",
      "/assets/images/nuoc-dao-vfresh-hop-1-lit-09112018164639.jpg",
      "/assets/images/nuoc-dao-vfresh-hop-1-lit-09112018164644.jpg",
    ],
    status: "Còn ít hàng",
    origin: "Thailand",
    image: vfresh,
    name: "Nước ép đào Vfresh",
    desc: "Sản phẩm nước ép trái cây chất lượng thơm ngon từ thương hiệu Vfresh được làm từ nguyên liệu tự nhiên tươi ngon và đào tươi nguyên chất giữ nguyên được hương vị tự nhiên, thơm ngon vốn có. Sản phẩm giúp giải khát nhanh chóng, cung cấp chất dinh dưỡng, tốt cho sức khỏe",
  },
  {
    id: 9,

    price: 25,
    oldPrice: 55,
    rating: 4,
    quantity: 0,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    content:
      "Nước Cam Ép Twister có màu sắc hấp dẫn, hương vị thơm ngon, nước ép cam Twister còn chứa rất nhiều chất bổ dưỡng thiết yếu cho cơ thể.Trong quả cam có nhiều vitamin A, C, B, khoảng 14% axit tartaric và một số nhỏ axit malic... giúp kích thích vị giác, cải thiện tình trạng kém ăn, mệt mỏi.",
    contentId: { id: 9 },
    reviews: 140,
    availability: "not available",
    brand: "USA",
    category: "Juice",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      twister,
      "/assets/images/6-lon-nuoc-cam-ep-twister-tropicana-320ml-202312261650011140.jpg",
      "/assets/images/6-lon-nuoc-cam-ep-twister-tropicana-320ml-202312261650017993.jpg",
      "/assets/images/6-lon-nuoc-cam-ep-twister-tropicana-320ml-202312261650028124.jpg",
    ],
    status: "Không khả dụng",
    origin: "Chinese",
    image: twister,
    name: "Nước cam ép twister",
    desc: "Được chiết xuất từ những tép cam tươi nguyên chất tươi ngon và bổ dưỡng. Nước cam ép Twister với nguồn nguyên liệu tự nhiên được lựa chọn cẩn thận kết hợp công nghệ sản xuất hiện đại, mang lại thức uống có hương vị thơm ngon, tốt cho sức khỏe. Cam kết chính hãng và an toàn",
  },
  {
    id: 10,
    price: 15,
    oldPrice: 55,
    rating: 5,
    quantity: 10,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    contentId: { id: 10 },
    content:
      "Chúng ta đều biết rằng, ổi là một trong những loại trái cây chứa rất nhiều vitamin C và nhiều dưỡng chất khác tốt cho sức khỏe. Vì thế món thức uống nước ép ổi rất phổ biến trong các thực đơn ăn kiêng.Ngoài ra, trong nước ép ổi còn dồi dào lượng vitamin khác như: Vitamin A, vitamin C và một số khoáng chất thiết yếu khác như: Canxi, magie , phốt-pho, sắt",
    availability: "Only Sold Online",
    brand: "VN",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để Tủ mát và nơi thoáng mát",
      "HSD: 1-7 uống ngon hơn khi lạnh.",
    ],
    images: [
      poroto,
      "/assets/images/nuoc-ep-chai-oi-coc.jpg",
      "/assets/images/oi-coc-ep.jpg",
      "/assets/images/nuoc-ep-oi-dua-1.jpg",
    ],
    status: "Đơn hàng online",
    origin: "Singapore",
    image: poroto,
    name: "Nước ép Chai ổi",
    desc: "Nước ép chai Thủy tinh nguyên chất dung tích 310ml được dung hòa 1-2% đường phèn tùy loại dùng nguyên chất vẫn giữ nguyên thể tích và giá có 2-3 viên đá giữ lạnh. Nước ép được ép tưoi hoàn toàn khi khách đặt không ép trước.",
  },
  {
    id: 11,
    price: 15,
    oldPrice: 55,
    rating: 5,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "VN",
    content:
      "Theo chia sẻ của các chuyên gia dinh dưỡng thì nước ép chứa nhiều vitamin C cần thiết, mỗi ngày chúng ta cần cung cấp khoảng 600% vitamin C. Nước ép bưởi là sản phẩm từ những tép bưởi tươi ngọt, mang đến cho cơ thể nguồn vitamin C và vitamin A dồi dào, giúp duy trì sức đề kháng và năng lượng cho cơ thể!",
    contentId: { id: 11 },
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để Tủ mát và nơi thoáng mát",
      "HSD: 1-7 uống ngon hơn khi lạnh.",
    ],
    images: [
      grapefruit,
      "/assets/images/img1583-1e.jpg",
      "/assets/images/nuoc-ep-buoi-dua-1e.jpg",
    ],
    status: "Chỉ bán tại cửa hàng",
    origin: "Korea",
    image: grapefruit,
    name: "Nước ép chai bưởi",
    desc: "Nước ép chai Thủy tinh nguyên chất dung tích 310ml được dung hòa 1-2% đường phèn tùy loại dùng nguyên chất vẫn giữ nguyên thể tích và giá có 2-3 viên đá giữ lạnh. Nước ép được ép tưoi hoàn toàn khi khách đặt không ép trước.",
  },
  {
    id: 12,
    price: 5,
    oldPrice: 55,
    rating: 3,
    quantity: 1,
    content:
      "Trà thảo mộc là thức uống thơm ngon của thương hiệu Cap Panda đến từ Indonesia. Nước uống với lon 310ml nhưng ngon ngọt thanh mát giúp giải khát nhanh chóng. Đây là loại nước cung cấp năng lượng cho cơ thể khỏe mạnh và sảng khoái. Bạn sẽ thật sảng khoái và khỏe mạnh khi có Cap Panda bên cạnh trên mọi hành trình",
    contentId: { id: 12 },
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "Chinese",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      fancy,
      "/assets/images/tra-thao-moc-cap-panda-liang-teh-310ml-3.jpg",
      "/assets/images/tra-thao-moc-cap-panda-liang-teh-310ml-4.jpg",
    ],
    status: "Còn hàng",
    origin: "USA",
    image: fancy,
    name: "Trà thảo mộc Cap Panda Liang Teh lon",
    desc: "Nước ngọt, trà giải khát Cap Panda xuất xứ Indonesia, với các loại thảo mộc tự nhiên như lá cây sương sáo, la hán quả, kim ngân hoa, rễ cam thảo,... cùng quy trình sản xuất hiện đại cho ra hương vị trà giải khát thảo mộc Cap Panda Liang Teh 310ml giúp giải khát, cung cấp nước và vitamin cho cho thể sảng khoái.",
  },
  // Dữ liệu sản phẩm gạo
  {
    id: 13,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    content:
      "Gạo ST25 lúa tôm là loại gạo được người dân canh tác trên vùng đất nuôi tôm. Theo các chuyên gia nông nghiệp, mô hình gạo thơm - tôm sạch này không chỉ thích ứng với biến đổi khí hậu mà còn có cơ hội xây dựng thương hiệu nông sản đặc trưng cho vùng đồng bắng sông Cửu Long, nâng cao giá trị hạt lúa, con tôm và đời sống dân vùng ngập mặn. Với cách trồng luân canh, xen canh như vậy thì loại gạo này có những điểm gì khác biệt và nổi trội hơn những loại gạo bình thường hay không? Hãy cùng tìm hiểu thêm thông qua bài viết này nhé",
    contentId: { id: 13 },
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      ST25,
      "/assets/images/gao-thom-vua-gao-st25-lua-tom-tui-5kg-202211170832228777.jpg",
      "/assets/images/gao-thom-vua-gao-st25-lua-tom-tui-5kg-202211170832231745.jpg",
    ],
    status: "Còn hàng",
    origin: "Vietnam",
    image: ST25,
    name: "Gạo thơm Vua Gạo",
    desc: "Gạo thơm Vua Gạo ST25 Lúa Tôm túi 5kg là loại gạo thơm ngon, có độ dẻo và mềm đặc biệt, hạt gạo thon dài, không bị khô sau khi nấu. Sản phẩm gạo Vua Gạo được đánh giá cao về chất lượng sản phẩm, hương vị thơm ngon, hấp dẫn, túi 5kg thích hợp cho gia đình sử dụng.",
  },
  {
    id: 14,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    content:
      "Gạo thông dụng Vinh Hiển là loại gạo nở, xốp, mềm cơm. Thích hợp cho các quán ăn bình dân, các công tác từ thiện gạo. Sản phẩm được trồng và sản xuất theo tiêu chuẩn chất lượng bảo đảm an toàn vệ sinh thực phẩm cho gia đình bạn.Gạo nấu lên có độ xốp, nở tốt nhưng vẫn mềm cơm. Có chứa các vitamin và khoáng chất tự nhiên trong gạo, đảm bảo cung cấp đầy đủ năng lượng cho bạn hoạt động cả ngày dài.",
    contentId: { id: 14 },
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      gaoDQ,
      "/assets/images/gao-vinh-hien-do-quyen-tui-5kg-201906210945329075.jpg",
      "/assets/images/gao-vinh-hien-do-quyen-tui-5kg-201906210945330476.jpg",
    ],
    status: "Còn ít hàng",
    origin: "Thailand",
    image: gaoDQ,
    name: "Gạo Vinh Hiển Đỗ Quyên",
    desc: "Gạo Đỗ Quyên là một trong những dòng sản phẩm gạo đóng túi an toàn thương hiệu Gạo Vinh Hiển. Gạo Vinh Hiển Đỗ Quyên túi 5kg được trồng tại các cánh đồng tập trung và chăm bón cẩn thận, cho hạt dài, màu trắng trong. Gạo cho cơm dẻo vừa, mềm ngon và hương thơm nhẹ tự nhiên. ",
  },
  {
    id: 15,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    content:
      "Gạo thơm dẻo đặc biệt ST25 Neptune túi 5kg (1 TÚI) là một loại gạo cao cấp, mang đến hương vị thơm ngon và đặc trưng của gạo ST25. Với hạt gạo dẻo, và đầy dinh dưỡng, ST25 Neptune là sự kết hợp hoàn hảo của hương vị và chất lượng. Gạo ST25 được trồng và chăm sóc một cách cẩn thận để đảm bảo chất lượng tốt nhất. Túi 5kg đủ để bạn sử dụng trong thời gian dài và đảm bảo sự tươi ngon và thơm lâu dài. Gạo thơm dẻo đặc biệt ST25 Neptune là sự lựa chọn tuyệt vời để thưởng thức món cơm ngon và đậm đà cùng gia đình và người thân.",
    contentId: { id: 15 },
    images: [
      gaoVH,
      "/assets/images/gao-thom-neptune-st25-extra-tui-5kg-202403300918339138.jpg",
      "/assets/images/gao-thom-neptune-st25-extra-tui-5kg-202403300918339138.jpg",
    ],
    status: "Không khả dụng",
    origin: "Chinese",
    image: gaoVH,
    name: "Gạo thơm Neptune",
    desc: "Gạo Neptune chất thơm ngon, chất lượng được các bà nội trợ tin dùng. Gạo thơm Neptune ST25 Extra túi 5kg mang hương vị thơm ngon, độ mềm và dẻo vừa phải mang đến bữa ăn của bạn thêm tròn vị đậm đà và hấp dẫn. Gạo không tẩm các hoá chất độc hại an toàn cho người sử dụng.",
  },
  {
    id: 16,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    content:
      "Gạo lứt hỗn hợp 10 loại hạt  là sản phẩm đặc biệt của Vua Gạo khi kết hợp giữa gạo lứt dinh dưỡng và các loại gạo và hạt tốt cho sức khỏe như: Gạo Lứt huyết rồng, Gạo lứt tím than, gạo ST25,nếp tím than,đậu xanh….",
    contentId: { id: 16 },
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      gaoOC,
      "/assets/images/eTyN5Ckk1gXfV7cJIujR_simg_de2fe0_500x500_maxb.jpg",
      "/assets/images/050e5ca24ef30ca82c4733c53a2402e3.jpg_720x720q80.jpg",
    ],
    status: "Đơn hàng online",
    origin: "Singapore",
    image: gaoOC,
    name: "Gạo lứt hỗn hợp",
    desc: "Gạo Ông Cụ là thương hiệu gạo chất lượng đạt chuẩn được nhiều bà nội trợ lựa chọn sử dụng. Gạo lứt hỗn hợp 10 loại hạt Ông Cụ hộp 1kg được sản xuất theo quy trình sản xuất gạo hiện đại an toàn. Gạo lứt chứa nhiều khoáng chất và vitamin rất cần thiết cho cơ thể. ",
  },
  {
    id: 17,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "VN",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    content:
      "Bột Gạo Tài Ký  là một loại bột được ứng dụng rộng rãi trong nhiều công thức bánh, đặc biệt là các món bánh Việt. Sản phẩm góp phần mang đến vị ngon tuyệt hảo cho món bánh thành phẩm nên được nhiều người yêu thích sử dụng.",
    contentId: { id: 17 },
    images: [
      BotGao,
      "/assets/images/bot-gao-taky-400gam-4-700x467.jpg",
      "/assets/images/bot-gao-taky-400gam-3-700x467.jpg",
    ],
    status: "Chỉ bán tại cửa hàng",
    origin: "VN",
    image: BotGao,
    name: "Bột gạo Tài Ký",
    desc: "Bột gạo hay còn được gọi là gạo rắm, bột gạo tẻ là một loại bột đa dụng không thể thiếu khi làm bánh. Bột qua các công đoạn như ngâm, xay, khuấy, lắng, chia bột, phơi khô. Bột gạo Tài Ký gói 400g nguyên liệu như bánh bò, bánh giò, bánh cuốn, bánh bèo, bánh đúc, bánh khoái, bánh canh, bánh căn, bánh hỏi, bánh đập…",
  },
  {
    id: 18,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    content:
      "Gạo Nàng Hoa từ lâu đã được biết đến với các đặc tính thơm, mềm, ngọt vị. Là một trong giống gạo đặc sản của người miền Tây Nam Bộ. Với những ưu điểm vượt trội cùng nét đặc trưng riêng, hạt gạo thơm này được nhiều các cơ sở kinh doanh, đại lý gạo ưa chuộng",
    contentId: { id: 18 },
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      mamGao,
      "/assets/images/gao-2-150x150.png",
      "/assets/images/gao-2-150x150.png",
    ],
    status: "Còn hàng",
    origin: "USA",
    image: mamGao,
    name: "Gạo Nàng Hoa",
    desc: "Gạo Nàng Hoa là thương hiệu mới xuất hiện trên thị trường được nhiều người lựa chọn sử dụng cho bữa cơm gia đình. Gạo Nàng Hoa Premium túi 5kg với gạo trắng đều, màu đồng nhất. Khi nấu toả hương tự nhiên cơm chín hạt mềm dẻo nhiều vị ngọt. ",
  },
  // Dữ liệu sản phẩm dầu và gia vị
  {
    id: 19,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    content:
      "Dầu Đậu Nành Simply Nguyên Chất 100% chứa tới 80% axit béo chưa bão hoà cùng lượng lớn chất chống oxy hoá giúp làm giảm lượng cholesterol xấu trong máu và cho bạn một trái tim khoẻ mạnh. Dầu ăn Simly là sản phẩm được Hội Tim Mạch Học Việt Nam khuyên dùng.Dầu ăn giàu omega 3, 6, 9 rất tốt cho sức khỏe, là nguyên liệu không thể thiếu trong ngăn bếp mỗi gia đình để mang đến cho cả nhà những món ăn ngon và hấp dẫn.Sản phẩm được sản xuất từ nguyên liệu chọn lọc, không chứa chất bảo quản, chất tạo màu hay cholesterol, hoàn toàn thân thiện cho sức khoẻ.Dầu đậu nành Simply có màu vàng nhạt cùng hương nhẹ dịu rất thích hợp làm các món chiên, xào, trộn salad hay làm các loại nước sốt. ",
    contentId: { id: 19 },
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      dauan,
      "/assets/images/dau-dau-nanh-nguyen-chat-simply-can-2-lit-202106031433578242.jpg",
      "/assets/images/dau-dau-nanh-nguyen-chat-simply-can-2-lit-202106031433570483.jpg",
    ],
    status: "Còn hàng",
    origin: "Vietnam",
    image: dauan,
    name: "Dầu đậu nành  Simply",
    desc: "Dầu ăn Simply là loại dầu ăn sử dụng nguyên liệu chọn lọc, không chất bảo quản, tạo màu, rất an toàn cho sức khỏe. Dầu đậu nành Simply can 2 lít bổ sung Omega 3, 6, 9 có lợi cho sức khỏe và sự phát triển của não bộ, đẩy lùi nguy cơ mắc bệnh tim mạch.",
  },
  {
    id: 20,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,

    content:
      "Nước Mắm Chay Cốt Táo Maggi Chi 450Ml ngon đậm đà. Với thành phần cốt táo cô đặc cùng chiết xuất đậu nành lên men tự nhiên, Nước mắm táo không những mang lại vị ngon đậm đà mà còn giữ trọn hương vị đặc trưng của nước mắm.Công thức giảm muối giúp cho các món chấm - nấu vừa ngon vừa tốt cho sức khỏe, mang lại cho bữa ăn thêm tròn vị và hấp dẫn.Sản phẩmđược sản xuất theo công nghệ hiện đại. Mọi khâu từ tuyển chọn nguyên liệu tới chế biến, đóng gói đều diễn ra khép kín dưới sự giám sát và kiểm tra nghiêm ngặt, đảm bảo an toàn cho sức khỏe người tiêu dùng.",
    contentId: { id: 20 },
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      water,
      "/assets/images/nuoc-mam-maggi-cot-tao-chai-450ml-202404051043168096.jpg",
      "/assets/images/nuoc-mam-maggi-cot-tao-chai-450ml-202404051043171444.jpg",
    ],
    status: "Còn ít hàng",
    origin: "Thailand",
    image: water,
    name: "Nước mắm chay Maggi cốt táo",
    desc: "Nước mắm Maggi chất lượng là sự lựa chọn tuyệt vời dành cho gia đình bạn. Nước mắm chay Maggi cốt táo chai 450ml thơm ngon đến giọt cuối cùng, chiết xuất từ nước cốt táo độc đáo, mới lạ mang lại cho bữa ăn thêm tròn vị và hấp dẫn. Nước mắm được làm từ những thành phần an toàn cho người sử dụng",
  },
  {
    id: 21,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    content:
      "Từ những trái ớt đỏ chín mọng trên cay qua các công đoạn sản xuất trên dây chuyền hiện đại cho ra đời sản phẩm tương ớt Chinsu. Với hương thơm nồng của tỏi cùng sự biến tấu tinh tế giữa các loại gia vị khác nhau mang đến cho bạn những dòng tương ớt sóng sánh, thơm ngon, tròn vị trong từng chai.",
    contentId: { id: 21 },
    images: [
      chili,
      "/assets/images/tuong-ot-chinsu-chai-500g-201911011615540234.jpg",
      "/assets/images/tuong-ot-chinsu-chai-500g-201911011615535074.jpg",
    ],
    status: "Không khả dụng",
    origin: "Chinese",
    image: chili,
    name: "Tương ớt Chinsu",
    desc: "Tương ớt chế biến từ những trái ớt đỏ chín cây với hương thơm nồng của tỏi cùng sự biến tấu tinh tế của các loại gia vị để chiết rót nên từng dòng tương ớt của thương hiệu tương ớt Chinsu. Tương ớt Chinsu chai 1kg chai lớn tiện lợi thích hợp cho gia đình đông người, giúp tiết kiệm hơn.",
  },
  {
    id: 22,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    content:
      "Sa Tế Chinsu Tôm Ớt Sả Hũ 90G là sự pha trộn độc đáo giữa độ cay nồng của ớt và hương sả tinh tế, mang đến cho bữa ăn trải nghiệm đặc sắc. Thành phần của sản phẩm được chọn lựa kỹ lưỡng, ớt cay được nghiền nhuyễn, tạo nên hỗn hợp độc đáo, đậm đà và ngon miệng. Sa tế tôm ớt sả Chinsu không chỉ là gia vị tuyệt vời cho các món hải sản, mà còn là lựa chọn hoàn hảo để tăng cường hương vị cho các món nước và xào, giúp bữa ăn trở nên phong phú và hấp dẫn.",
    contentId: { id: 22 },
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      chinsu,
      "/assets/images/tuong-ot-chinsu-chai-500g-201911011615535074.jpg",
      "/assets/images/tuong-ot-chinsu-chai-500g-201911011615540234.jpg",
    ],
    status: "Đơn hàng online",
    origin: "Singapore",
    image: chinsu,
    name: "Sa tế tôm Chinsu ớt",
    desc: "Sa tế tôm Chinsu ớt sả tươi hũ 90g làm từ nguyên liệu tôm, ớt , sả tươi sạch với vị cay thơm nồng mang lại hương vị hấp dẫn, màu sắc bắt mắt cho món ăn. Sa tế Chinsu là thương hiệu sa tế chất lượng, đảm bảo vệ sinh an toàn thực phẩm của tập đoàn Massan.",
  },
  {
    id: 23,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    content:
      "Sốt Teriyaki O'food Chai 250g với kết cấu đặc sệt và vị mặn ngọt đặc trưng, teriyaki được dùng như là một loại sốt đa năng vừa có thể chấm, phết vừa dùng để nâng tầm hương vị khi chế biến các món xào, bít tết và hải sản. Sốt đã được pha sẵn dựa trên công thức phối trộn với tỉ lệ hoàn hảo giữa các thành phần nguyên liệu như nước tương, đường, thơm, gừng, tỏi, dầu cọ, dầu mè...tạo nên loại xốt teriyaki đạt chuẩn hương vị với màu nâu sậm đặc trưng.Thích hợp để làm các món như gà sốt teriyaki, cá hồi sốt teriyaki, các món áp chảo...Ngoài ra có thể dùng như dầu hào để xào rau củ các loại hay dùng làm sốt chấm cho các món thịt, hải sản đều được.",
    contentId: { id: 23 },
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      teriyaki,
      "/assets/images/sot-teriyaki-ofood-chai-250g-202301131006538337.jpg",
      "/assets/images/sot-teriyaki-ofood-chai-250g-202301131007142103.jpg",
    ],
    status: "Chỉ bán tại cửa hàng",
    origin: "Korea",
    image: teriyaki,
    name: "Sốt ướp Teriyaki O'food",
    desc: "Gia vị nêm sẵn O'food là trợ thủ đắc lực cho người nội trợ, không cần phải nêm nếm thêm gia vị, tiết kiệm thời gian. Sốt Teriyaki O'food chai 250g là loại sốt gia vị nêm sẵn mang đậm hương vị Nhật Bản, kết hợp hoàn hảo giữa các loại gia vị, cho món Teriyaki ngon chuẩn vị nhà hàng.",
  },
  {
    id: 24,
    price: 45,
    oldPrice: 55,
    rating: 4,
    quantity: 4,
    content:
      "Knorr là thương hiệu gia vị thuộc tập đoàn Unilever. Trải qua nhiều năm hình thành và phát triển, Knorr mang đến cho người tiêu dùng trên toàn thế giới đa dạng các sản phẩm gia vị chế biến, hạt nêm, nước dùng, nước chấm,... Hạt nêm Knorr thịt thăn xương ống và tủy 5kg là tinh hoa của nước hầm thịt, xương ống và tủy trong nhiều giờ. Được sản xuất trên dây chuyền cao cấp đạt chuẩn Châu Âu cùng với đó là quy trình đóng gói khép kín giúp đảm bảo an toàn vệ sinh thực phẩm. Hạt nêm Knorr giúp cho việc nấu ăn trở nên nhanh chóng và dễ dàng hơn nhưng vẫn đảm bảo được dinh dưỡng trong từng bữa ăn.",
    contentId: { id: 24 },
    socialLinks: [
      { platform: "Facebook", icon: <Facebook />, href: "#" },
      { platform: "Twitter", icon: <Twitter />, href: "#" },
      { platform: "Instagram", icon: <Instagram />, href: "#" },
    ],
    reviews: 140,
    availability: "In Stock",
    brand: "USA",
    category: "Juice",
    sku: "BE455VGRT",
    description: [
      "Bảo quản: Để nơi khô ráo và thoáng mát",
      "HSD: 1 năm kể từ ngày sản xuất.",
    ],
    images: [
      hatnem,
      "/assets/images/77241-slidee_202409241045482216.jpg",
      "/assets/images/77241-tem1_202409301034573203.jpg",
    ],
    status: "Còn hàng",
    origin: "USA",
    image: hatnem,
    name: "Hạt nêm Knorr thịt thăn, xương ống, tủy",
    desc: "Hạt nêm thịt thăn, xương ống, tủy Knorr gói 900g công thức cải tiến với chiết xuất thịt thăn, xương ống và tủy heo sạch được hầm trong nhiều giờ liền mang đến bữa ăn ngọt thanh, tròn vị. Hạt nêm Knorr là thương hiệu hạt nêm số 1 Việt Nam giúp mọi món ăn thơm ngon khó cưỡng chỉ với 1 bước nêm.",
  },
];

export default bestProduct;
