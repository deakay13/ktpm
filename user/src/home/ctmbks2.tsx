import * as React from 'react';

import "../css/ctksmb.css";
import { NavLink } from 'react-router-dom';

const Ctmbks2  = () => {
    return ( 
<div className="container">
  <h1>Gói Máy bay + Khách sạn 4 sao</h1>
  <p className="price">Giá: 6.500.000 ₫</p>
  <p>Khách sạn: Khách sạn ABC</p>
  <p>Thời gian: 4 ngày 3 đêm</p>
  <p>Đặc điểm:</p>
  <ul>
    <li>Chỗ ở cao cấp</li>
    <li>Đưa đón sân bay miễn phí</li>
    <li>Buffet sáng và bữa tối miễn phí</li>
  </ul>
  <p>Điều khoản:</p>
  <ul>
    <li>Đặt trước ít nhất 10 ngày</li>
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
    <button type="button" >Xác nhận thông tin</button>
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
 
export default Ctmbks2 ;