import * as React from 'react';
import Images from '../asset/images';
import "../css/mbksan.css";
import { NavLink } from 'react-router-dom';
const Mbks = () => {
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
      <h1>Máy bay + Khách sạn</h1>
      <p>Tìm kiếm và đặt gói máy bay + khách sạn dễ dàng và tiện lợi.</p>
    </div></section>
  <div className="container">
    <section className="offers">
      <div className="offer">
        <h3>Gói 1: Máy bay + Khách sạn 3 sao</h3>
        <p>Giá: <span className="amount">4.500.000 ₫</span></p>
        <p>Đặt ngay để nhận ưu đãi hấp dẫn!</p>
        <button><NavLink to="/ctmbks">Xem chi tiết</NavLink></button>
        <a className="share-btn" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Chia sẻ
</a>
      </div>
      <div className="offer">
        <h3>Gói 2: Máy bay + Khách sạn 4 sao</h3>
        <p>Giá: <span className="amount">6.000.000 ₫</span></p>
        <p>Trải nghiệm dịch vụ cao cấp với mức giá ưu đãi.</p>
        <button><NavLink to="/ctmbks2">Xem chi tiết</NavLink></button>
        <a className="share-btn" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Chia sẻ
</a>
      </div>
      <div className="offer">
        <h3>Gói 3: Máy bay + Khách sạn 5 sao</h3>
        <p>Giá: <span className="amount">8.000.000 ₫</span></p>
        <p>Thư giãn và tận hưởng kỳ nghỉ tuyệt vời!</p>
        <button><NavLink to="/ctmbks3">Xem chi tiết</NavLink></button>
        <a className="share-btn" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Chia sẻ
</a>
      </div>
    </section>
    <section className="feedback">
      <h2>Đánh giá của khách hàng</h2>
      <form>
        <input type="text" placeholder="Tên của bạn" required />
        <textarea placeholder="Nhận xét của bạn" required defaultValue={""} />
        <button type="submit">Gửi</button>
      </form>
    </section>
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
 
export default Mbks ;