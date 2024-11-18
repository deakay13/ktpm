import * as React from 'react';
import images from '../asset/images';
import "../css/style.css";
import { NavLink } from 'react-router-dom';
const Datgoi  = () => {
    return ( 
<div>
  <header>
    <nav className="top-bar">
      <img src={images.logo} alt="Logo" />
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
    <img src={images.image1} alt="Background" style={{height: 400, width: '100%'}} />
    <div className="search-container">
      <h1>Gói Đặt Phòng Tiết Kiệm</h1>
      <p>Tìm kiếm các gói đặt phòng tiết kiệm nhất cho chuyến đi của bạn!</p>
    </div>
  </section>
  <section className="offers-container">
    <div className="offers">
      <div className="offer">
        <h2>Gói 1: Khách sạn + Vé Máy Bay</h2>
        <p>Tiết kiệm đến 20% khi đặt gói khách sạn và vé máy bay.</p>
        <p>Giá: <span className="amount">3.500.000 ₫</span></p>
        <NavLink to="/chitiet" className="btn-detail">Chi tiết</NavLink>
      </div>
      <div className="offer">
        <h2>Gói 2: Khách sạn + Tour Du Lịch</h2>
        <p>Khám phá thành phố với tour du lịch và nghỉ ngơi tại khách sạn.</p>
        <p>Giá: <span className="amount">4.000.000 ₫</span></p>
        <NavLink to="/chitiet2" className="btn-detail">Chi tiết</NavLink>

      </div>
      <div className="offer">
        <h2>Gói 3: Dịch vụ đưa đón miễn phí</h2>
        <p>Đặt khách sạn và nhận dịch vụ đưa đón miễn phí từ sân bay.</p>
        <p>Giá: <span className="amount">2.800.000 ₫</span></p>
        <NavLink to="/chitiet3" className="btn-detail">Chi tiết</NavLink>

      </div>
    </div>
    <div className="right-banner">
      <img src={images.discount} alt="Ưu Đãi Đặc Biệt" />
      <h3>Ưu đãi đặc biệt!</h3>
      <p>Giảm giá lên đến 30% cho những đặt phòng trong tuần này.</p>
    </div>
  </section>
  <footer>
    <div className="footer-container">
      <div className="footer-section support">
        <h3>BẠN CẦN GIÚP ĐỠ?</h3>
        <ul>
          <li>Quản lý các đặt phòng</li>
          <li>Hỗ trợ</li>
          <li>Bạn muốn đặt chỗ? <strong>1900 0000</strong></li>
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
          <li>Quy định về thanh toán</li>
          <li>Quy định về xác nhận thông tin đặt phòng</li>
          <li>Chính sách giải quyết tranh chấp</li>
          <li>Chính sách quyền riêng tư</li>
        </ul>
      </div>
    </div>
  </footer>
</div>

     );
}
 
export default Datgoi ;