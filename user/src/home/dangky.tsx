import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/dangkyvadangnhap.css";
import images from '../asset/images';
const Dangky  = () => {
    return (
<div>
  <header>
    <img src={images.logo} alt="Logo" />
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
  <section className="registration-form">
    <h1>Đăng Ký Tài Khoản</h1>
    <form action="register_process.php" method="post">
      <div className="form-group">
        <label htmlFor="fullname">Họ và Tên</label>
        <input type="text" id="fullname" name="fullname" required placeholder="Nhập họ và tên" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="Nhập địa chỉ email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Mật Khẩu</label>
        <input type="password" id="password" name="password" required placeholder="Nhập mật khẩu" />
      </div>
      <div className="form-group">
        <label htmlFor="confirm_password">Xác Nhận Mật Khẩu</label>
        <input type="password" id="confirm_password" name="confirm_password" required placeholder="Xác nhận mật khẩu" />
      </div>
      <button type="submit">Đăng Ký</button>
    </form>
    <p>Đã có tài khoản? <a href="dangnhap.html">Đăng nhập tại đây</a></p>
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
          <li>Chính sách giải quyết tranh chấp</li>
          <li>Chính sách quyền riêng tư</li>
        </ul>
      </div>
    </div>
  </footer>
</div>

      );
}
 
export default Dangky ;