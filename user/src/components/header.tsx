import { NavLink } from "react-router-dom";
import "../css/admin.css";
const Header = () => {
    return <>
    <nav className="sidebar">
          <h2>Admin của tôi </h2>
          <ul>
            <li>
              <NavLink to= "admin">Home</NavLink>
            </li>
            <li>
              <NavLink to="sanpham">Sản phẩm</NavLink>
            </li>
            <li>
              <NavLink to="quanlynhanvien">Quản Lý Nhân Viên</NavLink>
            </li>
            <li>
              <NavLink to="tinnhan">Tin nhắn</NavLink>
            </li>
            <li>
              <NavLink to="danhgia">Đánh giá khách sạn</NavLink>
            </li>
            <li>
              <NavLink to="donkhachdat">Đơn đặt phòng </NavLink>
            </li>
            <li>
              <NavLink to="lienhe"> Liên hệ khách hàng </NavLink>
            </li>
            <li>
              <NavLink to="thongbao">Thông báo</NavLink>
            </li>
          </ul>
        </nav>
    </>
}
export default Header