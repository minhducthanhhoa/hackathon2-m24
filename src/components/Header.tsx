import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-red-600 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Rikkei_Shop</h1>
          <div className="relative">
            <input 
              type="text" 
              className="form-input w-full rounded border-gray-300 p-2 pr-10" 
              placeholder="Nhập để tìm kiếm" 
            />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-white text-red-600 px-4 py-2 rounded mr-2">
            <FaShoppingCart className="inline mr-1" /> Giỏ hàng
          </button>
          <button className="bg-white text-red-600 px-4 py-2 rounded mr-2">
            Đăng nhập
          </button>
          <button className="bg-white text-red-600 px-4 py-2 rounded">
            Đăng ký
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <div className="bg-yellow-500 p-4 text-center rounded">
          <h2 className="text-2xl font-bold">KHUNG GIỜ SĂN SALE</h2>
          <p className="text-xl mt-2">0H | 12H | 21H</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
