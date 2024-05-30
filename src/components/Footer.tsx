import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h5 className="font-bold mb-2">CHĂM SÓC KHÁCH HÀNG</h5>
            <ul className="list-none space-y-1">
              <li>Trung tâm trợ giúp</li>
              <li>Hướng dẫn mua hàng</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">GIỚI THIỆU</h5>
            <ul className="list-none space-y-1">
              <li>Điều khoản</li>
              <li>Chính sách bảo mật</li>
              <li>Tuyển dụng</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">DANH MỤC SẢN PHẨM</h5>
            <ul className="list-none space-y-1">
              <li>Thời trang</li>
              <li>Đồ tiêu dùng</li>
              <li>Thiết bị điện tử</li>
              <li>Sách</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">THEO DÕI CHÚNG TÔI</h5>
            <ul className="list-none space-y-1">
              <li className="flex items-center">
                <FaFacebook className="mr-2" /> Facebook
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-2" /> Instagram
              </li>
              <li className="flex items-center">
                <FaTwitter className="mr-2" /> Twitter
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">ĐỘI NGŨ PHÁT TRIỂN</h5>
            <p className="text-red-500">Trịnh Quốc Hải</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
