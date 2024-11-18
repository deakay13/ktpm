import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/chitiet.css";
import Images from '../asset/images';

const Chitiet = () => {
    return ( 
<div>
  <header>
    <nav className="top-bar">
    <img src={Images.logo} alt="Logo" />

    <NavLink to="/trangchu">Trang Chủ</NavLink>
    <NavLink to="/datgoi">Đặt gói để tiết kiệm</NavLink>
    <NavLink to="/mbks">Máy bay + Khách sạn</NavLink>
    <NavLink to="/ptdc">Phương tiện di chuyển</NavLink>
    <NavLink to="/pggvud">Phiếu giảm giá và ưu đãi</NavLink>
    <NavLink to="/dangnhap" className="login">Đăng nhập</NavLink>
    <NavLink to="/dangky" className="create-account">Tạo tài khoản</NavLink>
    </nav>
  </header>
  <section className="package-detail">
    <div className="detail-container">
      <img src={Images.chitiet} alt="Gói Đặt Phòng" className="package-image" />
      <div className="detail-info">
        <h2>Gói 1: Khách sạn + Vé Máy Bay</h2>
        <p><strong>Giá:</strong> <span className="amount">3.500.000 ₫</span></p>
        <p><strong>Mô tả:</strong> Tiết kiệm đến 20% khi đặt gói khách sạn và vé máy bay. Gói này bao gồm các dịch vụ sau:</p>
        <ul>
          <li>1 đêm ở khách sạn 4 sao</li>
          <li>Vé máy bay khứ hồi</li>
          <li>Đưa đón sân bay miễn phí</li>
          <li>Wi-Fi miễn phí trong toàn bộ thời gian lưu trú</li>
        </ul>
        <p><strong>Điều khoản:</strong></p>
        <ul>
          <li>Áp dụng cho đặt phòng qua website</li>
          <li>Không hoàn tiền khi đã đặt</li>
          <li>Ưu đãi có thể thay đổi tùy theo tình trạng phòng</li>
        </ul>
        <button >Đặt Gói Này</button>
      </div>
    </div>
  </section>
  {/* Modal */}
  <div id="myModal" className="modal">
    <div className="modal-content">
      <span className="close" >×</span>
      <h2>Thông Tin Đặt Gói</h2>
      <h3>Cách Đặt Gói</h3>
      <ol>
        <li>Nhập thông tin của bạn vào biểu mẫu bên dưới.</li>
        <li>Nhấn nút <strong>Xác Nhận Đặt Gói</strong>.</li>
        <li>Chờ thông báo xác nhận từ chúng tôi.</li>
      </ol>
      <form id="orderForm">
        <label htmlFor="name">Họ và Tên:</label>
        <input type="text" id="name" name="name" required /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />
        <label htmlFor="phone">Số Điện Thoại:</label>
        <input type="text" id="phone" name="phone" required /><br /><br />
        <button type="submit">Xác Nhận Đặt Gói</button>
      </form>
    </div>
  </div>
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
 
export default Chitiet ;