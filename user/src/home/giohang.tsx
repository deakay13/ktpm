import * as React from 'react';
import Images from '../asset/images'; 
import "../css/pggvud.css"; 
import { NavLink } from 'react-router-dom'; 
import { FaShoppingCart } from 'react-icons/fa'; 

// Định nghĩa kiểu dữ liệu cho sản phẩm trong giỏ hàng
type CartItem = {
    id: number;
    fullName: string; // Họ và Tên
    email: string; // Email
    phone: string; // Số điện thoại
    checkInDate: string; // Ngày nhận phòng
    checkOutDate: string; // Ngày trả phòng
    roomType: string; // Loại phòng
    guestCount: number; // Số lượng khách
    price: number; // Giá
    image: string; // Hình ảnh
};

const Giohang = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]); 
    const cartCount = cartItems.length; 

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
                    <NavLink to="/giohang" className="cart-icon">
                        <FaShoppingCart /> 
                        <span className="cart-count">{cartCount}</span>
                    </NavLink>
                </nav>
            </header>

            <section className="cart-container">
                <h2>Chi tiết giỏ hàng của bạn</h2>
                <table>
                    <thead>
                        <tr>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length === 0 ? (
                            <tr>
                                <td colSpan={9}>Hiện tại giỏ hàng của bạn trống.</td>
                            </tr>
                        ) : (
                            cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.checkInDate}</td>
                                    <td>{item.checkOutDate}</td>
                                    <td>{item.roomType}</td>
                                    <td>{item.guestCount}</td>
                                    <td>
                                        <button onClick={() => removeItemFromCart(item.id)}>Gỡ bỏ</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                <div className="cart-summary">
                    <h3>Tổng cộng:</h3>
                    <p>
                        <strong>
                            {cartItems.reduce((total, item) => total + item.price, 0).toLocaleString('vi-VN')} ₫
                        </strong>
                    </p>
                    <button disabled={cartItems.length === 0}>Thanh toán</button>
                </div>
            </section>

            <footer>
                <div className="footer-container">
                    <div className="footer-section support">
                        <h3>BẠN CẦN GIÚP ĐỠ?</h3>
                        <ul>
                            <li>Quản lý đặt chỗ</li>
                            <li>Hỗ trợ</li>
                            <li>Bạn muốn đặt phòng? <strong>1900 0000</strong></li>
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

    function removeItemFromCart(id: number) {
        setCartItems(cartItems.filter(item => item.id !== id));
    }
};

export default Giohang;
