import "../css/admin.css";
import React, { useState, useEffect } from "react";

const Lienhe = () => {
  const [contactInfo, setContactInfo] = useState<{ name: string; email: string; phone: string; message: string } | null>(null);

  // Tải dữ liệu từ localStorage khi component được gắn vào
  useEffect(() => {
    const storedContactInfo = localStorage.getItem('contactInfo');
    if (storedContactInfo) {
      setContactInfo(JSON.parse(storedContactInfo));
    }
  }, []);

  // Function to handle form submission
  const submitContactForm = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const formData = {
      name: (document.getElementById("contact-name") as HTMLInputElement).value,
      email: (document.getElementById("contact-email") as HTMLInputElement).value,
      phone: (document.getElementById("contact-phone") as HTMLInputElement).value,
      message: (document.getElementById("contact-message") as HTMLTextAreaElement).value,
    };

    console.log("Form Submitted:", formData);
    localStorage.setItem('contactInfo', JSON.stringify(formData)); // Lưu thông tin liên hệ vào localStorage
    setContactInfo(formData); // Cập nhật state với thông tin liên hệ mới
  };

  return ( 
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Liên Hệ Khách Hàng</title>
        <link rel="stylesheet" href="mauchinhsuatong.css" />
        
        <div className="main-content">
          <header>
            <h1>Liên Hệ Với Khách Hàng</h1>
          </header>
          <section>
            <h2>Thông tin liên hệ</h2>
            <form id="contact-form" onSubmit={submitContactForm}>
              <label htmlFor="contact-name">Họ và Tên:</label>
              <input type="text" id="contact-name" name="contact-name" required placeholder="Nhập họ và tên của bạn" />
              
              <label htmlFor="contact-email">Email:</label>
              <input type="email" id="contact-email" name="contact-email" required placeholder="Nhập email của bạn" />
              
              <label htmlFor="contact-phone">Số điện thoại:</label>
              <input type="tel" id="contact-phone" name="contact-phone" required placeholder="Nhập số điện thoại của bạn" />
              
              <label htmlFor="contact-message">Tin nhắn:</label>
              <textarea id="contact-message" name="contact-message" rows={5} required placeholder="Nhập tin nhắn của bạn" />
              
              <button type="submit">Gửi Tin Nhắn</button>
            </form>
          </section>

          {/* Hiển thị thông tin liên hệ đã gửi */}
          {contactInfo && (
            <section>
              <h2>Thông Tin Đã Gửi</h2>
              <p><strong>Họ và Tên:</strong> {contactInfo.name}</p>
              <p><strong>Email:</strong> {contactInfo.email}</p>
              <p><strong>Số điện thoại:</strong> {contactInfo.phone}</p>
              <p><strong>Tin nhắn:</strong> {contactInfo.message}</p>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Lienhe;
