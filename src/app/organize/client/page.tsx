import React from "react";

const clientMember = () => {
  return (
    <div className="container mx-auto py-14">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-8">
        Các đơn vị thành viên
      </h1>

      <div className="flex justify-center items-center mb-12">
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className=" p-2 text-red-500 font-bold">
                Các đơn vị sản xuất lúa gạo
              </th>
              <th className=" p-2 text-red-500 font-bold">
                Các Đơn vị sản xuất thực phẩm chế biến
              </th>
              <th className=" p-2 text-red-500 font-bold">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Công ty TNHH Sản xuất Lúa Gạo An Giang</td>
              <td className=" p-2">Công ty CP Thực phẩm Tiến Phát</td>
              <td className=" p-2">
                Tổng Công ty Xuất khẩu Nông sản Việt Nam (VinaAgri)
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Hợp tác xã Lúa Gạo Đồng Tháp</td>
              <td className=" p-2">Công ty CP Thực phẩm Minh Long</td>
              <td className=" p-2">
                Liên doanh Việt - Nhật Xuất khẩu Gạo (VietJapan Rice)
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Công ty CP Nông nghiệp Cần Thơ</td>
              <td className=" p-2">Công ty TNHH Chế biến Thực phẩm Hòa An</td>
              <td className=" p-2">
                Công ty TNHH Xuất khẩu Nông sản Đông Nam Á
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Doanh nghiệp Tư nhân Lúa Gạo Long Xuyên</td>
              <td className=" p-2">Công ty TNHH Thực phẩm VinaFresh</td>
              <td className=" p-2">Hiệp hội Xuất khẩu Lúa Gạo Mekong</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Hợp tác xã Nông nghiệp Vĩnh Long</td>
              <td className=" p-2">Công ty CP Chế biến Thực phẩm Hưng Thịnh</td>
              <td className=" p-2">Công ty CP Thương mại Nông sản Quốc tế</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Công ty TNHH Nông sản Miền Tây</td>
              <td className=" p-2">Công ty CP Thực phẩm Xuân Phú</td>
              <td className=" p-2">Công ty TNHH Xuất nhập khẩu Gạo Châu Á</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Công ty CP Lúa Gạo Hậu Giang</td>
              <td className=" p-2">Công ty TNHH Thực phẩm Bình Minh</td>
              <td className=" p-2">Hiệp hội Xuất khẩu Nông sản Việt</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Hợp tác xã Lúa Gạo Tiền Giang</td>
              <td className=" p-2">Công ty CP Thực phẩm An Lộc</td>
              <td className=" p-2">Công ty TNHH Nông sản Quốc tế Mekong</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Công ty CP Nông nghiệp Long An</td>
              <td className=" p-2">Công ty TNHH Thực phẩm Gia An</td>
              <td className=" p-2">Công ty TNHH Xuất khẩu Gạo Việt Nam</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Trường Đại học Dầu khí Việt Nam (PVU)</td>
              <td className=" p-2">
                Tổng Công ty CP Vận tải Dầu khí (PVTrans)
              </td>
              <td className=" p-2">
                Công ty CP Dầu tư Khai thác cảng Phước An (PAP)
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className=" p-2">Doanh nghiệp Tư nhân Lúa Gạo An Bình</td>
              <td className=" p-2">Công ty CP Thực phẩm Thiên Phát</td>
              <td className=" p-2">Liên minh Hợp tác xã Nông sản Việt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default clientMember;
