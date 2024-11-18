import "../css/admin.css";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  // Dữ liệu cho biểu đồ doanh thu
  const revenueData = {
    labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"], // Nhãn cho các cột
    datasets: [
      {
        label: "Doanh Thu Tháng",
        data: [1200, 1900, 3000, 2500], // Dữ liệu doanh thu
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ số lượng đặt phòng
  const bookingData = {
    labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"], // Nhãn cho các cột
    datasets: [
      {
        label: "Số Lượng Đặt Phòng",
        data: [15, 30, 20, 25], // Dữ liệu số lượng đặt phòng
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="main-content">
        <header>
          <h1>Dashboard Tổng Quan</h1>
        </header>
        <section>
          <div className="stat-cards">
            <div className="card">
              <h3>Doanh Thu Tháng</h3>
              <div >
                <Bar data={revenueData} options={{ responsive: true }} />
              </div>
            </div>
            <div className="card">
              <h3>Số Lượng Đặt Phòng</h3>
              <div >
                <Bar data={bookingData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="activity">
            <h2>Hoạt Động Gần Đây</h2>
            <ul>
              <li>
                Khách hàng <strong>Nguyễn Văn Chú </strong> đã đặt phòng{" "}
                <em>(Phòng Cao Cấp)</em> vào ngày 2024-09-15.
              </li>
              <li>
                Khách hàng <strong>Trần Thị Bích Loan</strong> đã đánh giá khách
                sạn 5 sao vào ngày 2024-09-14.
              </li>
              <li>
                Khách hàng <strong>Lê Minh Đề </strong> đã gửi tin nhắn liên hệ
                vào ngày 2024-09-13.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
