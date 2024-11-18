import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config'; // Đường dẫn đến file config Firebase của bạn
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'; // Đã có signOut trong import
import "../css/dangkyvadangnhap.css";
import images from '../asset/images';

const Dangnhap = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false); // Thêm trạng thái loading
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Bắt đầu loading
        setErrorMessage(''); // Xóa lỗi trước đó

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Đăng nhập thành công
            localStorage.setItem("userInfo", JSON.stringify(userCredential.user));
            setLoading(false); // Kết thúc loading
            navigate("/"); // Điều hướng đến trang chính
        } catch (error: any) {
            // Xử lý lỗi khi đăng nhập
            setLoading(false); // Kết thúc loading
            setErrorMessage(error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth); // Đăng xuất
            localStorage.removeItem("userInfo"); // Xóa thông tin người dùng
            navigate("/dangnhap"); // Điều hướng đến trang đăng nhập
        } catch (error) {
            console.error("Lỗi khi đăng xuất:", error);
        }
    };

    return (
        <div>
            <header>
                <img src={images.logo} alt="Logo" />
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
            <section className="login-section">
                <div className="container">
                    <h2>Đăng nhập</h2>
                    <form onSubmit={handleLogin} className="login-form">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Nhập email của bạn"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Mật khẩu:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Nhập mật khẩu của bạn"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-btn" disabled={loading}>
                            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    <p className="signup-link">Chưa có tài khoản? <NavLink to="/dangky">Tạo tài khoản</NavLink></p>
                </div>
            </section>
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
                            <li>Chính sách giải quyết tranh chấp</li>
                            <li>Chính sách quyền riêng tư</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Dangnhap;
