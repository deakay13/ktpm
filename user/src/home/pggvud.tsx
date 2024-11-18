import * as React from 'react';
import Images from '../asset/images';
import "../css/pggvud.css";
import { NavLink } from 'react-router-dom';
const Pggvud  = () => {
    return ( 
<div>
  <header>
    <img src={Images.logo} alt="Logo" />
    <nav className="top-bar">
    <NavLink to="/trangchu">Trang Chủ</NavLink>
  <NavLink to="/datgoi">Đặt gói để tiết kiệm</NavLink>
  <NavLink to="/mbks">Máy bay + Khách sạn</NavLink>
  <NavLink to="/ptdc">Phương tiện di chuyển</NavLink>
  <NavLink to="/pggvud">Phiếu giảm giá và ưu đãi</NavLink>
  <NavLink to="/dangnhap" className="login">Đăng nhập</NavLink>
  <NavLink to="/dangky" className="create-account">Tạo tài khoản</NavLink>
    </nav>
  </header>
  <section className="hero">
    <img src={Images.image1} alt="Background" />
    <div className="search-container">
      <h1>Khám Phá Các Ưu Đãi</h1>
      <p>Tận dụng những ưu đãi và phiếu giảm giá tuyệt vời cho chuyến đi của bạn.</p>
    </div>
  </section>
  <div className="container">
    <section className="voucher-list">
      <h2>Ưu Đãi Đặc Biệt</h2>   
      {/* Voucher 1 */}
      <div className="voucher">
        <img src={Images.maybay} alt="Voucher Máy bay" />
        <div className="voucher-info">
          <h3>Giảm 20% cho vé máy bay</h3>
          <p>Áp dụng cho các chuyến bay nội địa trong tháng này. Không áp dụng cho các ngày lễ và cuối tuần.</p>
          <p className="price">
            Mã giảm giá: <span className="code">FLY20</span>
          </p>
          <p><strong>Hạn sử dụng:</strong> 31/12/2024</p>
          <a href="#1" className="redeem-btn">Nhận ngay</a>
        </div>
      </div>
      {/* Voucher 2 */}
      <div className="voucher">
        <img src={Images.khachsan} alt="Voucher Khách sạn" />
        <div className="voucher-info">
          <h3>Giảm giá 30% cho khách sạn</h3>
          <p>Đặt phòng khách sạn tại các điểm đến phổ biến và nhận ngay ưu đãi. Chỉ áp dụng cho khách hàng mới.</p>
          <p className="price">
            Mã giảm giá: <span className="code">HOTEL30</span>
          </p>
          <p><strong>Hạn sử dụng:</strong> 15/11/2024</p>
          <a href="#1" className="redeem-btn">Nhận ngay</a>
        </div>
      </div>
      {/* Voucher 3 */}
      <div className="voucher">
        <img src={Images.giamgiaTaxi} alt="Voucher Taxi" />
        <div className="voucher-info">
          <h3>Giảm 10% cho dịch vụ taxi</h3>
          <p>Đi taxi nhanh chóng và tiết kiệm hơn với mã giảm giá này. Áp dụng cho tất cả các thành phố.</p>
          <p className="price">
            Mã giảm giá: <span className="code">TAXI10</span>
          </p>
          <p><strong>Hạn sử dụng:</strong> 30/10/2024</p>
          <a href="#1" className="redeem-btn">Nhận ngay</a>
        </div>
      </div>
    </section>
  </div>
  <footer>
    <div className="footer-container">
      <div className="footer-section support">
        <h3>BẠN CẦN GIÚP ĐỠ?</h3>
        <ul>
          <li>Quản lý đặt chỗ</li>
          <li>Hỗ trợ</li>
          <li>Bạn muốn đặt xe? <strong>1900 0000</strong></li>
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h3>NHẬN THÔNG TIN ƯU ĐÃI</h3>
        <input type="email" placeholder="Email nhận bản tin khuyến mãi..." />
        <button>Đăng ký</button>
      </div>
      <div className="footer-section policies">
        <h3>ĐIỀU KHOẢN &amp; QUY ĐỊNH</h3>
        <ul>
          <li>Điều khoản chung</li>
          <li>Quy định chung</li>
          <li>Chính sách quyền riêng tư</li>
        </ul>
      </div>
    </div>
  </footer>
</div>

     );
}
 
export default Pggvud  ;