import * as React from 'react';

import "../css/ctksmb.css";
import { NavLink } from 'react-router-dom';

const Ctmbks3 = () => {
    return (
<div className="container">
  <h1>Gói Máy bay + Khách sạn 5 sao</h1>
  <p className="price">Giá: 10.000.000 ₫</p>
  <p>Khách sạn: Khách sạn DEF</p>
  <p>Thời gian: 5 ngày 4 đêm</p>
  <p>Đặc điểm:</p>
  <ul>
    <li>Chỗ ở sang trọng với dịch vụ 5 sao</li>
    <li>Đưa đón sân bay miễn phí</li>
    <li>Buffet sáng và bữa tối cao cấp miễn phí</li>
    <li>Trải nghiệm spa miễn phí</li>
  </ul>
  <p>Điều khoản:</p>
  <ul>
    <li>Đặt trước ít nhất 14 ngày</li>
    <li>Không hoàn lại tiền sau khi đặt</li>
  </ul>
  <p>Điền thông tin cá nhân và thông tin đặt chỗ:</p>
  <form id="booking-form">
    <label htmlFor="name">Họ và tên:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Địa chỉ email:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="phone">Số điện thoại:</label>
    <input type="tel" id="phone" name="phone" required />
    <label htmlFor="checkin">Ngày đi:</label>
    <input type="date" id="checkin" name="checkin" required />
    <button type="button">Xác nhận thông tin</button>
  </form>
  <div id="confirmation" style={{display: 'none'}}>
    <h3>Xác nhận thông tin đặt chỗ</h3>
    <p id="confirm-details" />
    <button >Gửi thông tin</button>
    <button >Quay lại</button>
  </div>
  <NavLink to ="/mbks" className="back-button">Quay lại danh sách gói</NavLink>
</div>


      );
}
 
export default Ctmbks3 ;