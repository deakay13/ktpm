import * as React from 'react';
import Images from '../asset/images';
import '../css/style.css';
import { NavLink } from 'react-router-dom';

const TrangChu = () => {
  return (
    <>
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
            <h1>Khách sạn và nơi để ở tại địa điểm du lịch</h1>
            <p>Tìm kiếm để so sánh giá cả và khám phá ưu đãi tuyệt vời có miễn phí</p>
          </div>
        </section>

        <div className="container">
          <section className="search-results">
            <div className="hotel-list">
              <div className="hotel">
                <img src={Images.muongthanh} alt="muongthanh" />
                <div className="hotel-info">
                  <h3>Khách Sạn Mường Thanh</h3>
                  <p>Little India, Singapore - Xem trên bản đồ</p>
                  <p>
                    Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý.
                    <span className="plus">+7</span>
                  </p>
                  <p>
                    Nằm ở vị trí trung tâm tại Phú Nhuận của Hồ Chí Minh, chỗ nghỉ này...
                  </p>
                  <p className="price">Giá trung bình mỗi đêm: <span className="amount">2.711.640 ₫</span></p>
                  <button className="btn-book">Đặt phòng</button>
                </div>
                <div className="rating">
                  Rất tốt<br /><span className="rating-value">8,6</span>
                </div>
              </div>

              <div className="hotel">
                <img src={Images.ReverieSaigon} alt="ReverieSaigon" />
                <div className="hotel-info">
                  <h3>Khách sạn The Reverie Saigon</h3>
                  <p>
                    Đồng Khởi, P. Bến Nghé , Quận 1 - <NavLink to=''>Xem trên bản đồ</NavLink>
                  </p>
                  <p>
                    Wi-Fi miễn phí trong tất cả các phòng!<span className="plus">+7</span>
                  </p>
                  <p>"Đưa đón sân bay"</p>
                  <p className="price">Giá trung bình mỗi đêm: <span className="amount">5.171.263 ₫</span></p>
                  <button className="btn-book">Đặt phòng</button>
                </div>
                <div className="rating">
                  Rất tốt<br /><span className="rating-value">9,4</span>
                </div>
              </div>

              <div className="hotel">
                <img src={Images.MarriottHanoi} alt="MarriottHanoi" />
                <div className="hotel-info">
                  <h3>Khách sạn JW Marriott Hotel Hanoi</h3>
                  <p>Nam Từ Liêm, Hà Nội - Xem trên bản đồ</p>
                  <p>
                    Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý.
                    <span className="plus">+7</span>
                  </p>
                  <p>
                    Nằm ở vị trí trung tâm tại Huyện Từ Liêm của Hà Nội, chỗ nghỉ này...
                  </p>
                  <p className="price">Giá trung bình mỗi đêm: <span className="amount">5.691.263 ₫</span></p>
                  <button className="btn-book">Đặt phòng</button>
                </div>
                <div className="rating">
                  Rất tốt<br /><span className="rating-value">8,9</span>
                </div>
              </div>

              <div className="hotel">
                <img src={Images.SomersetHCM} alt="SomersetHCM" />
                <div className="hotel-info">
                  <h3>Somerset Ho Chi Minh City</h3>
                  <p>Nguyễn Bình Khiêm , Quận 1, TP.HCM - <NavLink to=''>Xem trên bản đồ</NavLink></p>
                  <p>
                    Hãy thực hiện hành trình tuyệt vời nhất của quý khách tới Hồ Chí Minh
                    với tiêu chuẩn Ascott Cares đã cam kết và tận hưởng Wi-Fi miễn phí trong tất cả các phòng.
                    <span className="plus">+7</span>
                  </p>
                  <p className="price">Giá trung bình mỗi đêm: <span className="amount">2.400.000 ₫</span></p>
                  <button className="btn-book">Đặt phòng</button>
                </div>
                <div className="rating">
                  Rất tốt<br /><span className="rating-value">8,2</span>
                </div>
              </div>

              <div className="hotel">
                <img src={Images.PullmanHN} alt="PullmanHN" />
                <div className="hotel-info">
                  <h3>Khách sạn Pullman - Hà Nội</h3>
                  <p>Giảng Võ, Đống Đa , Hà Nội - <NavLink to=''>Xem trên bản đồ</NavLink></p>
                  <p>
                    Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý.
                    <span className="plus">+7</span>
                  </p>
                  <p className="price">Giá trung bình mỗi đêm: <span className="amount">2.569.263 ₫</span></p>
                  <button className="btn-book">Đặt phòng</button>
                </div>
                <div className="rating">
                  Rất tốt<br /><span className="rating-value">8,1</span>
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
    </>
  );
}

export default TrangChu;
