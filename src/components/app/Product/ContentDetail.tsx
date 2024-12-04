import Image from "next/image";
import React from "react";
import vfresh from "@/assets/images/nuoc-ep-dao-vfresh-1-lit-202203261038061691.jpg";
import twister from "@/assets/images/6-lon-nuoc-cam-ep-twister-tropicana-320ml-202312261650000261.jpg";
import grapefruit from "@/assets/images/img1532.jpg";
import fancy from "@/assets/images/nuoc-ep-nho-trang-daiya-fancy-huong-dao-150ml-clone-202407101502431161.jpg";
import ST25 from "@/assets/images/gao-ST25-hut-chan-khong-5kg.jpg";
import gaoDQ from "@/assets/images/sellingpoint.jpg";
import gaoVH from "@/assets/images/gao-vinh-hien-dac-san-st24-tui-2kg-202202111335163238.jpg";
import gaoOC from "@/assets/images/thiet-ke-chua-co-ten-2024-09-11t143052168_202409111431553581.jpg";
import BotGao from "@/assets/images/bot-gao-tai-ky-goi-400g-202202121121158226.jpg";
import mamGao from "@/assets/images/Mamgao.jpg";
import dauan from "@/assets/images/dau-dau-nanh-nguyen-chat-simply-can-2-lit-202308081103485317.jpg";
import water from "@/assets/images/nuoc-mam-chay-maggi-cot-tao-chai-450ml-202406171053177365.jpg";
import chili from "@/assets/images/chillies.jpg";
import chinsu from "@/assets/images/sa-te-tom-chinsu-ot-sa-tuoi-hu-90g-202403131032460877.jpg";
import teriyaki from "@/assets/images/sot-teriyaki-ofood-chai-250g-202212291134305124.jpg";
import hatnem from "@/assets/images/hat-nem-thit-than-xuong-ong-tuy-knorr-goi-900g-202303061326393622.jpg";

type ContentComponent = () => JSX.Element;

const ContentDetail7 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Juss
        </h1>
        <p className="text-gray-600 lg:text-lg mb-5">
          Hãy thưởng thức nước ép trái cây nhiệt đới tươi mát từ Juss!
        </p>
        <Image
          src="/assets/images/anh-mo-ta.jpg"
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[80%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <p>
          Thương hiệu Juss là sản phẩm nước trái cây của Thổ Nhĩ Kỳ, tất cả các
          sản phẩm của Juss được Công ty Trách nhiệm Hữu hạn Xuất nhập khẩu Nhất
          Thiên chịu trách nhiệm nhập khẩu và phân phối. Sản phẩm nước trái cây
          của Juss thì đa dạng vô cùng, đủ các loại nước trái cây thơm ngon mà
          bạn có thể tìm kiếm như nước ép lựu, nước ép thơm, nước ép táo, nước
          ép ổi,.... Ở phần dưới đây, chúng ta sẽ tìm hiểu kỹ hơn về các sản
          phẩm nước ép trái cây của Juss nha!
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Nước ép trái cây Juss</p>
        </div>
        <h4 className="text-xl">Nước ép lựu Juss</h4>
        <div className="mb-5">
          <Image
            src="/assets/images/anh-mo-ta-ep-luu.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mt-5 rounded-xl"
          />
        </div>
        <p className="mb-5">
          Nước ép lựu nguyên chất mang lại cho gia đình bạn nguồn bổ sung
          vitamin và dinh dưỡng tự nhiên. Lựu được lựa chọn kỹ lưỡng, giúp làm
          mát cơ thể và nuôi dưỡng làn da đẹp và tràn đầy sức sống.
        </p>
        <p className="font-bold text-2xl">
          Khám phá 5 tác dụng bất ngờ của nước ép lựu{" "}
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            1.
          </span>
          <p className="font-semibold">Chứa hàm lượng chất chống oxy hóa</p>
        </div>
        <p>
          Màu đỏ rực rỡ của lựu có từ polyphenols – chất chống oxy hóa rất mạnh
          mẽ. Nước lựu chứa hàm lượng chất oxy hóa cao hơn nhiều so với hầu hết
          các loại nước ép trái cây khác, cao hơn gấp 3 lần so với rượu vang đỏ
          và trà xanh. Chất chống oxy hóa trong nước ép lựu có thể giúp loại bỏ
          các gốc tự do, giảm viêm và bảo vệ tế bào không bị tổn thương.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            2.
          </span>
          <p className="font-semibold">Giàu Vitamin</p>
        </div>
        <p>
          Duy nhất chỉ có nước ép lựu chứa hơn 40% lượng vitamin C mà bạn cần
          hàng ngày. Vitamin C có thể bị suy giảm khi diệt khuẩn, vì vậy, hãy
          lựa chọn nước ép lựu hoặc dùng lựu tươi để hấp thu được hầu hết các
          chất dinh dưỡng. Ngoài vitamin C và vitamin E, nước ép lựu còn chứa
          rất nhiều folate, kali và vitamin K.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            3.
          </span>
          <p className="font-semibold">Ngừa ung thư</p>
        </div>
        <p>
          Duy nhất chỉ có nước ép lựu chứa hơn 40% lượng vitamin C mà bạn cần
          hàng ngày. Vitamin C có thể bị suy giảm khi diệt khuẩn, vì vậy, hãy
          lựa chọn nước ép lựu hoặc dùng lựu tươi để hấp thu được hầu hết các
          chất dinh dưỡng. Ngoài vitamin C và vitamin E, nước ép lựu còn chứa
          rất nhiều folate, kali và vitamin K.
        </p>
        <div>
          <Image
            src="/assets/images/hZ3MF0X.png"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mt-5 rounded-xl"
          />
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            4.
          </span>
          <p className="font-semibold">Giúp tiêu hóa tốt</p>
        </div>
        <p>
          Nước lựu có thể giảm viêm ở ruột và cải thiện tiêu hóa. Nước lựu có
          thể mang lại lợi ích cho những người bị bệnh Crohn, viêm loét đại
          tràng và các bệnh viêm ruột khác. Tuy nhiên, nhiều người vẫn đang
          tranh cãi về việc liệu nước ép lựu có làm xấu đi tình trạng tiêu chảy
          hay không. Vì vậy, nhiều bác sĩ đưa ra lời khuyên là bạn nên tránh
          uống nước lựu cho đến khi cảm thấy các triệu chứng đã giảm hẳn
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            5.
          </span>
          <p className="font-semibold"> Chống viêm</p>
        </div>
        <p>
          Nước lựu là một chất chống viêm mạnh do nồng độ cao của các chất chống
          oxy hóa. Nó có thể giúp giảm viêm khắp cơ thể và ngăn ngừa stress oxy
          hóa và tổn thương
        </p>
        <div>
          <Image
            src="/assets/images/xYbzZFf.png"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mt-5 rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

const ContentDetail8 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Vfresh
        </h1>
        <p className="text-gray-600 lg:text-lg mb-5">
          Hãy thưởng thức nước ép trái cây nhiệt đới tươi mát từ Vfresh!
        </p>
        <Image
          src={vfresh}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[80%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <p>
          Vfresh hiện đang là nhãn hiệu nước trái cây đóng hộp dẫn đầu tại thị
          trường trong nước. Tất cả các sản phẩm dòng Vfresh 100% như nước cam
          ép, nước táo, nước nho, nước rau quả đều là nước ép 100% nguyên chất,
          không chất bảo quản, không biến đổi gen, không bổ sung đường
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Nước ép trái cây vfresh</p>
        </div>
        <h4 className="text-xl">Nước ép đào Vfresh</h4>
        <div className="mb-10">
          <Image
            src="/assets/images/nuoc-dao-vfresh-hop-1-lit-09112018164644.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mt-5 rounded-xl"
          />
        </div>
        <p className="mb-5">
          Nước đào Vfresh làm từ nguyên liệu tự nhiên tươi ngon và đào tươi
          nguyên chất 100% (chứa đến 42% đào ép) nên giữ nguyên được hương vị tự
          nhiên, thơm ngon vốn có. Cung cấp chất dinh dưỡng, tốt cho sức khỏe.
          Sản phẩm chứa đuờng glucoza, đường saccaro, protein, caroten, vitamin
          B1, B2, C, PP và các chất sắt. Giúp bổ sung dưỡng chất cho vóc dáng và
          sức khoẻ cho cơ thể để bạn luôn khoẻ khoắn và tươi tắn năng động
        </p>
        <p className="font-bold text-2xl">
          Ưu và nhược điểm mà nước ép Vfresh đào mang lại
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            1.
          </span>
          <p className="font-semibold">Ưu điểm</p>
        </div>
        <ul>
          <li>
            - Hương vị thơm ngon: Nước ép Vfresh Đào Nectar cung cấp hương vị
            đào tự nhiên và thơm ngon, làm hài lòng người tiêu dùng yêu thích
            hương vị trái cây.
          </li>
          <li>
            - Tiện lợi: Sản phẩm được đóng gói sẵn, dễ dàng mang theo và sử dụng
            bất cứ lúc nào, phù hợp với lối sống năng động và bận rộn hiện nay.
          </li>
          <li>
            - Cung cấp năng lượng: Có thể cung cấp một lượng năng lượng nhanh
            chóng nhờ vào hàm lượng đường tự nhiên từ trái cây, phù hợp làm đồ
            uống giữa các bữa ăn.
          </li>
          <li>
            - Chứa một số vitamin và khoáng chất: Tùy vào thành phần, nước ép
            đào có thể chứa vitamin C, vitamin A và một số khoáng chất tốt cho
            sức khỏe.
          </li>
        </ul>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            2.
          </span>
          <p className="font-semibold">Nhược điểm</p>
        </div>
        <p>
          <ul>
            <li>
              - Hàm lượng đường: Một số sản phẩm nước ép đào đóng gói có thể
              chứa hàm lượng đường cao, bao gồm cả đường tự nhiên và đường thêm
              vào, có thể không phù hợp với những người đang theo dõi lượng
              đường tiêu thụ hoặc quản lý cân nặng
            </li>
            <li>
              - Giảm chất xơ so với trái cây tươi: So với việc ăn trực tiếp trái
              cây tươi, nước ép có thể chứa ít chất xơ hơn, làm giảm một số lợi
              ích tiêu hóa và no lâu của chất xơ.
            </li>
            <li>
              - Giá trị dinh dưỡng có thể thấp hơn trái cây tươi: Quá trình sản
              xuất và bảo quản nước ép có thể làm giảm một số dưỡng chất quan
              trọng.
            </li>
            <li>
              - Ảnh hưởng đến môi trường: Bao bì đóng gói của nước ép có thể tạo
              ra rác thải và ảnh hưởng tiêu cực đến môi trường nếu không được
              tái chế đúng cách.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

const ContentDetail9 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Twister
        </h1>
        <p className="text-gray-600 lg:text-lg mb-5">
          Hãy thưởng thức nước ép Cam tươi mát từ Twister!
        </p>
        <Image
          src={twister}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[80%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <p className="mb-5">
          Tropicana Twister đến từ chuyên gia nước trái cây số 1 thế giới –
          Tropicana. là nhãn hàng hàng đầu tại Việt Nam trong ngành Nước Trái
          cây. Với nguồn nguyên liệu tự nhiên được lựa chọn cẩn thận kết hợp
          công nghệ sản xuất hiện đại, mang đến cho bạn Tropicana Twister – một
          thức uống có hương vị ngon tuyệt, tốt cho sức khỏe từ trái cây tươi,
          chứa Vitamin A và C, là dưỡng chất tốt lành mỗi ngày. Với thông điệp
          Tự Nhiên Là Tuyệt Nhất dành riêng cho chính bạn và những người xung
          quanh, cổ vũ lối sống tự nhiên là chính mình cho mỗi ngày đều bừng sức
          sống.
        </p>
        <p className="font-bold text-2xl">
          Khám phá 5 tác dụng bất ngờ của nước ép cam đối với cơ thể{" "}
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            1.
          </span>
          <p className="font-semibold">Nước ép cam tốt cho hệ miễn dịch</p>
        </div>
        <p>
          Trái cam chứa rất nhiều dưỡng chất, axit tự nhiên,chất xơ, nhiều
          vitamin đặc biệt là vitamin C,… đây là những chất rất tốt cho sức
          khỏe. Cam có thể ăn, làmnước éphay sinh tố đều rất ngon.Cam có vị ngọt
          ngọt, chua chua thường biết đến như một loại trái cây tráng miệng, một
          ly nước giải khát. Ngoài những tác dụng này ra thì cam còn có nhiều
          công dụng tuyệt vời khác mà không phải ai cũng biết.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            2.
          </span>
          <p className="font-semibold">
            Nước ép cam giúp cải thiện làn da và giảm cân
          </p>
        </div>
        <p>
          Axit citric có trong cam tr và ngừa mụn rất tốt. Bạn chỉ cần sử dụng
          nước cam, thoa lên vùng da có mụn, để nước cam khô và rửa lại với nước
          sạch, lặp lại mỗi ngày mụn sẽ dần biến mất.Sữa kết hợp với vỏ cam xay
          nhuyễn là hỗn hợp giúp tẩy sạch da rất tốt. Sử dụng chúng mỗi ngày vết
          nám, vết sạm hay vùng da bị sạm đen do ánh nắng của bạn sẽ cải thiện
          rất rõ.Ngoài ra cam là một trong các thực phẩm có trong thực đơn giảm
          cân của các chị em, cam có chứa chất pectin có tác dụng ngăn chặn sự
          thèm ăn và cơn đói trong vài giờ, từ đó góp phần giúp giảm cân hiệu
          quả và lành mạnh.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            3.
          </span>
          <p className="font-semibold">Ngăn ngừa sỏi thận</p>
        </div>
        <p>
          Nghiên cứu cho thấy, uống nước ép cam thường xuyên giúp ngăn ngừa sự
          hình thành sỏi thận, nước cam có hàm lượng citrat cao giúp duy trì sự
          cân bằng pH tự nhiên của cơ thể và làm giảm nồng độ acid uric - nguyên
          nhân gây ra sỏi thận.
        </p>
        <div>
          <Image
            src="/assets/images/10-cong-dung-tuyet-voi-tu-nuoc-ep-cam-ban-nen-biet-201909031956067846.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mt-5 rounded-xl"
          />
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            4.
          </span>
          <p className="font-semibold">Ổn định huyết áp và tốt cho tim mạch</p>
        </div>
        <p>
          Mật ong pha với nước cam là thức uống hoàn hảo cho những người có
          huyết áp thấp hoặc cao vì trong nước cam có hàm lượng magiê cao giúp
          ổn định huyết áp trở lại mức bình thường. Nước cam còn giúp ngăn ngừa
          các rối loạn tim mạch, chất hersperidin trong nước cam chống lại tắc
          nghẽn động mạch, làm giảm nguy cơ đau tim.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            5.
          </span>
          <p className="font-semibold"> Tốt cho xương, răng</p>
        </div>
        <p>
          Để bắt đầu một ngày làm việc tràn đầy năng lượng, bạn nên uống một cốc
          nước cam vào buổi sáng. Vì nó rất giàu vitamin C, tăng cường canxi
          giúp răng và xương mạnh khỏe. Cam cung cấp 6% lượng canxi mỗi ngày.
          Nước cam chứa nhiều calci, do đó sẽ rất thích hợp cho những ai không
          thích sữa.
        </p>
      </div>
    </>
  );
};

const ContentDetail10 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Nước ép Chai ổi
        </h1>
        <p className="text-gray-600 lg:text-lg mb-5">
          Hãy thưởng thức nước ép trái cây tươi mát,nhanh chóng tiện lợi từ sản
          phẩm đóng chai
        </p>
        <Image
          src="/assets/images/nuoc-ep-chai-oi-coc.jpg"
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <p className="mb-5">
          Với kho tàng thành phần dưỡng chất và hàm lượng dinh dưỡng cao, kèm
          theo đó là lượng calo cực kỳ thấp, ổi là một thành phần không thể
          thiếu trong trong các thực đơn ăn kiêng và giảm cân. Đặc biệt, ổi hồng
          (ổi đào) còn chứa chất lycopen giúp chống lại bệnh béo phì.Như vậy,
          món thức uống nước ép ổi hoàn toàn có thể giúp bạn giảm cân và giữ
          dáng hiệu quả. Hàm lượng vitamin C, E trong ổi rất cao giúp tăng cường
          hệ miễn dịch cho bạn. Hơn nữa, Nước ép ổi không chỉ giúp giảm cân mà
          còn hỗ trợ rất tốt cho da và kiểm soát đường huyết, giúp ngăn ngừa ung
          thư cũng như các bệnh về đường tiêu hóa.
        </p>
        <p className="font-bold text-2xl">
          Khám phá những tác dụng bất ngờ của nước ép ổi{" "}
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            1.
          </span>
          <p className="font-semibold">Tăng cường hệ miễn dịch</p>
        </div>
        <p>
          Ổi được biết đến như một nguồn cung cấp vitamin C dồi dào, với hàm
          lượng lên đến 228mg trong mỗi 100g ổi, gấp đôi hàm lượng chất này có
          trong quả cam. Bên cạnh đó, vitamin C lại chính là nguyên liệu cần
          thiết để xây dựng hàng rào bảo vệ, phòng chống các tác nhân có hại từ
          môi trường, từ đó góp phần củng cố hàng rào miễn dịch cơ thể.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            2.
          </span>
          <p className="font-semibold">Hỗ trợ tiêu hóa</p>
        </div>
        <p>
          Thành phần có trong nước ép ổi ổi như kali, carotenoid và vitamin C có
          khả năng làm lành các tình trạng viêm dạ dày hiệu quả, giúp tăng cường
          hoạt động của hệ tiêu hóa. Đồng thời, chúng cũng có khả năng điều trị
          và ngăn ngừa tiêu chảy, giúp cân bằng quá trình tiêu hóa.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            3.
          </span>
          <p className="font-semibold">Giảm cân, giảm mỡ hiệu quả</p>
        </div>
        <p>
          Trong hành trình giảm cân và mỡ thừa, cần cân nhắc các loại thực phẩm
          để bổ sung vào chế độ dinh dưỡng. Thay vì tiêu thụ các loại hoa quả
          chứa nhiều đường như vải, sầu riêng, xoài, mít,… nước ép ổi với nhiều
          chất xơ và lượng calo thấp sẽ là lựa chọn phù hợp hơn. Ngoài ra, nước
          ép ổi giúp tăng cường quá trình trao đổi chất và giảm cảm giác đói.
        </p>
        <div>
          <Image
            src="/assets/images/oi-coc-ep.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mt-5 rounded-xl"
          />
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            4.
          </span>
          <p className="font-semibold">Tốt cho thị lực</p>
        </div>
        <p>
          Lượng lớn vitamin A và beta-carotene có trong ổi và nước ép ổi giúp
          tăng cường thị lực, giảm mỏi mắt và nguy cơ các vấn đề về thị lực. Bổ
          sung ổi vào chế độ ăn hàng ngày đem lại sự tự nhiên nhất để bảo vệ đôi
          mắt và duy trì thị lực khỏe mạnh.
        </p>
      </div>
    </>
  );
};

const ContentDetail11 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Nước ép Chai bưởi
        </h1>
        <p className="text-gray-600 lg:text-lg mb-5">
          Hãy thưởng thức nước ép trái cây tươi mát,nhanh chóng tiện lợi từ sản
          phẩm đóng chai
        </p>
        <Image
          src={grapefruit}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <p className="mb-5">
          Bưởi là một trong những loại trái cây khoái khẩu của nhiều người hiện
          nay. Bưởi chứa đa dạng các loại vitamin tốt cho sức khỏe, đồng thời hỗ
          trợ làm đẹp cực kỳ hiệu quả. Bài viết dưới đây, Nhà thuốc Long Châu sẽ
          giúp bạn giải đáp thắc mắc nước ép bưởi mix với gì ngon và cung cấp
          một số thông tin xoay quanh loại nước ép này.
        </p>
        <p className="font-bold text-2xl">
          Khám phá những tác dụng bất ngờ của nước ép bưởi{" "}
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            1.
          </span>
          <p className="font-semibold">Nước ép bưởi làm hạn chế cơn thèm ăn</p>
        </div>
        <p>
          Bạn đang lo lắng bởi tình trạng cân nặng của mình thì có thể thử uống
          nước ép bưởi, tác dụng của nó sẽ giúp bạn có cảm giác no lâu bởi trong
          bưởi chứa nhiều chất xơ. Không chỉ thế, nước ép còn giúp thức ăn được
          tiêu hóa nhanh chóng, tránh tình trạng tích tụ mỡ trong cơ thể nguy cơ
          gây béo phì, thừa cân.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            2.
          </span>
          <p className="font-semibold">
            Làm giảm lỗ chân lông và trẻ hóa làn da
          </p>
        </div>
        <p>
          Nước ép trái bưởi không chỉ có tác dụng tốt cho sức khỏe mà còn có lợi
          cho làn da đẹp. Vitamin C có trong nước ép bưởi là một chất chống oxy
          hóa mạnh mẽ giúp loại bỏ các gốc tự do, làm săn chắc lỗ chân lông và
          ngăn ngừa quá trình lão hóa da. Đồng thời, vitamin P có trong nước ép
          bưởi cải thiện chức năng của các lỗ chân lông, giúp lành vết thương
          trên da, làm cho da trở nên đẹp tự nhiên và hấp dẫn với nhiều chị em
          phụ nữ.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            3.
          </span>
          <p className="font-semibold">Tốt cho phụ nữ mang thai</p>
        </div>
        <p>
          Nước ép bưởi là nguồn cung cấp vitamin, khoáng chất và đặc biệt là
          giàu folate. Thường xuyên uống nước ép bưởi sẽ giúp các bà bầu bổ sung
          dinh dưỡng và giảm thiểu nguy cơ các khuyết tật, dị tật bẩm sinh ở
          thai nhi. Đồng thời, nó còn giúp thúc đẩy sự phát triển xương và tăng
          mật độ xương của mẹ. Bưởi là một loại trái cây rất tốt cho sức khỏe
          của bà bầu.
        </p>
        <div>
          <Image
            src="/assets/images/nuoc-ep-buoi-dua-1e.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mt-5 rounded-xl"
          />
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            4.
          </span>
          <p className="font-semibold">
            Ăn bưởi giúp cải thiện chứng hạ đường huyết
          </p>
        </div>
        <p>
          Bưởi chứa chất naringenin có tác dụng kiểm soát đường huyết và tăng độ
          nhạy của insulin, rất có lợi cho bệnh nhân tiểu đường. Thường xuyên ăn
          bưởi có thể giảm lượng glucose, hạ đường huyết và ngăn ngừa biến chứng
          do bệnh tiểu đường. Ngoài ra, người không mắc bệnh cũng nên ăn bưởi
          thường xuyên để phòng ngừa nguy cơ mắc bệnh. Bưởi không chỉ có hương
          vị thơm ngon mà còn cung cấp nhiều dinh dưỡng hỗ trợ điều trị nhiều
          bệnh lý.
        </p>
      </div>
    </>
  );
};
const ContentDetail12 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Trà thảo mộc Cap Panda
        </h1>
        <p className="text-gray-600 lg:text-lg mb-5">
          Trà thảo mộc ngọt thanh, mát lành giúp ăn ngon, ngủ ngon, bổ sung
          dưỡng chất cho cơ thể
        </p>
        <Image
          src={fancy}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <p className="mb-5">
          Trà thảo mộc Cap Panda Liang Teh lon 310ml là một sản phẩm nước ngọt
          và trà giải khát của thương hiệu Cap Panda, xuất xứ từ Indonesia. Sản
          phẩm này được làm từ các loại thảo mộc tự nhiên như lá cây sương sáo,
          la hán quả, kim ngân hoa, rễ cam thảo,... kết hợp với quy trình sản
          xuất hiện đại, tạo nên hương vị trà giải khát thảo mộc Cap Panda Liang
          Teh 310ml thơm ngon và bổ dưỡng. Trà thảo mộc Cap Panda Liang Teh
          310ml không chỉ giúp giải khát mà còn cung cấp nước và vitamin cho cơ
          thể, làm cho cơ thể cảm thấy sảng khoái.
        </p>
        <p className="font-bold text-2xl">
          Khám phá những tác dụng bất ngờ của Trà thảo mộc{" "}
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            1.
          </span>
          <p className="font-semibold">Có khả năng chống oxy hóa</p>
        </div>
        <p>
          Các nguyên liệu làm trà thường có chứa chất chống oxy hóa, giúp bảo vệ
          tế bào khỏi tổn thương do các gốc tự do gây ra. Từ đó sẽ hỗ trợ làm
          chậm quá trình lão hóa và giúp da trở nên sáng khỏe hơn.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            2.
          </span>
          <p className="font-semibold">Cải thiện tiêu hóa</p>
        </div>
        <p>
          Thói quen uống một tách sau mỗi bữa ăn có thể giúp hỗ trợ quá trình
          tiêu hóa. Đồng thời, giúp kiểm soát cảm giác thèm ăn và giảm tiêu thụ
          nhiều thức ăn.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            3.
          </span>
          <p className="font-semibold">Chống viêm sưng</p>
        </div>
        <p>
          Một số loại trà như trà bạc hà, trà gừng và trà nghệ có khả năng kháng
          viêm hiệu quả, hạn chế các bệnh lý về dạ dày, bệnh trĩ và viêm khớp.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-red-500 font-bold text-2xl md:text-3xl">
            4.
          </span>
          <p className="font-semibold">Hỗ trợ giảm cân</p>
        </div>
        <p>
          các thành phần như vỏ psyllium, thì là và sả có tác dụng đốt cháy mỡ
          thừa và tăng cường trao đổi chất giúp hỗ trợ giảm cân hiệu quả
        </p>
      </div>
    </>
  );
};
const ContentDetail13 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu gạo ST25 lúa tôm
        </h1>
        <Image
          src={ST25}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[80%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu về gạo ST25 lúa tôm</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Gạo ST25 lúa tôm là gạo gì?</h4>
        </div>
        <p>
          Gạo ST25 lúa tôm là gạo được thu hoạch từ hình thức canh tác giống lúa
          ST25 trên nền đất nuôi tôm. Hình thức trồng lúa này được sử dụng và
          phát triển tại nhiều tỉnh ven biển khu vực đồng bằng sông Cửu Long,
          nơi có 6 tháng nước ngọt và 6 tháng nước mặn. Với cách trồng luân canh
          như vậy thì loại gạo này có những đặc điểm khác biệt và nổi trội hơn
          so với những loại gạo bình thường.
        </p>
        <div className="mb-5">
          <Image
            src="/assets/images/gao-st25-lua-tom_.png"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
          <p className="text-center mt-4">
            Luân canh, xen canh trồng lúa - nuôi tôm trên cùng một cánh đồng{" "}
          </p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            1.2
          </span>
          <h4 className="text-2xl">Đặc điểm gạo ST25 lúa tôm</h4>
        </div>
        <p>
          Theo kỹ sư Hồ Quang Cua, giống lúa cho ra gạo ST25 và ST25 lúa tôm là
          cùng một giống. Giống lúa này được nghiên cứu và không ngừng cải tiến
          từ dòng lúa thơm ST, mang lại hạt gạo trắng trong, thon dài đều đặn,
          không bạc bụng. Và cộng với việc được trồng trên vùng đất thổ nhưỡng
          đặc biệt, giàu dinh dưỡng từ ruộng tôm, cây lúa được nuôi dưỡng bằng
          các chất hữu cơ cộng thêm vị mặn của đất nên theo nhận định của các
          chuyên gia, gạo ST25 lúa tôm có hương vị đặc biệt, thơm ngon, đậm đà
          hơn so với các loại gạo thông thường khác. Cơm nấu từ gạo ST25 lúa tôm
          cũng có có độ mềm dẻo, thơm nhẹ mùi lá dứa đặc trưng.
        </p>
        <div className="mb-5">
          <Image
            src="/assets/images/gao-st25-lua-tom_.brand.png"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
          <p className="text-center mt-4">
            Gạo ST25 lúa tôm có hương vị đặc biệt, thơm ngon, đậm đà hơn so với
            các loại gạo thông thường
          </p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            2
          </span>
          <h4 className="text-2xl">So sánh với gạo thông thường</h4>
        </div>
        <p>
          Mô hình lúa – tôm có sự cộng sinh, tương tác cho nhau rất tốt. Tức sau
          khi thu hoạch tôm, với việc chất thải hữu cơ từ con tôm để lại dưới
          đáy ao nên đã giúp ruộng lúa được màu mỡ, từ đó cây lúa sinh trưởng
          tốt, đạt chất lượng cao. Ngược lại, sau thu hoạch lúa, với một lượng
          sinh khối lớn thân và rễ lúa phân hủy, kích thích sự phát triển của
          nhiều vi sinh vật làm thức ăn cho tôm, giúp con tôm sinh trưởng tốt và
          khỏe mạnh.
        </p>
        <div className="mb-5">
          <Image
            src="/assets/images/gao-st25-lua-tom_compare.png"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
          <p className="text-center mt-4">
            Cây lúa được nuôi dưỡng bằng các chất hữu cơ cộng thêm vị mặn của
            đất nên giàu dinh dưỡng và đặc biệt thơm ngon
          </p>
        </div>
        <p>
          Với việc được trồng trên vùng đất thổ nhưỡng đặc biệt, giàu dinh dưỡng
          như vậy, cây lúa được nuôi dưỡng bằng các chất hữu cơ cộng thêm vị mặn
          của đất nên gạo có hương vị đặc biệt thơm ngon, đậm đà và giàu dinh
          dưỡng hơn so với các loại gạo thông thường khác.
        </p>
      </div>
    </>
  );
};
const ContentDetail14 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu gạo Quê Đỗ Quyên
        </h1>
        <Image
          src={gaoDQ}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[80%] mx-auto rounded-xl"
        />
      </div>
      <p className="my-5">
        Gạo Đỗ Quyên là một trong những dòng sản phẩm gạo đóng túi an toàn
        thương hiệu Gạo Vinh Hiển. Gạo được trồng tại các cánh đồng tập trung và
        chăm bón cẩn thận, cho hạt dài, màu trắng trong. Khi nấu, gạo Đỗ Quyên
        cho cơm dẻo vừa, mềm ngon và hương thơm nhẹ tự nhiên. Gạo có hàm lượng
        khoáng chất nhất định tốt cho sức khoẻ, giàu đạm và chất xơ. Sản phẩm
        đạt tiêu chuẩn an toàn vệ sinh thực phẩm với cam kết 3 không: không đấu
        trộn, không chất bảo quản, không hoá chất tẩy trắng, tạo mùi.
      </p>
      <p className="font-bold text-2xl mb-5">Đôi nét về thương hiệu</p>
      <p>
        Gạo Đỗ Quyên được sản xuất từ giống lúa OM 5451. Thuộc loại giống lúa
        thuần, được chọn từ tổ hợp lai giữa Jasmine 85 và OM 2490. Gạo OM 5451
        được trồng phổ biến ở khu vực đồng bằng sông Cửu Long. Giống OM 5451
        chống chịu rầy nâu và bệnh đạo ôn khá. Tiềm năng năng suất của giống lúa
        này khá cao và ổn định trong cả 2 vụ Đông Xuân và Hè Thu.Hạt gạo 5451
        thon dài (khoảng 6.95 mm), ít bạc bụng, hơi đục màu sữa. Cơm dẻo vừa và
        mềm, để nguội vẫn không bị cứng cơm.
      </p>
    </>
  );
};
const ContentDetail15 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu gạo ST25 Neptune
        </h1>
        <Image
          src={gaoVH}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[80%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu về gạo ST25 Neptune</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Gạo ST25 Neptune là gạo gì?</h4>
        </div>
        <p>
          Gạo ST25 Neptune không chỉ đơn thuần là thực phẩm, mà còn là biểu
          tượng của chất lượng và niềm tự hào gạo Việt. Với hương vị thơm dẻo
          đặc trưng, túi gạo 5kg này là người bạn đồng hành lý tưởng trong căn
          bếp của mọi gia đình.
        </p>
        <div className="font-bold text-2xl my-5">
          Những điểm mạnh của gạo ST25 Neptune:
        </div>
        <ul>
          <li>
            - Hạt gạo dài, đều, trắng trong: Mang đến bữa cơm đẹp mắt và hấp
            dẫn.
          </li>
          <li>
            - Hương thơm tự nhiên: Kết hợp hương lá dứa thoang thoảng và vị ngọt
            dịu nhẹ.
          </li>
          <li>
            - Quy trình sản xuất chuẩn hóa: Đảm bảo không hóa chất độc hại, an
            toàn cho sức khỏe.
          </li>
        </ul>
        <div className="mb-5">
          <Image
            src="/assets/images/Su-khac-nhau-giua-gao-gia-re-va-gao-ST25-1024x683.png"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
        </div>
        <p>
          Gạo thơm dẻo đặc biệt ST25 Neptune là sản phẩm lý tưởng cho những ai
          yêu cầu cao về chất lượng và dinh dưỡng:
        </p>
        <ul>
          <li>
            - Chất lượng cao cấp: Gạo được chọn lọc kỹ lưỡng từ giống lúa ST25,
            trồng tại vùng đất màu mỡ ở đồng bằng sông Cửu Long.
          </li>
          <li>
            - Hương vị đặc biệt: Hạt cơm chín mềm, thơm lâu, không bị nở bung
            khi để nguội.
          </li>
          <li>
            - Đóng gói tiện lợi: Túi 5kg phù hợp với nhu cầu sử dụng của mọi gia
            đình.
          </li>
        </ul>
      </div>
    </>
  );
};
const ContentDetail16 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu GẠO LỨT HỖN HỢP 10 LOẠI HẠT
        </h1>
        <Image
          src={gaoOC}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[80%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Gạo Lứt Hỗn Hợp 10 Loại Hạt Là Gì?</h4>
        </div>
        <div className="mb-5">
          <Image
            src="/assets/images/gao-lut-hon-hop-10-loai-hat.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
          <p className="text-center mt-4 text-green-600">
            Gạo lứt hỗn hợp 10 loại hạt là gì ?
          </p>
        </div>
        <p>
          Gạo Lứt Hỗn Hợp 10 Loại Hạt là sản phẩm đặc biệt của Vua Gạo, Gạo Lứt
          hay còn gọi là gạo rằn, gạo lật là loại gạo chỉ xay bỏ vỏ trấu, chưa
          được xát bỏ lớp cám gạo. Đây là loại gạo rất giàu dinh dưỡng đặc biệt
          là các sinh tố và nguyên tố vi lượng. Với mong muốn đem đến những sản
          phẩm ngày càng chất lượng đến với tay người tiêu dùng, Vua Gạo đã liên
          tục nghiên cứu áp dụng quy trình sản xuất khép kín và hiện đại để cho
          ra đời sản phẩm Gạo Lứt Hỗn Hợp 10 Loại Hạt.Đây là sản phẩm được vua
          gạo dày công nghiên cứu và cải tiến từ sản phẩm Gạo Lứt kết hợp thêm
          các loại gạo và hạt dinh dưỡng khác. Chính sự kết hợp độc đáo này, khi
          được sử dụng sản phẩm sẽ đem đến nhiều vitamin và dưỡng chất hơn, góp
          phần nâng cao sức khỏe cho quý khách hàng
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            1.2
          </span>
          <h4 className="text-2xl">Hương Vị Gạo Lứt 10 Loại Hạt</h4>
        </div>
        <p>
          Với dây chuyền sản xuất hiện đại và nguồn nguyên liệu chất lượng cao
          các dòng sản phẩm Gạo Lứt Ông Cụ luôn được đảm bảo về chất lượng lẫn
          mùi vị, gạo lứt khi được nấu chín sẽ cho hương thơm dịu nhẹ, vị ngọt
          tự nhiên và hạt cơm mềm min, khi được kết hợp cùng những gạo và hạt
          dinh dưỡng khác tạo nên hương vị đa dạng cho bữa ăn cùng nguồn dinh
          dưỡng vô cùng tuyệt vời
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl pt-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            2
          </span>
          <h4 className="text-2xl">Ăn Gạo Lứt Có Tốt Không</h4>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            2.1
          </span>
          <h4 className="text-2xl">
            Thành Phần và Dinh Dưỡng Có Trong Gạo Lứt hỗn hợp 10 Loại Hạt.
          </h4>
        </div>
        <p>
          Bên cạnh việc cung cấp nguồn năng lượng dồi giàu, sản phẩm có chứa
          nhiều chất dinh dưỡng tốt cho người sử dụng : Chất xơ có trong gạo lứt
          giúp hệ tiêu hóa trở nên ổn định hơn, ngoài ra gạo lứt cũng giúp cải
          thiện sức khỏe tim mạch Protein cũng là một thành phần quan trọng có
          trong sản phẩm giúp cho cơ thể tăng cường trao đổi chất và điều hòa
          chức năng cơ thể, Vitamin E,B1,B3,B5: Tăng năng lượng, làm giảm các
          dấu hiệu về lão hóa Các chất như canxi, kẽm, magie :giúp tăng cường
          sức khỏe về xương và răng, chức năng cơ, điều hòa đường huyết, cải
          thiện sức khỏe da và tóc.
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            2.2
          </span>
          <h4 className="text-2xl">Ăn Gạo Lứt Có Giảm Cân Không ?</h4>
        </div>
        <div className="mb-5">
          <Image
            src="/assets/images/an-gao-lut-giam-can.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
          <p className="text-center mt-4 text-green-600">
            Ăn gạo lứt có giảm cân không ?
          </p>
          <p className="font-medium text-xl py-5">
            Không phải tự nhiên mà gạo lứt vẫn được xem là loại gạo được xem là
            món ăn đại diện cho sức khỏe lành mạnh, lượng chất xơ có trong gạo
            lứt nhiều hơn ở các loại gạo khác, việc cơ thể tiêu thụ nhiều chất
            xơ sẽ giúp cơ thể có cảm giác no lâu từ đó cũng giảm đi nhu cầu hấp
            thụ calo. Ngoài ra sản phẩm cũng cung cấp cho cơ thể nguồn năng
            lượng dồi dào, giúp duy trì nguồn năng lượng vận động để tiêu hao
            chất béo
          </p>
        </div>
      </div>
    </>
  );
};
const ContentDetail17 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Bột gạo Tài Ký
        </h1>
        <Image
          src={BotGao}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu về Bột gạo Tài Ký</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Bột gạo Tài Ký là gì?</h4>
        </div>
        <p>
          Sản phẩm bột gạo Tài Ký còn được gọi là gạo rắm, bột gạo tẻ là một
          loại bột đa dụng không thể thiếu khi làm bánh. Bột gạo Tài Ký được làm
          từ 100% hạt gạo qua các công đoạn như ngâm, xay, khuấy, lắng, chia
          bột, phơi khô. Sản phẩm là thành phần chính không thể thiếu trong các
          loại bánh Việt như bánh bò, bánh giò, bánh cuốn, bánh bèo, bánh đúc,
          bánh khoái, bánh canh, bánh căn, bánh hỏi, bánh đập… Đặc biết, bột gạo
          còn mang đến vị ngon và độ giòn xốp cho món bánh xèo.
        </p>
        <div className="font-bold text-2xl my-5">Ưu điểm của sản phẩm:</div>
        <ul>
          <li>
            - Bột gạo Tài Ký với thành phần từ những hạt gạo thơm ngon, chắc
            mẩy, trải qua công nghệ xay xát hiện đại, hợp vệ sinh, không chứa
            các chất tẩy trắng, tạo nên một loại bột dẻo và thơm đặc trưng của
            lúa gạo.
          </li>
          <li>
            - Sản phẩm được sản xuất theo công nghệ hiện đại, với nguyên liệu
            được chọn lọc kỹ càng bởi các chuyên gia trong lĩnh vực thực phẩm.
            Quy trình chế biến khép kín, đảm bảo an toàn vệ sinh thực phẩm và
            không gây hại với sức khỏe người tiêu dùng.
          </li>
          <li>
            - Bột có đặc tính dẻo, dai, màu trắng tự nhiên, có hương vị thơm
            ngon hấp dẫn.
          </li>
        </ul>
        <div className="mb-5">
          <Image
            src="/assets/images/thumb-1200x676-27.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
        </div>
      </div>
    </>
  );
};
const ContentDetail18 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Gạo Nàng Hoa
        </h1>
        <Image
          src={mamGao}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Nguồn gốc của gạo Nàng Hoa</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Gạo Nàng Hoa là loại gạo gì?</h4>
        </div>

        <p>
          Gạo Nàng Hoa thuộc giống lúa mới được được trồng chủ yếu tại các tỉnh
          đồng bằng sông Cửu Long. Loại gạo đặc sản được ưa chuộng trên vùng đất
          nhiễm phèn, nhiễm mặn như: Gò Công, Long An.
        </p>
        <div className="mb-5">
          <Image
            src="/assets/images/gao-nang-hoa-la-gi.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
          <p className="text-center mt-4 text-green-600">
            Gạo Nàng Hoa là gạo gì?
          </p>
        </div>
        <p>
          Hạt gạo thon dài từ 6.8 – 7mm, gạo có màu trắng ngà sóng sánh và ít
          bạc bụng. Gạo thơm Nàng Hoa cho cơm dẻo mềm, vị ngọt thanh. Cùng hương
          thơm đặc trưng khó nào diễn tả qua lời nói. Hạt gạo sạch nguyên chất
          100% nên cho cơm mềm và thơm lâu hơn. Cơm có thể để qua đêm mà vẫn
          không thay đổi mùi vị hay khô cứng. Phù hợp với các tiêu chí lựa chọn
          gạo của tại các cơ sở kinh doanh như: nhà hàng, khách sạn, quán cơm
          văn phòng, bếp ăn cao cấp,…
        </p>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            1.2
          </span>
          <h4 className="text-2xl">Đặc điểm nhận dạng gạo thơm Nàng Hoa</h4>
        </div>
        <p className="mb-2">
          Để nhận biết đâu là gạo Nàng Hoa chính hãng đâu là gạo pha trộn cực kỳ
          đơn giản. Bạn có thể lưu ý một số đặc điểm nhận dạng hạt gạo ngon này
          như sau:
        </p>
        <ul className="border border-gray-400 px-5">
          <li>- Hạt gạo hơi to và dài</li>
          <li>- Có mùi thơm nhẹ nhàng tự nhiên và không bị hắc</li>
          <li>- Khi chín cơm mềm, dẻo vừa, ngọt.</li>
        </ul>
        <p className="py-4">Nàng Hoa 9 hiện nay có 2 loại phổ biến sau:</p>
        <p>
          Hạt gạo có màu trắng trong hay còn được gọi là gạo nàng hoa trong.
          Loại còn lại có hạt màu trắng đục như sữa do đó cái tên gạo nàng hoa
          sữa được ra đời. Tuy nhiên, không phải lúc nào chúng ta cũng đủ kinh
          nghiệm để có thể nhìn ngay và nhận biết loại gạo mà mình mong muốn. Vì
          thế mà, chúng ta cần chọn một nguồn cung cấp gạo uy tín có thương hiệu
          để đảm bảo gạo đúng chuẩn sạch và an toàn vệ sinh thực phẩm.
        </p>
        <div className="mb-5">
          <Image
            src="/assets/images/gao-nang-hoa-la-gi.jpg"
            alt="brand"
            width={500}
            height={500}
            className="object-cover w-[70%] mx-auto mt-5 rounded-xl"
          />
          <p className="text-center mt-4 text-green-600 text-xl">
            Nàng Hoa sữa và Nàng Hoa trong là 2 loại phổ biến của gạo Nàng Hoa
          </p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl pt-5">
          <span className="text-green-600 font-bold text-2xl md:text-2xl">
            1.3
          </span>
          <h4 className="text-2xl">Về giống lúa Nàng Hoa 9</h4>
        </div>
        <p className="font-medium text-xl py-2">
          Giống lúa Nàng Hoa 9 được lai tạo giữa 2 loại Jasmine 85 và AS996.
          Theo Cục Trồng trọt và phát triển nông thôn giống Jasmine 85 có xuất
          xứ từ IRRI. Với thời gian sinh trưởng 95 – 102 ngày đối với vụ Đông
          Xanh. Thân lúa khá cứng, hàm lượng Amylose khoảng từ 20 – 21 %. Giống
          lúa này sẽ tạo nên hạt gạo đẹp, cơm mềm, dẻo và có mùi thơm nhẹ tự
          nhiên. Đạt tiêu chí để trở thành gạo đặc sản cho người tiêu dùng trong
          nước và xuất khẩu. Đối với giống AS996 thời gian sinh trưởng từ 90 –
          100 ngày. Lúa cứng cây, ít bạc bụng, hàm lượng Amylose khoảng 24,7 %.
          Giống lúa này có khả năng kháng phèn, hơi kháng đạo ôn, hơi nhiễm rầy
          nâu. Xưa nay trong giới khoa học nghiên cứu lai tạo giống lúa luôn tồn
          tại một quy luật đó chính là: Cứ lúa ngắn ngày + kháng phèn. Khả năng
          chống chịu khá thì gạo thu được là gạo cấp thấp tức là gạo bạc bụng,
          cứng cơm. Thế nhưng với giống của Nàng Hoa 9 do kỹ sư Lê Hùng Lân lai
          tạo thì đẳng thức trên không còn đúng nữa. Gạo Nàng Hoa không những
          được kế thừa những đặc tính mạnh mẽ của bố là AS996, kháng phèn, kháng
          đạo ôn cho năng suất cao. Mà còn kế thừa luôn vẻ đẹp thuần nông và nên
          thơ của mẹ Jasmine 85. Để tạo nên hạt gạo thon dài, màu trắng ngà sóng
          sánh trông rất đẹp. Đặc biệt, Nàng Hoa 9 khi nhai kỹ sẽ có vị ngọt dịu
          tự nhiên.
        </p>
      </div>
    </>
  );
};
const ContentDetail19 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu dầu ăn simply
        </h1>
        <Image
          src={dauan}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[60%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu về dầu ăn simply</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Đôi nét về thương hiệu simply?</h4>
        </div>
        <p>
          Dầu ăn Simply là thương hiệu dầu ăn danh tiếng trên thị trường, được
          sản xuất và cung cấp từ Công ty TNHH Dầu thực vật Cái Lân – CALOFIC.
          Simply là dòng dầu thực vật sạch, lành tính, được cam kết về độ an
          toàn tuyệt đối cho sức khỏe người dùng với thành phần không chất bảo
          quản, không chứa cholesterol và chất tạo màu. Dầu ăn Simply sản xuất
          từ nguồn nguyên liệu được chọn lọc khắt khe, trải qua quy trình sản
          xuất khép kín, hiện đại để mang tới chất lượng tốt nhất cho người tiêu
          dùng. Đây là nhãn hiệu dầu ăn duy nhất được Hội Tim Mạch Học Việt Nam
          khuyên dùng. Trong nhiều năm qua, CALOFIC đã vinh dự được Nhà nước
          trao tặng nhiều giải thưởng: Huân chương lao động hạng III (năm 2010,
          2014) Cờ thi đua của Bộ Công Thương (năm 2009, 2011, 2012 & 2014) Cờ
          thi đua Chính phủ (năm 2015) Cùng nhiều giải thưởng uy tín như như
          Hàng Việt Nam Chất lượng cao, Rồng Vàng…
        </p>
        <div className="font-bold text-2xl my-5">
          Các ưu điểm nổi trội của sản phẩm dầu đậu nành Simply có thể điểm qua
          bao gồm:
        </div>
        <ul>
          <li>
            - Có nguồn nguyên liệu là hạt đậu nành nhập khẩu từ châu Mỹ, vô cùng
            cao cấp và đảm bảo an toàn, thiên nhiên.
          </li>
          <li>- Không chứa cholesterol và chất bảo quản.</li>
          <li>
            - Giúp bổ sung nhiều vitamin, khoáng chất và các axit béo không bão
            hòa (hơn 80%).
          </li>
          <li>
            - Có khả năng bảo vệ, cải thiện và phát triển sức khỏe của các bệnh
            nhân bị bệnh về tim mạch.
          </li>
        </ul>
        <div className="font-bold text-2xl my-5">
          nhược điểm của sản phẩm dầu đậu nành Simply gồm:
        </div>
        <ul>
          <li>-sản phẩm thường dễ bị oxy hóa khi sử dụng tại nhiệt độ cao.</li>
        </ul>
      </div>
    </>
  );
};

const ContentDetail20 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Nước mắm chay Maggi
        </h1>
        <Image
          src={water}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[60%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">
            Giới thiệu về Nước mắm chay Maggi cốt táo
          </p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Đôi nét về Nước mắm chay Maggi cốt táo?</h4>
        </div>
        <p>
          Nước mắm chay Maggi cốt táo là một sản phẩm gia vị thuộc dòng sản phẩm
          nước chấm chay của thương hiệu Maggi. Đây là một loại nước chấm được
          sản xuất từ nguyên liệu thực vật, không sử dụng các thành phần động
          vật.Một số đặc điểm chính của sản phẩm này bao gồm:
          <ul>
            <li>
              Thành phần chính: Được làm từ nước táo lên men, mang lại vị chua
              nhẹ và hương thơm đặc trưng. Cốt táo là nguyên liệu chính tạo nên
              hương vị riêng biệt của sản phẩm này.
            </li>
            <li>
              Đối tượng sử dụng: Phù hợp với những người ăn chay, những ai theo
              chế độ ăn thực vật hoặc muốn giảm sử dụng sản phẩm động vật trong
              ẩm thực.
            </li>
            <li>
              Công dụng: Dùng để chấm, trộn hoặc nêm nếm trong các món ăn chay,
              giúp tăng thêm hương vị và độ mặn.
            </li>
            <li>
              Ưu điểm: Không chứa thành phần từ động vật, có thể sử dụng cho
              nhiều loại món ăn khác nhau, mang lại vị chua ngọt nhẹ nhàng từ
              táo.
            </li>
          </ul>
        </p>
        <div className="font-bold text-2xl my-5">
          Các ưu điểm nổi trội của sản phẩm Nước mắm chay Maggi cốt táo có thể
          điểm qua bao gồm:
        </div>
        <ul>
          <li>
            - Thân thiện với người ăn chay: Hoàn toàn không chứa thành phần động
            vật, phù hợp với chế độ ăn chay và những người muốn tránh sản phẩm
            từ động vật.
          </li>
          <li>
            - Hương vị đặc biệt: Vị chua ngọt nhẹ từ táo mang đến trải nghiệm ẩm
            thực khác biệt so với nước mắm truyền thống..
          </li>
          <li>
            - Dễ sử dụng: Có thể dùng để chấm, trộn hoặc nêm nếm trong nhiều
            loại món ăn chay.
          </li>
          <li>
            - Phù hợp cho nhiều đối tượng: Không chỉ dành cho người ăn chay mà
            còn cho những người muốn thử hương vị mới.
          </li>
        </ul>
        <div className="font-bold text-2xl my-5">
          nhược điểm của sản phẩm Nước mắm chay Maggi cốt táo gồm:
        </div>
        <ul>
          <li>
            - Hương vị khác biệt: Vị chua của táo có thể không phù hợp với khẩu
            vị của một số người so với nước mắm truyền thống..
          </li>
          <li>
            - Giá thành: Thường cao hơn so với nước mắm thông thường do quy
            trình chế biến đặc biệt..
          </li>
          <li>
            - Độ mặn: Có thể không đạt được độ mặn đậm đà như nước mắm truyền
            thống.
          </li>
          <li>
            - Hạn chế trong một số món ăn: Không phù hợp với tất cả các công
            thức nấu ăn do hương vị riêng biệt..
          </li>
        </ul>
      </div>
    </>
  );
};
const ContentDetail21 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Tương ớt Chinsu
        </h1>
        <Image
          src={chili}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu về Tương ớt Chinsu</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Đôi nét về Tương ớt Chinsu?</h4>
        </div>
        <p>
          Tương ớt Chinsu là một sản phẩm gia vị quen thuộc của Việt Nam, được
          sản xuất bởi Công ty Thực phẩm Chu Đăng Khoa (Chinsu). Dưới đây là một
          số thông tin về sản phẩm: Đặc điểm chính: Là loại tương ớt đặc trưng
          của thị trường Việt Nam Có độ cay nồng vừa phải, phù hợp với khẩu vị
          người Việt Màu đỏ cam đặc trưng, rất bắt mắt Thành phần: Chính là ớt,
          đường, giấm, muối và các gia vị khác Không chứa chất bảo quản nhân tạo
          Sản xuất theo quy trình công nghệ hiện đại Công dụng: Dùng để chấm các
          món ăn như phở, bún, bánh mì Là gia vị không thể thiếu trong nhiều bữa
          ăn của người Việt Tăng thêm vị cay nồng và hương vị cho các món ăn
          Phân loại: Có nhiều dòng sản phẩm như: tương ớt nguyên chất, tương ớt
          cay, tương ớt ít cay Đối tượng sử dụng: Phù hợp với mọi lứa tuổi Đặc
          biệt được yêu thích bởi những người thích ăn cay Tương ớt Chinsu đã
          trở thành một thương hiệu quen thuộc và được ưa chuộng tại Việt Nam.
        </p>
        <div className="font-bold text-2xl my-5">
          Các ưu điểm nổi trội của sản phẩm Tương ớt Chinsu có thể điểm qua bao
          gồm:
        </div>
        <ul>
          <li>- Vị cay nồng đặc trưng, phù hợp khẩu vị người Việt.</li>
          <li>- Có độ cay vừa phải, không quá gay gắt.</li>
          <li>- Hương ớt tự nhiên, không bị nồng khó chịu.</li>
          <li>
            -Quy trình sản xuất công nghiệp, đảm bảo vệ sinh an toàn thực phẩm.
          </li>
        </ul>
        <div className="font-bold text-2xl my-5">
          nhược điểm của sản phẩm Tương ớt Chinsu gồm:
        </div>
        <ul>
          <li>- Hàm lượng đường và muối khá cao..</li>
          <li>- Không phù hợp với chế độ ăn kiêng</li>
          <li>- Không thích hợp cho trẻ nhỏ hoặc người già</li>
          <li>- Sử dụng nhiều có thể ảnh hưởng đến sức khỏe</li>
        </ul>
      </div>
    </>
  );
};
const ContentDetail22 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Sa tế tôm Chinsu ớt
        </h1>
        <Image
          src={chinsu}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu về Sa tế tôm Chinsu ớt</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Đôi nét về Sa tế tôm Chinsu ớt?</h4>
        </div>
        <p>
          Sa tế tôm Chinsu ớt là một sản phẩm gia vị đặc trưng của thương hiệu
          Chinsu, được ưa chuộng trong ẩm thực Việt Nam. Dưới đây là một số
          thông tin chi tiết về sản phẩm.Nguồn gốc và thành phần:
          <ul>
            <li>
              - Được sản xuất bởi Công ty Thực phẩm Chu Đăng Khoa (Chinsu)
            </li>
            <li>
              - Thành phần chính gồm: tôm khô, ớt, tỏi, đường, muối và các gia
              vị khác
            </li>
            <li>
              - Sử dụng nguyên liệu tự nhiên, không chứa chất bảo quản nhân tạo
            </li>
          </ul>
        </p>
        <div className="font-bold text-2xl my-5">
          Các ưu điểm nổi trội của sản phẩm Sa tế tôm Chinsu ớt có thể điểm qua
          bao gồm:
        </div>
        <ul>
          <li>- Vị cay nồng kết hợp hương thơm của tôm khô.</li>
          <li>- Mang lại trải nghiệm ẩm thực phong phú.</li>
          <li>- Độ cay vừa phải, phù hợp với khẩu vị người Việt.</li>
          <li>-Có thể chấm, trộn hoặc nêm nếm.</li>
        </ul>
        <div className="font-bold text-2xl my-5">
          nhược điểm của sản phẩm Sa tế tôm Chinsu ớt gồm:
        </div>
        <ul>
          <li>- Hàm lượng đường và muối khá cao..</li>
          <li>- Không phù hợp với chế độ ăn kiêng</li>
          <li>- Không thích hợp cho trẻ nhỏ hoặc người già</li>
          <li>- Sử dụng nhiều có thể ảnh hưởng đến sức khỏe</li>
        </ul>
      </div>
    </>
  );
};
const ContentDetail23 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Sốt ướp Teriyaki
        </h1>
        <Image
          src={teriyaki}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">Giới thiệu về Sốt ướp Teriyaki</p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">Đôi nét về Sốt ướp Teriyaki?</h4>
        </div>
        <p>
          Sốt ướp Teriyaki là một loại nước sốt truyền thống của ẩm thực Nhật
          Bản, có đặc điểm và ứng dụng rộng rãi. Dưới đây là thông tin chi tiết:
          <ul>
            <li>- Ướp thực phẩm trước khi nấu</li>
            <li>- Sốt cho các món nướng</li>
            <li>- Hương vị đặc trưng</li>
          </ul>
        </p>
        <div className="font-bold text-2xl my-5">
          Các ưu điểm nổi trội của sản phẩm Sốt ướp Teriyaki có thể điểm qua bao
          gồm:
        </div>
        <ul>
          <li>- Hương vị phong phú: Kết hợp vị ngọt, mặn, đậm đà.</li>
          <li>- Ứng dụng đa dạng: Phù hợp nhiều loại thực phẩm</li>
          <li>- Dễ sử dụng: Tiện lợi trong chế biến.</li>
          <li>-Tăng giá trị cảm quan: Bóng, màu sắc đẹp cho món ăn.</li>
        </ul>
        <div className="font-bold text-2xl my-5">
          nhược điểm của sản phẩm Sốt ướp Teriyaki gồm:
        </div>
        <ul>
          <li>- Hàm lượng đường cao..</li>
          <li>- Không phù hợp với chế độ ăn kiêng</li>
          <li>- Nhiều muối</li>
          <li>- Không thích hợp với những người không thích vị ngọt</li>
        </ul>
      </div>
    </>
  );
};
const ContentDetail24 = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">
          Thương hiệu Hạt nêm Knorr thịt thăn, xương ống, tủy
        </h1>
        <Image
          src={hatnem}
          alt="brand"
          width={500}
          height={500}
          className="object-cover w-[50%] mx-auto rounded-xl"
        />
      </div>
      <div className="py-5">
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1
          </span>
          <p className="font-semibold">
            Giới thiệu về Hạt nêm Knorr thịt thăn, xương ống, tủy
          </p>
        </div>
        <div className="flex items-center space-x-2 text-lg md:text-xl py-5">
          <span className="text-green-600 font-bold text-2xl md:text-3xl">
            1.1
          </span>
          <h4 className="text-xl">
            Đôi nét về Hạt nêm Knorr thịt thăn, xương ống, tủy?
          </h4>
        </div>
        <p>
          Knorr là thương hiệu gia vị thuộc tập đoàn Unilever. Trải qua nhiều
          năm hình thành và phát triển, Knorr mang đến cho người tiêu dùng trên
          toàn thế giới đa dạng các sản phẩm gia vị chế biến, hạt nêm, nước
          dùng, nước chấm,... Hạt nêm Knorr thịt thăn xương ống và tủy 5kg là
          tinh hoa của nước hầm thịt, xương ống và tủy trong nhiều giờ. Được sản
          xuất trên dây chuyền cao cấp đạt chuẩn Châu Âu cùng với đó là quy
          trình đóng gói khép kín giúp đảm bảo an toàn vệ sinh thực phẩm. Hạt
          nêm Knorr giúp cho việc nấu ăn trở nên nhanh chóng và dễ dàng hơn
          nhưng vẫn đảm bảo được dinh dưỡng trong từng bữa ăn.
        </p>
        <div className="font-bold text-2xl my-5">
          Các ưu điểm nổi trội của sản phẩm Hạt nêm Knorr thịt thăn, xương ống,
          tủy có thể điểm qua bao gồm:
        </div>
        <ul>
          <li>
            - Hạt nêm Knorr thịt thăn xương ống và tủy có hương vị đậm đà, ngọt
            vị thịt, giúp món ăn thêm ngon miệng..
          </li>
          <li>
            - Sản phẩm có thể dùng để ướp nguyên liệu hoặc nêm nếm cho nhiều món
            ăn khác nhau như canh, xào, kho, hầm,.
          </li>
          <li>
            - Hạt nêm Knorr hòa tan nhanh trong nước, không bị vón cục, giúp
            tiết kiệm thời gian chế biến..
          </li>
          <li>
            -Sản phẩm giá tốt, bịch lớn 5kg phù hợp cho nhu cầu sử dụng cao,
            nhất là các quán ăn, nhà hàng.
          </li>
        </ul>
        <div className="font-bold text-2xl my-5">
          nhược điểm của sản phẩm Hạt nêm Knorr thịt thăn, xương ống, tủy gồm:
        </div>
        <ul>
          <li>
            - Hạt nêm Knorr có chứa các thành phần phụ gia như chất điều vị,
            chất ổn định và hàm lượng muối cao, không tốt cho người có huyết áp
            cao hoặc các bệnh tim mạch.
          </li>
        </ul>
      </div>
    </>
  );
};
const contentMap: Record<number, ContentComponent> = {
  7: ContentDetail7,
  8: ContentDetail8,
  9: ContentDetail9,
  10: ContentDetail10,
  11: ContentDetail11,
  12: ContentDetail12,
  13: ContentDetail13,
  14: ContentDetail14,
  15: ContentDetail15,
  16: ContentDetail16,
  17: ContentDetail17,
  18: ContentDetail18,
  19: ContentDetail19,
  20: ContentDetail20,
  21: ContentDetail21,
  22: ContentDetail22,
  23: ContentDetail23,
  24: ContentDetail24,
};

export default contentMap;
