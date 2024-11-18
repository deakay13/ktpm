import * as React from 'react';
import Images from '../asset/images';
import "../css/ptdc.css";
import { NavLink } from 'react-router-dom';
const Ptdc  = () => {
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
      <h1>Khám Phá Phương Tiện Di Chuyển</h1>
      <p>Tìm kiếm và đặt các phương tiện di chuyển dễ dàng và tiện lợi.</p>
    </div></section>
  <div className="container">
    <section className="search-results">
      <div className="transport-list">
        <div className="transport">
          <img src={Images.taxi} alt="Taxi" />
          <div className="transport-info">
            <h3>Taxi</h3>
            <p>Di chuyển nhanh chóng và tiện lợi trong thành phố.</p>
            <p className="price">
              Giá từ: <span className="amount">100.000 ₫</span>
            </p>
          </div>
        </div>
        <div className="transport">
          <img src={Images.xedap} alt="Xe Đạp" />
          <div className="transport-info">
            <h3>Xe Đạp</h3>
            <p>Khám phá thành phố một cách thân thiện với môi trường.</p>
            <p className="price">
              Giá từ: <span className="amount">50.000 ₫</span>
            </p>
          </div>
        </div>
        <div className="transport">
          <img src={Images.xemay} alt="Xe Máy" />
          <div className="transport-info">
            <h3>Xe Máy</h3>
            <p>Di chuyển linh hoạt và nhanh chóng với xe máy.</p>
            <p className="price">
              Giá từ: <span className="amount">80.000 ₫</span>
            </p>
          </div>
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
 
export default Ptdc ;