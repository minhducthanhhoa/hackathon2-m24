import React from 'react';
import { FaHeart, FaShoppingCart, FaList} from 'react-icons/fa';

const products = [
  { id: 1, name: 'iPhone 7', price: '35.000.000đ', imageUrl: 'iphone7.jpg', category: 'Apple', location: 'Hà Nội', sold: 500 },
  { id: 2, name: 'iPhone 7 Plus', price: '35.000.000đ', imageUrl: 'iphone7plus.jpg', category: 'Apple', location: 'Hà Nội', sold: 48 },
  { id: 3, name: 'iPhone 6', price: '29.000.000đ', imageUrl: 'iphone6.jpg', category: 'Apple', location: 'Hà Nội', sold: 30},
  { id: 4, name: 'iPhone 6 Plus', price: '3.000.000đ', imageUrl: 'iphone6plus.jpg', category: 'Apple', location: 'Hà Nội', sold: 500},
  { id: 5, name: 'iPhone 8', price: '35.000.000đ', imageUrl: 'iphone8.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 6, name: 'iPhone 8 Plus', price: '35.000.000đ', imageUrl: 'iphone8plus.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 7, name: 'iPhone X', price: '35.000.000đ', imageUrl: 'iphonex.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 8, name: 'iPhone Xr', price: '35.000.000đ', imageUrl: 'iphonexr.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 9, name: 'iPhone Xs', price: '35.000.000đ', imageUrl: 'iphonexs.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 10, name: 'iPhone Xs Max', price: '35.000.000đ', imageUrl: 'iphonexsmax.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 11, name: 'iPhone 12 Pro', price: '35.000.000đ', imageUrl: 'iphone12pro.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 12, name: 'iPhone 12 Pro Max', price: '35.000.000đ', imageUrl: 'iphone12promax.jpg', category: 'Apple', location: 'Hà Nội', sold: 48},
  { id: 13, name: 'Hoàng tử bé', price: '53.700đ', imageUrl: 'HoangTuBe.jpg', location: 'Hà Nội', sold: 6981},
  { id: 14, name: 'Muôn kiếp nhân sinh', price: '109.000đ', imageUrl: 'MuonKiepNhanSinh.jpg', location: 'Hà Nội', sold: 4169},
  { id: 15, name: 'Nhà giả kim', price: '55.000đ', imageUrl: 'NhaGiaKim.jpg', location: 'Hồ Chí Minh', sold: 9654},
  { id: 16, name: 'Tôi tự học', price: '32.900đ', imageUrl: 'ToiTuHoc.jpg', location: 'Dà Nẵng', sold: 2456},
  { id: 17, name: 'Đắc nhân tâm', price: '56.100đ', imageUrl: 'DacNhanTam.jpg', location: 'Hà Nội', sold: 16498},
  { id: 18, name: 'Mắt biếc', price: '76.400đ', imageUrl: 'MatBiec.jpg', location: 'Nghệ An', sold: 9543},
  { id: 19, name: 'Không gia đình', price: '74.500đ', imageUrl: 'KhongGiaDinh.jpg', location: 'Hà Nội', sold: 12483},
  { id: 20, name: 'Your name', price: '45.000đ', imageUrl: 'YourName.jpg', location: 'Hồ Chí Minh', sold: 5347},
  { id: 21, name: 'Quần nỉ họa tiết', price: '2.299.000đ', imageUrl: 'quan1.jpg', category: 'Nike', location: 'Hà Nội', sold: 246},
  { id: 22, name: 'Quần nỉ đen sọc trắng', price: '1.759.000đ', imageUrl: 'quan2.jpg', category: 'Nike', location: 'Hà Nội', sold: 694},
  { id: 23, name: 'Áo phông', price: '1.479.000đ', imageUrl: 'ao4.jpg', category: 'Nike', location: 'Hà Nội', sold: 614},
  { id: 24, name: 'Quần nỉ Jordan', price: '1.919.000đ', imageUrl: 'quan3.jpg', category: 'Nike', location: 'Hà Nội', sold: 537},
  { id: 25, name: 'Áo phông', price: '819.000đ', imageUrl: 'ao5.jpg', category: 'Nike', location: 'Hồ Chí Minh', sold: 769},
  { id: 26, name: 'Quần đùi', price: '659.000đ', imageUrl: 'quan6.jpg', category: 'Nike', location: 'Hà Nội', sold: 426},
  { id: 27, name: 'Quần nỉ xám', price: '1.019.000đ', imageUrl: 'quan5.jpg', category: 'Nike', location: 'Hà Nội', sold: 418},
  { id: 28, name: 'Áo khoác', price: '1.739.000đ', imageUrl: 'ao6.jpg', category: 'Nike', location: 'Hà Nội', sold: 849},
  { id: 29, name: 'Quần đùi', price: '659.000đ', imageUrl: 'quan7.jpg', category: 'Nike', location: 'Hồ Chí Minh', sold: 968},
  { id: 30, name: 'Nước xả vải Comfort', price: '145.000đ', imageUrl: 'comfort.jpg', location: 'Hồ Chí Minh', sold: 6514},
];
const categories = [
    { name: 'Tất cả sản phẩm', active: true },
    { name: 'Thiết bị điện tử', active: false },
    { name: 'Sách', active: false },
    { name: 'Đồ tiêu dùng', active: false },
    { name: 'Thời trang', active: false },
  ];

const ProductList = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="row">
        <div className="col-md-3">
          <h5 className="font-bold flex items-center mb-4">
            <FaList className="mr-2" /> Danh mục sản phẩm
          </h5>
          <ul className="list-none">
            {categories.map((category, index) => (
              <li key={index} className={`py-1 ${category.active ? 'text-red-500 font-bold' : 'text-gray-700'}`}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-md">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-700">{product.price}</p>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-gray-500">{product.location}</p>
                <p className="text-gray-500">{product.sold} đã bán</p>
                <div className="flex justify-between items-center mt-4">
                  <button className="btn btn-outline-primary"><FaHeart /> Yêu thích</button>
                  <button className="btn btn-outline-success"><FaShoppingCart /> Thêm vào giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
