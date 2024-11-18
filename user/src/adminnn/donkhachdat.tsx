import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavLink } from "react-router-dom";
import "../css/admin.css";
const Donkhachdat = () => {
  return (
    <>
      <div>
        
        <div className="main-content">
          <header>
            <h1>Danh Sách Khách Hàng Đặt Phòng</h1>
          </header>
          <section>
            <h2>Thông tin chi tiết</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ và Tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Ngày nhận phòng</th>
                  <th>Ngày trả phòng</th>
                  <th>Loại phòng</th>
                  <th>Số lượng khách</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody id="booking-list">
                {/* Danh sách khách hàng đặt phòng sẽ được hiển thị ở đây */}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};

export default Donkhachdat;
