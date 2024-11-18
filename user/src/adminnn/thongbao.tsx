/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/admin.css";
const Thongbao = () => {
  // State to manage notifications
  const [notifications, setNotifications] = useState([
    { id: 1, customerName: 'Nguyễn Văn A', bookingDate: '15/10 - 20/10', message: 'Đặt phòng thành công!', confirmed: false },
    { id: 2, customerName: 'Trần Thị B', bookingDate: '18/10 - 25/10', message: 'Đặt phòng mới! Vui lòng kiểm tra tình trạng phòng.', confirmed: false },
  ]);

  // Function to confirm the booking
  const confirmBooking = (id: number) => {
    // Update the state to mark the notification as confirmed
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, confirmed: true } : notification
      )
    );
    console.log(`Xác nhận đặt phòng cho ${id}`);
    // You can add further logic to handle the confirmation
  };

  return (
    <>
        <div className="main-content">
          <header>
            <h1>Thông Báo</h1>
          </header>
          {/* Thông báo về đặt phòng */}
          <section>
            <h2>Thông Báo Đặt Phòng Mới</h2>
            {notifications.map((notification) => (
              !notification.confirmed && (
                <div key={notification.id} className="notification">
                  <h4>{notification.message}</h4>
                  <p>Khách hàng {notification.customerName} đã đặt phòng từ {notification.bookingDate}.</p>
                  <button onClick={() => confirmBooking(notification.id)}>Xác Nhận Phòng</button>
                </div>
              )
            ))}
          </section>
          {/* Cảnh báo về tình trạng phòng */}
          <section>
            <h2>Cảnh Báo Tình Trạng Phòng</h2>
            <div className="notification warning">
              <h4>Cảnh báo: Phòng còn ít!</h4>
              <p>Chỉ còn 2 phòng còn trống. Hãy xem xét để tránh hết phòng.</p>
            </div>
            <div className="notification error">
              <h4>Lỗi: Hết phòng!</h4>
              <p>Phòng Hoa sen đã hết phòng. Cần cập nhật thông tin đặt phòng ngay.</p>
            </div>
          </section>
        </div>
    </>
  );
}

export default Thongbao;
